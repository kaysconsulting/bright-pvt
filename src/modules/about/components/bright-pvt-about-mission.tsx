"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export function BrightPvtAboutMission() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-16 size-[32rem] rounded-full bg-sky-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-32 size-[28rem] rounded-full bg-purple-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Mission */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Image — full landscape, no crop */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="overflow-hidden rounded-[32px] shadow-[0_30px_60px_-25px_rgba(15,23,42,0.25)] ring-1 ring-slate-900/5">
              <Image
                src="/independant-living.jpg"
                alt="Participant enjoying independent community living — BrightPVT Canberra"
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-900/10 bg-stone-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm"
            >
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-purple-500"
              />
              Our mission
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-6 text-balance text-[42px] font-semibold leading-[1] tracking-tight text-slate-900 sm:text-[56px] lg:text-[64px]"
            >
              Empowering{" "}
              <span className="italic font-light text-slate-500">
                independent
              </span>{" "}
              living.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-pretty text-[16px] leading-relaxed text-slate-600 md:text-[17px]"
            >
              BrightPVT is committed to assist participants to live an
              independent life in the community, enjoying and participating in
              all community activities. We aim to make a meaningful impact to
              individuals, families, and the community at large.
            </motion.p>

            {/* Mission pillars */}
            <motion.div
              variants={stagger}
              className="mt-10 grid gap-3 sm:grid-cols-2"
            >
              {[
                {
                  icon: <path d="M12 2 4 14h7l-1 8 9-12h-7z" />,
                  title: "Meaningful impact",
                  copy: "Real outcomes for individuals & families.",
                  accent: "bg-purple-100 text-purple-700",
                },
                {
                  icon: (
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                  ),
                  title: "Community first",
                  copy: "Participation in everyday community life.",
                  accent: "bg-sky-100 text-sky-700",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-slate-900/8 bg-stone-50 p-5"
                >
                  <span
                    className={`flex size-10 items-center justify-center rounded-xl ${item.accent}`}
                  >
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
                      {item.icon}
                    </svg>
                  </span>
                  <p className="mt-4 text-[14.5px] font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
                    {item.copy}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Vision — large editorial quote panel */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24 md:mt-32"
        >
          <div className="relative overflow-hidden rounded-[36px] border border-slate-900/10 bg-slate-950 px-6 py-16 text-white shadow-[0_40px_80px_-25px_rgba(15,23,42,0.45)] sm:px-12 md:px-20 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 size-[32rem] rounded-full bg-purple-600/15 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 left-10 size-[28rem] rounded-full bg-sky-600/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]"
            />

            {/* Decorative quote mark */}
            <div
              aria-hidden
              className="pointer-events-none absolute right-6 top-6 select-none text-[120px] font-serif leading-none text-white/[0.06] sm:right-12 sm:top-10 sm:text-[180px] md:text-[240px]"
            >
              &rdquo;
            </div>

            <div className="relative mx-auto max-w-4xl">
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 ring-1 ring-inset ring-white/10"
              >
                <span
                  aria-hidden
                  className="size-1.5 rounded-full bg-purple-400"
                />
                Our vision
              </motion.span>

              <motion.p
                variants={fadeUp}
                className="mt-8 text-balance text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-[40px] md:text-[52px]"
              >
                To offer{" "}
                <span className="italic font-light text-white/60">
                  excellent care
                </span>{" "}
                and services — making sure every individual has the right to
                feel{" "}
                <span className="italic font-light text-white/60">
                  safe and secure.
                </span>
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex items-center gap-4"
              >
                <span aria-hidden className="h-px w-12 bg-purple-400/60" />
                <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-white/55">
                  BrightPVT — Canberra ACT
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
