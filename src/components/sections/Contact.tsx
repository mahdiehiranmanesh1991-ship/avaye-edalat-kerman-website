"use client";
import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const subjects = ["دعاوی ملکی", "دعاوی حقوقی", "دعاوی کیفری", "دعاوی خانواده", "امور تجاری و شرکت‌ها", "قراردادها", "سایر موارد"];

export default function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function validatePhone(v: string) {
    const digits = v.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString()).replace(/\D/g, "");
    return digits.length >= 8 && digits.length <= 13;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const subject = String(data.get("subject") || "");
    if (!name) next.name = "لطفاً نام خود را وارد کنید.";
    if (!phone) next.phone = "لطفاً شماره تماس را وارد کنید.";
    else if (!validatePhone(phone)) next.phone = "شماره تماس معتبر نیست.";
    if (!subject) next.subject = "لطفاً موضوع را انتخاب کنید.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setDone(true);
      form.reset();
      setTimeout(() => setDone(false), 6000);
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__info reveal">
          <p className="section__eyebrow">در تماس باشید</p>
          <h2 className="section__title">درخواست مشاوره</h2>
          <p>فرم زیر را تکمیل کنید تا در اولین فرصت با شما تماس بگیریم. همچنین می‌توانید مستقیماً از راه‌های زیر با ما در ارتباط باشید.</p>
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

        <form className="contact__form reveal" onSubmit={onSubmit} noValidate>
          <div className={`field${errors.name ? " field--invalid" : ""}`}>
            <label htmlFor="name">نام و نام خانوادگی</label>
            <input type="text" id="name" name="name" autoComplete="name" placeholder="نام شما" />
            <span className="field__error">{errors.name}</span>
          </div>
          <div className={`field${errors.phone ? " field--invalid" : ""}`}>
            <label htmlFor="phone">شماره تماس</label>
            <input type="tel" id="phone" name="phone" inputMode="tel" placeholder="۰۹۱۲۳۴۵۶۷۸۹" />
            <span className="field__error">{errors.phone}</span>
          </div>
          <div className={`field${errors.subject ? " field--invalid" : ""}`}>
            <label htmlFor="subject">موضوع پرونده</label>
            <select id="subject" name="subject" defaultValue="">
              <option value="" disabled>یک گزینه را انتخاب کنید</option>
              {subjects.map((s) => <option key={s}>{s}</option>)}
            </select>
            <span className="field__error">{errors.subject}</span>
          </div>
          <div className="field">
            <label htmlFor="message">شرح مختصر درخواست</label>
            <textarea id="message" name="message" rows={4} placeholder="موضوع خود را به‌اختصار بنویسید..."></textarea>
          </div>
          <button type="submit" className="btn btn--gold btn--lg btn--block">ارسال درخواست</button>
          <p className="form__note">با ارسال این فرم، با شرایط رازداری و حریم خصوصی موسسه موافقت می‌کنید.</p>
          {done ? <p className="form__success">درخواست شما با موفقیت ثبت شد. به‌زودی با شما تماس می‌گیریم.</p> : null}
        </form>
      </div>
    </section>
  );
}
