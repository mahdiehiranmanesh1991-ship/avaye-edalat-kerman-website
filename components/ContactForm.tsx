import { services } from "@/lib/content";

export function ContactForm() {
  return (
    <form className="border border-gold/25 bg-ivory p-6 shadow-[0_28px_90px_rgba(23,24,20,0.12)] md:p-8" aria-label="فرم درخواست مشاوره">
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-black text-charcoal">
          نام و نام خانوادگی
          <input className="border border-charcoal/10 bg-white px-4 py-3 text-base outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15" type="text" name="name" placeholder="نام شما" autoComplete="name" />
        </label>
        <label className="grid gap-2 text-sm font-black text-charcoal">
          شماره تماس
          <input className="border border-charcoal/10 bg-white px-4 py-3 text-base outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15" type="tel" name="phone" placeholder="مثلاً 09xxxxxxxxx" autoComplete="tel" />
        </label>
        <label className="grid gap-2 text-sm font-black text-charcoal">
          موضوع درخواست
          <select className="border border-charcoal/10 bg-white px-4 py-3 text-base outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15" name="topic" defaultValue="مشاوره حقوقی">
            <option>مشاوره حقوقی</option>
            {services.slice(0, 4).map((service) => (
              <option key={service.title}>{service.title}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-black text-charcoal">
          توضیحات کوتاه
          <textarea className="min-h-32 border border-charcoal/10 bg-white px-4 py-3 text-base outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15" name="message" placeholder="خلاصه‌ای از موضوع را بنویسید" />
        </label>
        <button className="bg-charcoal px-6 py-4 text-sm font-black text-ivory transition hover:bg-olive" type="button">
          ارسال درخواست
        </button>
        <p className="text-sm leading-7 text-ink-muted">این فرم در نسخه استاتیک پیام را ارسال نمی‌کند و برای اتصال به سرویس فرم آماده است.</p>
      </div>
    </form>
  );
}
