import Link from "next/link";
import type { Article } from "@/types";
import { asset } from "@/lib/asset";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="post-card">
      <Link className="post-card__link" href={`/articles/${article.slug}`}>
        {article.cover ? (
          <span className="post-card__cover" style={{ backgroundImage: `url(${asset(article.cover)})` }} />
        ) : (
          <span className="post-card__cover post-card__cover--ph" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="34" height="34"><path fill="currentColor" d="M6 2h9l5 5v15H6zm8 1.5V8h4.5zM8 12h8v2H8zm0 4h8v2H8z" /></svg>
          </span>
        )}
        <span className="post-card__body">
          <span className="post-card__meta">
            <span className="post-card__cat">{article.category}</span>
            <time>{article.date}</time>
          </span>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
          <span className="post-card__more">ادامه مطلب →</span>
        </span>
      </Link>
    </article>
  );
}
