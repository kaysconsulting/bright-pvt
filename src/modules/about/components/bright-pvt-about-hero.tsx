"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

export function BrightPvtAboutHero() {
  return (
    <div className="relative w-full overflow-hidden bg-purple-500 text-white">
      {/* Background decorations */}
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

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Left: copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col lg:col-span-7"
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
              About BrightPVT — Canberra ACT
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-balance text-[38px] font-semibold leading-[0.95] tracking-tight sm:text-[56px] md:text-[80px] lg:text-[104px] xl:text-[112px]"
            >
              Our
              <br />
              <span className="italic font-light text-white/75">
                story.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-pretty text-[15px] leading-relaxed text-white/85 md:text-[17px]"
            >
              We are a leading disability service provider in the Australian
              Capital Territory committed to empowering individuals with
              disabilities to live fulfilling and independent lives — tailored
              to the specific needs and aspirations of each person we support.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white py-1.5 pl-5 pr-1.5 text-[14px] font-semibold text-purple-700 shadow-[0_15px_40px_-12px_rgba(88,28,135,0.6)] transition hover:bg-white/95"
              >
                Get in touch
                <span
                  className="flex size-8 items-center justify-center rounded-full bg-purple-600 text-white shadow-inner transition group-hover:translate-x-0.5"
                  aria-hidden
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </Link>
              <a
                href="#story"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-[13px] font-medium text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Read our story
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="size-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="mt-12 grid grid-cols-3 gap-2 border-t border-white/20 pt-8 sm:gap-6 md:mt-16"
            >
              {[
                { kpi: "NDIS", label: "Registered provider" },
                { kpi: "100%", label: "Person-centred care" },
                { kpi: "ACT", label: "Canberra & surrounds" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[26px] font-semibold tracking-tight text-white sm:text-[32px]">
                    {stat.kpi}
                  </p>
                  <p className="mt-1 text-[11.5px] uppercase tracking-[0.16em] text-white/70 sm:text-[12px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: image collage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3 lg:col-span-5"
          >
            {/* Main image with floating badge */}
            <div className="relative">
              <div className="overflow-hidden rounded-[24px] shadow-[0_30px_60px_-20px_rgba(88,28,135,0.55)] ring-1 ring-white/20">
                <Image
                  src="/about-hero.jpg"
                  alt="BrightPVT team — NDIS community care in Canberra ACT"
                  width={1200}
                  height={800}
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating badge — top-left, inside the image */}
              <div className="absolute left-4 top-4 flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/90 px-3 py-2.5 shadow-lg backdrop-blur-xl">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-purple-100">
                  <svg viewBox="0 0 24 24" className="size-3.5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <div>
                  <p className="text-[12px] font-semibold leading-none text-slate-900">Trusted clinicians</p>
                  <p className="mt-0.5 text-[10.5px] text-slate-500">Background-checked &amp; registered</p>
                </div>
              </div>
            </div>

            {/* Bottom row: second image + info card */}
            <div className="grid grid-cols-2 gap-3">
              <div className="overflow-hidden rounded-[20px] shadow-[0_16px_40px_-12px_rgba(88,28,135,0.45)] ring-1 ring-white/15">
                <Image
                  src="/about-hero-2.jpg"
                  alt="BrightPVT inclusive workplace — Canberra disability services"
                  width={800}
                  height={533}
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col justify-center rounded-[20px] border border-white/20 bg-white/90 px-4 py-4 shadow-lg backdrop-blur-xl">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-purple-500">
                  Since 2022
                </p>
                <p className="mt-2 text-[15px] font-semibold leading-tight text-slate-900">
                  Caring for Canberra
                </p>
                <p className="mt-1 text-[11.5px] leading-relaxed text-slate-500">
                  NDIS-registered community care
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative wordmark */}
      <div
        aria-hidden
        className="pointer-events-none relative z-0 -mb-6 select-none overflow-hidden leading-none tracking-tighter md:-mb-10"
      >
        <span className="block text-center text-[clamp(5rem,18vw,18rem)] font-semibold text-white/[0.08]">
          BrightPVT
        </span>
      </div>
    </div>
  );
}
