export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
            SEWA GITAR,{' '}
            <span className="text-brand-500">GAMPANG.</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Sewa gitar berkualitas untuk latihan, recording, panggung, dan event. 
            Pilihan gitar terawat, harga transparan, proses mudah melalui WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/gitar" className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-slate-900 font-bold px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg">
              Lihat Koleksi Gitar
            </a>
            <a 
              href={`https://wa.me/6287748514337?text=Halo%2C%20saya%20mau%20tanya%20tersedianya%20gitar`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg text-lg">
              Chat WhatsApp
            </a>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="text-brand-500 text-3xl mb-2">✓</div>
              <h3 className="font-bold text-white text-lg mb-2">Kondisi Terawat</h3>
              <p className="text-sm text-slate-400">Setup baru, ready to play</p>
            </div>
            
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="text-brand-500 text-3xl mb-2">💬</div>
              <h3 className="font-bold text-white text-lg mb-2">Proses Mudah</h3>
              <p className="text-sm text-slate-400">Konfirmasi via WhatsApp</p>
            </div>
            
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="text-brand-500 text-3xl mb-2">🚀</div>
              <h3 className="font-bold text-white text-lg mb-2">Delivery Available</h3>
              <p className="text-sm text-slate-400">Jabodetabek same-day</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG PREVIEW */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-white text-center mb-4">Koleksi Gitar</h2>
          <p className="text-center text-slate-400 mb-12 text-lg max-w-2xl mx-auto">
            Pilih instrument terbaik untuk kebutuhan Anda. Semua gitar siap pakai dengan kondisi prima.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <a href={`/gitar/yamaha-fg830`} key={i} className="group">
                <div className="bg-slate-800 rounded-xl overflow-hidden shadow-xl border border-brand-600/20 group-hover:border-brand-500/40 transition-all h-full">
                  <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <div className="text-8xl opacity-20">🎸</div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-white text-xl mb-2">Yamaha FG830</h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                      Gitar akustik solid-spruce top dengan suara jernih dan balanced. Perfect untuk cover band.
                    </p>
                    
                    <div className="pt-4 border-t border-slate-700 flex items-center justify-between">
                      <div className="text-brand-500 font-bold text-lg">Rp 75.000/hari</div>
                      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-all text-sm">
                        Sewa Sekarang
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/gitar" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all text-lg">
              Lihat Semua Gitar →
            </a>
          </div>
        </div>
      </section>

      {/* HOW TO RENT */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-white text-center mb-4">Cara Sewa</h2>
          <p className="text-center text-slate-400 mb-16 text-lg max-w-2xl mx-auto">
            Proses sederhana dalam 4 langkah mudah
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Pilih Gitar', desc: 'Lihat katalog dan pilih instrument yang sesuai' },
              { step: 2, title: 'Hubungi WhatsApp', desc: 'Klik tombol WhatsApp untuk tanya ketersediaan' },
              { step: 3, title: 'Tentukan Detail', desc: 'Sepakati tanggal sewa dan metode pengiriman' },
              { step: 4, title: 'Selesai!', desc: 'Ambil gitar atau tunggu pengiriman' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center font-bold text-slate-900 text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-white text-center mb-4">Pertanyaan Umum</h2>
          
          <div className="max-w-3xl mx-auto mt-12 space-y-4">
            {[
              { q: "Berapa deposit minimum?", a: "Deposit berkisar Rp 600.000 - Rp 2.500.000 tergantung jenis gitar." },
              { q: "Apakah bisa dikirim?", a: "Ya! Kami melayani pengiriman ke seluruh Jabodetabek." },
              { q: "Bagaimana jika alat rusak?", a: "Normal wear tear tidak menjadi masalah." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-6 border border-slate-700 hover:border-brand-500/30 transition-all">
                <h4 className="font-bold text-white text-lg mb-2">{faq.q}</h4>
                <p className="text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/faq" className="inline-block text-brand-500 hover:text-brand-400 font-semibold transition-all text-lg">
              Lihat Semua FAQ →
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-brand-700 text-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-4">Butuh Gitar?</h2>
          <p className="text-lg text-slate-900 mb-8 max-w-2xl mx-auto">
            Langsung hubungi kami untuk konsultasi dan pemesanan. Admin siap membantu 24/7 via WhatsApp.
          </p>
          <a 
            href={`https://wa.me/6287748514337?text=Halo%2C%20saya%20ingin%20menyewa%20gitar`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-100 text-slate-900 font-bold px-12 py-5 rounded-lg text-xl transition-all transform hover:scale-105 shadow-2xl">
            Chat WhatsApp Sekarang
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-brand-600/20 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center font-bold text-slate-900 text-base">SG</div>
                <span className="font-heading text-xl font-bold text-white tracking-wide">SEWAGITAR.COM</span>
              </div>
              <p className="text-slate-400 text-sm">Partner penyewaan alat musik terpercaya untuk musisi profesional di Jabodetabek.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Navigasi</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/" className="hover:text-brand-500">Home</a></li>
                <li><a href="/gitar" className="hover:text-brand-500">Katalog Gitar</a></li>
                <li><a href="/cara-sewa" className="hover:text-brand-500">Cara Sewa</a></li>
                <li><a href="/faq" className="hover:text-brand-500">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Produk</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/gitar?type=acoustic" className="hover:text-brand-500">Gitar Akustik</a></li>
                <li><a href="/gitar?type=electric" className="hover:text-brand-500">Gitar Elektrik</a></li>
                <li><a href="/gitar?type=bass" className="hover:text-brand-500">Bass Guitar</a></li>
                <li><a href="/gitar?type=amplifier" className="hover:text-brand-500">Amplifier</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Kontak</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center"><span className="text-brand-500 mr-2">📞</span> 0877-4851-4337</li>
                <li className="flex items-center"><span className="text-brand-500 mr-2">📍</span> Jakarta & Jabodetabek</li>
                <li className="flex items-center"><span className="text-brand-500 mr-2">⏰</span> Senin - Sabtu: 09.00-18.00</li>
                <li className="flex items-center"><span className="text-brand-500 mr-2">✉️</span> info@sewagitar.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; 2026 SEWAGITAR.COM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
