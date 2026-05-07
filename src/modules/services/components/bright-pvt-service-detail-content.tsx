"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ServiceDetail } from "@/modules/services/types";
import { services } from "@/modules/services/types";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

interface Props {
  data: ServiceDetail;
}

export function BrightPvtServiceDetailContent({ data }: Props) {
  const otherServices = services.filter((s) => s.slug !== data.slug);

  return (
    <section
      id="services-detail"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-16 size-[28rem] rounded-full bg-purple-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-32 size-[24rem] rounded-full bg-sky-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-stone-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm"
          >
            <span aria-hidden className="size-1.5 rounded-full bg-purple-500" />
            What&apos;s included
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-balance text-4xl font-semibold leading-[1] tracking-tight text-slate-900 sm:text-5xl"
          >
            {data.subServicesTitle}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-pretty text-[15px] leading-relaxed text-slate-600 md:text-base"
          >
            Every plan is tailored to your goals. Here&apos;s a guide to the
            support our team can provide as part of {data.title.toLowerCase()}.
          </motion.p>
        </motion.div>

        {/* Sub-services grid */}
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-3"
        >
          {data.subServices.map((sub, idx) => (
            <motion.li
              key={sub.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-slate-900/8 bg-stone-50 p-6 ring-1 ring-inset ring-white transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="flex size-9 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
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
              </div>

              <h3 className="mt-5 text-[18px] font-semibold leading-tight tracking-tight text-slate-900">
                {sub.title}
              </h3>

              <ul className="mt-4 flex flex-col gap-2.5">
                {sub.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-slate-600"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-purple-500"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ul>

        {/* Other services */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-24 border-t border-slate-900/10 pt-16 md:mt-32 md:pt-20"
        >
          <motion.div variants={fadeUp} className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Explore more
            </p>
            <h3 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Our other services
            </h3>
          </motion.div>

          <motion.div
            variants={stagger}
            className="mt-10 grid gap-5 sm:grid-cols-2"
          >
            {otherServices.map((other) => (
              <motion.div key={other.slug} variants={fadeUp}>
                <Link
                  href={`/services/${other.slug}`}
                  className="group relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-slate-900/8 bg-stone-50 p-6 ring-1 ring-inset ring-white transition hover:-translate-y-0.5 hover:shadow-md md:p-7"
                >
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-900/10 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700">
                      <span
                        aria-hidden
                        className="size-1.5 rounded-full bg-purple-500"
                      />
                      Service
                    </span>
                    <h4 className="mt-4 text-[22px] font-semibold tracking-tight text-slate-900">
                      {other.title}
                    </h4>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">
                      {other.blurb}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-900">
                    Learn more
                    <span className="flex size-8 items-center justify-center rounded-full bg-slate-900 text-white transition group-hover:translate-x-0.5 group-hover:bg-purple-600">
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
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
