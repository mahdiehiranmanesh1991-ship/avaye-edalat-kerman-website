import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "داشبورد مدیریت سرنخ‌ها",
  robots: { index: false, follow: false },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dash-shell">
      <header className="dash-topbar">
        <div className="dash-topbar__inner">
          <span className="dash-topbar__brand">آوای عدالت · پنل داخلی</span>
          <Link href="/" className="dash-topbar__exit">← بازگشت به سایت</Link>
        </div>
      </header>
      {children}
    </div>
  );
}
