import { site } from "./site";

export function formatPrice(value, lang) {
  return new Intl.NumberFormat(lang === "en" ? "en-US" : "id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDate(value, lang) {
  if (!value) return "-";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(lang === "en" ? "en-GB" : "id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function todayISO() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  return new Date(now.getTime() - offset * 60000).toISOString().slice(0, 10);
}

// ---------------------------------------------------------------------
// Penyusun pesan WhatsApp. Bahasa mengikuti bahasa aktif di website.
// ---------------------------------------------------------------------
export function buildBookingMessage(data, lang) {
  const guests = Number(data.guests) || 1;

  if (lang === "en") {
    return [
      `Hello *${site.name}*, I would like to book a tour.`,
      "",
      `*Name*: ${data.name}`,
      `*WhatsApp*: ${data.phone}`,
      `*Tour*: ${data.packageName}`,
      `*Departure date*: ${formatDate(data.date, "en")}`,
      `*Guests*: ${guests} person${guests > 1 ? "s" : ""}`,
      `*Notes*: ${data.notes?.trim() ? data.notes.trim() : "-"}`,
      "",
      "Could you confirm availability and the next steps? Thank you.",
    ].join("\n");
  }

  return [
    `Halo *${site.name}*, saya ingin memesan paket wisata.`,
    "",
    `*Nama*: ${data.name}`,
    `*WhatsApp*: ${data.phone}`,
    `*Paket*: ${data.packageName}`,
    `*Tanggal keberangkatan*: ${formatDate(data.date, "id")}`,
    `*Jumlah peserta*: ${guests} orang`,
    `*Catatan*: ${data.notes?.trim() ? data.notes.trim() : "-"}`,
    "",
    "Mohon informasi ketersediaan dan langkah selanjutnya. Terima kasih.",
  ].join("\n");
}

export function buildContactMessage(data, lang) {
  if (lang === "en") {
    return [
      `Hello *${site.name}*, I have a question.`,
      "",
      `*Name*: ${data.name}`,
      `*Question*: ${data.message}`,
    ].join("\n");
  }
  return [
    `Halo *${site.name}*, saya ingin bertanya.`,
    "",
    `*Nama*: ${data.name}`,
    `*Pertanyaan*: ${data.message}`,
  ].join("\n");
}

export function waLink(message) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}
