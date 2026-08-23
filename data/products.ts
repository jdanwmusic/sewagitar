// @ts-check

/**
 * KATALOG GITAR SEWAGITAR.COM
 * 
 * CARA MENAMBAH/MENGEDIT PRODUK:
 * 1. Tambahkan object ke dalam array `products` di bawah ini
 * 2. Isi semua field yang diperlukan
 * 3. Simpan file
 * 
 * FIELD YANG PERLU DIISI:
 * - name: Nama produk (contoh: "Yamaha FG830")
 * - brand: Merek (contoh: "Yamaha")
 * - type: Tipe gitar (Acoustic, Electric, Bass, Classical)
 * - description: Deskripsi singkat 1-2 kalimat
 * - specs: String JSON berisi spesifikasi teknis
 * - pricePerDay: Harga sewa per hari (dalam Rupiah, angka saja tanpa Rp)
 * - deposit: Jaminan/deposit (dalam Rupiah, angka saja)
 * - status: "available" atau "unavailable"
 * - image: Nama file gambar di public/images/guitars/
 * - featured: true/false untuk tampilkan di homepage
 * - whatsappMessage: Pesan otomatis WhatsApp jika tersedia
 */

const products = [
  {
    id: 1,
    name: "Yamaha FG830",
    brand: "Yamaha",
    type: "Acoustic",
    description: "Gitar akustik solid-spruce top dengan suara jernih dan balanced. Perfect untuk cover band, latihan, maupun recording.",
    specs: JSON.stringify({
      bodyType: "Dreadnought",
      top: "Solid Spruce",
      backSides: "Rosewood",
      neck: "Mahogany",
      fretboard: "Rosewood",
      pickup: "None",
      color: "Natural"
    }),
    pricePerDay: 75000,
    deposit: 1200000,
    status: "available",
    image: "yamaha-fg830.jpg",
    featured: true,
    whatsappMessage: "Halo Sewagitar, saya tertarik menyewa Yamaha FG830. Apakah masih tersedia?"
  },
  {
    id: 2,
    name: "Fender Stratocaster Player",
    brand: "Fender",
    type: "Electric",
    description: "Elektrik dengan suara versatile untuk blues, rock, pop. Setup baru ready to play dengan hardware berkualitas.",
    specs: JSON.stringify({
      bodyType: "Solid Body",
      wood: "Alder",
      neck: "Maple",
      pickup: "3x Single Coil (Player Series)",
      bridge: "2-Point Synchronized Tremolo",
      frets: 22,
      color: "Sunburst"
    }),
    pricePerDay: 95000,
    deposit: 1500000,
    status: "available",
    image: "fender-stratocaster.jpg",
    featured: true,
    whatsappMessage: "Halo Sewagitar, saya tertarik menyewa Fender Stratocaster Player. Apakah masih tersedia?"
  },
  {
    id: 3,
    name: "Gibson Les Paul Studio",
    brand: "Gibson",
    type: "Electric",
    description: "Les Paul klasik dengan tone warm thick yang iconic. Cocok untuk hard rock, metal, dan blues.",
    specs: JSON.stringify({
      bodyType: "Solid Body",
      top: "Mahogany with Maple cap",
      neck: "Mahogany",
      pickup: "2x BurstBucker Pro",
      bridge: "Tune-O-Matic",
      frets: 22,
      color: "Ebony"
    }),
    pricePerDay: 160000,
    deposit: 2500000,
    status: "available",
    image: "gibson-les-paul.jpg",
    featured: true,
    whatsappMessage: "Halo Sewagitar, saya tertarik menyewa Gibson Les Paul Studio. Apakah masih tersedia?"
  },
  {
    id: 4,
    name: "Fender Jazz Bass Active",
    brand: "Fender",
    type: "Bass",
    description: "Bass modern dengan active pickups. Punchy low-end cocok untuk funk, jazz, rock, dan segala genre musik.",
    specs: JSON.stringify({
      bodyType: "Jazz Bass",
      wood: "Ash",
      neck: "Maple",
      pickup: "2x Active Humbuckers",
      bridge: "FM Hi-Ride",
          strings: 4,
          scale: "34\"",
          color: "Black"
    }),
    pricePerDay: 105000,
    deposit: 1700000,
    status: "available",
    image: "fender-jazz-bass.jpg",
    featured: false,
    whatsappMessage: "Halo Sewagitar, saya tertarik menyewa Fender Jazz Bass Active. Apakah masih tersedia?"
  },
  {
    id: 5,
    name: "Ibanez RG670M",
    brand: "Ibanez",
    type: "Electric",
    description: "Superstrat untuk shredding dengan Floyd Rose tremolo & fast neck profile. Perfect untuk metal & fusion.",
    specs: JSON.stringify({
      bodyType: "Superstrat",
      wood: "Poplar",
      neck: "MAPLE/walnut/maple",
      pickup: "2x Ibanez Infinity Humbucker",
      bridge: "Floyd Rose Special",
      frets: 24,
      color: "Midnight Blue"
    }),
    pricePerDay: 85000,
    deposit: 1400000,
    status: "available",
    image: "ibanez-rg670m.jpg",
    featured: false,
    whatsappMessage: "Halo Sewagitar, saya tertarik menyewa Ibanez RG670M. Apakah masih tersedia?"
  },
  {
    id: 6,
    name: "Yamaha C40 Classical",
    brand: "Yamaha",
    type: "Classical",
    description: "Gitar klasik tradisional dengan nylon string. Suara hangat cocok untuk flamenco, bossa nova, dan komposisi klasik.",
    specs: JSON.stringify({
      bodyType: "Classical",
      top: "Spruce",
      backSides: "Nato",
      neck: "Nato",
      fretboard: "Rosewood",
      strings: "Nylon",
      color: "Natural"
    }),
    pricePerDay: 60000,
    deposit: 1000000,
    status: "available",
    image: "yamaha-c40.jpg",
    featured: false,
    whatsappMessage: "Halo Sewagitar, saya tertarik menyewa Yamaha C40 Classical. Apakah masih tersedia?"
  },
  {
    id: 7,
    name: "Fender Frontman 40",
    brand: "Fender",
    type: "Amplifier",
    description: "Amplifier gitar 40W dengan built-in effects. Perfect untuk latihan di rumah atau panggung kecil.",
    specs: JSON.stringify({
      power: "40W",
      speaker: "1x12\" Fender Special Design",
      channels: "2",
      effects: "Digital Reverb",
      inputs: "Instrument, Aux In, Headphone",
      weight: "11.8 kg",
      color: "Black"
    }),
    pricePerDay: 45000,
    deposit: 800000,
    status: "available",
    image: "fender-frontman40.jpg",
    featured: false,
    whatsappMessage: "Halo Sewagitar, saya tertarik menyewa Fender Frontman 40 Amplifier. Apakah masih tersedia?"
  },
  {
    id: 8,
    name: "Boss ME-80 Multi-FX",
    brand: "Boss",
    type: "Effects",
    description: "Pedalboard all-in-one dengan 80+ efek factory preset. Compact & powerful untuk berbagai gaya bermain.",
    specs: JSON.stringify({
      effects: "80+ presets",
      ampModels: "10",
      input: "Mono 1/4\"",
      output: "Stereo 1/4\"",
          features: "Built-in Looper, Metronome, USB Audio Interface",
      power: "AC Adapter (included)",
      size: "Compact"
    }),
    pricePerDay: 35000,
    deposit: 600000,
    status: "available",
    image: "boss-me80.jpg",
    featured: false,
    whatsappMessage: "Halo Sewagitar, saya tertarik menyewa Boss ME-80 Multi-FX. Apakah masih tersedia?"
  }
];

export default products;
