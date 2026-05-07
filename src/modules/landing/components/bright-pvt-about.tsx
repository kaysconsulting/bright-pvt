"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "NDIS Registered",
    copy: "A registered provider you can trust.",
    icon: (
      <path d="M12 3 4 6v6c0 4.5 3.4 8.5 8 9 4.6-.5 8-4.5 8-9V6l-8-3Zm-1.4 12.1L7.4 11.9l1.4-1.4 1.8 1.8 4.6-4.6 1.4 1.4-6 6Z" />
    ),
  },
  {
    title: "Client Centered Approach",
    copy: "Plans built around your goals.",
    icon: (
      <path d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10-1.5 0-2.5-1-4-1Z" />
    ),
  },
  {
    title: "Comprehensive Care",
    copy: "From wound care to recovery.",
    icon: (
      <path d="M9 3h6a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2V5a2 2 0 0 1 2-2Zm0 4h6V5H9v2Zm3 4v6m-3-3h6" />
    ),
  },
  {
    title: "Experienced Team",
    copy: "Compassionate, qualified clinicians.",
    icon: (
      <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 20a7 7 0 0 1 14 0Z" />
    ),
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export function BrightPvtAbout() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-stone-50 py-20 text-slate-900 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 size-[28rem] rounded-full bg-sky-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 size-[34rem] rounded-full bg-purple-100/50 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative self-center"
        >
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[28px] bg-stone-200 shadow-[0_30px_60px_-25px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/5">
            <Image
              src="/home-about.jpg"
              alt="A diverse team of clients and clinicians smiling together"
              fill
              priority={false}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="absolute -bottom-6 right-4 hidden md:block">
            <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/85 p-4 shadow-[0_20px_40px_-15px_rgba(15,23,42,0.4)] ring-1 ring-inset ring-white/60 backdrop-blur-xl">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-white to-transparent"
              />
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                Since 2022
              </p>
              <p className="mt-1 text-[15px] font-semibold text-slate-900">
                Caring for Canberra
              </p>
              <p className="text-[12px] text-slate-600">
                NDIS-registered community care
              </p>
            </div>
          </div>

          <div className="absolute -left-3 -top-5 hidden lg:block">
            <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/85 px-4 py-3 shadow-[0_20px_40px_-15px_rgba(15,23,42,0.35)] ring-1 ring-inset ring-white/60 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 12 5 5 9-12" />
                  </svg>
                </span>
                <div>
                  <p className="text-[12px] font-semibold text-slate-900">
                    Trusted clinicians
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Background-checked & registered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm"
          >
            <span
              aria-hidden
              className="size-1.5 rounded-full bg-purple-500"
            />
            About us
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-[52px]"
          >
            Get to know us
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-slate-600 md:text-base"
          >
            Founded in 2022, we are a dedicated NDIS service provider based in
            Canberra committed to enhancing the lives of individuals through
            comprehensive community care services. Our team of compassionate
            professionals offer personalized support. We strive to make a
            positive impact in every community we serve, fostering well-being
            and connection for all.
          </motion.p>

          <motion.ul
            variants={stagger}
            className="mt-8 grid gap-3 sm:grid-cols-2"
          >
            {features.map((f) => (
              <motion.li
                key={f.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-slate-900/8 bg-white p-4 shadow-sm ring-1 ring-inset ring-white transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-inner ring-1 ring-slate-900/20">
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="size-[18px]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {f.icon}
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-[14px] font-semibold text-slate-900">
                      {f.title}
                    </p>
                    <p className="text-[12.5px] leading-relaxed text-slate-500">
                      {f.copy}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-10">
            <a
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 py-2 pl-5 pr-2 text-[14px] font-semibold text-white shadow-lg shadow-slate-900/15 ring-1 ring-slate-900/30 transition hover:bg-slate-800"
            >
              Learn more
              <span className="flex size-8 items-center justify-center rounded-full bg-white text-slate-900 transition group-hover:translate-x-0.5">
                <svg
                  aria-hidden
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
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
