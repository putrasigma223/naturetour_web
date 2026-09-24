"use client";

import { useEffect, useMemo, useState } from "react";
import { packages } from "@/data/packages";
import { buildBookingMessage, todayISO, waLink } from "@/lib/utils";
import { ArrowIcon, CrossIcon, WhatsAppIcon } from "./Icons";

export default function BookingModal({ lang, t, initialPackage, onClose }) {
  const options = useMemo(() => packages.map((p) => p.name[lang]), [lang]);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    guests: 2,
    packageName: initialPackage || options[0],
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [link, setLink] = useState("");

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = t.booking.errors.name;
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 8)
      next.phone = t.booking.errors.phone;
    if (!form.date) next.date = t.booking.errors.date;
    if (!form.guests || Number(form.guests) < 1) next.guests = t.booking.errors.guests;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function submit(event) {
    event.preventDefault();
    if (!validate()) return;

    const url = waLink(buildBookingMessage(form, lang));
    setLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center">
      <div
        className="modal-backdrop absolute inset-0 bg-forest/45 backdrop-blur-[3px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="modal-panel relative max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-paper p-6 sm:max-w-xl sm:rounded-3xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.nav.close}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-forest/15 text-forest transition-colors duration-300 ease-soft hover:bg-moss"
        >
          <CrossIcon />
        </button>

        {link ? (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-moss text-forest">
              <WhatsAppIcon className="h-7 w-7" />
            </div>
            <h2 id="booking-title" className="mt-5 font-display text-3xl text-forest">
              {t.booking.redirecting}
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink/70">
              {t.booking.redirectingBody}
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-6"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.booking.openManually}
            </a>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 block w-full text-sm text-ink/60 underline underline-offset-4"
            >
              {t.booking.done}
            </button>
          </div>
        ) : (
          <>
            <h2 id="booking-title" className="pr-10 font-display text-3xl text-forest">
              {t.booking.title}
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-ink/70">{t.booking.subtitle}</p>

            <form onSubmit={submit} noValidate className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="bk-name" className="field-label">
                  {t.booking.name}
                </label>
                <input
                  id="bk-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder={t.booking.namePlaceholder}
                  className={`field ${errors.name ? "field-error" : ""}`}
                />
                {errors.name && <p className="mt-1.5 text-xs text-[#a4503f]">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="bk-phone" className="field-label">
                  {t.booking.phone}
                </label>
                <input
                  id="bk-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder={t.booking.phonePlaceholder}
                  className={`field ${errors.phone ? "field-error" : ""}`}
                />
                {errors.phone && <p className="mt-1.5 text-xs text-[#a4503f]">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="bk-date" className="field-label">
                  {t.booking.date}
                </label>
                <input
                  id="bk-date"
                  type="date"
                  min={todayISO()}
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className={`field ${errors.date ? "field-error" : ""}`}
                />
                {errors.date && <p className="mt-1.5 text-xs text-[#a4503f]">{errors.date}</p>}
              </div>

              <div>
                <label htmlFor="bk-guests" className="field-label">
                  {t.booking.guests}
                </label>
                <input
                  id="bk-guests"
                  type="number"
                  min="1"
                  max="40"
                  value={form.guests}
                  onChange={(e) => update("guests", e.target.value)}
                  className={`field ${errors.guests ? "field-error" : ""}`}
                />
                {errors.guests && <p className="mt-1.5 text-xs text-[#a4503f]">{errors.guests}</p>}
              </div>

              <div>
                <label htmlFor="bk-package" className="field-label">
                  {t.booking.packageField}
                </label>
                <select
                  id="bk-package"
                  value={form.packageName}
                  onChange={(e) => update("packageName", e.target.value)}
                  className="field"
                >
                  {options.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="bk-notes" className="field-label">
                  {t.booking.notes}{" "}
                  <span className="font-normal text-ink/45">({t.booking.optional})</span>
                </label>
                <textarea
                  id="bk-notes"
                  rows={3}
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  placeholder={t.booking.notesPlaceholder}
                  className="field resize-none"
                />
              </div>

              <div className="mt-1 flex flex-col-reverse gap-3 sm:col-span-2 sm:flex-row sm:items-center">
                <button type="button" onClick={onClose} className="btn btn-ghost">
                  {t.booking.cancel}
                </button>
                <button type="submit" className="btn btn-primary flex-1">
                  {t.booking.submit}
                  <ArrowIcon />
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
