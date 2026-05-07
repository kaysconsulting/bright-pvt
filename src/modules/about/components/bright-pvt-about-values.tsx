"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const values = [
  {
    number: "01",
    title: "Respect",
    body: "We are committed to creating a caring and supportive environment for individuals with disabilities. We strive to foster an environment that acknowledges their inherent worth, treats them with respect and dignity, and strives to make a positive impact on their lives.",
    chips: ["Dignity", "Worth", "Empathy"],
    image: "/respct.jpg",
    imageAlt: "BrightPVT participants — respect and dignity in community care",
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
    accent: "bg-rose-500/10 text-rose-600 ring-rose-500/20",
    glow: "bg-rose-200/40",
  },
  {
    number: "02",
    title: "Kindness",
    body: "Commitment to providing the highest standard of support and services to individuals with disabilities. A culture of continuous improvement, professionalism, and innovation, ultimately enhancing the overall quality of life for participants and their families.",
    chips: ["Compassion", "Quality", "Innovation"],
    image: "/kindness.jpg",
    imageAlt: "Kindness and care — BrightPVT NDIS values",
    icon: (
      <path d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10-1.5 0-2.5-1-4-1Z" />
    ),
    accent: "bg-amber-500/10 text-amber-600 ring-amber-500/20",
    glow: "bg-amber-200/40",
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
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

export function BrightPvtAboutValues() {
  return (
    <section className="relative overflow-hidden bg-stone-50 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-20 size-[34rem] rounded-full bg-purple-100/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 size-[28rem] rounded-full bg-sky-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Section header — centered, big, editorial */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm"
          >
            <span
              aria-hidden
              className="size-1.5 rounded-full bg-purple-500"
            />
            Our values
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-balance text-[42px] font-semibold leading-[1] tracking-tight text-slate-900 sm:text-[56px] lg:text-[64px]"
          >
            What we{" "}
            <span className="italic font-light text-slate-500">stand for.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-pretty text-[16px] leading-relaxed text-slate-600 md:text-[17px]"
          >
            A commitment to promoting dignity, equality, and inclusivity for
            individuals with disabilities. An environment where everyone is
            valued, heard, and supported.
          </motion.p>
        </motion.div>

        {/* Alternating feature rows */}
        <div className="mt-16 flex flex-col gap-10 md:mt-24 md:gap-16">
          {values.map((value, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image side — full landscape, no crop */}
                <div className="relative lg:col-span-5">
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -inset-6 rounded-[40px] ${value.glow} blur-2xl opacity-70`}
                  />
                  <div className="relative overflow-hidden rounded-[28px] shadow-[0_30px_60px_-25px_rgba(15,23,42,0.25)] ring-1 ring-slate-900/5">
                    <Image
                      src={value.image}
                      alt={value.imageAlt}
                      width={1200}
                      height={800}
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Text side */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-4">
                    <span className="text-[14px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                      Value {value.number}
                    </span>
                    <span aria-hidden className="h-px flex-1 bg-slate-300" />
                    <span
                      className={`flex size-11 items-center justify-center rounded-2xl ring-1 ${value.accent}`}
                    >
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="size-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {value.icon}
                      </svg>
                    </span>
                  </div>

                  <h3 className="mt-6 text-[36px] font-semibold leading-[0.95] tracking-tight text-slate-900 sm:text-[44px] lg:text-[56px] xl:text-[64px]">
                    {value.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-pretty text-[15.5px] leading-relaxed text-slate-600 md:text-base">
                    {value.body}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-2">
                    {value.chips.map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-900/8 bg-white px-3 py-1.5 text-[12px] font-medium text-slate-700 shadow-sm"
                      >
                        <span
                          aria-hidden
                          className="size-1.5 rounded-full bg-slate-900"
                        />
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
