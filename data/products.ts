/**
 * SEWAGITAR — Product-first instrument data architecture
 * Current real inventory: 3 category-level rentable instruments (no fabricated models).
 * Fields support future model-level additions (e.g., Yamaha FG830)
 * without structural redesign.
 */

export interface Product {
  id: number;
  slug: string;              // URL-safe ID
  name: string;              // Display name (e.g., "Gitar Elektrik")
  brand?: string;            // Optional — real brand when known
  model?: string;            // Optional — real model when known
  instrumentType: string;    // "Elektrik" | "Akustik" | "Bass"
  category: string;          // Taxonomy / navigation label
  description: string;
  image: string;
  featured: boolean;
  // SEO (derived from real product; never fabricated)
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  // Rental / specs
  price24h?: number;
  price1w?: number;
  price1m?: number;
  whatsappMessage?: string;
  // Technical (populated only when real data exists)
  specs?: {
    stringCount?: number;
    bodyType?: string;
  };
  relatedProductIds?: number[]; // Internal linking
}

export const products: Product[] = [
  {
    id: 4,
    slug: "parker-pm10",
    name: "Parker PM10",
    brand: "Parker",
    model: "PM10",
    instrumentType: "Elektrik",
    category: "Gitar Elektrik",
    description:
      "Gitar elektrik Parker PM10 siap disewa untuk kebutuhan rekaman, latihan, atau panggung.",
    image: "parker-pm10.jpg",
    featured: true,
    price24h: 100000,
    seoTitle: "Sewa Gitar Elektrik Parker PM10 – Rental Gitar Jakarta & Tangerang | SEWAGITAR",
    seoDescription:
      "Sewa gitar elektrik Parker PM10 di Jakarta & Tangerang. Gitar elektrik siap pakai untuk kebutuhan musik Anda. Hubungi SEWAGITAR.COM.",
    seoKeywords: ["sewa gitar elektrik", "parker pm10", "rental gitar elektrik", "sewa gitar parker"],
    whatsappMessage: "Halo SEWAGITAR.COM, saya ingin menyewa gitar elektrik Parker PM10.",
    relatedProductIds: [1, 2, 3],
  },
  {
    id: 1,
    slug: "gitar-elektrik",
    name: "Gitar Elektrik",
    instrumentType: "Elektrik",
    category: "Gitar Elektrik",
    description:
      "Siap menemani sesi rekaman, panggung, maupun latihan band Anda dengan performa pick-up maksimal.",
    image: "gitar-elektrik.jpg",
    featured: true,
    price24h: 100000,
    price1w: 300000,
    price1m: 1000000,
    seoTitle: "Sewa Gitar Elektrik – Rental Gitar Listrik Jakarta & Tangerang | SEWAGITAR",
    seoDescription:
      "Sewa gitar elektrik di Jakarta & Tangerang mulai Rp100.000/24 jam. Siap pakai, terawat, dan langsung kirim. Hubungi SEWAGITAR.COM.",
    seoKeywords: ["sewa gitar elektrik", "rental gitar listrik", "sewa gitar jakarta"],
    whatsappMessage: "Halo SEWAGITAR.COM, saya ingin menyewa Gitar Elektrik.",
    relatedProductIds: [2, 3],
  },
  {
    id: 2,
    slug: "gitar-akustik",
    name: "Gitar Akustik",
    instrumentType: "Akustik",
    category: "Gitar Akustik",
    description:
      "Suara jernih dan resonansi natural, ideal untuk kafe, akustikan santai, atau latihan di rumah.",
    image: "gitar-akustik.jpg",
    featured: true,
    price24h: 100000,
    price1w: 300000,
    price1m: 1000000,
    seoTitle: "Sewa Gitar Akustik – Rental Akustik Jakarta & Tangerang | SEWAGITAR",
    seoDescription:
      "Sewa gitar akustik berkualitas di Jakarta & Tangerang mulai Rp100.000/24 jam. Siap pakai untuk latihan, rekaman, atau panggung.",
    seoKeywords: ["sewa gitar akustik", "rental gitar akustik", "sewa gitar jakarta"],
    whatsappMessage: "Halo SEWAGITAR.COM, saya ingin menyewa Gitar Akustik.",
    relatedProductIds: [1, 3],
  },
  {
    id: 6,
    slug: "odlair-vega-od411",
    name: "Odlair Vega OD411",
    brand: "Odlair Guitar",
    model: "Vega OD411",
    instrumentType: "Akustik",
    category: "Gitar Akustik",
    description: "Gitar akustik elektrik Odlair Vega OD411 — siap disewa untuk rekaman, latihan, atau panggung. (Status ketersediaan: tanyakan).",
    image: "odlair-vega-od411.jpg",
    featured: true,
    price24h: 100000,
    price1w: 300000,
    price1m: 1000000,
    whatsappMessage: "Halo SEWAGITAR.COM, saya ingin menyewa Odlair Vega OD411.",
    seoTitle: "Sewa Gitar Akustik Odlair Vega OD411 – Rental Gitar Jakarta & Tangerang | SEWAGITAR",
    seoDescription: "Sewa gitar akustik elektrik Odlair Vega OD411 di Jakarta & Tangerang mulai Rp100.000/24 jam. Hubungi SEWAGITAR.COM.",
    seoKeywords: ["sewa gitar akustik", "odlair vega", "odlair od411", "rental gitar akustik jakarta"],
    specs: { bodyType: "Natural wood finish (visual)" },
    relatedProductIds: [1, 2, 3, 4, 5],
  },
  {
    id: 5,
    slug: "mudis-acoustic",
    name: "Gitar Akustik Mudis",
    brand: "Mudis",
    model: "Akustik (tidak dicantumkan)",
    instrumentType: "Akustik",
    category: "Gitar Akustik",
    description:
      "Gitar akustik Mudis siap disewa. Menurut informasi Owner, dilengkapi EQ untuk rekaman dan panggung.",
    image: "mudis-acoustic.jpg",
    featured: true,
    price24h: 100000,
    whatsappMessage: "Halo SEWAGITAR.COM, saya ingin menyewa Gitar Akustik Mudis.",
    seoTitle: "Sewa Gitar Akustik Mudis – Rental Gitar Jakarta & Tangerang | SEWAGITAR",
    seoDescription: "Sewa gitar akustik Mudis di Jakarta & Tangerang mulai Rp100.000/24 jam.",
    seoKeywords: ["sewa gitar akustik", "mudis acoustic", "sewa gitar jakarta"],
    relatedProductIds: [1, 2, 3],
  },
  {
    id: 3,
    slug: "gitar-bass",
    name: "Gitar Bass",
    instrumentType: "Bass",
    category: "Gitar Bass",
    description:
      "Low-end bertenaga dan solid untuk melengkapi rhythm section band atau kebutuhan recording Anda.",
    image: "gitar-bass.jpg",
    featured: true,
    price24h: 100000,
    price1w: 300000,
    price1m: 1000000,
    seoTitle: "Sewa Gitar Bass – Rental Bass Jakarta & Tangerang | SEWAGITAR",
    seoDescription:
      "Sewa gitar bass di Jakarta & Tangerang mulai Rp100.000/24 jam. Terawat, siap pakai, dan tersedia untuk pengiriman Jabodetabek.",
    seoKeywords: ["sewa gitar bass", "sewa bass", "rental bass jakarta"],
    whatsappMessage: "Halo SEWAGITAR.COM, saya ingin menyewa Gitar Bass.",
    relatedProductIds: [1, 2],
  },
];

