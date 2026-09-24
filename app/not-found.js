import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-6 text-center">
      <div>
        <h1 className="font-display text-5xl text-forest">Halaman tidak ditemukan</h1>
        <p className="mt-4 text-sm text-ink/70">Page not found.</p>
        <Link href="/id" className="btn btn-primary mt-8">
          Kembali ke beranda
        </Link>
      </div>
    </main>
  );
}
