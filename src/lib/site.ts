import type { NavItem } from "@/types";

const rawPhone = "989120243521"; // 0912 024 3521

export const site = {
  name: "گروه وکلای آوای عدالت کرمان",
  shortName: "آوای عدالت",
  tagline: "وکالت و مشاوره تخصصی حقوقی",
  subtitle: "گروه وکلای دادگستری · کرمان",
  description:
    "گروه وکلای آوای عدالت کرمان؛ حل اختلافات ملکی و دعاوی پیچیده حقوقی با بیش از یک دهه تجربه در محاکم استان کرمان. مشاوره تخصصی، وکالت دعاوی ملکی و تنظیم قراردادهای حرفه‌ای.",
  url: "https://mahdiehiranmanesh1991-ship.github.io/avaye-edalat-kerman-website",
  email: "info@avaye-edalat.ir",
  phoneDisplay: "۰۹۱۲-۰۲۴-۳۵۲۱",
  whatsapp: `https://wa.me/${rawPhone}`,
  address: "کرمان، خیابان هزار و یک شب، نبش کوچه ۷، ساختمان برلیان، طبقه دوم، واحد ۲۰۱",
  addressShort: "کرمان، خ هزار و یک شب، ساختمان برلیان",
  hours: "شنبه تا چهارشنبه: ۹ تا ۱۸",
} as const;

export function whatsappLink(message?: string): string {
  return message ? `${site.whatsapp}?text=${encodeURIComponent(message)}` : site.whatsapp;
}

export const mainNav: NavItem[] = [
  { label: "خانه", href: "/#hero" },
  { label: "درباره ما", href: "/#about" },
  { label: "خدمات حقوقی", href: "/#services" },
  { label: "چرا ما", href: "/#why" },
  { label: "وکلای ما", href: "/#team" },
  { label: "مقالات", href: "/articles" },
  { label: "سوالات متداول", href: "/#faq" },
  { label: "تماس با ما", href: "/#contact" },
];
