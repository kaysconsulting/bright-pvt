"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
] as const;

function isActive(linkHref: string, pathname: string) {
  if (linkHref === "/") return pathname === "/";
  if (linkHref.startsWith("/#")) return false;
  return pathname === linkHref || pathname.startsWith(`${linkHref}/`);
}

export function BrightPvtNav() {
  const pathname = usePathname() ?? "/";
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      {/* Pill nav */}
      <nav
        aria-label="Primary"
        className="pointer-events-auto relative inline-flex items-center gap-1 overflow-hidden rounded-full bg-slate-950 px-2 py-1.5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
      >
        {/* Inner top shine */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
        />

        {/* Logo */}
        <Link
          href="/"
          className="mr-1 flex shrink-0 items-center rounded-full px-1 py-0.5 outline-offset-4 transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50"
        >
          <Image
            src="/pvt-logo.png"
            alt="Bright PVT"
            width={90}
            height={30}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Nav links — visible from md upward */}
        <span aria-hidden className="mx-0.5 hidden h-4 w-px bg-white/15 md:block" />
        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href, pathname);
            return (
              <li key={link.label} className="shrink-0">
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "inline-flex items-center whitespace-nowrap rounded-full bg-white/15 px-3.5 py-1.5 text-[13px] font-medium text-white transition"
                      : "inline-flex items-center whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-medium text-white/55 transition hover:bg-white/8 hover:text-white/80"
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <span aria-hidden className="mx-0.5 hidden h-4 w-px bg-white/15 md:block" />

        {/* Contact CTA — always visible */}
        <Link
          href="/contact"
          className="ml-1 inline-flex shrink-0 items-center rounded-full bg-white px-4 py-1.5 text-[13px] font-semibold text-slate-900 shadow-sm transition hover:bg-white/90"
        >
          Contact us
        </Link>

        {/* Hamburger — mobile only */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="ml-1 flex size-8 shrink-0 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white md:hidden"
        >
          <span className="relative flex size-4 flex-col items-center justify-center gap-[4.5px]">
            <span
              className={`block h-px w-3.5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-3.5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-3.5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto fixed inset-0 -z-10 bg-black/40 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto absolute left-4 right-4 top-[calc(100%+8px)] overflow-hidden rounded-[20px] bg-slate-950 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.7)] ring-1 ring-white/10"
            >
              {/* Shine */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
              />

              <ul className="flex flex-col px-2 py-2">
                {navLinks.map((link) => {
                  const active = isActive(link.href, pathname);
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition ${
                          active
                            ? "bg-white/10 text-white"
                            : "text-white/60 hover:bg-white/6 hover:text-white"
                        }`}
                      >
                        {link.label}
                        {active && (
                          <span className="size-1.5 rounded-full bg-purple-400" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="border-t border-white/8 px-2 pb-2 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl bg-white py-3 text-[14px] font-semibold text-slate-900 transition hover:bg-white/90"
                >
                  Contact us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
