// api/stripe-webhook.js
// Vercel serverless function — handles Stripe webhook events.
// On checkout.session.completed: tags the customer in Mailchimp as a Pro subscriber.
// On customer.subscription.deleted: removes the Pro tag in Mailchimp.

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  // Collect raw body (needed for Stripe signature verification)
  const rawBody = await new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => { data += chunk; });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });

  const signature = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).json({ error: 'Invalid signature' });
  }

  const apiKey    = process.env.MAILCHIMP_API_KEY;
  const audience  = process.env.MAILCHIMP_AUDIENCE_ID;
  const server    = process.env.MAILCHIMP_SERVER;

  async function mailchimpUpsert(email, tags) {
    if (!apiKey || !audience || !server) return;
    const auth = 'Basic ' + Buffer.from('anystring:' + apiKey).toString('base64');
    const emailHash = require('crypto').createHash('md5').update(email.toLowerCase()).digest('hex');

    // Upsert member
    await fetch(`https://${server}.api.mailchimp.com/3.0/lists/${audience}/members/${emailHash}`, {
      method: 'PUT',
      headers: { 'Authorization': auth, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email_address: email.toLowerCase(), status_if_new: 'subscribed' })
    });

    // Apply tags
    await fetch(`https://${server}.api.mailchimp.com/3.0/lists/${audience}/members/${emailHash}/tags`, {
      method: 'POST',
      headers: { 'Authorization': auth, 'Content-Type': 'application/json' },
      body: JSON.stringify({ tags: tags.map(name => ({ name, status: 'active' })) })
    });
  }

  async function mailchimpRemoveTag(email, tag) {
    if (!apiKey || !audience || !server) return;
    const auth = 'Basic ' + Buffer.from('anystring:' + apiKey).toString('base64');
    const emailHash = require('crypto').createHash('md5').update(email.toLowerCase()).digest('hex');
    await fetch(`https://${server}.api.mailchimp.com/3.0/lists/${audience}/members/${emailHash}/tags`, {
      method: 'POST',
      headers: { 'Authorization': auth, 'Content-Type': 'application/json' },
      body: JSON.stringify({ tags: [{ name: tag, status: 'inactive' }] })
    });
  }

  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const email = session.customer_details?.email || session.customer_email;
      if (email) {
        await mailchimpUpsert(email, ['flipiq', 'pro-subscriber']);
        console.log('Pro subscriber tagged in Mailchimp:', email);
      }
    }

    if (event.type === 'customer.subscription.deleted') {
      // Subscription cancelled — remove pro tag
      const subscription = event.data.object;
      const customerId = subscription.customer;
      const customer = await stripe.customers.retrieve(customerId);
      const email = customer.email;
      if (email) {
        await mailchimpRemoveTag(email, 'pro-subscriber');
        console.log('Pro tag removed for cancelled subscriber:', email);
      }
    }
  } catch (err) {
    console.error('Webhook handler error:', err.message);
    // Still return 200 so Stripe doesn't retry
  }

  return res.status(200).json({ received: true });
};
