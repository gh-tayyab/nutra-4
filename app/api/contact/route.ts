import { NextRequest, NextResponse } from "next/server";

// Contact form endpoint. Currently logs submissions server-side.
// To actually deliver emails to info@nutra-4.com, wire in an email
// provider (Resend, Postmark, SMTP, etc.) here — see README.md
// "Connecting the contact form" for a step-by-step example.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body ?? {};

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // TODO: send email via your provider of choice. Example (Resend):
    //
    // await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     from: "Nutra-4 Website <no-reply@nutra-4.com>",
    //     to: "info@nutra-4.com",
    //     subject: `New enquiry from ${firstName} ${lastName ?? ""}`,
    //     text: `${message}\n\nFrom: ${email} / ${phone ?? "no phone given"}`,
    //   }),
    // });

    console.log("New Nutra-4 contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}
