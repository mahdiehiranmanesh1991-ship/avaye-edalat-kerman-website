import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { siteInfo, trustValues } from "@/lib/content";

export const metadata: Metadata = {
  title: "درباره مؤسسه",
  description: "معرفی مؤسسه حقوقی آوای عدالت کریمان در کرمان با مدیریت آقای علی نظام مجاز.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-charcoal py-16 text-ivory md:py-24">
        <Container>
          <p className="mb-4 text-sm font-black tracking-[0.2em] text-gold">درباره مؤسسه</p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.45] tracking-[-0.05em] md:text-6xl">{siteInfo.name}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-ivory/70">
            این وب‌سایت برای معرفی عمومی خدمات مؤسسه حقوقی آوای عدالت کریمان در شهر کرمان طراحی شده است. مدیریت مؤسسه بر عهده آقای علی نظام مجاز است و رویکرد اصلی مجموعه، ارائه مشاوره دقیق، رعایت محرمانگی اطلاعات و پیگیری حرفه‌ای پرونده‌هاست.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <article className="prose-legal border border-charcoal/10 bg-[#fbf6ec] p-8">
            <SectionHeading eyebrow="رویکرد کاری" title="حقوق، اعتماد و مسئولیت حرفه‌ای" />
            <p>
              محتوای سایت جنبه اطلاع‌رسانی دارد و جایگزین مشاوره اختصاصی حقوقی بر اساس مدارک و شرایط پرونده نیست.
            </p>
            <p>
              برای دریافت نظر حقوقی قابل اتکا، لازم است اسناد پرونده و جزئیات موضوع در جلسه مشاوره بررسی شود.
            </p>
          </article>
          <aside className="grid gap-4">
            {trustValues.map((item) => (
              <div key={item.title} className="border border-gold/20 bg-ivory-muted/70 p-6">
                <span className="text-xs font-black text-gold">{item.number}</span>
                <h2 className="mt-3 text-xl font-black text-charcoal">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-ink-muted">{item.description}</p>
              </div>
            ))}
          </aside>
        </Container>
      </section>
    </main>
  );
}
