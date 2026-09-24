import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import PackageCard from "@/components/PackageCard";
import Reveal from "@/components/Reveal";
import SearchBar from "@/components/SearchBar";
import { ArrowIcon, CurveDivider } from "@/components/Icons";
import { categories, packages } from "@/data/packages";
import { getDict } from "@/lib/dictionaries";

const collage = [
  { src: "/images/collage-1.svg", className: "left-[4%] top-[6%] w-[22%] rotate-[-3deg]" },
  { src: "/images/collage-2.svg", className: "right-[6%] top-0 w-[26%] rotate-[2deg]" },
  { src: "/images/collage-3.svg", className: "left-[14%] bottom-[4%] w-[19%] rotate-[3deg]" },
  { src: "/images/collage-4.svg", className: "right-[10%] bottom-[8%] w-[17%] rotate-[-2deg]" },
];

const reviewGallery = [
  {
    src: "/images/collage-1.svg",
    alt: "Tamu menikmati perjalanan di alam",
    className: "left-[6%] top-[2%] w-[37%] rotate-[-3deg]",
  },
  {
    src: "/images/collage-2.svg",
    alt: "Pemandangan perjalanan yang menyatu dengan budaya",
    className: "right-[8%] top-[1%] w-[32%] rotate-[2deg]",
  },
  {
    src: "/images/collage-3.svg",
    alt: "Bertemu dengan alam dan masyarakat lokal",
    className: "left-[18%] bottom-[7%] w-[41%] rotate-[1deg]",
  },
  {
    src: "/images/collage-4.svg",
    alt: "Kegiatan outdoor dan perjalanan santai",
    className: "right-[10%] bottom-[4%] w-[23%] rotate-[-2deg]",
  },
  {
    src: "/images/team.svg",
    alt: "Tim Nusantara Trails bersama tamu",
    className: "left-[42%] bottom-[3%] w-[28%] rotate-[2deg]",
  },
  {
    src: "/images/bromo.svg",
    alt: "Sunrise di Bromo",
    className: "left-[30%] top-[28%] w-[24%] rotate-[-1deg]",
  },
];

