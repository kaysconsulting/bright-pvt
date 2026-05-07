"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BrightPvtNav } from "@/modules/shared/components/bright-pvt-nav";
import type { ServiceDetail } from "@/modules/services/types";

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

interface Props {
  data: ServiceDetail;
}

export function BrightPvtServiceDetailHero({ data }: Props) {
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
        {/* Breadcrumb */}
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex items-center gap-2 text-[12.5px] text-white/70"
        >
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span aria-hidden>/</span>
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <span aria-hidden>/</span>
          <span className="text-white">{data.title}</span>
        </motion.nav>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Copy */}
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
              <span aria-hidden className="size-1.5 rounded-full bg-white" />
              {data.tagline}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-balance text-[38px] font-semibold leading-[0.95] tracking-tight sm:text-[52px] md:text-[72px] lg:text-[88px] xl:text-[96px]"
            >
              {data.title}.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-pretty text-[15px] leading-relaxed text-white/85 md:text-[17px]"
            >
              {data.blurb}
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
                href="#services-detail"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-[13px] font-medium text-white backdrop-blur-md transition hover:bg-white/20"
              >
                See what&apos;s included
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
          </motion.div>

          {/* Image / commitment card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="grid gap-3">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] ring-1 ring-white/15">
                <Image
                  src={data.image}
                  alt={`${data.title} — BrightPVT NDIS services in Canberra ACT`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-purple-900/15 mix-blend-multiply"
                />
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-white/25 bg-white/10 p-5 backdrop-blur-md">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-5 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent"
                />
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/85">
                  Our commitment
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-white/90">
                  {data.commitment}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
