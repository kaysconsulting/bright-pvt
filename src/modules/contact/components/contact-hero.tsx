"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrightPvtNav } from "@/modules/shared/components/bright-pvt-nav";
import { ContactForm } from "./contact-form";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
};

const contactDetails = [
  {
    label: "Phone",
    value: "+61 415 405 533",
    href: "tel:+61415405533",
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.93-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16.08l.42.84Z" />
    ),
  },
  {
    label: "Email",
    value: "info@brightpvt.com.au",
    href: "mailto:info@brightpvt.com.au",
    icon: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  },
  {
    label: "Location",
    value: "Canberra, ACT, Australia",
    href: undefined,
    icon: (
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Zm-8 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    ),
  },
] as const;

export function ContactHero() {
  return (
    <div className="relative w-full overflow-hidden bg-purple-500 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-32 size-[44rem] rounded-full bg-purple-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 size-[36rem] rounded-full bg-purple-800/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <BrightPvtNav />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: copy + contact details */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col lg:col-span-5"
          >
            <motion.div
              variants={fadeUp}
              className="relative inline-flex w-fit items-center gap-2 overflow-hidden rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[12px] font-medium text-white shadow-lg shadow-purple-900/25 ring-1 ring-inset ring-white/15 backdrop-blur-2xl sm:text-[13px]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-3 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent"
              />
              <span className="relative flex size-2" aria-hidden>
                <span className="absolute inset-0 animate-ping rounded-full bg-white/70" />
                <span className="relative size-2 rounded-full bg-white" />
              </span>
              Get in touch
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-balance text-[38px] font-semibold leading-[0.95] tracking-tight sm:text-[52px] md:text-[72px] lg:text-[88px] xl:text-[96px]"
            >
              Contact
              <br />
              <span className="italic font-light text-white/75">us.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md text-pretty text-[15px] leading-relaxed text-white/85 md:text-[17px]"
            >
              Have a question about our services or want to get started with
              NDIS care? We&apos;d love to hear from you. Fill in the form or
              reach us directly below.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-md text-[14px] leading-relaxed text-white/80"
            >
              Referring someone to our services? Use our{" "}
              <Link
                href="/referrals"
                className="font-semibold text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
              >
                referral form
              </Link>
              .
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-3"
            >
              {contactDetails.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md transition hover:bg-white/15"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="size-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {item.icon}
                      </svg>
                    </span>
                    <div>
                      <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/60">
                        {item.label}
                      </p>
                      <p className="text-[14px] font-medium text-white">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="size-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {item.icon}
                      </svg>
                    </span>
                    <div>
                      <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/60">
                        {item.label}
                      </p>
                      <p className="text-[14px] font-medium text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right: the form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none relative z-0 -mb-6 select-none overflow-hidden leading-none tracking-tighter md:-mb-10"
      >
        <span className="block text-center text-[clamp(5rem,18vw,18rem)] font-semibold text-white/[0.08]">
          Contact
        </span>
      </div>
    </div>
  );
}
