import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { lawyers, getLawyer } from "@/lib/lawyers";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

export function generateStaticParams() {
  return lawyers.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const l = getLawyer(params.slug);
  if (!l) return { title: "وکیل یافت نشد" };
  const lic = l.license ? `؛ پروانه وکالت ${l.license}` : "";
  return { title: `رزومه ${l.name}`, description: `رزومه ${l.name}، ${l.role} در ${site.name}${lic}.` };
}

export default function LawyerPage({ params }: { params: { slug: string } }) {
  const l = getLawyer(params.slug);
  if (!l) notFound();

  return (
    <main id="main">
      <section className="section resume">
        <div className="container resume__wrap">
          <nav className="breadcrumb">
            <Link href="/">خانه</Link> › <Link href="/#team">وکلای ما</Link> › <span>{l.name}</span>
          </nav>

          <header className="resume__head">
            <Image className="resume__photo" src={asset(l.avatar)} alt={l.name} width={140} height={140} />
            <div>
              <h1>{l.name}</h1>
              <p className="resume__role">{l.role}</p>
              <ul className="resume__badges">
                {l.license ? <li>پروانه وکالت: <strong>{l.license}</strong></li> : null}
                <li>وکیل دادگستری</li>
                <li>کرمان</li>
              </ul>
            </div>
          </header>

          <section className="resume__sec">
            <h2>درباره</h2>
            <p>{l.about}</p>
          </section>

          <section className="resume__sec">
            <h2>حوزه‌های تخصصی</h2>
            <ul className="resume__list">
              {l.areas.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </section>

          <section className="resume__sec">
            <h2>خدمات قابل ارائه</h2>
            <ul className="resume__list">
              {l.services.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </section>

          <section className="resume__sec resume__contact">
            <h2>تماس و رزرو وقت</h2>
            <p>{site.address}</p>
            <div className="resume__actions">
              <a className="btn btn--gold" href={site.whatsapp} target="_blank" rel="noopener noreferrer">گفت‌وگو در واتساپ</a>
              <a className="btn btn--primary" href={site.whatsapp}>{site.phoneDisplay}</a>
              <Link className="btn btn--ghost-dark" href="/#team">→ بازگشت به وکلای ما</Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