export const categories = [
  { slug: "gitar-elektrik", label: "Gitar Elektrik", type: "Elektrik" },
  { slug: "gitar-akustik", label: "Gitar Akustik", type: "Akustik" },
  { slug: "gitar-bass", label: "Gitar Bass", type: "Bass" },
];

export const pricingPackages = [
  {
    id: "24jam",
    period: "Harian",
    title: "24 JAM",
    price: 100000,
    features: [
      "Berlaku untuk semua jenis gitar",
      "Durasi sewa 24 jam penuh",
      "Siap pakai & terawat",
    ],
    whatsappMessage:
      "Halo SEWAGITAR.COM, saya ingin sewa paket 24 Jam (Rp100.000).",
    highlight: false,
    tag: null,
  },
  {
    id: "1minggu",
    period: "Mingguan",
    title: "1 MINGGU",
    price: 300000,
    features: [
      "Berlaku untuk semua jenis gitar",
      "Lebih hemat untuk latihan/projek",
      "Perpanjangan mudah via WhatsApp",
    ],
    whatsappMessage:
      "Halo SEWAGITAR.COM, saya ingin sewa paket 1 Minggu (Rp300.000).",
    highlight: true,
    tag: "LEBIH HEMAT",
  },
  {
    id: "1bulan",
    period: "Bulanan",
    title: "1 BULAN",
    price: 1000000,
    features: [
      "Berlaku untuk semua jenis gitar",
      "Solusi terbaik jangka panjang",
      "Nilai ekonomis maksimal",
    ],
    whatsappMessage:
      "Halo SEWAGITAR.COM, saya ingin sewa paket 1 Bulan (Rp1.000.000).",
    highlight: false,
    tag: "PALING HEMAT",
  },
];

export default products;
