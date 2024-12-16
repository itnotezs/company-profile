// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY || "");

// Tambahkan pengecekan
if (!process.env.RESEND_API_KEY) {
  console.warn("WARNING: RESEND_API_KEY is not set");
}

const contactRequestSchema = z.object({
  name: z
    .string()
    .min(2)
    .max(50)
    .refine((val) => !/<[^>]*>/.test(val)),
  email: z
    .string()
    .email()
    .max(100)
    .refine((val) => !/<[^>]*>/.test(val)),
  message: z
    .string()
    .min(10)
    .max(1000)
    .refine((val) => !/<[^>]*>/.test(val)),
  captchaToken: z.string(),
});

async function verifyCaptcha(token: string) {
  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const data = await response.json();
    console.log("Captcha verification response:", data);
    return data.success;
  } catch (error) {
    console.error("Captcha verification error:", error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Received form data:", body);

    // Validate request body
    const validatedData = contactRequestSchema.parse(body);

    // Verify CAPTCHA
    const isCaptchaValid = await verifyCaptcha(validatedData.captchaToken);
    if (!isCaptchaValid) {
      return NextResponse.json(
        { error: "Invalid CAPTCHA verification" },
        { status: 400 }
      );
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1B365D;">Thank you for contacting ITNOTEZS</h2>
        <p>Dear ${validatedData.name},</p>
        <p>We have received your message and will get back to you shortly.</p>
        <p>Here's a copy of your message:</p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          ${validatedData.message}
        </div>
        <p>Best regards,<br>ITNOTEZS Team</p>
      </div>
    `;

    // Send email
    const emailResponse = await resend.emails.send({
      from: "support@business.itnotezs.com",
      to: [validatedData.email],
      cc: ["itnotezs66@gmail.com"],
      subject: "Thank you for contacting ITNOTEZS",
      html: emailHtml,
      replyTo: "itnotezs66@gmail.com",
    });

    console.log("Email sent:", emailResponse);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
