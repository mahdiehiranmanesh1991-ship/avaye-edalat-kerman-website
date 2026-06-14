import Link from "next/link";
import Image from "next/image";
import SectionHead from "./SectionHead";
import { lawyers } from "@/lib/lawyers";
import { asset } from "@/lib/asset";

export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="container">
        <SectionHead eyebrow="تیم ما" title="وکلای آوای عدالت" lead="گروهی از حقوق‌دانان متعهد و باتجربه در خدمت شما." />
        <div className="team__grid team__grid--3">
          {lawyers.map((l, i) => (
            <article className={`member reveal${i === 0 ? " member--lead" : ""}`} key={l.slug}>
              <Image className="member__photo" src={asset(l.avatar)} alt={l.name} width={110} height={110} />
              <h3>{l.name}</h3>
              <p className="member__role">{l.role}</p>
              {l.license ? (
                <p className="member__license">
                  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M12 1l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V5l9-4zm-1 14l6-6-1.4-1.4L11 12.2 8.4 9.6 7 11l4 4z" /></svg>
                  پروانه وکالت: {l.license}
                </p>
              ) : null}
              <p className="member__desc"><strong>حوزه تخصصی:</strong> {l.specialty}</p>
              <Link className="member__cv" href={`/lawyers/${l.slug}`}>مشاهده رزومه →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
