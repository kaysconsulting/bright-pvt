"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Service = {
  title: string;
  blurb: string;
  description: string;
  image: string;
  href: string;
};

const services: readonly Service[] = [
  {
    title: "Community Nursing Care",
    blurb: "Skilled clinical care, at home.",
    description:
      "Personalised, professional healthcare in the comfort of your own home — wound care, medication management, chronic disease management, and post-operative recovery.",
    image: "/community-nursing.jpg",
    href: "/services/community-nursing",
  },
  {
    title: "In-Home & Domestic Care",
    blurb: "Help with the everyday.",
    description:
      "Friendly, reliable help with cleaning, laundry, grocery shopping, and meal preparation — a calm, organised home so you can focus on what matters most.",
    image: "/domestic-care.jpg",
    href: "/services/domestic-assistance",
  },
  {
    title: "Transport",
    blurb: "Travel that's safe & supportive.",
    description:
      "Comfortable transport to medical appointments, the shops, and social activities — courteous drivers, reliable scheduling, and more independence.",
    image: "/transport.jpg",
    href: "/services/transport",
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

export function BrightPvtServices() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-12 size-[28rem] rounded-full bg-sky-100/70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-12 size-[24rem] rounded-full bg-stone-100 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12"
        >
          <div className="max-w-2xl">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-stone-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm"
            >
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-purple-500"
              />
              Our services
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-[52px]"
            >
              Care designed around <span className="italic font-light text-slate-500">your everyday life</span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="max-w-md text-pretty text-[15px] leading-relaxed text-slate-600 md:text-base"
          >
            Three integrated services — clinical, household, and transport —
            delivered by a team of compassionate professionals across Canberra.
          </motion.p>
        </motion.div>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <motion.li key={service.title} variants={fadeUp} className="group">
              <a
                href={service.href}
                className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-900/8 bg-stone-50 ring-1 ring-inset ring-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-linear-to-t from-slate-950/35 via-slate-950/0 to-transparent"
                  />

                  <span
                    aria-hidden
                    className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-md backdrop-blur-md ring-1 ring-inset ring-white/15"
                  >
                    <span className="text-white/80">
                      0{i + 1}
                    </span>
                    <span className="h-3 w-px bg-white/40" />
                    {service.blurb}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[20px] font-semibold tracking-tight text-slate-900 md:text-[22px]">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-pretty text-[14px] leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-900/5 pt-5">
                    <span className="text-[13px] font-semibold text-slate-900">
                      Learn more
                    </span>
                    <span className="flex size-9 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm transition-all duration-300 group-hover:translate-x-1 group-hover:bg-purple-600">
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
                        <path d="M7 17 17 7M9 7h8v8" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
