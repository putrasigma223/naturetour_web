export function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.48.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91A9.85 9.85 0 0 0 19.05 4.9 9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.2 8.2 0 0 1 8.22 8.24c0 4.54-3.7 8.23-8.23 8.23z" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M4 12.5l5 5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CrossIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GlobeIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
    </svg>
  );
}

export function SearchIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5L21 21" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CurveDivider({ flip = false, from = "#F6F4EE" }) {
  return (
    <svg
      className="curve-divider"
      viewBox="0 0 1440 56"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ transform: flip ? "rotate(180deg)" : "none" }}
    >
      <path d="M0 56V22c240 28 480 34 720 18S1200 6 1440 22v34z" fill={from} />
    </svg>
  );
}
