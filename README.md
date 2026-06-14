# وب‌سایت گروه وکلای آوای عدالت کرمان

وب‌سایت رسمی گروه وکلای آوای عدالت کرمان، ساخته‌شده با **Next.js 15 (App Router)** و **TypeScript**؛
با طراحی Luxury Editorial، پشتیبانی کامل از راست‌به‌چپ (RTL) فارسی و خروجی **static export** برای میزبانی روی GitHub Pages.

## فناوری‌ها

- **Next.js 15** — App Router، Server Components، `output: "export"`
- **React 19** + **TypeScript** (strict)
- **next/font** — فونت‌های Vazirmatn و Cormorant Garamond (self-hosted در زمان build)
- **next/image** — بهینه‌سازی و مدیریت تصاویر
- CSS خالص و ماژولار (`globals.css`) بدون وابستگی به فریم‌ورک UI

## ساختار پروژه

```
src/
├─ app/                      # App Router
│  ├─ layout.tsx             # لایه‌ی ریشه (فونت‌ها، متادیتا، هدر/فوتر)
│  ├─ page.tsx               # صفحه‌ی اصلی (ترکیب بخش‌ها)
│  ├─ globals.css            # استایل سراسری
│  ├─ not-found.tsx          # صفحه‌ی ۴۰۴
│  ├─ articles/
│  │  ├─ page.tsx            # آرشیو مقالات
│  │  └─ [slug]/page.tsx     # صفحه‌ی هر مقاله (SSG)
│  └─ lawyers/
│     └─ [slug]/page.tsx     # صفحه‌ی رزومه‌ی هر وکیل (SSG)
├─ components/
│  ├─ layout/                # Header، Footer، Topbar
│  ├─ sections/              # Hero، Services، Team، Contact و …
│  ├─ articles/              # ArticleCard
│  └─ ui/                    # ScrollEffects، BackToTop، WhatsappFloat
├─ lib/                      # لایه‌ی داده و پیکربندی
│  ├─ site.ts                # اطلاعات تماس، منو، تنظیمات سایت
│  ├─ content.ts             # خدمات، مزیت‌ها، فرآیند، نظرات، سوالات متداول
│  ├─ lawyers.ts             # داده‌ی وکلا
│  ├─ articles.ts            # داده‌ی مقالات
│  └─ asset.ts               # helper مسیر دارایی‌ها (basePath)
├─ types/                    # تایپ‌های مشترک
public/assets/               # تصاویر، لوگو، آواتارها، favicon
```

## اجرا در محیط توسعه

```bash
npm install
npm run dev      # http://localhost:3000
```

## ساخت نسخه‌ی نهایی (static export)

```bash
npm run build    # خروجی در پوشه‌ی out/
```

> در حالت production مسیر پایه (`basePath`) روی `/avaye-edalat-kerman-website` تنظیم می‌شود
> تا روی GitHub Pages (پروژه‌ی زیرمسیر) درست کار کند. در توسعه‌ی محلی basePath خالی است.

## افزودن مقاله‌ی جدید

یک شیء جدید به ابتدای آرایه‌ی `articles` در `src/lib/articles.ts` اضافه کنید:

```ts
{
  slug: "نام-انگلیسی-یکتا",
  title: "عنوان مقاله",
  date: "۱۴۰۵/۰۴/۰۱",
  category: "حقوق خانواده",
  excerpt: "خلاصه کوتاه برای کارت.",
  body: `<p>متن…</p><h2>تیتر</h2><ul><li>مورد</li></ul>`,
}
```

صفحه‌ی مقاله به‌صورت خودکار در مسیر `/articles/نام-انگلیسی-یکتا` ساخته می‌شود.

## افزودن یا ویرایش وکیل

داده‌ی وکلا در `src/lib/lawyers.ts` است؛ هر وکیل صفحه‌ی رزومه‌ی اختصاصی در `/lawyers/{slug}` دارد.

## انتشار

با هر push به شاخه‌ی اصلی، workflow موجود در `.github/workflows/deploy-pages.yml`
پروژه را build و خروجی استاتیک را روی GitHub Pages منتشر می‌کند.

## نکته‌ها

- فرم تماس فعلاً سمت کلاینت اعتبارسنجی می‌شود؛ برای دریافت واقعی پیام‌ها باید به یک سرویس (مثل Formspree یا یک API) متصل شود.
- آواتار وکلا فعلاً مونوگرام طراحی‌شده است؛ با ارائه‌ی عکس‌های واقعی قابل جای‌گذاری است.
