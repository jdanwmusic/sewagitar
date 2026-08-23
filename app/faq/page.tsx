export default function FaqPage() {
  const faqs = [
    { q: "Berapa harga sewa minimum?", a: "Harga sewa bervariasi tergantung jenis gitar, mulai dari Rp 35.000/hari hingga Rp 160.000/hari." },
    { q: "Berapa deposit yang diperlukan?", a: "Deposit berkisar Rp 600.000 - Rp 2.500.000 tergantung nilai instrument yang disewa." },
    { q: "Apakah bisa sewa harian?", a: "Ya! Kami melayani sewa fleksibel mulai dari 1 hari hingga bulanan dengan diskon jangka panjang." },
    { q: "Apakah bisa dikirim ke lokasi?", a: "Ya! Kami melayani pengiriman ke seluruh Jabodetabek dengan biaya tambahan transparan." },
    { q: "Bagaimana jika gitar rusak?", a: "Normal wear tear tidak menjadi masalah. Kerusakan berat akibat kelalaian dikenakan biaya reparasi." },
    { q: "Apa saja yang termasuk paket rental?", a: "Instrument utama + hardcase/gigbag standar + aksesori dasar (kabel, strap)." }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="bg-slate-800 border-b border-brand-600/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center font-bold text-slate-900 text-lg">SG</div>
            <span className="font-heading text-xl font-bold text-white tracking-wide">SEWAGITAR.COM</span>
          </a>
          <a href="/gitar" className="text-slate-300 hover:text-brand-500 transition-colors">Katalog</a>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-4xl font-bold text-white mb-4">Pertanyaan Umum</h1>
        <p className="text-slate-400 text-lg mb-12">Info lengkap tentang layanan penyewaan kami</p>

        <div className="max-w-3xl space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white/5 rounded-xl p-6 border border-slate-700 hover:border-brand-500/30 transition-all">
              <h3 className="font-bold text-white text-lg mb-3">{faq.q}</h3>
              <p className="text-slate-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h3 className="font-heading text-2xl font-bold text-white mb-4">Masih Ada Pertanyaan?</h3>
          <p className="text-slate-400 mb-6">Tim kami siap membantu menjawab pertanyaan Anda</p>
          <a 
            href="https://wa.me/6287748514337?text=Halo%2C%20saya%20punya%20pertanyaan%20tambahan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg text-lg">
            Chat WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
