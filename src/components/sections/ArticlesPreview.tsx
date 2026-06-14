import Link from "next/link";
import SectionHead from "./SectionHead";
import ArticleCard from "@/components/articles/ArticleCard";
import { articles } from "@/lib/articles";

export default function ArticlesPreview() {
  return (
    <section className="section posts" id="articles">
      <div className="container">
        <SectionHead eyebrow="دانش حقوقی" title="آخرین مقالات" lead="یادداشت‌ها و راهنماهای حقوقی تیم آوای عدالت برای آگاهی شما." />
        <div className="posts__grid">
          {articles.slice(0, 3).map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
        <div className="posts__cta">
          <Link href="/articles" className="btn btn--primary">مشاهده همه مقالات</Link>
        </div>
      </div>
    </section>
  );
}
