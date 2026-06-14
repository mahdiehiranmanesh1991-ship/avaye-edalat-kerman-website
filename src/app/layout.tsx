import type { Metadata } from "next";
import { Vazirmatn, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Topbar from "@/components/layout/Topbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsappFloat from "@/components/ui/WhatsappFloat";
import BackToTop from "@/components/ui/BackToTop";
import ScrollEffects from "@/components/ui/ScrollEffects";
import { asset } from "@/lib/asset";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | وکالت و مشاوره تخصصی حقوقی`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "وکیل کرمان",
    "گروه وکلای آوای عدالت کرمان",
    "دعاوی ملکی",
    "مشاوره حقوقی",
    "وکیل پایه یک دادگستری",
    "علیرضا مجاز",
  ],
  authors: [{ name: site.name }],
  icons: { icon: asset("/assets/favicon.svg") },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    title: site.name,
    description: site.description,
    siteName: site.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${cormorant.variable}`}>
      <body>
        <a href="#main" className="skip-link">رفتن به محتوای اصلی</a>
        <Topbar />
        <Header />
        {children}
        <Footer />
        <WhatsappFloat />
        <BackToTop />
        <ScrollEffects />
      </body>
    </html>
  );
}
