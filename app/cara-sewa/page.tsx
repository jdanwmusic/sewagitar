export default function CaraSewaPage() {
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
        <h1 className="font-heading text-4xl font-bold text-white mb-4">Cara Sewa</h1>
        <p className="text-slate-400 text-lg mb-12">Proses sederhana dalam 4 langkah mudah</p>

        {/* Steps */}
        <div className="space-y-8 max-w-3xl">
          {[
            { step: '01', title: 'Pilih Gitar', desc: 'Lihat katalog gitar yang tersedia dan pilih instrument yang sesuai dengan kebutuhan Anda.' },
            { step: '02', title: 'Hubungi WhatsApp', desc: 'Klik tombol "Sewa via WhatsApp" pada produk atau chat langsung ke nomor WhatsApp kami.' },
            { step: '03', title: 'Konfirmasi Detail', desc: 'Tentukan tanggal sewa, durasi rental, metode pengambilan/pengiriman.' },
            { step: '04', title: 'Selesai!', desc: 'Ambil gitar di workshop kami atau tunggu pengiriman ke lokasi Anda.' }
          ].map((item) => (
            <div key={item.step} className="bg-slate-800 rounded-xl p-6 border border-slate-700 flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center font-bold text-slate-900 text-2xl">{item.step}</div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-brand-600 to-brand-700 rounded-xl p-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-slate-900 mb-4">Butuh Bantuan?</h2>
          <p className="text-slate-900 mb-6">Tim kami siap membantu Anda melalui WhatsApp</p>
          <a 
            href="https://wa.me/6287748514337?text=Halo%2C%20saya%20butuh%20bantuan%20untuk%20menyewa%20gitar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-100 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg">
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
