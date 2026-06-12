"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { z } from "zod";
import { sendContactMessage } from "@/app/actions/contact";

const schema = z.object({
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

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "w-full rounded-md border border-line-strong bg-surface px-4 py-3 text-body-sm text-ink placeholder:text-muted focus-visible:border-gold-500";

export function ContactForm() {
  const [status, setStatus] = useState<{ kind: "idle" | "sent" | "error"; note?: string }>({
    kind: "idle",
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit(async (values) => {
    const result = await sendContactMessage(values);
    if (result.ok) {
      setStatus({ kind: "sent" });
      reset();
    } else {
      setStatus({ kind: "error", note: result.error });
    }
  });

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Contact NUICC">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1 block text-body-sm font-medium text-ink">
            Full Name
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={fieldClass}
            {...register("name")}
          />
          {errors.name && (
            <p id="contact-name-error" role="alert" className="mt-1 text-caption text-[var(--status-error)]">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1 block text-body-sm font-medium text-ink">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={fieldClass}
            {...register("email")}
          />
          {errors.email && (
            <p id="contact-email-error" role="alert" className="mt-1 text-caption text-[var(--status-error)]">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="contact-mobile" className="mb-1 block text-body-sm font-medium text-ink">
          Mobile
        </label>
        <input
          id="contact-mobile"
          type="tel"
          autoComplete="tel"
          maxLength={15}
          aria-invalid={!!errors.mobile}
          aria-describedby={errors.mobile ? "contact-mobile-error" : undefined}
          className={fieldClass}
          {...register("mobile")}
        />
        {errors.mobile && (
          <p id="contact-mobile-error" role="alert" className="mt-1 text-caption text-[var(--status-error)]">
            {errors.mobile.message}
          </p>
        )}
      </div>
      <div className="mt-4">
        <label htmlFor="contact-message" className="mb-1 block text-body-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={fieldClass}
          {...register("message")}
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" className="mt-1 text-caption text-[var(--status-error)]">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60">
          <Send className="h-4 w-4" aria-hidden="true" />
          {isSubmitting ? "Sending…" : "Send Message"}
        </button>
        <p aria-live="polite" className="text-body-sm">
          {status.kind === "sent" && (
            <span className="inline-flex items-center gap-1.5 text-[var(--status-success)]">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              Thank you — your message has been sent.
            </span>
          )}
          {status.kind === "error" && (
            <span className="inline-flex items-center gap-1.5 text-[var(--status-error)]">
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              {status.note}
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
