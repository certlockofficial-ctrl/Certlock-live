import sgMail from "@sendgrid/mail";
import twilio from "twilio";

export function initNotify() {
  if (!process.env.SENDGRID_API_KEY) throw new Error("Missing SENDGRID_API_KEY");
  if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) throw new Error("Missing Twilio env vars");
  if (!process.env.TWILIO_FROM_NUMBER) throw new Error("Missing TWILIO_FROM_NUMBER");
  if (!process.env.FROM_EMAIL) throw new Error("Missing FROM_EMAIL");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

const tw = twilio(process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!);

export async function sendEmail(to: string, subject: string, text: string) {
  await sgMail.send({
    to,
    from: process.env.FROM_EMAIL!,
    subject,
    text,
  });
}

export async function sendSms(to: string, text: string) {
  await tw.messages.create({
    to,
    from: process.env.TWILIO_FROM_NUMBER!,
    body: text,
  });
}
