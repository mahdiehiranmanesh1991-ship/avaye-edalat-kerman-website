import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteInfo } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteInfo.name} | کرمان`,
    template: `%s | ${siteInfo.shortName}`,
  },
  description: siteInfo.description,
  applicationName: siteInfo.name,
  openGraph: {
    title: `${siteInfo.name} | کرمان`,
    description: siteInfo.description,
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
