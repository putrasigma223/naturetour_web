"use client";

import { useMemo, useState } from "react";
import { categories, packages } from "@/data/packages";
import PackageCard from "./PackageCard";
import Reveal from "./Reveal";
import { SearchIcon } from "./Icons";

export default function PackageCatalog({ lang, t, initialQuery = "", initialCategory = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(
    categories.includes(initialCategory) ? initialCategory : ""
  );

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return packages.filter((pkg) => {
      if (category && pkg.category !== category) return false;
      if (!needle) return true;

      const haystack = [
        pkg.name[lang],
        pkg.summary[lang],
        pkg.location[lang],
        pkg.description[lang],
        t.categories[pkg.category],
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(needle);
    });
  }, [query, category, lang, t]);

  const filters = [{ key: "", label: t.search.all }].concat(
    categories.map((c) => ({ key: c, label: t.categories[c] }))
  );

  return (
    <>
      <div className="sticky top-[57px] z-30 border-b border-forest/10 bg-paper/93 backdrop-blur-md">
        <div className="shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
            {filters.map((f) => (
              <button
                key={f.key || "all"}
                type="button"
                onClick={() => setCategory(f.key)}
                className={`shrink-0 rounded-full border px-4 py-1.5 text-xs transition-all duration-300 ease-soft ${
                  category === f.key
                    ? "border-forest bg-forest text-paper"
                    : "border-forest/18 text-ink/70 hover:border-forest/50 hover:text-forest"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search.destinationPlaceholder}
              aria-label={t.search.destination}
              className="field py-2.5 pl-10 text-sm"
            />
          </div>
        </div>
      </div>

      <div className="shell py-12">
        <p className="text-xs text-ink/55">
          {results.length}{" "}
          {results.length === 1 ? t.packages.resultsOne : t.packages.resultsMany}
        </p>

        {results.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-display text-2xl text-forest">{t.packages.empty}</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("");
              }}
              className="btn btn-ghost mt-6"
            >
              {t.packages.emptyAction}
            </button>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((pkg, i) => (
              <Reveal key={pkg.slug} delay={Math.min(i, 5) * 80}>
                <PackageCard pkg={pkg} lang={lang} t={t} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
