import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "دعاوی حقوقی و ملکی",
  description: "بررسی دعاوی حقوقی و ملکی شامل مطالبه وجه، الزام به تنظیم سند، اختلافات قراردادی، مالکیت، اجاره و مشارکت.",
};

const propertyTopics = [
  "مطالبه وجه و خسارت ناشی از تعهدات",
  "الزام به تنظیم سند رسمی و آثار قراردادی آن",
  "اختلافات مالکیت، اجاره و مشارکت",
  "بررسی مدارک، مهلت‌ها و مسیر مناسب طرح دعوا یا دفاع",
];

export default function PropertyDisputesPage() {
  return (
    <main>
      <section className="bg-charcoal py-16 text-ivory md:py-24">
        <Container>
          <p className="mb-4 text-sm font-black tracking-[0.2em] text-gold">دعاوی حقوقی و ملکی</p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.45] tracking-[-0.05em] md:text-6xl">پیگیری دقیق اختلافات ملکی و قراردادی</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-ivory/70">
            مطالبه وجه، الزام به تنظیم سند، اختلافات قراردادی، دعاوی مالکیت، اجاره و مشارکت با توجه به اسناد و شرایط پرونده ارزیابی می‌شود.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <article className="prose-legal border border-charcoal/10 bg-[#fbf6ec] p-8">
            <p className="mb-3 text-sm font-black tracking-[0.18em] text-gold">ساختار رسیدگی</p>
            <h2 className="text-3xl font-black leading-[1.45] tracking-[-0.04em] text-charcoal md:text-5xl">از بررسی سند تا انتخاب مسیر اقدام</h2>
            <p>
              در دعاوی ملکی، تشخیص رابطه قراردادی، مالکیت، تعهدات طرفین و مهلت‌های قانونی اهمیت جدی دارد. پیش از هر اقدام، اسناد و پیام‌ها و سوابق پرداخت یا تحویل باید دقیق بررسی شود.
            </p>
            <ul className="mt-8 grid gap-4">
              {propertyTopics.map((topic) => (
                <li key={topic} className="border-r-2 border-gold bg-white/60 px-5 py-4 text-ink-muted">
                  {topic}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="mt-8 inline-flex bg-charcoal px-6 py-4 text-sm font-black text-ivory transition hover:bg-olive">
              درخواست بررسی پرونده ملکی
            </Link>
          </article>
          <ContactForm />
        </Container>
      </section>
    </main>
  );
}
