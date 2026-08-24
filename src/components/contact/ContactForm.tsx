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
        <input type="hidden" name="_formsource" value="link-building-italy.com" />

        
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="message">Message (optional)</label>
        <textarea id="message" name="message" rows={4} />
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
