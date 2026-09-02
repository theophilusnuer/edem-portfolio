import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  type: "speaking" | "advisory";
  name: string;
  email: string;
  institution?: string;
  contactNumber: string;
  message: string;
};

const SUBJECTS: Record<ContactPayload["type"], string> = {
  speaking: "Speaking Engagement Request",
  advisory: "Advisory Engagement Request",
};

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;
  const { type, name, email, institution, contactNumber, message } = body;

  if (!type || !SUBJECTS[type] || !name || !email || !contactNumber || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL ?? "info@edem.com",
      replyTo: email,
      subject: SUBJECTS[type],
      text: [
        `Request type: ${SUBJECTS[type]}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Institution: ${institution || "N/A"}`,
        `Contact number: ${contactNumber}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
