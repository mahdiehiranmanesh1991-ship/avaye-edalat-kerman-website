import Link from "next/link";
import { whatsappLink } from "@/lib/site";

export default function QuickCTA() {
  return (
    <section className="quickcta" aria-label="مشاوره سریع">
      <div className="container quickcta__grid">
        <div className="qc reveal">
          <h3>نیاز به مشاوره ملکی دارید؟</h3>
          <a className="btn btn--gold" href={whatsappLink("سلام، نیاز به مشاوره ملکی دارم.")} target="_blank" rel="noopener noreferrer">ارسال پیام واتساپ</a>
        </div>
        <div className="qc qc--accent reveal">
          <h3>پرونده کیفری دارید؟</h3>
          <a className="btn btn--gold" href={whatsappLink("سلام، پرونده کیفری دارم و نیاز به تماس فوری دارم.")} target="_blank" rel="noopener noreferrer">درخواست تماس فوری</a>
        </div>
        <div className="qc reveal">
          <h3>مشاوره خانواده می‌خواهید؟</h3>
          <Link className="btn btn--gold" href="/#contact">رزرو جلسه</Link>
        </div>
      </div>
    </section>
  );
}
