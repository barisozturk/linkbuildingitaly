"use client";

import { useState } from "react";
import { CONTACT_EMAIL, FORMSPREE_ENDPOINT } from "@/data/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-surface border border-border rounded-2xl p-8 md:p-10">
      <h2 className="font-heading text-xl font-bold text-primary mb-1">Send a message</h2>
      <p className="text-muted text-sm mb-7">
        Include your website URL and the Italian keywords you care about. The more context, the
        better our first reply.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5" action={FORMSPREE_ENDPOINT} method="POST">
        <input type="hidden" name="_subject" value="Link Building Italy - Contact Form" />
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <input type="hidden" name="_formsource" value="link-building-italy.com/contact" />

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-1.5">
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              required
              placeholder="Marco"
              className="w-full rounded-lg border border-border px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent bg-white"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-1.5">
              Last name (optional)
            </label>
            <input
              id="lastName"
              name="lastName"
              placeholder="Rossi"
              className="w-full rounded-lg border border-border px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent bg-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-primary mb-1.5">
            Company (optional)
          </label>
          <input
            id="company"
            name="company"
            placeholder="Your company"
            className="w-full rounded-lg border border-border px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent bg-white"
          />
        </div>

        <div>
          <label htmlFor="website" className="block text-sm font-medium text-primary mb-1.5">
            Website you want to grow in Italy (optional)
          </label>
          <input
            id="website"
            name="website"
            placeholder="https://yoursite.com"
            className="w-full rounded-lg border border-border px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent bg-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="marco@company.com"
            className="w-full rounded-lg border border-border px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent bg-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">
            What are you trying to achieve? (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Example: We sell B2B software in Italy and need editorial links from Italian tech publications..."
            className="w-full rounded-lg border border-border px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent resize-y bg-white leading-relaxed"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-accent hover:bg-accent-dark disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg transition-colors text-base"
        >
          {status === "loading" ? "Sending..." : "Send message"}
        </button>

        {status === "success" && (
          <p className="text-accent text-sm font-medium">
            Got it. Someone from the Rome team will reply within one business day.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm">
            Form failed. Email us at {CONTACT_EMAIL} instead.
          </p>
        )}
      </form>
    </div>
  );
}
