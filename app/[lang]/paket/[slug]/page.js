import Link from "next/link";
import { notFound } from "next/navigation";
import BookingButton from "@/components/BookingButton";
import PackageCard from "@/components/PackageCard";
import Reveal from "@/components/Reveal";
import { ArrowIcon, CheckIcon, CrossIcon } from "@/components/Icons";
import { getPackage, packages } from "@/data/packages";
import { getDict, locales } from "@/lib/dictionaries";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return locales.flatMap((lang) => packages.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return {};

  return {
    title: `${pkg.name[lang]} — Nusantara Trails`,
    description: pkg.summary[lang],
  };
}

export default async function PackageDetail({ params }) {
  const { lang, slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) notFound();

  const t = getDict(lang);
  const related = packages
    .filter((p) => p.slug !== pkg.slug && p.category === pkg.category)
    .slice(0, 3);

  const facts = [
    { label: t.detail.location, value: pkg.location[lang] },
    {
      label: t.detail.duration,
      value: `${pkg.days} ${t.packages.days}${pkg.nights ? ` / ${pkg.nights} ${t.packages.nights}` : ""}`,
    },
    {
      label: t.detail.groupSize,
      value: `${t.packages.minGuests} ${pkg.minGuests} ${t.packages.guests}`,
    },
    { label: t.detail.difficulty, value: t.difficulty[pkg.difficulty] },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[68vh] min-h-[440px] w-full overflow-hidden bg-forest">
        <img src={pkg.cover} alt={pkg.name[lang]} className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(44,58,46,.55) 0%, rgba(44,58,46,.2) 40%, rgba(44,58,46,.8) 100%)",
          }}
        />
        <div className="shell absolute inset-x-0 bottom-0 pb-12">
          <div className="hero-text max-w-3xl">
            <p className="mb-4 text-xs text-paper/70">
              {t.categories[pkg.category]} — {pkg.location[lang]}
            </p>
            <h1 className="font-display text-[2.5rem] leading-[1.08] text-paper sm:text-6xl">
              {pkg.name[lang]}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-paper/80">
              {pkg.summary[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* Bar informasi */}
      <section className="border-b border-forest/10 bg-paper">
        <div className="shell grid gap-6 py-7 md:grid-cols-[1fr_auto] md:items-center">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[0.7rem] text-ink/50">{fact.label}</dt>
                <dd className="mt-1 text-sm text-forest">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex items-center gap-5 md:justify-end">
            <div className="text-right">
              <p className="text-[0.7rem] text-ink/50">{t.packages.from}</p>
              <p className="font-display text-2xl text-forest">{formatPrice(pkg.price, lang)}</p>
              <p className="text-[0.7rem] text-ink/50">{t.packages.perPerson}</p>
            </div>
            <BookingButton
              lang={lang}
              t={t}
              packageName={pkg.name[lang]}
              className="btn btn-primary hidden md:inline-flex"
            >
              {t.detail.book}
            </BookingButton>
          </div>
        </div>
      </section>

      {/* Deskripsi + itinerary */}
      <section className="py-20">
        <div className="shell grid gap-16 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl text-forest">{t.detail.overview}</h2>
              <p className="mt-5 max-w-prose text-[0.95rem] leading-[1.75] text-ink/75">
                {pkg.description[lang]}
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="mt-16 font-display text-3xl text-forest">{t.detail.itinerary}</h2>
            </Reveal>

            <ol className="mt-8 space-y-0">
              {pkg.itinerary.map((day, i) => (
                <Reveal key={day.title[lang]} delay={60 * i}>
                  <li className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-forest/10 py-6">
                    <span className="pt-1 text-xs text-sage">
                      {t.detail.day} {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl text-forest">{day.title[lang]}</h3>
                      <ul className="mt-3 space-y-1.5">
                        {day.items[lang].map((item) => (
                          <li key={item} className="text-sm leading-relaxed text-ink/70">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Fasilitas */}
          <aside>
            <Reveal>
              <div className="rounded-2xl border border-forest/10 bg-moss/35 p-6 lg:sticky lg:top-24">
                <h2 className="font-display text-2xl text-forest">{t.detail.included}</h2>
                <ul className="mt-4 space-y-2.5">
                  {pkg.included[lang].map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink/75">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="my-6 h-px bg-forest/12" />

                <h2 className="font-display text-2xl text-forest">{t.detail.excluded}</h2>
                <ul className="mt-4 space-y-2.5">
                  {pkg.excluded[lang].map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink/60">
                      <CrossIcon className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                      {item}
                    </li>
                  ))}
                </ul>

                <BookingButton
                  lang={lang}
                  t={t}
                  packageName={pkg.name[lang]}
                  className="btn btn-primary mt-7 w-full"
                >
                  {t.detail.book}
                </BookingButton>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Galeri */}
      {pkg.gallery?.length > 1 && (
        <section className="pb-20">
          <div className="shell">
            <Reveal>
              <h2 className="font-display text-3xl text-forest">{t.detail.gallery}</h2>
            </Reveal>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {pkg.gallery.map((src, i) => (
                <Reveal key={`${src}-${i}`} delay={80 * i}>
                  <img
                    src={src}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-xl object-cover"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Paket serupa */}
      {related.length > 0 && (
        <section className="bg-sand/60 py-20">
          <div className="shell">
            <Reveal>
              <h2 className="font-display text-3xl text-forest">{t.detail.related}</h2>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item, i) => (
                <Reveal key={item.slug} delay={80 * i}>
                  <PackageCard pkg={item} lang={lang} t={t} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="shell py-12">
        <Link href={`/${lang}/paket`} className="link-underline inline-flex items-center gap-2 text-sm text-forest">
          <ArrowIcon className="h-4 w-4 rotate-180" />
          {t.detail.backToList}
        </Link>
      </div>

      {/* Bar pemesanan tetap di mobile */}
      <div className="sticky bottom-0 z-[60] border-t border-forest/12 bg-paper/95 px-5 py-3 backdrop-blur-md md:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[0.65rem] text-ink/50">{t.packages.from}</p>
            <p className="font-display text-lg leading-tight text-forest">
              {formatPrice(pkg.price, lang)}
            </p>
          </div>
          <BookingButton
            lang={lang}
            t={t}
            packageName={pkg.name[lang]}
            className="btn btn-primary flex-1 py-3"
          >
            {t.nav.book}
          </BookingButton>
        </div>
      </div>
    </>
  );
}
