import Link from "next/link";
import SectionHead from "./SectionHead";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHead eyebrow="حوزه‌های تخصصی" title="خدمات حقوقی ما" lead="در گستره‌ای کامل از دعاوی و امور حقوقی در کنار شما هستیم." />
        <div className="services__grid">
          {services.map((s) => (
            <article className="service reveal" key={s.title}>
              <span className="service__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M3 6h18v2H3z" /></svg>
              </span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
          <article className="service reveal service--cta">
            <h3>حوزه شما اینجا نیست؟</h3>
            <p>برای بررسی پرونده خود با کارشناسان ما تماس بگیرید.</p>
            <Link href="/#contact" className="btn btn--gold">مشاوره رایگان اولیه</Link>
          </article>
        </div>
      </div>
    </section>
  );
}
