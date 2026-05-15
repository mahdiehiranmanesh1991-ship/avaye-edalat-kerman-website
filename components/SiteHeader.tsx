import Link from "next/link";
import { navigation, siteInfo } from "@/lib/content";
import { Container } from "@/components/Container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-charcoal/95 text-ivory shadow-[0_18px_50px_rgba(23,24,20,0.18)] backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-4" aria-label="صفحه اصلی آوای عدالت کریمان">
          <span className="grid size-12 place-items-center rounded-sm border border-gold/45 bg-ivory/5 text-xl font-black text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal">
            آ
          </span>
          <span className="leading-7">
            <strong className="block text-base font-black md:text-lg">{siteInfo.shortName}</strong>
            <small className="block text-xs text-ivory/60">مؤسسه حقوقی در کرمان</small>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold text-ivory/75 lg:flex" aria-label="ناوبری اصلی">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-gold focus:text-gold">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="rounded-sm border border-gold/50 px-5 py-3 text-sm font-black text-gold transition-colors hover:bg-gold hover:text-charcoal"
          >
            درخواست مشاوره
          </Link>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex cursor-pointer list-none flex-col gap-1.5 border border-ivory/20 px-3 py-3 [&::-webkit-details-marker]:hidden" aria-label="باز کردن فهرست">
            <span className="block h-0.5 w-6 bg-ivory" />
            <span className="block h-0.5 w-6 bg-ivory" />
            <span className="block h-0.5 w-6 bg-ivory" />
          </summary>
          <nav className="absolute left-0 top-14 w-64 border border-gold/25 bg-charcoal p-4 shadow-2xl" aria-label="ناوبری موبایل">
            <div className="grid gap-1 text-sm font-bold text-ivory/80">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="border-b border-ivory/10 px-3 py-3 transition-colors last:border-b-0 hover:text-gold">
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </details>
      </Container>
    </header>
  );
}
