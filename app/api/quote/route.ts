import nodemailer from 'nodemailer';

// Nodemailer needs the Node.js runtime (not Edge).
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Lead = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  city?: string;
  message?: string;
  // Honeypot: real users leave this empty; bots often fill it.
  company?: string;
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

  // Silently accept bot submissions (honeypot) without sending.
  if (data.company) return Response.json({ ok: true });

  const name = (data.name || '').trim();
  const phone = (data.phone || '').trim();
  const email = (data.email || '').trim();
  const message = (data.message || '').trim();
  if (!name || !phone || !email || !message) {
    return Response.json({ ok: false, reason: 'missing_fields' }, { status: 422 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, LEAD_TO, LEAD_FROM } = process.env;

  // Not configured yet -> tell the client so it can fall back to mailto.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !LEAD_TO) {
    return Response.json({ ok: false, reason: 'not_configured' }, { status: 501 });
  }

  const port = Number(SMTP_PORT || 587);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // 465 = implicit TLS; 587 = STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const service = (data.service || 'Not specified').trim();
  const city = (data.city || '').trim();
  const lines = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Service: ${service}`,
    ...(city ? [`City: ${city}`] : []),
    ``,
    `Message:`,
    message,
  ];

  try {
    await transporter.sendMail({
      from: `"Tridan Website Lead" <${LEAD_FROM || SMTP_USER}>`,
      to: LEAD_TO,
      replyTo: `"${name}" <${email}>`, // hitting Reply answers the customer
      subject: `New Quote Request${service && service !== 'Not specified' ? ' — ' + service : ''}`,
      text: lines.join('\n'),
      html: `<h2>New Quote Request</h2><table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px">
        <tr><td><b>Name</b></td><td>${esc(name)}</td></tr>
        <tr><td><b>Phone</b></td><td>${esc(phone)}</td></tr>
        <tr><td><b>Email</b></td><td>${esc(email)}</td></tr>
        <tr><td><b>Service</b></td><td>${esc(service)}</td></tr>
        ${city ? `<tr><td><b>City</b></td><td>${esc(city)}</td></tr>` : ''}
        <tr><td valign="top"><b>Message</b></td><td>${esc(message).replace(/\n/g, '<br>')}</td></tr>
      </table>`,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error('Lead email failed:', err);
    return Response.json({ ok: false, reason: 'send_failed' }, { status: 502 });
  }
}
