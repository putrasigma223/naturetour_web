"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";

export default function BookingButton({
  lang,
  t,
  packageName,
  className = "btn btn-primary",
  children,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children || t.nav.book}
      </button>
      {open && (
        <BookingModal
          lang={lang}
          t={t}
          initialPackage={packageName}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
