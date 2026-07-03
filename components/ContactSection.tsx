"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container-content grid gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Reach out. We&rsquo;re here to help.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-stone sm:text-base">
            Questions before ordering? Call, WhatsApp, or send a message —
            we usually reply the same day.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wide text-stone">
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                required
                className="mt-1 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-wide text-stone">
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                className="mt-1 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wide text-stone">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wide text-stone">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-1 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wide text-stone">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
              />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" disabled={status === "sending"} className="btn-primary w-full sm:w-auto">
                {status === "sending" ? "Sending…" : "Submit"}
              </button>
              {status === "sent" && (
                <p className="mt-3 text-sm font-semibold text-gold-deep">
                  Thanks — we&rsquo;ll be in touch shortly.
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm font-semibold text-red-700">
                  Something went wrong. Please call or WhatsApp us instead.
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-xl2 border border-line shadow-card">
            <iframe
              src={siteConfig.mapEmbedSrc}
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nutra-4 location — Karachi, Pakistan"
            />
          </div>

          <div className="grid gap-4 rounded-xl2 border border-line bg-white p-6 shadow-card sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-stone">Phone</p>
              {siteConfig.phones.map((p) => (
                <a key={p.href} href={p.href} className="block text-sm font-extrabold text-ink hover:text-gold-deep">
                  {p.label}
                </a>
              ))}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-stone">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="text-sm font-extrabold text-ink hover:text-gold-deep">
                {siteConfig.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-stone">Location</p>
              <p className="text-sm font-extrabold text-ink">{siteConfig.address}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-stone">WhatsApp</p>
              <a href={siteConfig.whatsapp.href} target="_blank" rel="noopener noreferrer" className="text-sm font-extrabold text-ink hover:text-gold-deep">
                Chat with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
