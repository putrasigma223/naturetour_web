"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/lib/utils";
import { WhatsAppIcon } from "./Icons";

export default function FloatingWhatsApp({ t }) {
  const [shown, setShown] = useState(false);
  const [tip, setTip] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShown(window.scrollY > 300);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!shown) return;
    if (sessionStorage.getItem("wa-tip-seen")) return;

    const show = setTimeout(() => setTip(true), 1200);
    const hide = setTimeout(() => {
      setTip(false);
      sessionStorage.setItem("wa-tip-seen", "1");
    }, 7000);

    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [shown]);

  return (
    <div
      className={`fixed bottom-6 right-5 z-[80] flex items-center gap-3 transition-all duration-500 ease-soft sm:bottom-7 sm:right-7 ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span
        className={`hidden rounded-full bg-paper px-4 py-2 text-xs text-forest shadow-lift transition-all duration-500 ease-soft sm:block ${
          tip ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-2 opacity-0"
        }`}
      >
        {t.whatsapp.tooltip}
      </span>

      <a
        href={waLink(t.whatsapp.greeting)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.whatsapp.float}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-paper shadow-lift transition-all duration-300 ease-soft hover:-translate-y-1 hover:bg-sage"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
