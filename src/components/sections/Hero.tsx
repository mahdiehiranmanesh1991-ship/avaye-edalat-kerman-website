import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { heroValues } from "@/lib/content";
import { asset } from "@/lib/asset";

const magazineNav = [
  { label: "درباره ما", href: "/#about" },
  { label: "خدمات حقوقی", href: "/#services" },
  { label: "وکلای ما", href: "/#team" },
  { label: "مقالات", href: "/articles" },
  { label: "تماس با ما", href: "/#contact" },
];

export default function Hero() {
  return (
    <section className="hero hero--magazine" id="hero" dir="rtl">
      <div className="hero-mag__grain" aria-hidden="true" />
      <div className="container hero-mag">
        <nav className="hero-mag__nav" aria-label="میان‌برهای صفحه اصلی">
          <Link className="hero-mag__logo" href="/#hero" aria-label={site.name}>
            <Image src={asset("/assets/avaye-logo-mark-light.svg")} width={34} height={38} alt="" />
            <span>{site.shortName}</span>
          </Link>
          {magazineNav.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="hero-mag__copy">
          <span className="hero-mag__eyebrow">گروه وکلای دادگستری · کرمان</span>
          <h1>جایی برای<br />باز شدن گره<br />پرونده‌های شما</h1>
          <p>{site.description}</p>
          <ul className="hero-mag__values" aria-label="خدمات شاخص">
            {heroValues.map((value) => <li key={value}>{value}</li>)}
          </ul>
          <div className="hero-mag__actions">
            <Link href="/#contact" className="btn btn--gold">رزرو وقت مشاوره</Link>
            <a href={site.whatsapp} className="btn btn--ghost">تماس فوری</a>
          </div>
        </div>

        <div className="hero-mag__collage" aria-hidden="true">
          <div className="hero-mag__folder" />
          <div className="hero-mag__photo hero-mag__photo--main">
            <Image src={asset("/assets/justice.jpg")} alt="" fill sizes="58vw" priority />
            <span className="hero-mag__script">حق</span>
          </div>
          <div className="hero-mag__note">
            <b>پرونده</b>
            <span>بررسی دقیق، راهکار روشن، پیگیری مستمر</span>
          </div>
          <div className="hero-mag__paper">
            <strong>مشاوره حقوقی<br />اختصاصی</strong>
            <span>قراردادها، املاک، خانواده و کیفری</span>
          </div>
        </div>

        <form className="hero-mag__card" action="/#contact">
          <div>
            <strong>شروع گفت‌وگو<br />با وکیل</strong>
            <span>شرح کوتاه مسئله‌تان را ثبت کنید.</span>
          </div>
          <input name="subject" placeholder="موضوع پرونده" aria-label="موضوع پرونده" />
          <button type="submit">درخواست بررسی اولیه</button>
        </form>
      </div>
    </section>
  );
}
