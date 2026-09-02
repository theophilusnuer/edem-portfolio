"use client";

import { useState, type FormEvent } from "react";

type RequestType = "speaking" | "advisory";

const OPTIONS: { label: string; value: RequestType }[] = [
    { label: "Advisory Engagement Request", value: "advisory" },
  { label: "Speaking Engagement Request", value: "speaking" },
];

export default function ContactForm() {
  const [requestType, setRequestType] = useState<RequestType>("advisory");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: requestType,
          name: data.get("name"),
          email: data.get("email"),
          institution: data.get("institution"),
          contactNumber: data.get("contactNumber"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="font-outfit text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        Let&apos;s have a conversation
      </h2>
      <p className="mt-3 text-lg text-slate-600">
        Send me a message for advisory engagements, speaking invitations, or
        institutional collaboration.
      </p>

      {/* Toggle */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-6">
        {OPTIONS.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-700"
          >
            <input
              type="checkbox"
              checked={requestType === option.value}
              onChange={() => setRequestType(option.value)}
              className="h-4 w-4 rounded border-slate-300 accent-slate-900"
            />
            {option.label}
          </label>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            pattern="[A-Za-z\u00C0-\u017F\s'-]+"
            title="Only letters, spaces, apostrophes and hyphens are allowed"
            required
            className="rounded-sm border border-slate-300 bg-white/70 px-4 py-2.5 text-slate-900 outline-none focus:border-slate-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Enter a valid email address"
            required
            className="rounded-sm border border-slate-300 bg-white/70 px-4 py-2.5 text-slate-900 outline-none focus:border-slate-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="institution" className="text-sm font-medium text-slate-700">
            Institution <span className="text-slate-400">(optional)</span>
          </label>
          <input
            id="institution"
            name="institution"
            type="text"
            className="rounded-sm border border-slate-300 bg-white/70 px-4 py-2.5 text-slate-900 outline-none focus:border-slate-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contactNumber" className="text-sm font-medium text-slate-700">
            Contact Number
          </label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="tel"
            inputMode="tel"
            pattern="^\+?[0-9]{7,15}$"
            title="Numbers only, optionally starting with +"
            onChange={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/[^0-9+]/g, "");
            }}
            required
            className="rounded-sm border border-slate-300 bg-white/70 px-4 py-2.5 text-slate-900 outline-none focus:border-slate-500"
          />
        </div>

        <div className="col-span-full flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="rounded-sm border border-slate-300 bg-white/70 px-4 py-2.5 text-slate-900 outline-none focus:border-slate-500"
          />
        </div>

        <div className="col-span-full">
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-sm bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 cursor-pointer disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>

          {status === "sent" && (
            <p className="mt-3 text-sm text-emerald-600">
              Message sent successfully.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-rose-600">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
