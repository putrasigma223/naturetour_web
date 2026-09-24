"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { categories } from "@/data/packages";
import { SearchIcon } from "./Icons";

export default function SearchBar({ lang, t }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  function submit(event) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (category) params.set("cat", category);
    const suffix = params.toString();
    router.push(`/${lang}/paket${suffix ? `?${suffix}` : ""}`);
  }

  return (
    <form
      onSubmit={submit}
      className="grid gap-3 rounded-2xl border border-forest/10 bg-paper p-4 shadow-lift sm:grid-cols-[1.6fr_1fr_auto] sm:items-end sm:gap-4 sm:p-5"
    >
      <div>
        <label htmlFor="search-q" className="field-label">
          {t.search.destination}
        </label>
        <input
          id="search-q"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.search.destinationPlaceholder}
          className="field"
        />
      </div>

      <div>
        <label htmlFor="search-cat" className="field-label">
          {t.search.category}
        </label>
        <select
          id="search-cat"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="field"
        >
          <option value="">{t.search.all}</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {t.categories[c]}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary h-[46px] w-full sm:w-auto">
        <SearchIcon />
        {t.search.submit}
      </button>
    </form>
  );
}
