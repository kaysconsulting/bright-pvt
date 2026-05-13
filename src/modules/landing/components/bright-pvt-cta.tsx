"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const features = [
  {
    label: "NDIS Registered",
    icon: (
      <path d="M12 3 4 6v6c0 4.5 3.4 8.5 8 9 4.6-.5 8-4.5 8-9V6l-8-3Zm-1.4 12.1L7.4 11.9l1.4-1.4 1.8 1.8 4.6-4.6 1.4 1.4-6 6Z" />
    ),
  },
  {
    label: "Same-day callbacks",
    icon: <path d="M12 2v10l4 2M22 12A10 10 0 1 1 2 12a10 10 0 0 1 20 0Z" />,
  },
  {
    label: "Canberra-based care",
    icon: (
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Zm-8 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    ),
  },
] as const;

export function BrightPvtCta() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () =>
      mq.matches ? video.pause() : video.play().catch(() => {});
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <section
      id="contact"
      className="relative bg-stone-50 px-4 py-16 sm:px-6 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-[36px] bg-purple-500 px-6 py-16 text-white shadow-[0_40px_80px_-25px_rgba(168,85,247,0.55)] sm:px-12 md:px-16 md:py-20"
        >
          {/* Background video */}
          <video
            ref={videoRef}
            className="pointer-events-none absolute inset-0 size-full object-cover"
            src="/cta.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
            tabIndex={-1}
          />

          {/* Purple tint overlay (keeps brand color over the video) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-purple-600/75 mix-blend-multiply"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-br from-purple-500/60 via-purple-600/40 to-purple-900/70"
          />

          {/* Decorative blobs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 size-[32rem] rounded-full bg-purple-300/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-20 size-[26rem] rounded-full bg-purple-800/40 blur-3xl"
          />

          {/* Grid pattern */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:48px_48px]"
          />

          {/* Top hairline */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-white/50 to-transparent"
          />

          <div className="relative flex flex-col items-center text-center">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md ring-1 ring-inset ring-white/20"
            >
              <span className="relative flex size-2" aria-hidden>
                <span className="absolute inset-0 animate-ping rounded-full bg-white/70" />
                <span className="relative size-2 rounded-full bg-white" />
              </span>
              Get started today
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-7 text-balance text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl md:text-[60px]"
            >
              Ready for care that comes{" "}
              <span className="italic font-light text-white/80">to you?</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-white/85 md:text-[17px]"
            >
              Reach out to our team and we&apos;ll match you with the right
              services — clinical capability, community nursing, domestic
              assistance, or transport — tailored
              to your NDIS plan and your life.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
            >
              <a
                href="tel:+61415405533"
                className="group inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-[15px] font-semibold text-purple-700 shadow-lg shadow-purple-900/25 transition hover:bg-white/95"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="size-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.93-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16.08l.42.84Z" />
                </svg>
                Call us now
                <span
                  className="flex size-8 items-center justify-center rounded-full bg-purple-600 text-white shadow-inner ring-1 ring-purple-900/20 transition group-hover:translate-x-0.5"
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

              <a
                href="mailto:info@brightpvt.com.au"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3.5 text-[14px] font-medium text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="size-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                info@brightpvt.com.au
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {features.map((item) => (
                <div
                  key={item.label}
                  className="relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/20 bg-white/[0.08] px-4 py-3 ring-1 ring-inset ring-white/[0.1] backdrop-blur-md"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
                  />
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-inset ring-white/20">
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="size-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {item.icon}
                    </svg>
                  </span>
                  <span className="text-[13px] font-medium text-white/95">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
