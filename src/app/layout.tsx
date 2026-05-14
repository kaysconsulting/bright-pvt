import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-S29DGWPB15";

const genova = localFont({
  src: "../fonts/Genova.otf",
  variable: "--font-genova",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bright Pvt — Home healthcare & nursing",
  description:
    "Professional wound care, medication management, chronic disease management, and post-operative care in the comfort of your home.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${genova.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-stone-50 text-slate-900">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
