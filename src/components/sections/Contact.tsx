import { site } from "@/lib/site";
import ConsultationForm from "./ConsultationForm";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__info reveal">
          <p className="section__eyebrow">در تماس باشید</p>
          <h2 className="section__title">درخواست مشاوره</h2>
          <p>فرم چهارمرحله‌ای زیر را تکمیل کنید تا در اولین فرصت با شما تماس بگیریم. همچنین می‌توانید مستقیماً از راه‌های زیر در ارتباط باشید.</p>
          <ul className="contact__list">
            <li>
              <span className="contact__ic"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" /></svg></span>
              <div><strong>نشانی</strong><p>{site.address}</p></div>
            </li>
            <li>
              <span className="contact__ic"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1l-2.2 2.3z" /></svg></span>
              <div><strong>تلفن و واتساپ</strong><p><a href={site.whatsapp}>{site.phoneDisplay}</a></p></div>
            </li>
            <li>
              <span className="contact__ic"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4 6.5V18h16V6.5L12 11z" /></svg></span>
              <div><strong>ایمیل</strong><p><a href={`mailto:${site.email}`}>{site.email}</a></p></div>
            </li>
          </ul>
        </div>

        <div className="reveal">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
