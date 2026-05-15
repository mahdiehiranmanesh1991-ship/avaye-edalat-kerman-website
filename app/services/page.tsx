import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "خدمات حقوقی",
  description: "حوزه‌های خدمات حقوقی مؤسسه حقوقی آوای عدالت کریمان در کرمان.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-charcoal py-16 text-ivory md:py-24">
        <Container>
          <p className="mb-4 text-sm font-black tracking-[0.2em] text-gold">حوزه‌های فعالیت</p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.45] tracking-[-0.05em] md:text-6xl">خدمات حقوقی مؤسسه</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-ivory/70">
            خدمات زیر با توجه به مدارک، موضوع پرونده و صلاحیت مراجع رسیدگی، به‌صورت تخصصی ارزیابی و برنامه‌ریزی می‌شود.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading eyebrow="خدمات" title="انتخاب مسیر حقوقی متناسب با موضوع" />
            <Link href="/property-disputes" className="w-fit border border-charcoal/20 px-6 py-3 text-sm font-black text-charcoal hover:border-gold hover:text-olive">
              مشاهده دعاوی ملکی
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
