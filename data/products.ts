// @ts-check

/**
 * KATALOG SEWAGITAR.COM
 * Data bisnis mengikuti referensi JIP (100% acuan).
 * Struktur: 3 kategori instrumen dengan harga paket.
 *
 * CARA MENGEDIT:
 * - Tambah/ubah kategori di array `products`
 * - Harga paket konsisten di semua kategori (Rp100.000/24jam, Rp300.000/minggu, Rp1.000.000/bulan)
 * - Ganti image dengan nama file di public/images/guitars/
 */

const products = [
  {
    id: 1,
    slug: "gitar-elektrik",
    name: "Gitar Elektrik",
    type: "Elektrik",
    description: "Siap menemani sesi rekaman, panggung, maupun latihan band Anda dengan performa pick-up maksimal.",
    image: "gitar-elektrik.jpg",
    featured: true,
    whatsappMessage: "Halo SEWAGITAR.COM, saya ingin menyewa Gitar Elektrik."
  },
  {
    id: 2,
    slug: "gitar-akustik",
    name: "Gitar Akustik",
    type: "Akustik",
    description: "Suara jernih dan resonansi natural, ideal untuk kafe, akustikan santai, atau latihan di rumah.",
    image: "gitar-akustik.jpg",
    featured: true,
    whatsappMessage: "Halo SEWAGITAR.COM, saya ingin menyewa Gitar Akustik."
  },
  {
    id: 3,
    slug: "gitar-bass",
    name: "Gitar Bass",
    type: "Bass",
    description: "Low-end bertenaga dan solid untuk melengkapi rhythm section band atau kebutuhan recording Anda.",
    image: "gitar-bass.jpg",
    featured: true,
    whatsappMessage: "Halo SEWAGITAR.COM, saya ingin menyewa Gitar Bass."
  }
];

/**
 * PAKET HARGA SEWA (berlaku untuk semua kategori, acuan JIP)
 */
export const pricingPackages = [
  {
    id: "24jam",
    period: "Harian",
    title: "24 JAM",
    price: 100000,
    features: [
      "Berlaku untuk semua jenis gitar",
      "Durasi sewa 24 jam penuh",
      "Siap pakai & terawat"
    ],
    whatsappMessage: "Halo SEWAGITAR.COM, saya ingin sewa paket 24 Jam (Rp100.000).",
    highlight: false,
    tag: null
  },
  {
    id: "1minggu",
    period: "Mingguan",
    title: "1 MINGGU",
    price: 300000,
    features: [
      "Berlaku untuk semua jenis gitar",
      "Lebih hemat untuk latihan/projek",
      "Perpanjangan mudah via WhatsApp"
    ],
    whatsappMessage: "Halo SEWAGITAR.COM, saya ingin sewa paket 1 Minggu (Rp300.000).",
    highlight: true,
    tag: "LEBIH HEMAT"
  },
  {
    id: "1bulan",
    period: "Bulanan",
    title: "1 BULAN",
    price: 1000000,
    features: [
      "Berlaku untuk semua jenis gitar",
      "Solusi terbaik jangka panjang",
      "Nilai ekonomis maksimal"
    ],
    whatsappMessage: "Halo SEWAGITAR.COM, saya ingin sewa paket 1 Bulan (Rp1.000.000).",
    highlight: false,
    tag: "PALING HEMAT"
  }
];

export default products;