export default async function HomePage({ params }) {
  const { lang } = await params;
  const t = getDict(lang);

  const featured = packages.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <HeroSlider lang={lang} t={t} />

      {/* Search bar melayang di bawah hero */}
      <section className="relative z-10 -mt-14 mb-10 sm:-mt-16 sm:mb-14 lg:mb-16">
        <div className="shell">
          <Reveal>
            <SearchBar lang={lang} t={t} />
          </Reveal>
        </div>
      </section>

      {/* Filosofi + collage foto tersebar */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          {collage.map((item, i) => (
            <Reveal key={item.src} delay={120 * i} className={`absolute ${item.className}`}>
              <img
                src={item.src}
                alt=""
                aria-hidden="true"
                className="w-full rounded-sm shadow-soft"
                loading="lazy"
              />
            </Reveal>
          ))}
        </div>

        <div className="shell relative">
          <Reveal delay={200}>
            <blockquote className="mx-auto max-w-2xl text-center">
              <p className="font-display text-[1.75rem] leading-[1.35] text-forest sm:text-4xl">
                {t.philosophy.quote}
              </p>
              <footer className="mt-7 text-sm text-sage">{t.philosophy.attribution}</footer>
            </blockquote>
          </Reveal>

          <Reveal delay={320}>
            <p className="mx-auto mt-10 max-w-md text-center text-sm leading-relaxed text-ink/65">
              {t.philosophy.body}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 px-5 sm:hidden">
          {collage.slice(0, 2).map((item) => (
            <img
              key={item.src}
              src={item.src}
              alt=""
              aria-hidden="true"
              className="w-full rounded-sm"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* Paket unggulan */}
      <section className="bg-moss/45 pb-24 pt-20 sm:pb-28 sm:pt-24">
        <div className="shell">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-lg">
                <h2 className="font-display text-4xl leading-tight text-forest sm:text-5xl">
                  {t.featured.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">{t.featured.body}</p>
              </div>
              <Link href={`/${lang}/paket`} className="btn btn-ghost">
                {t.featured.all}
                <ArrowIcon />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featured.map((pkg, i) => (
              <Reveal key={pkg.slug} delay={90 * i}>
                <PackageCard pkg={pkg} lang={lang} t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kategori selain alam */}
      <section className="py-24 sm:py-28">
        <div className="shell">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="font-display text-4xl leading-tight text-forest sm:text-5xl">
                {t.categoriesSection.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                {t.categoriesSection.body}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, i) => {
              const count = packages.filter((p) => p.category === cat).length;
              const sample = packages.find((p) => p.category === cat);
              return (
                <Reveal key={cat} delay={80 * i}>
                  <Link
                    href={`/${lang}/paket?cat=${cat}`}
                    className="card-lift group block overflow-hidden rounded-2xl border border-forest/10 bg-paper"
                  >
                    <div className="card-media aspect-[5/4] overflow-hidden bg-moss">
                      <img
                        src={sample?.cover || "/images/collage-1.svg"}
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <span className="font-display text-xl text-forest">{t.categories[cat]}</span>
                      <span className="text-xs text-ink/50">{count}</span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ulasan */}
      <section className="bg-sand/70 py-24 sm:py-28">
        <div className="shell">
          <Reveal>
            <h2 className="max-w-lg font-display text-4xl leading-tight text-forest sm:text-5xl">
              {t.reviews.title}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.reviews.items.map((review, i) => (
              <Reveal key={review.name} delay={90 * i}>
                <figure className="card-lift flex h-full flex-col rounded-2xl border border-forest/10 bg-paper p-6">
                  <blockquote className="flex-1 text-sm leading-relaxed text-ink/75">
                    {review.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-forest/10 pt-4">
                    <p className="text-sm text-forest">{review.name}</p>
                    <p className="mt-1 text-xs text-ink/55">
                      {review.origin} — {review.trip}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <div className="mt-20 overflow-hidden rounded-[2rem] border border-forest/10 bg-[#eeebe4] p-4 shadow-soft sm:mt-24 sm:p-6 lg:mt-28 lg:p-8">
              <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
                  {reviewGallery.map((item, index) => (
                    <Reveal key={item.src} delay={140 + index * 80} className={`absolute ${item.className}`}>
                      <div className="story-photo group overflow-hidden rounded-[1.3rem] border border-white/50 bg-moss shadow-[0_18px_38px_rgba(36,42,35,0.12)]">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>

                <div className="px-2 pb-4 text-center lg:pr-5 lg:text-left">
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.25em] text-forest/70">
                    Tertanam dalam tradisi
                  </p>
                  <h3 className="mt-6 font-display text-[3.2rem] leading-[0.9] text-forest sm:text-[4.3rem] lg:text-[5rem]">
                    Menyusun
                    <span className="block text-[3.6rem] sm:text-[4.8rem] lg:text-[5.6rem]">
                      cerita alam
                    </span>
                  </h3>
                  <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-ink/70 lg:mx-0">
                    Setiap perjalanan kami dibuat dengan rasa hormat kepada tempat, orang, dan ritme lokal yang membuat pengalaman terasa hidup dan autentik.
                  </p>
                  <div className="mt-8 flex justify-center gap-3 lg:justify-start">
                    <span className="rounded-full border border-forest/15 bg-white/40 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.18em] text-forest/70">
                      Bali
                    </span>
                    <span className="rounded-full border border-forest/15 bg-white/40 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.18em] text-forest/70">
                      Sumatra
                    </span>
                    <span className="rounded-full border border-forest/15 bg-white/40 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.18em] text-forest/70">
                      Papua
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Legalitas */}
      <section className="py-20">
        <div className="shell">
          <Reveal>
            <div className="text-center">
              <h2 className="font-display text-2xl text-forest">{t.trust.title}</h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-ink/60">{t.trust.body}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {t.trust.items.map((item) => (
                <li
                  key={item}
                  className="text-xs text-ink/55 transition-colors duration-300 ease-soft hover:text-forest"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA penutup */}
      <section className="relative bg-forest py-24 text-paper sm:py-28">
        <div className="absolute inset-x-0 -top-px rotate-180">
          <CurveDivider from="#F6F4EE" />
        </div>

        <div className="shell relative text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
              {t.closing.title}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-paper/70">
              {t.closing.body}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <Link href={`/${lang}/kontak`} className="btn btn-light mt-9">
              {t.closing.cta}
              <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
