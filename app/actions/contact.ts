"use server";

import { z } from "zod";
import { Resend } from "resend";
import { site } from "@/lib/content";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.string().trim().email("Please enter a valid email address"),
  mobile: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(15, "Phone number must be 15 digits or fewer")
    .regex(/^[+()\-.\s\d]+$/, "Please enter a valid phone number"),
  message: z.string().trim().min(10, "Please write a short message").max(5000),
});

type ContactInput = z.infer<typeof contactSchema>;

type ContactResult = { ok: true } | { ok: false; error: string };

export async function sendContactMessage(input: ContactInput): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid submission" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      error: `Message delivery is not configured yet. Please email us directly at ${site.email}.`,
    };
  }

  const { name, email, mobile, message } = parsed.data;
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
    to: process.env.CONTACT_TO_EMAIL ?? site.email,
    replyTo: email,
    subject: `NUICC website inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\n\n${message}`,
  });

  if (error) {
    return {
      ok: false,
      error: `We couldn't send your message right now. Please email us directly at ${site.email}.`,
    };
  }
  return { ok: true };
}
