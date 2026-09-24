"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { ArrowIcon } from "./Icons";

export default function Footer({ lang, t }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="bg-forest pt-20 text-paper">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="font-display text-3xl">{site.name}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/65">
              {t.footer.tagline}
            </p>
          </div>

          <nav>
            <p className="text-xs text-paper/45">{t.footer.explore}</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href={`/${lang}`} className="link-underline text-paper/80 hover:text-paper">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/paket`} className="link-underline text-paper/80 hover:text-paper">
                  {t.nav.packages}
                </Link>
              </li>
            </ul>
          </nav>

          <nav>
            <p className="text-xs text-paper/45">{t.footer.company}</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href={`/${lang}/tentang-kami`} className="link-underline text-paper/80 hover:text-paper">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/kontak`} className="link-underline text-paper/80 hover:text-paper">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-xs text-paper/45">{t.footer.reach}</p>
            <p className="mt-4 text-sm leading-relaxed text-paper/80">{site.email}</p>
            <p className="text-sm text-paper/80">{site.phone}</p>

            <p className="mt-7 max-w-xs text-sm leading-relaxed text-paper/60">
              {t.footer.newsletter}
            </p>

            {done ? (
              <p className="mt-4 text-sm text-olive">{t.footer.newsletterDone}</p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.includes("@")) setDone(true);
                }}
                className="mt-4 flex items-center gap-2 border-b border-paper/25 pb-2 transition-colors duration-300 ease-soft focus-within:border-paper/70"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.newsletterPlaceholder}
                  aria-label={t.footer.newsletterPlaceholder}
                  className="w-full bg-transparent text-sm text-paper placeholder:text-paper/40 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label={t.footer.newsletterCta}
                  className="text-paper/70 transition-colors duration-300 ease-soft hover:text-paper"
                >
                  <ArrowIcon />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/12 py-7 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {t.footer.rights}
          </p>
          <p>{site.address}</p>
        </div>
      </div>
    </footer>
  );
}
