import Link from "next/link";
import { formatPrice } from "@/lib/utils";

export default function PackageCard({ pkg, lang, t }) {
  return (
    <Link
      href={`/${lang}/paket/${pkg.slug}`}
      className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-forest/10 bg-paper"
    >
      <div className="card-media relative aspect-[4/3] overflow-hidden bg-moss">
        <img
          src={pkg.cover}
          alt={pkg.name[lang]}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-paper/92 px-3 py-1 text-[0.7rem] font-medium text-forest backdrop-blur-sm">
          {t.categories[pkg.category]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-sage">{pkg.location[lang]}</p>

        <h3 className="mt-2 font-display text-2xl leading-snug text-forest">
          {pkg.name[lang]}
        </h3>

        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink/70">
          {pkg.summary[lang]}
        </p>

        <div className="mt-5 h-px bg-forest/10" />

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-[0.7rem] text-ink/55">{t.packages.from}</p>
            <p className="font-display text-xl text-forest">
              {formatPrice(pkg.price, lang)}
            </p>
          </div>
          <p className="pb-1 text-xs text-ink/60">
            {pkg.days} {t.packages.days}
            {pkg.nights > 0 ? ` · ${pkg.nights} ${t.packages.nights}` : ""}
          </p>
        </div>
      </div>
    </Link>
  );
}
