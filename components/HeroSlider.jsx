"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowIcon } from "./Icons";

const images = ["/images/hero-1.svg", "/images/hero-2.svg", "/images/hero-3.svg"];

export default function HeroSlider({ lang, t }) {
  const slides = t.hero.slides;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[index];

  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden bg-forest">
      {images.map((src, i) => (
        <div key={src} className={`hero-slide ${i === index ? "is-active" : ""}`}>
          <img src={src} alt="" aria-hidden="true" />
        </div>
      ))}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(44,58,46,.5) 0%, rgba(44,58,46,.18) 38%, rgba(44,58,46,.72) 100%)",
        }}
      />

      <div className="shell relative flex h-full flex-col justify-end pb-24 sm:pb-28">
        <div key={index} className="hero-text max-w-2xl">
          <p className="mb-5 text-xs tracking-wide text-paper/75">{slide.eyebrow}</p>
          <h1 className="font-display text-[2.6rem] leading-[1.06] text-paper sm:text-6xl lg:text-7xl">
            {slide.title}
          </h1>
          <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-paper/80">
            {slide.body}
          </p>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link href={`/${lang}/paket`} className="btn btn-light">
            {t.hero.cta}
            <ArrowIcon />
          </Link>

          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.eyebrow}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={s.eyebrow}
                className="group h-8 w-8 rounded-full"
              >
                <span
                  className={`mx-auto block h-px transition-all duration-500 ease-soft ${
                    i === index ? "w-7 bg-paper" : "w-4 bg-paper/40 group-hover:bg-paper/70"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
