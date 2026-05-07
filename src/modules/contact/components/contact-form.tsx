"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FormService } from "@/modules/shared/services/form-service";

const subjects = [
  "General Inquiry",
  "Community Nursing",
  "Domestic Assistance",
  "Transport",
  "NDIS Registration Help",
  "Referral",
  "Other",
] as const;

interface Fields {
  customerName: string;
  customerEmail: string;
  phone: string;
  subject: string;
  message: string;
}

const empty: Fields = {
  customerName: "",
  customerEmail: "",
  phone: "",
  subject: "",
  message: "",
};

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function set(key: keyof Fields, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const result = await FormService.sendContactForm({
      customerName: fields.customerName,
      customerEmail: fields.customerEmail,
      phone: fields.phone || undefined,
      subject: fields.subject || "General Inquiry",
      message: fields.message,
    });

    if (result.success) {
      setStatus("success");
      setFields(empty);
    } else {
      setStatus("error");
      setErrorMsg(result.message || "Something went wrong. Please try again.");
    }
  }

  const inputBase =
    "w-full rounded-xl border border-slate-900/10 bg-white px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 shadow-sm outline-none ring-0 transition focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[32px] border border-slate-900/8 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(88,28,135,0.15)] ring-1 ring-inset ring-white sm:p-8 md:p-10"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-purple-200 to-transparent"
      />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center py-10 text-center"
          >
            <span className="flex size-16 items-center justify-center rounded-full bg-purple-100">
              <svg
                viewBox="0 0 24 24"
                className="size-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <h3 className="mt-5 text-[22px] font-semibold text-slate-900">
              Message sent!
            </h3>
            <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-slate-500">
              Thank you for reaching out. A member of our team will be in touch
              shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-7 rounded-full border border-slate-900/10 bg-stone-50 px-5 py-2 text-[13px] font-medium text-slate-700 transition hover:bg-stone-100"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  Full name <span className="text-purple-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jane Smith"
                  value={fields.customerName}
                  onChange={(e) => set("customerName", e.target.value)}
                  className={inputBase}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  Email <span className="text-purple-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@example.com"
                  value={fields.customerEmail}
                  onChange={(e) => set("customerEmail", e.target.value)}
                  className={inputBase}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="phone"
                  className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  Phone <span className="text-slate-400">(optional)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+61 4xx xxx xxx"
                  value={fields.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className={inputBase}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="subject"
                  className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  value={fields.subject}
                  onChange={(e) => set("subject", e.target.value)}
                  className={`${inputBase} cursor-pointer`}
                >
                  <option value="">Select a topic…</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
              >
                Message <span className="text-purple-500">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell us how we can help…"
                value={fields.message}
                onChange={(e) => set("message", e.target.value)}
                className={`${inputBase} resize-none`}
              />
            </div>

            {status === "error" && (
              <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-600">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-purple-600 disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <svg
                    className="size-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <span className="flex size-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 transition group-hover:translate-x-0.5">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </span>
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
