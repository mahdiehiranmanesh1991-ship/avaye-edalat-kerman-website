"use client";
import { useState, type ChangeEvent } from "react";
import { caseCategories } from "@/lib/content";
import { whatsappLink } from "@/lib/site";

const steps = ["اطلاعات شخصی", "اطلاعات پرونده", "بارگذاری مدارک", "روش مشاوره"];
const methods = ["حضوری در دفتر", "تلفنی", "آنلاین (واتساپ / تماس تصویری)"];

interface FormState {
  name: string;
  phone: string;
  email: string;
  category: string;
  description: string;
  method: string;
  files: string[];
}

const initial: FormState = { name: "", phone: "", email: "", category: "", description: "", method: methods[0], files: [] };

function isValidPhone(v: string) {
  const digits = v.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString()).replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 13;
}

export default function ConsultationForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const set = (k: keyof FormState, v: string) => setData((d) => ({ ...d, [k]: v }));

  function validateStep(s: number): boolean {
    const e: Record<string, string> = {};
    if (s === 0) {
      if (!data.name.trim()) e.name = "لطفاً نام خود را وارد کنید.";
      if (!data.phone.trim()) e.phone = "لطفاً شماره تماس را وارد کنید.";
      else if (!isValidPhone(data.phone)) e.phone = "شماره تماس معتبر نیست.";
    }
    if (s === 1) {
      if (!data.category) e.category = "لطفاً موضوع پرونده را انتخاب کنید.";
    }
    if (s === 3) {
      if (!data.method) e.method = "لطفاً روش مشاوره را انتخاب کنید.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, steps.length - 1));
  }
  function prev() {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
  }
  function onFiles(e: ChangeEvent<HTMLInputElement>) {
    const names = Array.from(e.target.files ?? []).map((f) => f.name);
    setData((d) => ({ ...d, files: names }));
  }
  function submit() {
    if (!validateStep(0) || !validateStep(1) || !validateStep(3)) {
      // jump to first invalid step
      if (!validateStep(0)) setStep(0);
      else if (!validateStep(1)) setStep(1);
      else setStep(3);
      return;
    }
    setDone(true);
  }

  const summary = [
    "درخواست مشاوره — گروه وکلای آوای عدالت کرمان",
    `نام: ${data.name}`,
    `تماس: ${data.phone}`,
    data.email ? `ایمیل: ${data.email}` : "",
    `موضوع: ${data.category}`,
    data.description ? `شرح: ${data.description}` : "",
    `روش مشاوره: ${data.method}`,
    data.files.length ? `مدارک: ${data.files.join("، ")}` : "",
  ].filter(Boolean).join("\n");

  if (done) {
    return (
      <div className="contact__form intake intake--done">
        <div className="intake__success">
          <svg viewBox="0 0 24 24" width="46" height="46" aria-hidden="true"><path fill="currentColor" d="M9 16.2l-3.5-3.5L4 14.1l5 5 11-11-1.4-1.4z" /></svg>
          <h3>درخواست شما ثبت شد</h3>
          <p>برای پیگیری سریع‌تر و ارسال مدارک، می‌توانید خلاصه‌ی درخواست را مستقیماً در واتساپ برای ما بفرستید.</p>
          <a className="btn btn--gold btn--lg" href={whatsappLink(summary)} target="_blank" rel="noopener noreferrer">ارسال خلاصه در واتساپ</a>
          <button className="intake__restart" onClick={() => { setData(initial); setStep(0); setDone(false); }}>ثبت درخواست جدید</button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact__form intake">
      <ol className="intake__nav" aria-label="مراحل">
        {steps.map((label, i) => (
          <li key={label} className={`intake__step${i === step ? " is-active" : ""}${i < step ? " is-done" : ""}`}>
            <span className="intake__dot">{i < step ? "✓" : i + 1}</span>
            <span className="intake__label">{label}</span>
          </li>
        ))}
      </ol>

      <div className="intake__panel">
        {step === 0 && (
          <>
            <div className={`field${errors.name ? " field--invalid" : ""}`}>
              <label htmlFor="c-name">نام و نام خانوادگی</label>
              <input id="c-name" type="text" value={data.name} onChange={(e) => set("name", e.target.value)} placeholder="نام شما" />
              <span className="field__error">{errors.name}</span>
            </div>
            <div className={`field${errors.phone ? " field--invalid" : ""}`}>
              <label htmlFor="c-phone">شماره تماس</label>
              <input id="c-phone" type="tel" inputMode="tel" value={data.phone} onChange={(e) => set("phone", e.target.value)} placeholder="۰۹۱۲۳۴۵۶۷۸۹" />
              <span className="field__error">{errors.phone}</span>
            </div>
            <div className="field">
              <label htmlFor="c-email">ایمیل (اختیاری)</label>
              <input id="c-email" type="email" value={data.email} onChange={(e) => set("email", e.target.value)} placeholder="example@email.com" />
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <div className={`field${errors.category ? " field--invalid" : ""}`}>
              <label htmlFor="c-cat">موضوع / دسته‌ی پرونده</label>
              <select id="c-cat" value={data.category} onChange={(e) => set("category", e.target.value)}>
                <option value="">یک گزینه را انتخاب کنید</option>
                {caseCategories.map((c) => <option key={c}>{c}</option>)}
                <option>سایر موارد</option>
              </select>
              <span className="field__error">{errors.category}</span>
            </div>
            <div className="field">
              <label htmlFor="c-desc">شرح مختصر پرونده</label>
              <textarea id="c-desc" rows={5} value={data.description} onChange={(e) => set("description", e.target.value)} placeholder="موضوع و وضعیت پرونده خود را به‌اختصار بنویسید..."></textarea>
            </div>
          </>
        )}

        {step === 2 && (
          <div className="field">
            <label htmlFor="c-files">بارگذاری مدارک (اختیاری)</label>
            <label className="filedrop" htmlFor="c-files">
              <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path fill="currentColor" d="M19 13v5a1 1 0 01-1 1H6a1 1 0 01-1-1v-5H3v5a3 3 0 003 3h12a3 3 0 003-3v-5h-2zM11 4.8L8.4 7.4 7 6l5-5 5 5-1.4 1.4L13 4.8V15h-2z" /></svg>
              <span>{data.files.length ? data.files.join("، ") : "فایل‌ها را انتخاب کنید (PDF، تصویر و …)"}</span>
            </label>
            <input id="c-files" type="file" multiple onChange={onFiles} style={{ display: "none" }} />
            <p className="form__note">مدارک از طریق واتساپ یا در جلسه‌ی مشاوره دریافت می‌شوند؛ این بخش اختیاری است.</p>
          </div>
        )}

        {step === 3 && (
          <div className={`field${errors.method ? " field--invalid" : ""}`}>
            <label>روش مشاوره‌ی ترجیحی</label>
            <div className="radio-cards">
              {methods.map((m) => (
                <label key={m} className={`radio-card${data.method === m ? " is-selected" : ""}`}>
                  <input type="radio" name="method" value={m} checked={data.method === m} onChange={(e) => set("method", e.target.value)} />
                  <span>{m}</span>
                </label>
              ))}
            </div>
            <span className="field__error">{errors.method}</span>
          </div>
        )}
      </div>

      <div className="intake__actions">
        {step > 0 ? <button type="button" className="btn btn--ghost-dark" onClick={prev}>مرحله قبل</button> : <span />}
        {step < steps.length - 1 ? (
          <button type="button" className="btn btn--primary" onClick={next}>مرحله بعد</button>
        ) : (
          <button type="button" className="btn btn--gold" onClick={submit}>ثبت درخواست مشاوره</button>
        )}
      </div>
    </div>
  );
}
