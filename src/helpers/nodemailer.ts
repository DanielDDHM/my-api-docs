import nodemailer from 'nodemailer';

interface MailInput {
  to: string,
  subject: string,
  message: string,
}

async function mail({ to, subject, message }: MailInput) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: Number(process.env.SMTP_PORT) > 99,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  return transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject,
    html: message,
  }, (err, result) => {
    if (err) return Promise.reject(new Error(err));
    return Promise.resolve(result);
  });
}

export default mail;
