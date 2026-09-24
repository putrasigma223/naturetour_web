import PackageCatalog from "@/components/PackageCatalog";
import Reveal from "@/components/Reveal";
import { getDict } from "@/lib/dictionaries";

export default async function PackagesPage({ params, searchParams }) {
  const { lang } = await params;
  const sp = await searchParams;
  const t = getDict(lang);

  return (
    <>
      <section className="bg-moss/40 pb-14 pt-32 sm:pt-36">
        <div className="shell">
          <Reveal>
            <h1 className="max-w-2xl font-display text-5xl leading-[1.05] text-forest sm:text-6xl">
              {t.packages.title}
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/70">
              {t.packages.lead}
            </p>
          </Reveal>
        </div>
      </section>

      <PackageCatalog
        lang={lang}
        t={t}
        initialQuery={typeof sp?.q === "string" ? sp.q : ""}
        initialCategory={typeof sp?.cat === "string" ? sp.cat : ""}
      />
    </>
  );
}
