import type { Metadata } from "next";
import ArticleCard from "@/components/articles/ArticleCard";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "مقالات حقوقی",
  description: "مقالات و یادداشت‌های حقوقی گروه وکلای آوای عدالت کرمان در زمینه دعاوی ملکی، خانواده، کیفری و تجاری.",
};

export default function ArticlesPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">دانش حقوقی</p>
          <h1 className="page-hero__title">مقالات حقوقی</h1>
          <p className="page-hero__lead">جدیدترین یادداشت‌ها و راهنماهای حقوقی تیم آوای عدالت برای آگاهی شما.</p>
        </div>
      </section>
      <section className="section posts">
        <div className="container">
          <div className="posts__grid">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
