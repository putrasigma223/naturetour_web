import Reveal from "@/components/Reveal";
import { getDict } from "@/lib/dictionaries";
import { site } from "@/lib/site";

export default async function AboutPage({ params }) {
  const { lang } = await params;
  const t = getDict(lang);

  return (
    <>
      <section className="bg-moss/40 pb-20 pt-32 sm:pt-36">
        <div className="shell">
          <Reveal>
            <h1 className="max-w-3xl font-display text-5xl leading-[1.05] text-forest sm:text-6xl">
              {t.about.title}
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink/70">{t.about.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <img
              src="/images/team.svg"
              alt=""
              aria-hidden="true"
              className="w-full rounded-2xl"
              loading="lazy"
            />
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-display text-3xl text-forest">{t.about.storyTitle}</h2>
            <div className="mt-5 space-y-5">
              {t.about.story.map((paragraph) => (
                <p key={paragraph} className="max-w-prose text-[0.95rem] leading-[1.8] text-ink/75">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand/60 py-20">
        <div className="shell">
          <Reveal>
            <h2 className="font-display text-3xl text-forest">{t.about.legalTitle}</h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink/70">{t.about.legalBody}</p>
          </Reveal>

          <dl className="mt-10 grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {t.about.legal.map((row, i) => (
              <Reveal key={row.label} delay={60 * i}>
                <div className="flex items-baseline justify-between gap-6 border-t border-forest/12 py-4">
                  <dt className="text-sm text-ink/60">{row.label}</dt>
                  <dd className="text-right text-sm text-forest">{row.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-20">
        <div className="shell">
          <Reveal>
            <h2 className="font-display text-3xl text-forest">{t.about.teamTitle}</h2>
          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.team.map((person, i) => (
              <Reveal key={person.name} delay={70 * i}>
                <div className="card-lift h-full rounded-2xl border border-forest/10 bg-paper p-6">
                  <p className="font-display text-xl text-forest">{person.name}</p>
                  <p className="mt-2 text-xs leading-relaxed text-ink/60">{person.role}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-14 rounded-2xl border border-forest/10 bg-moss/35 p-7">
              <h3 className="font-display text-2xl text-forest">{t.about.officeTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{t.about.office}</p>
              <p className="mt-1 text-sm text-ink/60">{t.about.hours}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-4 inline-block text-sm text-forest"
              >
                Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
