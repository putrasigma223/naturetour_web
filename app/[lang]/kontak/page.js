import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/Icons";
import { getDict } from "@/lib/dictionaries";
import { site } from "@/lib/site";
import { waLink } from "@/lib/utils";

export default async function ContactPage({ params }) {
  const { lang } = await params;
  const t = getDict(lang);

  const details = [
    { label: t.contact.emailTitle, value: site.email, href: `mailto:${site.email}` },
    { label: t.contact.phoneTitle, value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { label: t.contact.addressTitle, value: site.address, href: site.mapsUrl },
    { label: t.contact.hoursTitle, value: t.about.hours },
  ];

  return (
    <>
      <section className="bg-moss/40 pb-20 pt-32 sm:pt-36">
        <div className="shell">
          <Reveal>
            <h1 className="font-display text-5xl leading-[1.05] text-forest sm:text-6xl">
              {t.contact.title}
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/70">{t.contact.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <Reveal>
              <div className="rounded-2xl border border-forest/10 bg-forest p-7 text-paper">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-paper/12">
                  <WhatsAppIcon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-2xl">{t.contact.whatsappTitle}</h2>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">
                  {t.contact.whatsappBody}
                </p>
                <a
                  href={waLink(t.whatsapp.greeting)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light mt-6"
                >
                  {t.contact.whatsappCta}
                </a>
              </div>
            </Reveal>

            <dl className="mt-8">
              {details.map((row, i) => (
                <Reveal key={row.label} delay={60 * i}>
                  <div className="border-t border-forest/12 py-4">
                    <dt className="text-[0.7rem] text-ink/50">{row.label}</dt>
                    <dd className="mt-1 text-sm text-forest">
                      {row.href ? (
                        <a href={row.href} className="link-underline">
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          <Reveal delay={140}>
            <div className="rounded-2xl border border-forest/10 bg-paper p-7">
              <h2 className="font-display text-3xl text-forest">{t.contact.formTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{t.contact.formBody}</p>
              <div className="mt-7">
                <ContactForm lang={lang} t={t} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
