"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site, mainNav } from "@/lib/site";
import { asset } from "@/lib/asset";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header" id="header">
      <div className="container header__inner">
        <Link className="brand" href="/#hero" aria-label={site.name}>
          <span className="brand__mark" aria-hidden="true">
            <Image className="brand__logo" src={asset("/assets/avaye-logo-mark.svg")} width={40} height={44} alt="" />
          </span>
          <span className="brand__text">
            <strong>{site.name}</strong>
            <small>{site.tagline}</small>
          </span>
        </Link>

        <nav className={`nav${open ? " is-open" : ""}`} id="nav" aria-label="منوی اصلی">
          <ul className="nav__list">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/#contact" className="btn btn--gold nav__cta" onClick={() => setOpen(false)}>
            درخواست مشاوره
          </Link>
        </nav>

        <button
          className="nav-toggle"
          aria-label="باز و بسته کردن منو"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
