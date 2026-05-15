import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { contactDetails, siteInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "تماس و تعیین وقت مشاوره",
  description: "تماس با مؤسسه حقوقی آوای عدالت کریمان در کرمان برای تعیین وقت مشاوره حقوقی.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-charcoal py-16 text-ivory md:py-24">
        <Container>
          <p className="mb-4 text-sm font-black tracking-[0.2em] text-gold">تماس با مؤسسه</p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.45] tracking-[-0.05em] md:text-6xl">تعیین وقت برای بررسی دقیق موضوع حقوقی شما</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-ivory/70">
            برای دریافت نظر حقوقی قابل اتکا، لازم است اسناد پرونده و جزئیات موضوع در جلسه مشاوره بررسی شود.
          </p>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="border border-gold/25 bg-olive p-8 text-ivory">
            <h2 className="text-2xl font-black text-gold">اطلاعات ارتباطی</h2>
            <div className="mt-7 grid gap-4">
              {contactDetails.map((detail) => (
                <p key={detail} className="border border-ivory/10 bg-ivory/[0.04] p-4 text-sm leading-7 text-ivory/76">
                  {detail}
                </p>
              ))}
            </div>
            <p className="mt-8 text-sm leading-8 text-ivory/70">
              {siteInfo.name} با مدیریت {siteInfo.manager} در شهر کرمان آماده بررسی اولیه موضوعات حقوقی، کیفری، خانواده، ثبتی و قراردادی است.
            </p>
          </aside>
          <ContactForm />
        </Container>
      </section>
    </main>
  );
}
