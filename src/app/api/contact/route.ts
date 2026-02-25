import { NextRequest, NextResponse } from "next/server";

// Contact form messages should go to: info@alphysservicesltd.com
// Configure your preferred email service (Resend, Nodemailer, SendGrid, etc.)
// and replace this handler to actually send the email.

const CONTACT_EMAIL = "info@alphysservicesltd.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    // TODO: Integrate with your email provider, e.g.:
    // - Resend: https://resend.com/docs/send-with-nextjs
    // - Nodemailer with SMTP
    // - SendGrid, Mailgun, etc.
    // For now we just log and return success so the form UX works.
    console.log("Contact form submission:", {
      to: CONTACT_EMAIL,
      from: email,
      name,
      phone: phone || "(not provided)",
      message,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
