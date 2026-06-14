import Link from "next/link";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__media reveal">
          <div className="about__card">
            <h3>تعهد، تخصص، تداوم</h3>
            <p>ما به اصول اخلاق حرفه‌ای و دفاع تمام‌قد از حقوق موکلان پایبندیم.</p>
          </div>
        </div>
        <div className="about__content reveal">
          <p className="section__eyebrow">درباره گروه</p>
          <h2 className="section__title">آوای عدالت کرمان، همراه حقوقی مطمئن شما</h2>
          <p>
            گروه وکلای آوای عدالت کرمان با همراهی <strong>علیرضا مجاز</strong>، وکیل پایه یک دادگستری، با هدف
            ارائه خدمات حقوقی شفاف، تخصصی و قابل اعتماد به شهروندان، شرکت‌ها و کسب‌وکارهای استان کرمان فعالیت می‌کند.
          </p>
          <p>رویکرد ما مبتنی بر تحلیل دقیق پرونده، صداقت در ارائه ارزیابی واقع‌بینانه و پیگیری مستمر تا حصول نتیجه است.</p>
          <ul className="about__list">
            <li><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M9 16.2l-3.5-3.5L4 14.1l5 5 11-11-1.4-1.4z" /></svg> ارزیابی صادقانه و واقع‌بینانه پرونده</li>
            <li><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M9 16.2l-3.5-3.5L4 14.1l5 5 11-11-1.4-1.4z" /></svg> پیگیری مستمر تا حصول نتیجه</li>
            <li><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M9 16.2l-3.5-3.5L4 14.1l5 5 11-11-1.4-1.4z" /></svg> حفظ کامل اسرار و اطلاعات موکل</li>
            <li><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M9 16.2l-3.5-3.5L4 14.1l5 5 11-11-1.4-1.4z" /></svg> دسترسی آسان و پاسخگویی سریع</li>
          </ul>
          <Link href="/#contact" className="btn btn--primary">گفت‌وگو با کارشناسان ما</Link>
        </div>
      </div>
    </section>
  );
}
