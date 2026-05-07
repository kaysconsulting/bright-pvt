import Image from "next/image";
import Link from "next/link";

const links = {
  Services: [
    { label: "All Services", href: "/services" },
    { label: "Community Nursing", href: "/services/community-nursing" },
    { label: "Domestic Assistance", href: "/services/domestic-assistance" },
    { label: "Transport", href: "/services/transport" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Approach", href: "/#approach" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "NDIS Information", href: "#" },
  ],
  Support: [
    { label: "Contact Us", href: "/#contact" },
    { label: "Referrals", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
} as const;

export function BrightPvtFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-900/8 bg-stone-50">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 size-[28rem] rounded-full bg-purple-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16 md:px-10 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">

          <div className="flex flex-col gap-6">
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <Image
                src="/pvt-logo.png"
                alt="Bright PVT"
                width={140}
                height={46}
                className="h-10 w-auto"
              />
            </Link>

            <p className="max-w-xs text-[14px] leading-relaxed text-slate-600">
              Compassionate, NDIS-registered community care in Canberra — nursing,
              domestic assistance, and transport tailored to you.
            </p>

            <div className="flex flex-col gap-2 text-[13px] text-slate-600">
              <a
                href="tel:+61200000000"
                className="inline-flex items-center gap-2 transition hover:text-slate-900"
              >
                <svg aria-hidden viewBox="0 0 24 24" className="size-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.93-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16.08l.42.84Z" />
                </svg>
                +61 2 0000 0000
              </a>
              <a
                href="mailto:info@brightpvt.com.au"
                className="inline-flex items-center gap-2 transition hover:text-slate-900"
              >
                <svg aria-hidden viewBox="0 0 24 24" className="size-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                info@brightpvt.com.au
              </a>
              <span className="inline-flex items-center gap-2 text-slate-500">
                <svg aria-hidden viewBox="0 0 24 24" className="size-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Zm-8 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                </svg>
                Canberra, ACT, Australia
              </span>
            </div>

            <div className="flex items-center gap-2">
              {[
                {
                  label: "Instagram",
                  href: "#",
                  icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.071 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.698-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.069-4.849.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.052.072 2.695.272.273 2.69.073 7.052.015 8.334 0 8.743 0 12c0 3.259.014 3.668.072 4.948.199 4.362 2.617 6.78 6.98 6.98C8.333 23.986 8.743 24 12 24c3.259 0 3.668-.015 4.949-.069 4.362-.199 6.783-2.618 6.979-6.98.058-1.281.069-1.689.069-4.948 0-3.259-.014-3.667-.069-4.947-.195-4.354-2.617-6.78-6.979-6.98C15.669.015 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.407-11.848a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 1 1 2.881 0z" />,
                },
                {
                  label: "LinkedIn",
                  href: "#",
                  icon: <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.87 0 3.5 1.12 1 2.5 1a2.48 2.48 0 0 1 2.48 2.5ZM.5 23.5h4V8h-4v15.5ZM8.56 8h3.82v2.12h.05c.53-1 1.82-2.07 3.74-2.07 4 0 4.73 2.62 4.73 6.03V23.5h-4v-8.43c0-2.01-.04-4.58-2.81-4.58-2.82 0-3.26 2.2-3.26 4.47V23.5H8.56V8Z" />,
                },
                {
                  label: "X",
                  href: "#",
                  icon: <path d="M13.938 10.713 21.846 2h-1.874l-6.863 7.627L8.065 2H2l8.297 11.496L2 23h1.874l7.266-8.069L15.935 23H22l-8.063-11.287ZM11.548 13.097l-.841-1.161L4.92 3.362h3.086l5.389 7.483.841 1.161 7.036 9.734h-3.086l-5.638-7.843Z" />,
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-slate-900/10 bg-white text-slate-600 shadow-sm transition hover:border-slate-900/20 hover:bg-slate-50 hover:text-slate-900"
                >
                  <svg aria-hidden viewBox="0 0 24 24" className="size-4" fill="currentColor">
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {(Object.entries(links) as [string, readonly { label: string; href: string }[]][]).map(([group, items]) => (
              <div key={group}>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {group}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[14px] text-slate-700 transition hover:text-slate-900"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-2xl">
          <div
            aria-hidden
            className="select-none overflow-hidden leading-none tracking-tighter"
          >
            <span className="block text-[clamp(4rem,13vw,11rem)] font-semibold text-slate-900/[0.04]">
              BrightPVT
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 border-t border-slate-900/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-slate-500">
            © {new Date().getFullYear()} Bright Pvt. All rights reserved.
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-[11px] font-medium text-purple-700">
            <span aria-hidden className="size-1.5 rounded-full bg-purple-500" />
            NDIS Registered
          </span>
        </div>
      </div>
    </footer>
  );
}
