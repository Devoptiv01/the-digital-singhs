import { EMAIL_PASS, EMAIL_USER } from '@/lib/constant';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  console.log('POST request received at /api/sendEmail');
  try {
    const data = await req.json();
    const { email, subject } = data;

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required.' }), {
        status: 400,
      });
    };
    if (!subject) {
      return new Response(JSON.stringify({ error: 'Subject is required.' }), {
        status: 400,
      });
    };

    const textBody = Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: EMAIL_USER,
      subject: `${data.subject}`,
      // 'New Message from Contact Form',
      text: `${textBody}`,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result.response);

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to send email:', error);

    const errorMessage =
      (error as any)?.responseCode === 535
        ? 'Authentication failed. Check your email credentials.'
        : 'Something went wrong while sending the email.';

    return new Response(
      JSON.stringify({ message: 'Failed to send email', error: errorMessage }),
      { status: 500 }
    );
  }
}
