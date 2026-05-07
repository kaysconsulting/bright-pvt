"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BrightPvtNav } from "@/modules/shared/components/bright-pvt-nav";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const quickLinks = [
  { label: "Transport", href: "/services/transport" },
  { label: "Domestic Assistance", href: "/services/domestic-assistance" },
  { label: "Community Nursing", href: "/services/community-nursing" },
] as const;

export function BrightPvtServicesHero() {
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-24 text-center md:px-10 md:pb-28 md:pt-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-3xl flex-col items-center"
        >
          <motion.div
            variants={fadeUp}
            className="relative inline-flex w-fit items-center gap-2 overflow-hidden rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[12px] font-medium text-white shadow-lg shadow-purple-900/25 ring-1 ring-inset ring-white/15 backdrop-blur-2xl backdrop-saturate-150 sm:text-[13px]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-3 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent"
            />
            <span className="relative flex size-2" aria-hidden>
              <span className="absolute inset-0 animate-ping rounded-full bg-white/70" />
              <span className="relative size-2 rounded-full bg-white" />
            </span>
            NDIS Services — Canberra ACT
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-balance text-[38px] font-semibold leading-[0.95] tracking-tight sm:text-[52px] md:text-[72px] lg:text-[96px]"
          >
            Our{" "}
            <span className="italic font-light text-white/75">services.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-white/85 md:text-[17px]"
          >
            Three integrated services — clinical, household, and transport —
            designed around your everyday life and delivered by a team of
            compassionate professionals.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center justify-center gap-2"
          >
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[13px] font-medium text-white backdrop-blur-md transition hover:bg-white/20"
              >
                {link.label}
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="size-3.5 transition group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none relative z-0 -mb-6 select-none overflow-hidden leading-none tracking-tighter md:-mb-10"
      >
        <span className="block text-center text-[clamp(5rem,18vw,18rem)] font-semibold text-white/[0.08]">
          Services
        </span>
      </div>
    </div>
  );
}
