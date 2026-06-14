import SectionHead from "./SectionHead";
import { features } from "@/lib/content";

export default function WhyUs() {
  return (
    <section className="section why" id="why">
      <div className="container">
        <SectionHead eyebrow="مزیت‌های ما" title="چرا آوای عدالت کرمان؟" />
        <div className="why__grid">
          {features.map((f) => (
            <div className="feature reveal" key={f.title}>
              <span className="feature__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26"><circle cx="12" cy="12" r="9" fill="currentColor" /></svg>
              </span>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
