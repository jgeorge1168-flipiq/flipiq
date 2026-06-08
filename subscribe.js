// api/subscribe.js
// Vercel serverless function — adds an email to the FlipIQ Mailchimp audience.
// POST { email: "user@example.com", source: "capture_bar" } → { ok: true|false }

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://reflipiq.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, source } = req.body || {};
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const server = process.env.MAILCHIMP_SERVER;

  if (!apiKey || !audienceId || !server) {
    return res.status(500).json({ error: 'Mailchimp not configured' });
  }

  try {
    const response = await fetch(
      `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
      {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + Buffer.from('anystring:' + apiKey).toString('base64'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email_address: email.toLowerCase().trim(),
          status: 'subscribed',
          tags: ['flipiq', source || 'unknown'].filter(Boolean)
        })
      }
    );

    const data = await response.json();

    // 200 = new subscriber, 400 with title "Member Exists" = already subscribed (both are fine)
    if (response.ok || data.title === 'Member Exists') {
      return res.status(200).json({ ok: true });
    }

    console.error('Mailchimp error:', data);
    return res.status(200).json({ ok: false });
  } catch (err) {
    console.error('Subscribe error:', err.message);
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
};
