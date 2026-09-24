"use client";

import { useState } from "react";
import { buildContactMessage, waLink } from "@/lib/utils";
import { WhatsAppIcon } from "./Icons";

export default function ContactForm({ lang, t }) {
  const [form, setForm] = useState({ name: "", message: "" });
  const [errors, setErrors] = useState({});
  const [link, setLink] = useState("");

  function submit(event) {
    event.preventDefault();

    const next = {};
    if (!form.name.trim()) next.name = t.booking.errors.name;
    if (!form.message.trim()) next.message = t.contact.message;
    setErrors(next);
    if (Object.keys(next).length) return;

    const url = waLink(buildContactMessage(form, lang));
    setLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-4">
      <div>
        <label htmlFor="ct-name" className="field-label">
          {t.booking.name}
        </label>
        <input
          id="ct-name"
          type="text"
          value={form.name}
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
            setErrors({ ...errors, name: undefined });
          }}
          className={`field ${errors.name ? "field-error" : ""}`}
        />
        {errors.name && <p className="mt-1.5 text-xs text-[#a4503f]">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="ct-message" className="field-label">
          {t.contact.message}
        </label>
        <textarea
          id="ct-message"
          rows={5}
          value={form.message}
          onChange={(e) => {
            setForm({ ...form, message: e.target.value });
            setErrors({ ...errors, message: undefined });
          }}
          placeholder={t.contact.messagePlaceholder}
          className={`field resize-none ${errors.message ? "field-error" : ""}`}
        />
      </div>

      <button type="submit" className="btn btn-primary justify-self-start">
        <WhatsAppIcon className="h-4 w-4" />
        {t.contact.send}
      </button>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-sm text-forest"
        >
          {t.booking.openManually}
        </a>
      )}
    </form>
  );
}
