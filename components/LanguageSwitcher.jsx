"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { locales } from "@/lib/dictionaries";
import { ChevronIcon, GlobeIcon } from "./Icons";

const labels = {
  id: { name: "Bahasa Indonesia", short: "ID", flag: "🇮🇩" },
  en: { name: "English", short: "EN", flag: "🇬🇧" },
};

export default function LanguageSwitcher({ lang, tone = "dark" }) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    function onClick(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) setOpen(false);
    }
    function onKey(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function switchTo(next) {
    setOpen(false);
    if (next === lang) return;

    const segments = pathname.split("/").filter(Boolean);
    segments[0] = next;
    const query = typeof window !== "undefined" ? window.location.search.replace(/^\?/, "") : "";
    router.push(`/${segments.join("/")}${query ? `?${query}` : ""}`);
  }

  const light = tone === "light";

  return (
    <div ref={boxRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-300 ease-soft ${
          light
            ? "border-paper/30 text-paper hover:border-paper/70"
            : "border-forest/20 text-forest hover:border-forest/60"
        }`}
      >
        <GlobeIcon className="h-3.5 w-3.5" />
        <span>{labels[lang].short}</span>
        <ChevronIcon className={`h-3 w-3 transition-transform duration-300 ease-soft ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="modal-panel absolute right-0 top-[calc(100%+0.5rem)] z-50 w-52 overflow-hidden rounded-xl border border-forest/12 bg-paper shadow-lift"
        >
          {locales.map((code) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={code === lang}
                onClick={() => switchTo(code)}
                className={`flex w-full items-center gap-2.5 px-4 py-3 text-left text-sm transition-colors duration-300 ease-soft hover:bg-moss ${
                  code === lang ? "bg-moss/60 text-forest" : "text-ink"
                }`}
              >
                <span aria-hidden="true" className="text-base leading-none">
                  {labels[code].flag}
                </span>
                <span>{labels[code].name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
