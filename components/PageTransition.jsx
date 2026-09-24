"use client";

import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <div key={pathname}>
      <div className="page-veil" aria-hidden="true" />
      <div className="page-enter">{children}</div>
    </div>
  );
}
