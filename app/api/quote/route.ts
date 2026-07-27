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
    'New quote request from the website.',
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

  const row = (label: string, value: string) =>
    `<tr><td style="padding:7px 0;color:#666;width:84px;vertical-align:top">${label}</td>` +
    `<td style="padding:7px 0;font-weight:600;color:#0a0a0a">${value}</td></tr>`;

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto">
    <div style="background:#0a0a0a;color:#fff;padding:18px 22px;border-radius:10px 10px 0 0">
      <div style="font-size:18px;font-weight:700">New Quote Request</div>
      <div style="font-size:13px;color:#c7cad1;margin-top:2px">From your website</div>
    </div>
    <div style="border:1px solid #eee;border-top:none;border-radius:0 0 10px 10px;padding:20px 22px">
      <p style="margin:0 0 14px;font-size:14px;color:#0a0a0a">You have a new lead 👇</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${row('Name', esc(name))}
        ${row('Phone', `<a href="tel:${esc(phone)}" style="color:#9E7E15;text-decoration:none">${esc(phone)}</a>`)}
        ${row('Email', `<a href="mailto:${esc(email)}" style="color:#9E7E15;text-decoration:none">${esc(email)}</a>`)}
        ${row('Service', esc(service))}
        ${city ? row('City', esc(city)) : ''}
      </table>
      <div style="margin-top:16px;padding-top:14px;border-top:1px solid #eee">
        <div style="color:#666;font-size:13px;margin-bottom:6px">Message</div>
        <div style="font-size:14px;line-height:1.6;color:#0a0a0a">${esc(message).replace(/\n/g, '<br>')}</div>
      </div>
      <p style="margin:18px 0 0;font-size:13px;color:#666">
        Just hit <b>Reply</b> to respond directly to ${esc(name)}.
      </p>
    </div>
  </div>`;

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
        subject: `New Quote Request${service && service !== 'Not specified' ? ' — ' + service : ''} (from ${name})`,
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
