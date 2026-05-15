import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { articleSummaries } from "@/lib/content";

export const metadata: Metadata = {
  title: "مقالات و یادداشت‌های حقوقی",
  description: "یادداشت‌های حقوقی مؤسسه حقوقی آوای عدالت کریمان درباره آمادگی پرونده، قراردادها و حل اختلاف.",
};

export default function ArticlesPage() {
  return (
    <main>
      <section className="bg-charcoal py-16 text-ivory md:py-24">
        <Container>
          <p className="mb-4 text-sm font-black tracking-[0.2em] text-gold">ساختار مقاله</p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.45] tracking-[-0.05em] md:text-6xl">یادداشت‌های حقوقی برای تصمیم‌گیری آگاهانه</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-ivory/70">
            این بخش برای انتشار مقاله‌های آموزشی کوتاه و قابل فهم درباره مسائل رایج حقوقی آماده شده است.
          </p>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container className="grid gap-6 md:grid-cols-3">
          {articleSummaries.map((article) => (
            <article key={article.title} className="border border-charcoal/10 bg-[#fbf6ec] p-7 shadow-[0_24px_70px_rgba(23,24,20,0.06)]">
              <p className="text-xs font-black text-gold">{article.category}</p>
              <h2 className="mt-4 text-2xl font-black leading-10 text-charcoal">{article.title}</h2>
              <p className="mt-4 text-base leading-8 text-ink-muted">{article.excerpt}</p>
            </article>
          ))}
        </Container>
      </section>
    </main>
  );
}
