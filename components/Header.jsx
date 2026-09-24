"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ lang, t }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = pathname === `/${lang}`;
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: `/${lang}`, label: t.nav.home },
    { href: `/${lang}/paket`, label: t.nav.packages },
    { href: `/${lang}/tentang-kami`, label: t.nav.about },
    { href: `/${lang}/kontak`, label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ease-soft ${
        transparent
          ? "bg-transparent py-5"
          : "border-b border-forest/10 bg-paper/92 py-3 backdrop-blur-md"
      }`}
    >
      <div className="shell flex items-center justify-between gap-4">
        <Link
          href={`/${lang}`}
          className={`font-display text-xl tracking-tight transition-colors duration-500 ease-soft sm:text-2xl ${
            transparent ? "text-paper" : "text-forest"
          }`}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`link-underline text-sm transition-colors duration-300 ease-soft ${
                  transparent
                    ? "text-paper/85 hover:text-paper"
                    : active
                      ? "text-forest"
                      : "text-ink/70 hover:text-forest"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <LanguageSwitcher lang={lang} tone={transparent ? "light" : "dark"} />

          <Link
            href={`/${lang}/paket`}
            className={`btn hidden px-5 py-2 text-xs md:inline-flex ${
              transparent ? "btn-light" : "btn-primary"
            }`}
          >
            {t.nav.book}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300 ease-soft md:hidden ${
              transparent ? "border-paper/30 text-paper" : "border-forest/20 text-forest"
            }`}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-4 bg-current transition-all duration-300 ease-soft ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-4 bg-current transition-opacity duration-300 ease-soft ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-4 bg-current transition-all duration-300 ease-soft ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="modal-backdrop fixed inset-x-0 top-[57px] z-[69] h-[calc(100vh-57px)] bg-paper md:hidden">
          <nav className="shell flex flex-col pt-6">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-forest/10 py-5 font-display text-3xl text-forest"
                style={{ animation: `heroText 0.6s var(--ease-soft) ${0.05 * i}s both` }}
              >
                {link.label}
              </Link>
            ))}
            <Link href={`/${lang}/paket`} className="btn btn-primary mt-8 self-start">
              {t.nav.book}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
