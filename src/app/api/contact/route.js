import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  // Configure SMTP via environment variables.
  // Add these to .env.local:
  //   EMAIL_USER=your@gmail.com
  //   EMAIL_PASS=your-app-password
  //   EMAIL_TO=recipient@gmail.com
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to:   process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:auto;background:#0f172a;color:#e2e8f0;padding:32px;border-radius:12px;border:1px solid #1e293b">
          <h2 style="color:#3b82f6;margin-bottom:8px">New Portfolio Message</h2>
          <p style="color:#94a3b8;margin-bottom:24px">Someone reached out via your portfolio contact form.</p>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#94a3b8;font-size:13px">Name</td>
                <td style="padding:8px 0;color:#f1f5f9">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#94a3b8;font-size:13px">Email</td>
                <td style="padding:8px 0;color:#3b82f6"><a href="mailto:${email}" style="color:#3b82f6">${email}</a></td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#1e293b;border-radius:8px;border-left:3px solid #3b82f6">
            <p style="color:#94a3b8;font-size:13px;margin-bottom:8px">Message</p>
            <p style="color:#e2e8f0;white-space:pre-line">${message}</p>
          </div>
        </div>
      `,
    });

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Email error:", err);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
