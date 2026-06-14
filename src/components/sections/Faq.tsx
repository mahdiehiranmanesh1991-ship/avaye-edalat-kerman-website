import SectionHead from "./SectionHead";
import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="container">
        <SectionHead eyebrow="پرسش و پاسخ" title="سوالات متداول" />
        <div className="faq__list">
          {faqs.map((f) => (
            <details className="faq__item reveal" key={f.question}>
              <summary>{f.question}</summary>
              <div className="faq__body"><p>{f.answer}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
