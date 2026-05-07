"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Who we are",
    body: "A registered NDIS service provider approved to support people living with a range of disabilities. Each person\u2019s journey is unique, and we tailor exceptional support to the specific needs and aspirations of every client.",
    chips: ["NDIS Registered", "ACT Provider"],
  },
  {
    number: "02",
    title: "Professionals who care",
    body: "Our team of qualified and caring professionals — support workers, therapists, and coordinators — work collaboratively with individuals, their families, and support networks to create a supportive and inclusive environment.",
    chips: ["Qualified Team", "Coordinated Care"],
  },
  {
    number: "03",
    title: "Commitment to quality",
    body: "We uphold the highest standards of professionalism, accountability, and transparency. We continuously strive for improvement and innovation, keeping pace with evolving best practices and technologies.",
    chips: ["Accountable", "Always Improving"],
  },
  {
    number: "04",
    title: "Strong partnerships",
    body: "We believe in the power of collaboration and actively build strong partnerships with individuals, families, allied health professionals, and community organisations — creating a network of support and belonging.",
    chips: ["Collaborative", "Community-Led"],
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
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

export function BrightPvtAboutStory() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-stone-50 py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-20 size-[34rem] rounded-full bg-purple-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 size-[28rem] rounded-full bg-sky-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Sticky-style left header */}
          <motion.aside
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-24">
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm"
              >
                <span
                  aria-hidden
                  className="size-1.5 rounded-full bg-purple-500"
                />
                Our story
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="mt-6 text-balance text-[40px] font-semibold leading-[1] tracking-tight text-slate-900 sm:text-[48px] lg:text-[56px]"
              >
                A provider you can{" "}
                <span className="italic font-light text-slate-500">
                  truly trust.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-6 text-pretty text-[15px] leading-relaxed text-slate-600 md:text-base"
              >
                If you are a person with a disability who wishes to participate
                in the NDIS, you must first check access eligibility. We&apos;re
                here to help guide you through every step.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3 rounded-2xl border border-slate-900/8 bg-white px-4 py-3 shadow-sm">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
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
                      <path d="m5 12 5 5 9-12" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-slate-900">
                      Registered NDIS Provider
                    </p>
                    <p className="text-[12px] text-slate-500">
                      Approved across the ACT
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-900/8 bg-white px-4 py-3 shadow-sm">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
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
                      <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 20a7 7 0 0 1 14 0Z" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-slate-900">
                      Person-Centred Approach
                    </p>
                    <p className="text-[12px] text-slate-500">
                      Plans built around you
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.aside>

          {/* Editorial numbered list */}
          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-8"
          >
            {pillars.map((pillar, idx) => (
              <motion.li
                key={pillar.number}
                variants={fadeUp}
                className={`group relative grid grid-cols-[auto_1fr] gap-4 py-7 sm:gap-6 sm:py-8 md:gap-10 md:py-10 ${
                  idx !== pillars.length - 1
                    ? "border-b border-slate-900/10"
                    : ""
                } ${idx === 0 ? "pt-0" : ""}`}
              >
                <div className="flex flex-col items-start">
                  <span className="text-[36px] font-semibold leading-none tracking-tight text-slate-300 transition-colors group-hover:text-purple-500 sm:text-[44px] md:text-[56px]">
                    {pillar.number}
                  </span>
                  <span
                    aria-hidden
                    className="mt-3 hidden h-16 w-px bg-slate-300 sm:block"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-balance text-[24px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[28px]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-pretty text-[15px] leading-relaxed text-slate-600 sm:text-base">
                    {pillar.body}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {pillar.chips.map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-900/8 bg-white px-3 py-1 text-[11.5px] font-medium text-slate-600"
                      >
                        <span
                          aria-hidden
                          className="size-1.5 rounded-full bg-purple-500"
                        />
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
