"use client";
import { useEffect } from "react";

/** انیمیشن ظریف ظاهرشدن هنگام اسکرول + سایه‌ی هدر + نمایش دکمه بازگشت به بالا */
export default function ScrollEffects() {
  useEffect(() => {
    const header = document.getElementById("header");
    const toTop = document.getElementById("toTop");

    const onScroll = () => {
      const y = window.scrollY || 0;
      header?.classList.toggle("is-scrolled", y > 8);
      toTop?.classList.toggle("is-visible", y > 480);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );
      els.forEach((el) => io.observe(el));
      return () => {
        window.removeEventListener("scroll", onScroll);
        io.disconnect();
      };
    }
    els.forEach((el) => el.classList.add("is-visible"));
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
