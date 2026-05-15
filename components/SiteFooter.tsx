import Link from "next/link";
import { navigation, siteInfo } from "@/lib/content";
import { Container } from "@/components/Container";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-xl font-black text-gold">{siteInfo.name}</p>
          <p className="mt-4 max-w-md text-sm leading-8 text-ivory/65">
            محتوای سایت جنبه اطلاع‌رسانی دارد و جایگزین مشاوره اختصاصی حقوقی بر اساس مدارک و شرایط پرونده نیست.
          </p>
        </div>
        <div>
          <p className="font-black text-ivory">دسترسی سریع</p>
          <ul className="mt-4 space-y-3 text-sm text-ivory/65">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-black text-ivory">ارتباط</p>
          <p className="mt-4 text-sm leading-8 text-ivory/65">{siteInfo.city}</p>
          <p className="text-sm leading-8 text-ivory/65">مدیریت: {siteInfo.manager}</p>
        </div>
      </Container>
      <div className="border-t border-ivory/10 py-5 text-center text-xs text-ivory/55">
        © {new Intl.DateTimeFormat("fa-IR", { year: "numeric" }).format(new Date())} {siteInfo.name}. همه حقوق محفوظ است.
      </div>
    </footer>
  );
}
