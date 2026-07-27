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

  const text = [
    'New quote request from the Tridan Contracting website.',
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
      <div style="font-size:13px;color:#c7cad1;margin-top:2px">From the Tridan Contracting website</div>
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
    await transporter.sendMail({
      from: `"Tridan Website Lead" <${LEAD_FROM || SMTP_USER}>`,
      to: LEAD_TO,
      replyTo: `"${name}" <${email}>`, // hitting Reply answers the customer
      subject: `New Quote Request${service && service !== 'Not specified' ? ' — ' + service : ''} (from ${name})`,
      text,
      html,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error('Lead email failed:', err);
    return Response.json({ ok: false, reason: 'send_failed' }, { status: 502 });
  }
}
