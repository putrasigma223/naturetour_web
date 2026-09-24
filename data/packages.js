// =====================================================================
//  DATA PAKET WISATA
//  Tambah / ubah paket cukup di file ini. Setiap teks punya versi id & en.
//  Ganti "cover" dan "gallery" dengan path foto asli di /public/images.
// =====================================================================

export const categories = ["alam", "budaya", "kota", "kuliner"];

export const packages = [
  {
    slug: "bromo-ijen-sunrise",
    category: "alam",
    featured: true,
    cover: "/images/bromo.svg",
    gallery: ["/images/bromo.svg", "/images/ijen.svg", "/images/collage-1.svg"],
    price: 3850000,
    days: 4,
    nights: 3,
    minGuests: 2,
    difficulty: "sedang",
    location: { id: "Jawa Timur", en: "East Java" },
    name: { id: "Bromo & Ijen, Dua Pagi Berturut", en: "Bromo & Ijen, Two Mornings in a Row" },
    summary: {
      id: "Dua gunung, dua pagi buta, dan satu hari penuh istirahat di antaranya.",
      en: "Two mountains, two very early mornings, and a full rest day in between.",
    },
    description: {
      id: "Kami menghindari titik pandang utama yang penuh sesak dan memilih punggungan di sisi timur yang hanya bisa dicapai jalan kaki dua puluh menit. Hari kedua sengaja dikosongkan supaya tubuh siap untuk pendakian Ijen dini hari, bukan karena tidak ada yang bisa dilihat.",
      en: "We avoid the crowded main viewpoint and use a ridge on the eastern side that takes a twenty-minute walk to reach. The second day is deliberately left open so your body is ready for the pre-dawn climb at Ijen, not because there is nothing to see.",
    },
    itinerary: [
      {
        title: { id: "Tiba di Malang, menuju Tosari", en: "Arrive in Malang, transfer to Tosari" },
        items: {
          id: ["Penjemputan di bandara atau stasiun", "Perjalanan darat tiga jam ke Tosari", "Makan malam dan penjelasan rute oleh pemandu"],
          en: ["Pickup at the airport or train station", "Three-hour drive to Tosari", "Dinner and a route briefing with your guide"],
        },
      },
      {
        title: { id: "Pagi di Bromo, sore bebas", en: "Morning at Bromo, free afternoon" },
        items: {
          id: ["Berangkat pukul 03.00 dengan jip", "Jalan kaki ke punggungan timur", "Kembali ke penginapan, sisa hari untuk istirahat"],
          en: ["Depart at 03:00 by jeep", "Walk out to the eastern ridge", "Return to the lodge, the rest of the day is yours"],
        },
      },
      {
        title: { id: "Pindah ke Banyuwangi", en: "Move to Banyuwangi" },
        items: {
          id: ["Perjalanan darat lima jam", "Singgah di perkebunan kopi rakyat", "Tidur lebih awal, pendakian mulai tengah malam"],
          en: ["Five-hour drive", "Stop at a smallholder coffee plantation", "Early night, the climb starts at midnight"],
        },
      },
      {
        title: { id: "Ijen dan kepulangan", en: "Ijen and departure" },
        items: {
          id: ["Pendakian dua jam dengan masker respirator", "Api biru bila cuaca mendukung, kawah saat terang", "Antar ke bandara Banyuwangi atau stasiun"],
          en: ["Two-hour climb with a respirator mask", "Blue flames if conditions allow, the crater at first light", "Transfer to Banyuwangi airport or the train station"],
        },
      },
    ],
    included: {
      id: ["Pemandu berlisensi HPI", "Tiga malam penginapan", "Seluruh transportasi darat dan jip", "Tiket masuk taman nasional", "Masker respirator dan senter", "Asuransi perjalanan"],
      en: ["HPI licensed guide", "Three nights accommodation", "All ground transport and jeep", "National park entrance fees", "Respirator mask and headlamp", "Travel insurance"],
    },
    excluded: {
      id: ["Tiket pesawat atau kereta", "Makan siang dan makan malam di luar jadwal", "Pengeluaran pribadi", "Tip pemandu"],
      en: ["Flights or train tickets", "Meals outside the listed schedule", "Personal expenses", "Guide gratuity"],
    },
  },

  {
    slug: "raja-ampat-liveaboard",
    category: "alam",
    featured: true,
    cover: "/images/rajaampat.svg",
    gallery: ["/images/rajaampat.svg", "/images/komodo.svg", "/images/collage-2.svg"],
    price: 18500000,
    days: 6,
    nights: 5,
    minGuests: 4,
    difficulty: "sedang",
    location: { id: "Papua Barat Daya", en: "Southwest Papua" },
    name: { id: "Raja Ampat dengan Kapal Kayu", en: "Raja Ampat by Wooden Boat" },
    summary: {
      id: "Lima malam di atas kapal phinisi kecil, berpindah mengikuti arus dan cuaca.",
      en: "Five nights on a small phinisi, moving with the current and the weather.",
    },
    description: {
      id: "Rute tidak dikunci di awal. Kapten menentukan tujuan tiap pagi berdasarkan arus, sehingga titik snorkeling yang Anda datangi adalah yang terbaik hari itu, bukan yang paling mudah dijadwalkan.",
      en: "The route is not fixed in advance. The captain chooses each morning based on the current, so the snorkelling sites you reach are the best ones that day rather than the easiest ones to schedule.",
    },
    itinerary: [
      { title: { id: "Sorong dan naik kapal", en: "Sorong and boarding" }, items: { id: ["Penjemputan di Bandara Domine Eduard Osok", "Perbekalan di pasar pagi", "Berlayar sore menuju Selat Dampier"], en: ["Pickup at Domine Eduard Osok Airport", "Provisioning at the morning market", "Afternoon sail towards Dampier Strait"] } },
      { title: { id: "Selat Dampier", en: "Dampier Strait" }, items: { id: ["Dua sesi snorkeling di Cape Kri", "Mengamati burung di Pulau Gam", "Bermalam di teluk terlindung"], en: ["Two snorkelling sessions at Cape Kri", "Birdwatching on Gam Island", "Overnight in a sheltered bay"] } },
      { title: { id: "Piaynemo", en: "Piaynemo" }, items: { id: ["Mendaki dek pandang saat matahari belum tinggi", "Berenang di laguna", "Makan siang di atas kapal"], en: ["Climb the viewing deck before the sun gets high", "Swim in the lagoon", "Lunch on board"] } },
      { title: { id: "Arborek dan Yenbuba", en: "Arborek and Yenbuba" }, items: { id: ["Berkunjung ke kampung Arborek", "Snorkeling di dermaga Yenbuba", "Makan malam bersama warga bila memungkinkan"], en: ["Visit Arborek village", "Snorkel at Yenbuba jetty", "Dinner with the village when possible"] } },
      { title: { id: "Wayag atau alternatif", en: "Wayag or an alternative" }, items: { id: ["Tergantung cuaca dan izin harian", "Alternatif: Teluk Kabui", "Malam terakhir di kapal"], en: ["Subject to weather and daily permits", "Alternative: Kabui Bay", "Final night on board"] } },
      { title: { id: "Kembali ke Sorong", en: "Return to Sorong" }, items: { id: ["Berlayar pagi", "Antar ke bandara"], en: ["Morning sail", "Airport transfer"] } },
    ],
    included: {
      id: ["Kapal beserta awak dan juru masak", "Seluruh makan di atas kapal", "Alat snorkeling", "Kartu masuk kawasan Raja Ampat", "Pemandu berbahasa Inggris", "Asuransi perjalanan"],
      en: ["Boat with crew and cook", "All meals on board", "Snorkelling equipment", "Raja Ampat conservation fee", "English-speaking guide", "Travel insurance"],
    },
    excluded: {
      id: ["Penerbangan ke Sorong", "Peralatan selam scuba dan sertifikasi", "Minuman beralkohol", "Tip awak kapal"],
      en: ["Flights to Sorong", "Scuba gear and certification", "Alcoholic drinks", "Crew gratuity"],
    },
  },

  {
    slug: "danau-toba-tepi-kaldera",
    category: "alam",
    featured: true,
    cover: "/images/toba.svg",
    gallery: ["/images/toba.svg", "/images/collage-3.svg", "/images/collage-1.svg"],
    price: 6200000,
    days: 7,
    nights: 6,
    minGuests: 2,
    difficulty: "ringan",
    location: { id: "Sumatera Utara", en: "North Sumatra" },
    name: { id: "Tepi Kaldera Danau Toba", en: "Along the Toba Caldera" },
    summary: {
      id: "Tujuh hari mengelilingi danau, menginap di rumah keluarga Batak.",
      en: "Seven days around the lake, staying with Batak families.",
    },
    description: {
      id: "Perjalanan ini lebih banyak berjalan kaki dan mengobrol daripada berpindah kendaraan. Tiga dari enam malam dihabiskan di rumah warga yang memang membuka kamar untuk tamu, dengan pembagian hasil yang kami sepakati terbuka di depan mereka.",
      en: "This journey involves more walking and conversation than driving. Three of the six nights are spent in family homes that genuinely host guests, with a revenue split agreed openly in front of them.",
    },
    itinerary: [
      { title: { id: "Medan ke Parapat", en: "Medan to Parapat" }, items: { id: ["Penjemputan di Kualanamu", "Perjalanan darat empat jam", "Feri sore ke Samosir"], en: ["Pickup at Kualanamu", "Four-hour drive", "Afternoon ferry to Samosir"] } },
      { title: { id: "Tomok dan Ambarita", en: "Tomok and Ambarita" }, items: { id: ["Makam batu Raja Sidabutar", "Kursi batu Ambarita bersama juru kunci", "Berenang di danau sore hari"], en: ["Stone tomb of King Sidabutar", "Ambarita stone chairs with the custodian", "Afternoon swim in the lake"] } },
      { title: { id: "Berjalan ke Pangururan", en: "Walking to Pangururan" }, items: { id: ["Jalan kaki melalui ladang bawang", "Air panas kaki Gunung Pusuk Buhit", "Menginap di rumah keluarga"], en: ["Walk through onion fields", "Hot springs at the foot of Pusuk Buhit", "Overnight in a family home"] } },
      { title: { id: "Hari tenang", en: "A quiet day" }, items: { id: ["Tanpa jadwal tetap", "Pilihan: menenun ulos atau memancing", "Makan malam bersama tuan rumah"], en: ["No fixed schedule", "Optional: ulos weaving or fishing", "Dinner with your hosts"] } },
      { title: { id: "Sisi barat danau", en: "The western shore" }, items: { id: ["Perjalanan darat memutar kaldera", "Air terjun Efrata", "Menginap di Balige"], en: ["Drive around the caldera rim", "Efrata waterfall", "Overnight in Balige"] } },
      { title: { id: "Pasar Balige", en: "Balige market" }, items: { id: ["Pasar pagi bersama juru masak lokal", "Memasak arsik ikan mas", "Sore bebas"], en: ["Morning market with a local cook", "Cooking arsik carp", "Free afternoon"] } },
      { title: { id: "Kembali ke Medan", en: "Back to Medan" }, items: { id: ["Perjalanan darat pagi", "Antar ke bandara"], en: ["Morning drive", "Airport transfer"] } },
    ],
    included: {
      id: ["Enam malam penginapan termasuk tiga malam di rumah warga", "Sarapan setiap hari dan empat kali makan malam", "Seluruh transportasi darat dan feri", "Pemandu lokal Batak", "Asuransi perjalanan"],
      en: ["Six nights accommodation including three homestays", "Daily breakfast and four dinners", "All ground transport and ferries", "Local Batak guide", "Travel insurance"],
    },
    excluded: {
      id: ["Tiket pesawat ke Medan", "Makan siang", "Pengeluaran pribadi", "Tip"],
      en: ["Flights to Medan", "Lunches", "Personal expenses", "Gratuity"],
    },
  },

  {
    slug: "komodo-labuan-bajo",
    category: "alam",
    featured: false,
    cover: "/images/komodo.svg",
    gallery: ["/images/komodo.svg", "/images/rajaampat.svg", "/images/collage-2.svg"],
    price: 7400000,
    days: 5,
    nights: 4,
    minGuests: 2,
    difficulty: "sedang",
    location: { id: "Nusa Tenggara Timur", en: "East Nusa Tenggara" },
    name: { id: "Komodo dan Perairan Sekitarnya", en: "Komodo and the Surrounding Waters" },
    summary: {
      id: "Empat malam menyusuri pulau-pulau kering yang berubah hijau setelah hujan pertama.",
      en: "Four nights among dry islands that turn green after the first rain.",
    },
    description: {
      id: "Kami membatasi rombongan maksimal delapan orang agar tetap muat di satu kapal kecil dan tidak perlu mengantre panjang di dermaga Loh Liang.",
      en: "We cap groups at eight so everyone fits on one small boat and we avoid the long queue at the Loh Liang jetty.",
    },
    itinerary: [
      { title: { id: "Labuan Bajo", en: "Labuan Bajo" }, items: { id: ["Penjemputan bandara", "Sore di bukit Sylvia", "Penjelasan rute"], en: ["Airport pickup", "Late afternoon at Sylvia hill", "Route briefing"] } },
      { title: { id: "Pulau Rinca", en: "Rinca Island" }, items: { id: ["Berlayar pagi", "Trekking pendek bersama ranger", "Snorkeling di Pink Beach"], en: ["Morning sail", "Short trek with a ranger", "Snorkelling at Pink Beach"] } },
      { title: { id: "Padar dan Komodo", en: "Padar and Komodo" }, items: { id: ["Naik ke punggungan Padar sebelum panas", "Pulau Komodo bersama ranger", "Bermalam di kapal"], en: ["Climb the Padar ridge before the heat", "Komodo Island with a ranger", "Overnight on board"] } },
      { title: { id: "Manta Point", en: "Manta Point" }, items: { id: ["Snorkeling bersama pari manta bila arus mendukung", "Pulau Kanawa", "Kembali ke Labuan Bajo"], en: ["Snorkel with manta rays if the current allows", "Kanawa Island", "Return to Labuan Bajo"] } },
      { title: { id: "Kepulangan", en: "Departure" }, items: { id: ["Pasar pagi bila ada waktu", "Antar ke bandara"], en: ["Morning market if time allows", "Airport transfer"] } },
    ],
    included: { id: ["Kapal harian dan satu malam di kapal", "Tiga malam hotel di Labuan Bajo", "Tiket taman nasional dan ranger", "Alat snorkeling", "Pemandu", "Asuransi perjalanan"], en: ["Day boat and one night on board", "Three hotel nights in Labuan Bajo", "National park and ranger fees", "Snorkelling equipment", "Guide", "Travel insurance"] },
    excluded: { id: ["Tiket pesawat", "Makan malam di kota", "Selam scuba", "Tip"], en: ["Flights", "Dinners in town", "Scuba diving", "Gratuity"] },
  },

  {
    slug: "ubud-upacara-dan-sawah",
    category: "budaya",
    featured: false,
    cover: "/images/ubud.svg",
    gallery: ["/images/ubud.svg", "/images/collage-4.svg", "/images/collage-3.svg"],
    price: 2900000,
    days: 3,
    nights: 2,
    minGuests: 2,
    difficulty: "ringan",
    location: { id: "Gianyar, Bali", en: "Gianyar, Bali" },
    name: { id: "Ubud, Upacara dan Sawah", en: "Ubud, Ceremony and Rice Fields" },
    summary: {
      id: "Tiga hari mengikuti ritme desa, termasuk satu upacara bila jatuh pada kalender Bali.",
      en: "Three days following a village rhythm, including a ceremony when the Balinese calendar allows.",
    },
    description: {
      id: "Kami tidak menjanjikan upacara tertentu karena tanggalnya ditentukan kalender Bali, bukan oleh kami. Bila tidak ada, hari itu diisi dengan membuat canang dan berjalan di subak bersama petani.",
      en: "We do not promise a specific ceremony because the Balinese calendar decides the date, not us. If none falls on your dates, that day is spent making canang offerings and walking the subak with a farmer.",
    },
    itinerary: [
      { title: { id: "Tiba di Ubud", en: "Arrive in Ubud" }, items: { id: ["Penjemputan dari bandara", "Berjalan di Campuhan sore hari", "Makan malam masakan rumahan"], en: ["Airport pickup", "Late afternoon walk on Campuhan ridge", "Home-cooked dinner"] } },
      { title: { id: "Subak dan dapur", en: "Subak and kitchen" }, items: { id: ["Berjalan di sistem irigasi subak", "Memasak bersama keluarga tuan rumah", "Upacara bila bertepatan"], en: ["Walk the subak irrigation system", "Cook with the host family", "Ceremony if the date coincides"] } },
      { title: { id: "Pasar dan kepulangan", en: "Market and departure" }, items: { id: ["Pasar pagi Ubud", "Waktu bebas", "Antar ke bandara atau hotel berikutnya"], en: ["Ubud morning market", "Free time", "Transfer to the airport or your next hotel"] } },
    ],
    included: { id: ["Dua malam penginapan keluarga", "Sarapan dan dua kali makan malam", "Pemandu berbahasa Inggris", "Transportasi lokal", "Kain dan selendang upacara"], en: ["Two nights in a family guesthouse", "Breakfast and two dinners", "English-speaking guide", "Local transport", "Ceremonial sarong and sash"] },
    excluded: { id: ["Tiket pesawat", "Makan siang", "Pijat dan spa", "Tip"], en: ["Flights", "Lunches", "Massage and spa", "Gratuity"] },
  },

  {
    slug: "yogyakarta-candi-dan-perajin",
    category: "budaya",
    featured: false,
    cover: "/images/yogyakarta.svg",
    gallery: ["/images/yogyakarta.svg", "/images/collage-1.svg", "/images/collage-4.svg"],
    price: 3400000,
    days: 4,
    nights: 3,
    minGuests: 2,
    difficulty: "ringan",
    location: { id: "Daerah Istimewa Yogyakarta", en: "Yogyakarta Special Region" },
    name: { id: "Yogyakarta, Candi dan Perajin", en: "Yogyakarta, Temples and Makers" },
    summary: {
      id: "Borobudur dan Prambanan, lalu dua hari di bengkel perak, batik, dan gamelan.",
      en: "Borobudur and Prambanan, then two days in silver, batik, and gamelan workshops.",
    },
    description: {
      id: "Candi dikunjungi pagi buta untuk menghindari panas dan rombongan besar. Sisanya dihabiskan di Kotagede dan Bantul bersama perajin yang masih bekerja, bukan di ruang pamer untuk turis.",
      en: "The temples are visited at first light to avoid the heat and the large groups. The rest is spent in Kotagede and Bantul with artisans who still work, not in showrooms built for visitors.",
    },
    itinerary: [
      { title: { id: "Tiba dan Kotagede", en: "Arrival and Kotagede" }, items: { id: ["Penjemputan bandara atau stasiun", "Berjalan di gang Kotagede", "Makan malam gudeg"], en: ["Airport or station pickup", "Walk the Kotagede alleys", "Gudeg dinner"] } },
      { title: { id: "Borobudur", en: "Borobudur" }, items: { id: ["Berangkat pukul 04.30", "Relief bersama pemandu sejarah", "Sore di bengkel perak"], en: ["Depart at 04:30", "Reliefs with a history guide", "Afternoon in a silver workshop"] } },
      { title: { id: "Prambanan dan batik", en: "Prambanan and batik" }, items: { id: ["Prambanan pagi", "Membatik tulis di Bantul", "Latihan gamelan malam hari"], en: ["Prambanan in the morning", "Hand-drawn batik in Bantul", "Evening gamelan practice"] } },
      { title: { id: "Kepulangan", en: "Departure" }, items: { id: ["Pasar Beringharjo", "Antar ke bandara atau stasiun"], en: ["Beringharjo market", "Airport or station transfer"] } },
    ],
    included: { id: ["Tiga malam hotel", "Sarapan setiap hari", "Tiket Borobudur dan Prambanan", "Kelas batik dan gamelan", "Pemandu dan transportasi"], en: ["Three hotel nights", "Daily breakfast", "Borobudur and Prambanan tickets", "Batik and gamelan sessions", "Guide and transport"] },
    excluded: { id: ["Tiket pesawat atau kereta", "Makan siang dan malam", "Belanja pribadi", "Tip"], en: ["Flights or train tickets", "Lunches and dinners", "Personal shopping", "Gratuity"] },
  },

  {
    slug: "jakarta-kota-tua-sehari",
    category: "kota",
    featured: false,
    cover: "/images/jakarta.svg",
    gallery: ["/images/jakarta.svg", "/images/collage-2.svg"],
    price: 750000,
    days: 1,
    nights: 0,
    minGuests: 2,
    difficulty: "ringan",
    location: { id: "DKI Jakarta", en: "Jakarta" },
    name: { id: "Jakarta Lama dalam Sehari", en: "Old Jakarta in a Day" },
    summary: {
      id: "Berjalan kaki dan naik transportasi umum dari Kota Tua sampai Pasar Baru.",
      en: "Walking and public transport from Kota Tua to Pasar Baru.",
    },
    description: {
      id: "Tur berjalan kaki tanpa mobil pribadi. Kami memakai KRL dan TransJakarta seperti warga, dengan jeda panjang untuk kopi dan makan siang di tempat yang memang ramai oleh orang kantoran.",
      en: "A walking tour with no private car. We use the commuter train and TransJakarta like residents, with long stops for coffee and lunch where office workers actually eat.",
    },
    itinerary: [
      { title: { id: "Sehari penuh", en: "Full day" }, items: { id: ["Bertemu di Stasiun Jakarta Kota pukul 08.00", "Museum Fatahillah dan Toko Merah", "Makan siang di Glodok", "Pasar Baru dan Lapangan Banteng", "Selesai pukul 17.00"], en: ["Meet at Jakarta Kota Station at 08:00", "Fatahillah Museum and Toko Merah", "Lunch in Glodok", "Pasar Baru and Banteng Square", "Finish at 17:00"] } },
    ],
    included: { id: ["Pemandu sejarah", "Tiket museum", "Kartu transportasi umum", "Makan siang", "Air minum"], en: ["History guide", "Museum tickets", "Public transport card", "Lunch", "Drinking water"] },
    excluded: { id: ["Penjemputan hotel", "Makan malam", "Pengeluaran pribadi", "Tip"], en: ["Hotel pickup", "Dinner", "Personal expenses", "Gratuity"] },
  },

  {
    slug: "jalur-rempah-sumatera",
    category: "kuliner",
    featured: false,
    cover: "/images/collage-1.svg",
    gallery: ["/images/collage-1.svg", "/images/toba.svg", "/images/collage-3.svg"],
    price: 4600000,
    days: 5,
    nights: 4,
    minGuests: 4,
    difficulty: "ringan",
    location: { id: "Sumatera Barat", en: "West Sumatra" },
    name: { id: "Jalur Rempah Sumatera Barat", en: "The Spice Route of West Sumatra" },
    summary: {
      id: "Lima hari dari pasar Padang sampai kebun kayu manis di Kerinci.",
      en: "Five days from the Padang markets to the cinnamon gardens of Kerinci.",
    },
    description: {
      id: "Tiap hari dimulai di pasar dan berakhir di dapur. Anda memasak sendiri minimal tiga kali, dibimbing juru masak rumah tangga, bukan koki restoran.",
      en: "Each day starts at a market and ends in a kitchen. You cook at least three times yourself, taught by home cooks rather than restaurant chefs.",
    },
    itinerary: [
      { title: { id: "Padang", en: "Padang" }, items: { id: ["Penjemputan bandara", "Pasar Raya sore", "Makan malam nasi kapau"], en: ["Airport pickup", "Pasar Raya in the afternoon", "Nasi kapau dinner"] } },
      { title: { id: "Bukittinggi", en: "Bukittinggi" }, items: { id: ["Perjalanan darat melewati Lembah Anai", "Pasar Atas", "Memasak rendang sore hari"], en: ["Drive through Anai Valley", "Pasar Atas", "Cook rendang in the afternoon"] } },
      { title: { id: "Danau Maninjau", en: "Lake Maninjau" }, items: { id: ["Turun Kelok 44", "Ikan bakar di tepi danau", "Menginap di tepi air"], en: ["Descend the 44 bends", "Grilled fish by the lake", "Overnight on the shore"] } },
      { title: { id: "Kerinci", en: "Kerinci" }, items: { id: ["Perjalanan panjang ke kebun kayu manis", "Panen bersama petani", "Menginap di rumah kebun"], en: ["Long drive to the cinnamon gardens", "Harvest with the farmers", "Overnight at the garden house"] } },
      { title: { id: "Kembali ke Padang", en: "Back to Padang" }, items: { id: ["Perjalanan pagi", "Antar ke bandara"], en: ["Morning drive", "Airport transfer"] } },
    ],
    included: { id: ["Empat malam penginapan", "Seluruh sesi memasak dan bahan", "Sarapan dan tiga kali makan malam", "Transportasi darat", "Pemandu"], en: ["Four nights accommodation", "All cooking sessions and ingredients", "Breakfast and three dinners", "Ground transport", "Guide"] },
    excluded: { id: ["Tiket pesawat", "Makan siang di luar sesi", "Belanja rempah pribadi", "Tip"], en: ["Flights", "Lunches outside the sessions", "Personal spice purchases", "Gratuity"] },
  },
];

export function getPackage(slug) {
  return packages.find((p) => p.slug === slug);
}
