// Sends quote-form leads via the Resend API (https://resend.com).
// Reusable across client sites: verify ONE sending domain in Resend, then set
// RESEND_API_KEY + LEAD_FROM (an address on that domain) + LEAD_TO (the client's
// inbox) per site. No email ever routes through the agency.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// ───────────────────────────────────────────────────────────────────────────
// PER-SITE SETTINGS (edit these two per client; they are not secrets).
//   LEAD_FROM: any address on your VERIFIED Resend domain.
//   LEAD_TO:   where THIS client's leads are delivered.
// The only secret (RESEND_API_KEY) is read from the Vercel env var below.
// ───────────────────────────────────────────────────────────────────────────
const LEAD_FROM = 'Tridan Website Lead <info@tradeleadsmarketing.com>';
const LEAD_TO = 'tridancontractor@gmail.com';

type Lead = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  city?: string;
  message?: string;
  company?: string; // honeypot
};

const esc = (s = '') =>
  s.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c] as string));

export async function POST(req: Request) {
  let data: Lead;
  try {
    data = await req.json();
  } catch {
    return Response.json({ ok: false, reason: 'bad_request' }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without sending.
  if (data.company) return Response.json({ ok: true });

  const name = (data.name || '').trim();
  const phone = (data.phone || '').trim();
  const email = (data.email || '').trim();
  const message = (data.message || '').trim();
  if (!name || !phone || !email || !message) {
    return Response.json({ ok: false, reason: 'missing_fields' }, { status: 422 });
  }

  // Only the API key is a secret -> it comes from Vercel env. LEAD_FROM/LEAD_TO
  // are set in code above. Not configured yet -> form falls back to mailto.
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return Response.json({ ok: false, reason: 'not_configured' }, { status: 501 });
  }

  const service = (data.service || 'Not specified').trim();
  const city = (data.city || '').trim();

  const text = [
    'You have a new enquiry from the website.',
    '',
    `Name:    ${name}`,
    `Phone:   ${phone}`,
    `Email:   ${email}`,
    `Service: ${service}`,
    ...(city ? [`City:    ${city}`] : []),
    '',
    'Message:',
    message,
    '',
    `Reply to this email to respond directly to ${name}.`,
  ].join('\n');

  // Deliberately plain and simple, which is far less likely to be filtered as
  // spam than a heavily-styled marketing-looking email.
  const html =
    `<p>You have a new enquiry from the website.</p>` +
    `<p>Name: ${esc(name)}<br>` +
    `Phone: ${esc(phone)}<br>` +
    `Email: ${esc(email)}<br>` +
    `Service: ${esc(service)}` +
    (city ? `<br>City: ${esc(city)}` : '') +
    `</p>` +
    `<p>Message:<br>${esc(message).replace(/\n/g, '<br>')}</p>` +
    `<p>Reply to this email to respond to ${esc(name)}.</p>`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: LEAD_FROM, // e.g. "Website Leads <leads@yourdomain.com>" (on your verified domain)
        to: [LEAD_TO], // the client's inbox
        reply_to: `${name} <${email}>`, // Reply goes straight to the customer
        subject: `New website enquiry from ${name}`,
        text,
        html,
      }),
    });
    if (res.ok) return Response.json({ ok: true });
    const detail = await res.text();
    console.error('Resend send failed:', res.status, detail);
    return Response.json({ ok: false, reason: 'send_failed' }, { status: 502 });
  } catch (err) {
    console.error('Resend request error:', err);
    return Response.json({ ok: false, reason: 'send_failed' }, { status: 502 });
  }
}
