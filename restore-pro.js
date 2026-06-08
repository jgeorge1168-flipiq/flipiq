// /api/restore-pro.js
// Vercel serverless function — checks Stripe for an active FlipIQ Pro subscription by email.
// POST { email: "user@example.com" } → { pro: true|false, error?: string }

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://reflipiq.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email } = req.body || {};
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ error: 'Stripe not configured' });
  }

  try {
    const customers = await stripe.customers.list({
      email: email.toLowerCase().trim(),
      limit: 5
    });

    if (!customers.data.length) {
      return res.status(200).json({ pro: false });
    }

    for (const customer of customers.data) {
      const subs = await stripe.subscriptions.list({
        customer: customer.id,
        status: 'active',
        limit: 10
      });
      if (subs.data.length > 0) {
        return res.status(200).json({ pro: true });
      }
    }

    return res.status(200).json({ pro: false });
  } catch (err) {
    console.error('Stripe lookup error:', err.message);
    return res.status(500).json({ error: 'Could not verify subscription. Please try again.' });
  }
};
