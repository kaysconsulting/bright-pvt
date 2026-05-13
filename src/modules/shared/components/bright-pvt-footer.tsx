import Image from "next/image";
import Link from "next/link";

const links = {
  Services: [
    { label: "All Services", href: "/services" },
    { label: "Clinical Capability", href: "/services/clinical-capability" },
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
    { label: "Referrals", href: "/referrals" },
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
                href="tel:+61415405533"
                className="inline-flex items-center gap-2 transition hover:text-slate-900"
              >
                <svg aria-hidden viewBox="0 0 24 24" className="size-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.93-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16.08l.42.84Z" />
                </svg>
                +61 415 405 533
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
              <a
                href="https://www.facebook.com/share/1B5iLy9AEB/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bright PVT on Facebook"
                className="flex size-9 items-center justify-center rounded-full border border-slate-900/10 bg-white text-slate-600 shadow-sm transition hover:border-slate-900/20 hover:bg-slate-50 hover:text-slate-900"
              >
                <svg aria-hidden viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
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
