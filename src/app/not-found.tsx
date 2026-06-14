import Link from "next/link";

export const metadata = { title: "صفحه یافت نشد" };

export default function NotFound() {
  return (
    <main id="main" className="section">
      <div className="container" style={{ textAlign: "center", padding: "60px 0" }}>
        <h1 style={{ fontSize: "4rem", color: "var(--gold)", fontFamily: "var(--serif)" }}>۴۰۴</h1>
        <p style={{ color: "var(--muted)", margin: "8px 0 24px" }}>صفحه‌ای که دنبال آن هستید پیدا نشد.</p>
        <Link className="btn btn--gold" href="/">بازگشت به صفحه اصلی</Link>
      </div>
    </main>
  );
}
