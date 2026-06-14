import SectionHead from "./SectionHead";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHead eyebrow="نظر موکلان" title="آنچه موکلان ما می‌گویند" />
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <figure className="quote reveal" key={t.author}>
              <blockquote>«{t.quote}»</blockquote>
              <figcaption>— {t.author} · {t.topic}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
