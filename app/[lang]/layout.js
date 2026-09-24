import { notFound } from "next/navigation";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HtmlLang from "@/components/HtmlLang";
import PageTransition from "@/components/PageTransition";
import { getDict, locales } from "@/lib/dictionaries";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!locales.includes(lang)) return {};
  const t = getDict(lang);

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      languages: {
        id: "/id",
        en: "/en",
      },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      locale: lang === "en" ? "en_US" : "id_ID",
      type: "website",
    },
  };
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  if (!locales.includes(lang)) notFound();

  const t = getDict(lang);

  return (
    <div lang={lang}>
      <HtmlLang lang={lang} />
      <Header lang={lang} t={t} />
      <PageTransition>
        <main>{children}</main>
        <Footer lang={lang} t={t} />
      </PageTransition>
      <FloatingWhatsApp t={t} />
    </div>
  );
}
