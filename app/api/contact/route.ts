import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SupporterConfirmation } from "@/emails/SupporterConfirmation";
import { NotificationEmail } from "@/emails/NotificationEmail";
import { SITE } from "@/lib/constants";

const FROM_ADDRESS =
  process.env.RESEND_FROM_ADDRESS ||
  "Steve Camp for City Council <noreply@campforcitycouncil.com>";

const NOTIFY_TO = (process.env.RESEND_NOTIFY_TO || "stevec@elementsarch.com,hello@spencercamp.com")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const REPLY_TO_FOR_SUPPORTER =
  process.env.RESEND_REPLY_TO || "stevec@elementsarch.com";

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || "";

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  zipCode?: string;
  smsOptIn?: boolean;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(value: unknown, max = 200): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const data = raw as Partial<ContactPayload>;

  const firstName = sanitize(data.firstName, 80);
  const lastName = sanitize(data.lastName, 80);
  const email = sanitize(data.email, 200).toLowerCase();
  const phone = sanitize(data.phone, 40);
  const zipCode = sanitize(data.zipCode, 10);
  const smsOptIn = Boolean(data.smsOptIn);

  if (!firstName || !lastName || !email) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "medium",
    timeStyle: "short",
  });

  try {
    const [confirmation, notification] = await Promise.all([
      resend.emails.send({
        from: FROM_ADDRESS,
        to: email,
        replyTo: REPLY_TO_FOR_SUPPORTER,
        subject: `Welcome aboard, ${firstName} — a note from Steve`,
        react: SupporterConfirmation({ firstName, siteUrl: SITE.url }),
      }),
      resend.emails.send({
        from: FROM_ADDRESS,
        to: NOTIFY_TO,
        replyTo: email,
        subject: `New supporter: ${firstName} ${lastName}${zipCode ? ` (${zipCode})` : ""}`,
        react: NotificationEmail({
          firstName,
          lastName,
          email,
          phone,
          zipCode,
          smsOptIn,
          submittedAt: `${submittedAt} PT`,
        }),
      }),
    ]);

    if (confirmation.error || notification.error) {
      console.error("Resend send error", {
        confirmationError: confirmation.error,
        notificationError: notification.error,
      });
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 502 }
      );
    }

    if (AUDIENCE_ID) {
      const contact = await resend.contacts.create({
        audienceId: AUDIENCE_ID,
        email,
        firstName,
        lastName,
        unsubscribed: false,
      });

      if (contact.error) {
        const message = contact.error.message?.toLowerCase() ?? "";
        const isDuplicate =
          message.includes("already") || message.includes("exist");
        if (!isDuplicate) {
          console.error("Resend audience add failed", contact.error);
        }
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Unexpected error sending contact emails", error);
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
