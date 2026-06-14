import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { heroValues } from "@/lib/content";
import { asset } from "@/lib/asset";

const sideNav = [
  { label: "درباره ما", href: "/#about" },
  { label: "خدمات حقوقی", href: "/#services" },
  { label: "وکلای ما", href: "/#team" },
  { label: "مقالات", href: "/articles" },
  { label: "تماس با ما", href: "/#contact" },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="bento">
          <aside className="bento__side">
            <div className="bento__brand">
              <Image src={asset("/assets/avaye-logo-mark-light.svg")} width={40} height={44} alt="" />
              <span>
                <b>{site.shortName}</b>
                <small>{site.subtitle}</small>
              </span>
            </div>
            <nav className="bento__nav" aria-label="میان‌بر">
              {sideNav.map((n) => (
                <Link key={n.href} href={n.href}>{n.label}</Link>
              ))}
            </nav>
            <div className="bento__meta">
              <p>
                <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" /></svg>
                {site.addressShort}
              </p>
              <p>
                <a href={site.whatsapp}>
                  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1l-2.2 2.3z" /></svg>
                  {site.phoneDisplay}
                </a>
              </p>
            </div>
            <div className="bento__social">
              <span>ما را دنبال کنید</span>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="واتساپ">
                <svg viewBox="0 0 24 24" width="17" height="17"><path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2z" /></svg>
              </a>
              <a href={`mailto:${site.email}`} aria-label="ایمیل">
                <svg viewBox="0 0 24 24" width="17" height="17"><path fill="currentColor" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4 6.5V18h16V6.5L12 11z" /></svg>
              </a>
            </div>
          </aside>

          <div className="bento__main">
            <div className="bento__main-text">
              <span className="bento__tag">{site.name}</span>
              <h1>حل اختلافات ملکی و دعاوی پیچیده حقوقی</h1>
              <p className="bento__lead">با بیش از یک دهه تجربه در محاکم استان کرمان</p>
              <ul className="bento__values">
                {heroValues.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
              <div className="bento__actions">
                <Link href="/#contact" className="btn btn--gold">رزرو وقت مشاوره</Link>
                <Link href="/#services" className="btn btn--ghost-dark">مشاهده خدمات</Link>
              </div>
            </div>
            <div className="bento__main-media">
              <Image src={asset("/assets/justice.jpg")} alt="مجسمه الهه عدالت" fill sizes="(max-width: 640px) 100vw, 40vw" style={{ objectFit: "cover" }} priority />
            </div>
            <Image className="bento__seal" src={asset("/assets/seal.svg")} width={104} height={104} alt="" />
          </div>

          <div className="bento__aside2">
            <div className="bento__quote">
              <span className="bento__pill">خدمات حقوقی</span>
              <p>ما با تکیه بر دانش عمیق حقوقی و رویکردی اختصاصی برای هر پرونده، تا حصول نتیجه کنار شما می‌ایستیم.</p>
            </div>
            <Link className="bento__photo" href="/#contact">
              <span className="bento__photo-label">مشاوره حقوقی مورد اعتماد</span>
              <span className="bento__photo-cta">درخواست مشاوره →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
