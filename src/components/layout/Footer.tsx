import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

export default function Footer() {
  const year = "۱۴۰۵";
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <div className="brand brand--footer">
            <span className="brand__mark" aria-hidden="true">
              <Image className="brand__logo" src={asset("/assets/avaye-logo-mark-light.svg")} width={38} height={42} alt="" />
            </span>
            <span className="brand__text">
              <strong>{site.name}</strong>
              <small>{site.subtitle}</small>
            </span>
          </div>
          <p className="footer__about">ارائه خدمات تخصصی وکالت و مشاوره حقوقی با تکیه بر دانش، تجربه و تعهد حرفه‌ای در استان کرمان.</p>
        </div>
        <div className="footer__col">
          <h4>دسترسی سریع</h4>
          <ul>
            <li><Link href="/#about">درباره ما</Link></li>
            <li><Link href="/#services">خدمات حقوقی</Link></li>
            <li><Link href="/#team">وکلای ما</Link></li>
            <li><Link href="/articles">مقالات</Link></li>
            <li><Link href="/#contact">تماس با ما</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>حوزه‌های تخصصی</h4>
          <ul>
            <li><Link href="/#services">دعاوی ملکی</Link></li>
            <li><Link href="/#services">دعاوی حقوقی</Link></li>
            <li><Link href="/#services">دعاوی کیفری</Link></li>
            <li><Link href="/#services">دعاوی خانواده</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>تماس</h4>
          <ul className="footer__contact">
            <li>{site.address}</li>
            <li><a href={site.whatsapp}>{site.phoneDisplay}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© <span>{year}</span> {site.name} — تمامی حقوق محفوظ است.</p>
          <p className="footer__disclaimer">این وب‌سایت صرفاً جهت اطلاع‌رسانی است و جایگزین مشاوره حقوقی رسمی نمی‌باشد.</p>
        </div>
      </div>
    </footer>
  );
}
