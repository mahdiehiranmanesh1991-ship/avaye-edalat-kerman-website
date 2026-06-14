import SectionHead from "./SectionHead";
import { processSteps } from "@/lib/content";

const fa = ["۱", "۲", "۳", "۴", "۵", "۶"];

export default function Process() {
  return (
    <section className="section process">
      <div className="container">
        <SectionHead eyebrow="مسیر همکاری" title="فرآیند دریافت خدمات" />
        <ol className="process__steps">
          {processSteps.map((s, i) => (
            <li className="reveal" key={s.title}>
              <span className="process__num">{fa[i]}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
