import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return { title: "مقاله یافت نشد" };
  return { title: article.title, description: article.excerpt };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <main id="main">
      <article className="section article">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">خانه</Link> › <Link href="/articles">مقالات</Link> › <span>{article.category}</span>
          </nav>
          <header className="article-head">
            <span className="article-cat">{article.category}</span>
            <h1>{article.title}</h1>
            <p className="article-date">تاریخ انتشار: {article.date}</p>
          </header>
          <div className="article-body" dangerouslySetInnerHTML={{ __html: article.body }} />
          <div className="article-foot">
            <Link className="btn btn--ghost-dark" href="/articles">→ بازگشت به همه مقالات</Link>
            <Link className="btn btn--gold" href="/#contact">مشاوره با وکیل</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
