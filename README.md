<<<<<<< HEAD
# naturetour_web
prototype web for nature tour
=======
# Nusantara Trails

Website agen pariwisata dwibahasa (Indonesia / Inggris) dengan pemesanan lewat WhatsApp.
Dibangun dengan Next.js 15 (App Router) dan Tailwind CSS.


## Menjalankan

Butuh Node.js 18.18 atau lebih baru.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` — otomatis diarahkan ke `/id`.

Untuk versi produksi:

```bash
npm run build
npm start
```


## Yang wajib diubah sebelum dipakai

### 1. Nomor WhatsApp dan identitas agen

File: `lib/site.js`

```js
whatsapp: "6281234567890",   // format internasional, tanpa + dan tanpa spasi
```

Contoh: nomor `0812-3456-7890` ditulis `6281234567890`.
Di file yang sama ada nama agen, email, telepon, alamat, tautan Maps, dan media sosial.

### 2. Data paket wisata

File: `data/packages.js`

Setiap paket berisi harga, durasi, itinerary harian, fasilitas termasuk/tidak termasuk,
dan semua teks dalam dua bahasa (`id` dan `en`). Tambah paket baru cukup menyalin satu
objek yang sudah ada lalu mengganti isinya. `slug` harus unik karena dipakai sebagai URL.

### 3. Teks antarmuka

File: `lib/dictionaries.js`

Seluruh teks tombol, judul section, label formulir, dan ulasan pelanggan ada di sini,
terpisah antara `id` dan `en`. Menambah bahasa ketiga: tambahkan kunci baru di objek
`dict` dan masukkan kodenya ke array `locales`.

### 4. Foto

Folder: `public/images`

Saat ini berisi ilustrasi lanskap SVG sebagai placeholder supaya proyek langsung jalan.
Ganti dengan foto asli (JPG atau WebP), lalu sesuaikan path di `data/packages.js`
dan di `components/HeroSlider.jsx` (array `images` di baris atas).

Ukuran yang disarankan: hero 1920px lebar, foto paket 1200px, kualitas 80%.


## Struktur folder

```
app/
  layout.js                  Root layout, pemuatan font
  page.js                    Pengalihan ke bahasa default
  globals.css                Token warna dan seluruh sistem animasi
  [lang]/
    layout.js                Header, footer, tombol WA melayang, metadata
    page.js                  Beranda
    paket/page.js            Katalog dengan filter
    paket/[slug]/page.js     Detail paket
    tentang-kami/page.js     Profil dan legalitas
    kontak/page.js           Kontak

components/
  HeroSlider.jsx             Slider crossfade + zoom halus
  SearchBar.jsx              Pencarian di beranda
  PackageCatalog.jsx         Filter kategori dan pencarian
  PackageCard.jsx            Kartu paket
  BookingModal.jsx           Formulir pemesanan + redirect WhatsApp
  BookingButton.jsx          Pemicu modal
  FloatingWhatsApp.jsx       Tombol melayang
  LanguageSwitcher.jsx       Dropdown bendera ID/EN
  PageTransition.jsx         Transisi antar halaman
  Reveal.jsx                 Animasi masuk saat scroll
  Header.jsx  Footer.jsx  ContactForm.jsx  Icons.jsx

lib/
  site.js                    Konfigurasi agen (ubah di sini)
  dictionaries.js            Seluruh teks dua bahasa
  utils.js                   Penyusun pesan WhatsApp, format harga dan tanggal

data/
  packages.js                Data paket wisata

scripts/
  generate-placeholders.mjs  Membuat ulang gambar placeholder
```


## Cara kerja pemesanan

1. Pengunjung menekan "Pesan Sekarang" di halaman detail paket.
2. Modal terbuka berisi nama, nomor WhatsApp, tanggal keberangkatan, jumlah peserta,
   pilihan paket (sudah terisi), dan catatan.
3. Setelah validasi, pesan disusun oleh `buildBookingMessage()` di `lib/utils.js`
   mengikuti bahasa yang sedang aktif, termasuk format tanggal dan mata uang.
4. Browser membuka `wa.me` di tab baru. Jika popup diblokir, modal berganti menjadi
   tautan manual yang bisa ditekan langsung.


## Sistem animasi

Satu easing untuk seluruh situs: `cubic-bezier(0.22, 0.61, 0.36, 1)`.

| Gerakan | Durasi | Di mana |
|---|---|---|
| Hover kartu dan tombol | 0.35s | `.card-lift`, `.btn` |
| Elemen masuk saat scroll | 0.7s | `.reveal` di `globals.css` |
| Transisi antar halaman | 0.88s | `.page-enter` + `.page-veil` |
| Crossfade hero | 1.2s | `.hero-slide` |
| Zoom hero | 7.5s | `.hero-slide img` |

Semua dimatikan otomatis pada `prefers-reduced-motion: reduce`.


## Deploy

Paling mudah lewat Vercel: unggah folder ini ke GitHub, lalu impor repositorinya.
Tidak ada variabel lingkungan yang perlu diisi.

Untuk hosting statis (tanpa Node), tambahkan `output: "export"` di `next.config.mjs`
lalu jalankan `npm run build`. Hasilnya ada di folder `out/`.
>>>>>>> ebb93d8 (prototype ui)
