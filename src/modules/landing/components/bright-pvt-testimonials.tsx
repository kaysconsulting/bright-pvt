"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "BrightPVT has been a lifesaver for me and my family. Their community care services have provided my mother with the support and companionship she needs. The caregivers are compassionate and truly care about her well-being. I can't thank them enough for making such a positive impact on our lives.",
    name: "Sarah T.",
    role: "Family caregiver",
    service: "Community Nursing",
    initials: "ST",
    accent: "bg-purple-100 text-purple-700",
  },
  {
    quote:
      "The in-home assistance from BrightPVT has made a world of difference in my daily life. Their caregivers are always professional and kind, helping me with everything from bathing to meal preparation. I feel much more comfortable and supported.",
    name: "John M.",
    role: "NDIS participant",
    service: "In-Home Care",
    initials: "JM",
    accent: "bg-violet-100 text-violet-700",
  },
  {
    quote:
      "Managing household chores became overwhelming for me after my surgery, but BrightPVT's domestic assistance has been incredible. The staff is friendly and efficient, taking care of cleaning, laundry, and even grocery shopping. My home is always clean and organised now. I highly recommend their services.",
    name: "Emily R.",
    role: "Post-operative patient",
    service: "Domestic Assistance",
    initials: "ER",
    accent: "bg-fuchsia-100 text-fuchsia-700",
  },
  {
    quote:
      "BrightPVT's transportation services are outstanding. I have regular medical appointments, and their drivers are always punctual, courteous, and helpful. They make sure I get to my appointments safely and on time, and I never have to worry about transportation.",
    name: "Michael C.",
    role: "Regular client",
    service: "Transport",
    initials: "MC",
    accent: "bg-purple-100 text-purple-700",
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
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
          <svg
          key={i}
          aria-hidden
          viewBox="0 0 24 24"
          className="size-4 fill-purple-400 text-purple-400"
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export function BrightPvtTestimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-stone-50 py-20 text-slate-900 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 size-[30rem] rounded-full bg-purple-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 size-[26rem] rounded-full bg-violet-100/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm"
          >
            <span aria-hidden className="size-1.5 rounded-full bg-purple-500" />
            What our clients say
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-[52px]"
          >
            Families who trust{" "}
            <span className="italic font-light text-slate-400">BrightPVT</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-slate-600 md:text-base"
          >
            Real words from real clients. Every story is a reminder of why we
            do what we do.
          </motion.p>
        </motion.div>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 lg:gap-5"
        >
          {testimonials.map((t, i) => (
            <motion.li
              key={t.name}
              variants={fadeUp}
              style={{ transitionDelay: `${i * 0.06}s` }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-900/8 bg-white p-6 shadow-sm ring-1 ring-inset ring-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent"
              />

              <div className="mb-5 flex items-center justify-between">
                <StarRow />
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${t.accent}`}
                >
                  {t.service}
                </span>
              </div>

              <blockquote className="flex-1 text-[14px] leading-[1.75] text-slate-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-900/6 pt-5">
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-full text-[13px] font-bold ${t.accent}`}
                >
                  {t.initials}
                </span>
                <div className="min-w-0">
                  <p className="text-[14px] font-semibold text-slate-900">
                    {t.name}
                  </p>
                  <p className="text-[12px] text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

      </div>
    </section>
  );
}
