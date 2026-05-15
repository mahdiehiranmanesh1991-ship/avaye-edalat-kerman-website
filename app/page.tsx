import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { articleSummaries, contactDetails, processSteps, services, siteInfo, trustValues } from "@/lib/content";

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-charcoal text-ivory">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-gold/60 to-transparent" />
        <Container className="grid gap-14 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-black tracking-[0.22em] text-gold">{siteInfo.tagline}</p>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.45] tracking-[-0.055em] md:text-6xl">
              حمایت حقوقی شفاف، دقیق و مسئولانه برای اشخاص و کسب‌وکارها
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-ivory/72">
              مؤسسه حقوقی آوای عدالت کریمان با مدیریت آقای علی نظام مجاز، همراه قابل اعتماد شما در ارزیابی پرونده، تنظیم اسناد حقوقی و پیگیری دعاوی در مراجع صالح است.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="bg-gold px-7 py-4 text-sm font-black text-charcoal transition hover:bg-gold-soft">
                درخواست مشاوره
              </Link>
              <Link href="#services" className="border border-ivory/25 px-7 py-4 text-sm font-black text-ivory transition hover:border-gold hover:text-gold">
                مشاهده خدمات
              </Link>
            </div>
          </div>
          <aside className="border border-gold/30 bg-ivory/[0.04] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <p className="text-sm font-black text-gold">تمرکز بر راه‌حل حقوقی</p>
            <ul className="mt-6 space-y-5 text-base leading-8 text-ivory/72">
              <li>بررسی اولیه مستندات و مسیرهای اقدام</li>
              <li>پیگیری منظم و گزارش‌دهی قابل فهم</li>
              <li>توجه به محرمانگی و منافع موکل</li>
            </ul>
          </aside>
        </Container>
      </section>

      <Container className="grid gap-4 py-10 md:grid-cols-3 md:py-14">
        {trustValues.map((item) => (
          <article key={item.title} className="border border-gold/20 bg-ivory-muted/70 p-6">
            <span className="text-xs font-black text-gold">{item.number}</span>
            <h2 className="mt-3 text-xl font-black text-charcoal">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink-muted">{item.description}</p>
          </article>
        ))}
      </Container>

      <section id="services" className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="حوزه‌های فعالیت"
            title="خدمات حقوقی مؤسسه"
            description="خدمات زیر با توجه به مدارک، موضوع پرونده و صلاحیت مراجع رسیدگی، به‌صورت تخصصی ارزیابی و برنامه‌ریزی می‌شود."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>

      <section id="process" className="bg-olive-deep py-16 text-ivory md:py-24">
        <Container>
          <SectionHeading eyebrow="روند همکاری" title="از ارزیابی اولیه تا پیگیری پرونده" light />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <li key={step.title} className="border border-ivory/12 bg-ivory/[0.04] p-7">
                <span className="grid size-10 place-items-center bg-gold text-sm font-black text-charcoal">
                  {new Intl.NumberFormat("fa-IR").format(index + 1)}
                </span>
                <h3 className="mt-7 text-xl font-black text-ivory">{step.title}</h3>
                <p className="mt-3 text-sm leading-8 text-ivory/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="about" className="py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <article className="prose-legal">
            <p className="mb-3 text-sm font-black tracking-[0.18em] text-gold">درباره ما</p>
            <h2 className="text-3xl font-black leading-[1.45] tracking-[-0.04em] text-charcoal md:text-5xl">مؤسسه حقوقی آوای عدالت کریمان</h2>
            <p>
              این وب‌سایت برای معرفی عمومی خدمات مؤسسه حقوقی آوای عدالت کریمان در شهر کرمان طراحی شده است. مدیریت مؤسسه بر عهده آقای علی نظام مجاز است و رویکرد اصلی مجموعه، ارائه مشاوره دقیق، رعایت محرمانگی اطلاعات و پیگیری حرفه‌ای پرونده‌هاست.
            </p>
            <p>محتوای سایت جنبه اطلاع‌رسانی دارد و جایگزین مشاوره اختصاصی حقوقی بر اساس مدارک و شرایط پرونده نیست.</p>
          </article>
          <aside className="border border-gold/25 bg-olive p-7 text-ivory">
            <strong className="text-lg text-gold">یادآوری مهم</strong>
            <p className="mt-4 text-sm leading-8 text-ivory/72">برای دریافت نظر حقوقی قابل اتکا، لازم است اسناد پرونده و جزئیات موضوع در جلسه مشاوره بررسی شود.</p>
          </aside>
        </Container>
      </section>

      <section className="bg-[#efe4d2] py-16 md:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="ساختار مقاله" title="یادداشت‌های حقوقی برای تصمیم‌گیری آگاهانه" description="این بخش برای انتشار مقاله‌های آموزشی کوتاه و قابل فهم درباره مسائل رایج حقوقی آماده شده است." />
            <Link href="/articles" className="w-fit border border-charcoal/20 px-6 py-3 text-sm font-black text-charcoal hover:border-gold hover:text-olive">
              مشاهده مقالات
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {articleSummaries.map((article) => (
              <article key={article.title} className="border border-charcoal/10 bg-ivory p-6">
                <p className="text-xs font-black text-gold">{article.category}</p>
                <h3 className="mt-4 text-xl font-black leading-9 text-charcoal">{article.title}</h3>
                <p className="mt-4 text-sm leading-8 text-ink-muted">{article.excerpt}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="ارتباط با مؤسسه" title="برای تعیین وقت مشاوره پیام بگذارید" />
            <p className="mt-5 text-lg leading-9 text-ink-muted">
              اطلاعات تماس رسمی مؤسسه در نسخه نهایی قابل تکمیل است. تا پیش از درج شماره تماس و نشانی قطعی، فرم زیر به عنوان قالب آماده برای اتصال به سرویس دلخواه استفاده می‌شود.
            </p>
            <div className="mt-8 grid gap-3">
              {contactDetails.map((item) => (
                <span key={item} className="border border-charcoal/10 bg-white/70 px-5 py-4 text-sm font-bold text-charcoal">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </main>
  );
}
