"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { BrightPvtNav } from "@/modules/shared/components/bright-pvt-nav";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

export function BrightPvtHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (mq.matches) {
        video.pause();
        return;
      }
      video.play().catch(() => {});
    };

    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div className="relative flex min-h-svh w-full flex-col overflow-hidden bg-slate-950 text-white">
      <video
        ref={videoRef}
        className="absolute inset-0 -z-0 size-full object-cover"
        src="/hero.mov"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        tabIndex={-1}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-0 bg-linear-to-b from-slate-950/30 via-slate-950/10 to-slate-950/55"
      />

      <BrightPvtNav />

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-[18rem] pt-24 text-center md:px-10 md:pb-[20rem] md:pt-28">
        <motion.div
          className="flex w-full max-w-2xl flex-col items-center"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={fadeUp}
            className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[12px] font-medium text-white/90 shadow-lg shadow-slate-950/25 ring-1 ring-inset ring-white/15 backdrop-blur-2xl backdrop-saturate-150 sm:text-[13px]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-3 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent"
            />
            <span className="relative flex size-2" aria-hidden>
              <span className="absolute inset-0 animate-ping rounded-full bg-purple-300/70" />
              <span className="relative size-2 rounded-full bg-purple-400" />
            </span>
            Trusted in-home nursing
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-5 text-balance text-[34px] font-semibold leading-[1.05] tracking-tight drop-shadow-sm sm:text-5xl md:text-[56px]"
          >
            Professional healthcare in the comfort of your home.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-pretty text-[14px] leading-relaxed text-white/85 drop-shadow-sm sm:text-[15px] md:text-base"
          >
            Wound care, medication, chronic disease, and post-operative
            recovery — coordinated for you and your family.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-slate-900/60 py-1.5 pl-5 pr-1.5 text-[14px] font-semibold text-white shadow-[0_15px_40px_-12px_rgba(2,6,23,0.7)] ring-1 ring-inset ring-white/10 backdrop-blur-xl transition hover:bg-slate-900/75"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/50 to-transparent"
              />
              Book a consultation
              <span
                className="flex size-8 items-center justify-center rounded-full bg-white text-slate-900 shadow-inner ring-1 ring-slate-900/10 transition group-hover:translate-x-0.5"
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
            </a>
          </motion.div>
        </motion.div>
      </main>

      <div className="pointer-events-none relative z-20 px-3 pb-4 sm:px-5 sm:pb-5 md:px-8 md:pb-7">
        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 sm:gap-5 md:gap-8">
          {[
            {
              title: "2,400+ home visits delivered",
              copy: "Since 2019, our nurses have completed thousands of skilled visits — wound care, medication, and recovery support — that meet families where they live.",
              icon: (
                <path d="M12 2 4 14h7l-1 8 9-12h-7z" />
              ),
            },
            {
              title: "Care coordinated with your team",
              copy: "Licensed registered nurses work alongside your clinicians and family — same-day callbacks for urgent referrals, clear plans, and care that feels human.",
              icon: (
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              ),
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`pointer-events-auto relative overflow-hidden rounded-2xl border border-white/25 bg-white/10 p-4 shadow-[0_25px_60px_-20px_rgba(2,6,23,0.65)] ring-1 ring-inset ring-white/15 backdrop-blur-2xl backdrop-saturate-150 sm:max-w-sm sm:p-5 ${
                i === 1 ? "sm:ml-auto" : ""
              }`}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-5 top-0 h-px bg-linear-to-r from-transparent via-white/70 to-transparent"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/10 to-transparent"
              />
              <div className="relative">
                <div className="mb-3 flex size-9 items-center justify-center rounded-xl border border-white/30 bg-white/15 text-white shadow-inner ring-1 ring-inset ring-white/20">
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
                    {card.icon}
                  </svg>
                </div>
                <p className="text-[14px] font-semibold text-white sm:text-[15px]">
                  {card.title}
                </p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-white/75 sm:text-[13px]">
                  {card.copy}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
