"use client";

import { motion } from "framer-motion";
import type { ServiceQualifications } from "@/modules/services/types";

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
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

interface Props {
  qualifications: ServiceQualifications;
}

export function BrightPvtServiceQualifications({ qualifications }: Props) {
  return (
    <section className="relative overflow-hidden bg-stone-50 py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-16 size-[28rem] rounded-full bg-purple-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-32 size-[24rem] rounded-full bg-sky-100/40 blur-3xl"
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
            className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm"
          >
            <span aria-hidden className="size-1.5 rounded-full bg-purple-500" />
            Our Team
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-balance text-4xl font-semibold leading-[1] tracking-tight text-slate-900 sm:text-5xl"
          >
            Qualifications &amp; Experience
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-pretty text-[15px] leading-relaxed text-slate-600 md:text-base"
          >
            {qualifications.intro}
          </motion.p>
        </motion.div>

        {/* Academic qualifications + Certifications */}
        <div className="mt-14 grid gap-6 md:mt-16 lg:grid-cols-2">

          {/* Academic qualifications */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="overflow-hidden rounded-3xl border border-slate-900/8 bg-white p-6 ring-1 ring-inset ring-white md:p-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400"
            >
              Education
            </motion.p>
            <motion.h3
              variants={fadeUp}
              className="mt-2 text-[20px] font-semibold tracking-tight text-slate-900"
            >
              Academic Qualifications
            </motion.h3>

            <motion.div variants={stagger} className="mt-6 flex flex-col gap-3">
              {qualifications.academicQualifications.map((row, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="flex items-start gap-4 rounded-2xl border border-slate-900/6 bg-stone-50 px-4 py-3.5"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-[11px] font-bold text-purple-700">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold leading-snug text-slate-900">
                      {row.qualification}
                    </p>
                    <p className="mt-0.5 text-[12.5px] text-slate-500">
                      {row.institution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="overflow-hidden rounded-3xl border border-slate-900/8 bg-white p-6 ring-1 ring-inset ring-white md:p-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400"
            >
              Credentials
            </motion.p>
            <motion.h3
              variants={fadeUp}
              className="mt-2 text-[20px] font-semibold tracking-tight text-slate-900"
            >
              Registrations &amp; Certifications
            </motion.h3>

            <motion.ul variants={stagger} className="mt-6 flex flex-col gap-3">
              {qualifications.certifications.map((cert) => (
                <motion.li
                  key={cert.title}
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-2xl border border-slate-900/6 bg-stone-50 px-4 py-3.5"
                >
                  <span
                    aria-hidden
                    className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-purple-500"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12 5 5 9-12" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[13.5px] font-semibold leading-snug text-slate-900">
                      {cert.title}
                    </p>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-slate-500">
                      {cert.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Specialist experience */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8"
        >
          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-3xl border border-slate-900/8 bg-white p-6 ring-1 ring-inset ring-white md:p-8"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Track Record
            </p>
            <h3 className="mt-2 text-[20px] font-semibold tracking-tight text-slate-900">
              Specialist Clinical Experience
            </h3>
            <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
              {qualifications.experienceIntro}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {qualifications.experienceGroups.map((group, idx) => (
                <div
                  key={group.heading}
                  className="rounded-2xl border border-slate-900/6 bg-stone-50 p-5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-[10px] font-bold text-purple-700">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-[13px] font-semibold leading-tight text-slate-900">
                      {group.heading}
                    </h4>
                  </div>
                  <ul className="mt-3.5 flex flex-col gap-2">
                    {group.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-[12.5px] leading-relaxed text-slate-600"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-purple-400"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Skills table + CPD */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[3fr_2fr]">

          {/* Skills table */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="overflow-hidden rounded-3xl border border-slate-900/8 bg-white ring-1 ring-inset ring-white"
          >
            <motion.div variants={fadeUp} className="border-b border-slate-900/6 px-6 py-5 md:px-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Competencies
              </p>
              <h3 className="mt-1.5 text-[20px] font-semibold tracking-tight text-slate-900">
                Core Clinical Skills
              </h3>
            </motion.div>

            <motion.div variants={stagger} className="divide-y divide-slate-900/6">
              {qualifications.skillsTable.map((row) => (
                <motion.div
                  key={row.domain}
                  variants={fadeUp}
                  className="grid grid-cols-[6rem_1fr] gap-4 px-6 py-4 md:grid-cols-[8rem_1fr] md:px-8"
                >
                  <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                    {row.domain}
                  </span>
                  <span className="text-[12.5px] leading-relaxed text-slate-600">
                    {row.skills}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CPD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl bg-purple-600 p-6 text-white md:p-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full bg-purple-400/30 blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-8 -left-8 size-40 rounded-full bg-purple-800/40 blur-2xl"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent"
            />

            <p className="relative text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
              Always Learning
            </p>
            <h3 className="relative mt-2 text-[20px] font-semibold leading-tight tracking-tight">
              Continuing Professional Development
            </h3>
            <p className="relative mt-4 text-[13.5px] leading-relaxed text-white/85">
              {qualifications.cpdStatement}
            </p>

            <div
              aria-hidden
              className="relative mt-8 flex flex-wrap gap-2"
            >
              {[
                "Evidence-based practice",
                "Clinical seminars",
                "NDIS frameworks",
                "Aged care standards",
                "Community health",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
