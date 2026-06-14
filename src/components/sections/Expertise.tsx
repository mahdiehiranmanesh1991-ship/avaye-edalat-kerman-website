import Link from "next/link";
import SectionHead from "./SectionHead";
import { practiceFocus, caseCategories, achievements } from "@/lib/content";

export default function Expertise() {
  return (
    <section className="section expertise" id="expertise">
      <div className="container">
        <SectionHead eyebrow="اعتبار حرفه‌ای" title="تخصص و حوزه‌های کاری ما" lead={practiceFocus} />

        <div className="expertise__grid">
          <div className="expertise__main reveal">
            <h3 className="expertise__subtitle">دسته‌بندی پرونده‌ها</h3>
            <ul className="cat-list">
              {caseCategories.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <h3 className="expertise__subtitle">اعتبار و دستاوردهای حرفه‌ای</h3>
            <ul className="achv-list">
              {achievements.map((a) => (
                <li key={a}>
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M9 16.2l-3.5-3.5L4 14.1l5 5 11-11-1.4-1.4z" /></svg>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <aside className="expertise__pub reveal">
            <span className="expertise__pill">انتشارات و محتوای آموزشی</span>
            <h3>دانش حقوقی، در دسترس شما</h3>
            <p>گروه آوای عدالت به‌طور منظم مقالات و راهنماهای آموزشی حقوقی منتشر می‌کند تا پیش از هر تصمیم، آگاهانه عمل کنید.</p>
            <Link href="/articles" className="btn btn--gold">مطالعه مقالات</Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
