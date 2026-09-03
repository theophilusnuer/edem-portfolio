"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { motion } from "framer-motion";

type RequestType = "speaking" | "advisory";

const OPTIONS: {
  label: string;
  value: RequestType;
  description: string;
}[] = [
  {
    label: "Advisory Engagement",
    value: "advisory",
    description:
      "Strategic advisory, institutional collaboration and partnership opportunities.",
  },
  {
    label: "Speaking Engagement",
    value: "speaking",
    description:
      "Speaking invitations, conferences, panels and leadership conversations.",
  },
];

export default function ContactForm() {
  const [requestType, setRequestType] =
    useState<RequestType>("advisory");

  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: requestType,
          name: data.get("name"),
          email: data.get("email"),
          institution: data.get("institution"),
          contactNumber: data.get("contactNumber"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      setStatus("sent");
      form.reset();
      setRequestType("advisory");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f4f0]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-125 w-125 rounded-full bg-amber-100/50 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-112.5 w-112.5 rounded-full bg-slate-200/60 blur-[120px]" />

      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#111827 1px, transparent 1px),
            linear-gradient(90deg, #111827 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-10 lg:px-16 lg:pt-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5"
          >
            {/* Label */}
            <div className="flex items-center gap-3">

              <span className="text-xsms font-semibold uppercase tracking-[0.25em] text-amber-500">
                Contact
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-7 max-w-xl font-outfit text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-slate-900 sm:text-6xl lg:text-7xl">
              Let's have a
              <span className="block text-slate-400">
                conversation.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-slate-500 sm:text-lg">
              For advisory engagements, speaking invitations, or institutional
              collaboration, share a little about what you have in mind.
            </p>

            {/* Contact information */}
            <div className="mt-12 border-t border-slate-400 pt-7">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white/60">
                  <Mail size={16} className="text-slate-700" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                    Professional enquiries
                  </p>

                  <p className="mt-2 text-sm text-slate-600">
                    Advisory, speaking & institutional collaboration
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy quote */}
            <div className="mt-12 max-w-md border-l-2 border-amber-500 pl-5">
              <p className="font-outfit text-lg leading-7 text-slate-700">
                "Africa's transformation requires systems that connect
                governments, businesses, and citizens across borders."
              </p>
            </div>

            <Link
              href="/about"
              className="group underline underline-offset-4 mt-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
            >
              Learn more about Edem

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          {/* =================================================
              RIGHT SIDE / FORM
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-7"
          >
            <div className="border border-slate-200 bg-white/80 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-10 lg:p-12">
              
              {/* Form header */}
              <div className="flex items-start justify-between gap-6 border-b border-slate-200 pb-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Start an enquiry
                  </p>

                  <h2 className="mt-2 font-outfit text-2xl font-semibold tracking-tight text-slate-900">
                    How can we work together?
                  </h2>
                </div>

              
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-8"
              >
                {/* ============================================
                    ENGAGEMENT TYPE
                ============================================= */}

                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    I&apos;m interested in
                  </label>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {OPTIONS.map((option) => {
                      const selected =
                        requestType === option.value;

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() =>
                            setRequestType(option.value)
                          }
                          className={`group relative text-left transition-all duration-300 ${
                            selected
                              ? "border-slate-900 bg-slate-900 text-white"
                              : "border-slate-200 bg-white hover:border-slate-400"
                          } border p-5`}
                        >
                          {/* check */}
                          <span
                            className={`absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border ${
                              selected
                                ? "border-white bg-white text-slate-900"
                                : "border-slate-300"
                            }`}
                          >
                            {selected && (
                              <Check size={12} strokeWidth={3} />
                            )}
                          </span>

                          <p
                            className={`pr-7 text-sm font-semibold ${
                              selected
                                ? "text-white"
                                : "text-slate-900"
                            }`}
                          >
                            {option.label}
                          </p>

                          <p
                            className={`mt-2 pr-3 text-xs leading-5 ${
                              selected
                                ? "text-white/60"
                                : "text-slate-500"
                            }`}
                          >
                            {option.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ============================================
                    DETAILS
                ============================================= */}

                <div className="mt-9 grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2">
                  {/* Name */}
                  <div className="group relative">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      pattern="[A-Za-z\u00C0-\u017F\s'-]+"
                      title="Only letters, spaces, apostrophes and hyphens are allowed"
                      required
                      className="mt-2 w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-300 focus:border-slate-900"
                    />
                  </div>

                  {/* Email */}
                  <div className="group relative">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                      title="Enter a valid email address"
                      required
                      className="mt-2 w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-900"
                    />
                  </div>

                  {/* Institution */}
                  <div>
                    <label
                      htmlFor="institution"
                      className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500"
                    >
                      Institution{" "}
                      <span className="font-normal normal-case tracking-normal text-slate-400">
                        (optional)
                      </span>
                    </label>

                    <input
                      id="institution"
                      name="institution"
                      type="text"
                      className="mt-2 w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-900"
                    />
                  </div>

                  {/* Contact */}
                  <div>
                    <label
                      htmlFor="contactNumber"
                      className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500"
                    >
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
                        e.currentTarget.value =
                          e.currentTarget.value.replace(
                            /[^0-9+]/g,
                            ""
                          );
                      }}
                      required
                      className="mt-2 w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-900"
                    />
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500"
                    >
                      Tell us about your enquiry
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="mt-3 w-full resize-none border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-all focus:border-slate-900 focus:bg-white"
                    />
                  </div>
                </div>

                {/* ============================================
                    SUBMIT
                ============================================= */}

                <div className="mt-8 flex flex-col gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-xs leading-5 text-slate-400">
                    Your enquiry will be reviewed and directed to the
                    appropriate channel.
                  </p>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group flex items-center justify-center gap-3 bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending"
                      ? "Sending..."
                      : "Send Enquiry"}

                    {status !== "sending" && (
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    )}
                  </button>
                </div>

                {/* ============================================
                    STATUS
                ============================================= */}

                {status === "sent" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
                  >
                    Message sent successfully. Thank you for getting
                    in touch.
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}