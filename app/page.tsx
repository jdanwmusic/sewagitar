import products, { pricingPackages } from '../data/products';
import FloatingWA from '../components/FloatingWA';

function formatRupiah(num: number): string {
  return 'Rp ' + num.toLocaleString('id-ID');
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm text-slate-300">Layanan Cepat Jakarta & Tangerang</span>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
            SEWA GITAR <br className="hidden md:block" />
            <span className="text-brand-500">DI JAKARTA & TANGERANG</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Gitar elektrik, akustik, dan bass siap disewa untuk berbagai kebutuhan rekaman, latihan, atau panggung.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/gitar" className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-slate-900 font-bold px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg">
              Lihat Pilihan Gitar
            </a>
            <a 
              href="https://wa.me/6287748514337?text=Halo%20SEWAGITAR.COM%2C%20saya%20ingin%20menyewa%20gitar."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg text-lg">
              Sewa Sekarang via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CATALOG PREVIEW — 3 kategori JIP */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-white text-center mb-4">Pilih Gitar yang Kamu Butuhkan</h2>
          <p className="text-center text-slate-400 mb-12 text-lg max-w-2xl mx-auto">
            Tersedia 3 kategori instrumen berkualitas yang dirawat rutin dan siap pakai.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.filter((p) => p.featured).map((product) => (
              <a href={`/gitar/${product.slug}`} key={product.id} className="group">
                <div className="bg-slate-800 rounded-xl overflow-hidden shadow-xl border border-brand-600/20 group-hover:border-brand-500/40 transition-all h-full flex flex-col">
                  <div className="h-64 bg-slate-900 overflow-hidden">
                    <img
                      src={`/images/guitars/${product.image}`}
                      alt={`Gitar ${product.type} untuk disewa`}
                      className="w-full h-full object-contain p-4"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-white text-xl mb-1">{product.name}</h3>
                    <p className="text-brand-500 text-sm font-semibold uppercase tracking-wide mb-3">{product.type}</p>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-1">{product.description}</p>
                    
                    <div className="pt-4 border-t border-slate-700 flex items-center justify-between">
                      <div className="text-brand-500 font-bold text-lg">{formatRupiah(100000)}<span className="text-sm text-slate-400 font-normal">/24 jam</span></div>
                      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-all text-sm">
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/gitar" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all text-lg">
              Lihat Semua Pilihan →
            </a>
          </div>
        </div>
      </section>

      {/* HARGA SEWA — 3 paket JIP */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-white text-center mb-4">Harga Sewa Sederhana</h2>
          <p className="text-center text-slate-400 mb-16 text-lg max-w-2xl mx-auto">
            Tarif flat yang sama untuk seluruh kategori instrumen: Gitar Elektrik • Gitar Akustik • Gitar Bass
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPackages.map((pkg) => (
              <div key={pkg.id} className={`rounded-xl p-8 ${pkg.highlight ? 'bg-brand-500/10 border-2 border-brand-500/50' : 'bg-slate-900 border border-slate-700'} flex flex-col`}>
                {pkg.tag && (
                  <span className={`inline-block self-start text-xs font-bold px-2 py-0.5 rounded mb-3 ${pkg.highlight ? 'bg-brand-500 text-slate-900' : 'bg-blue-500/20 text-blue-400'}`}>{pkg.tag}</span>
                )}
                <span className="text-slate-400 text-sm mb-1">{pkg.period}</span>
                <div className="font-heading text-2xl font-bold text-white mb-2">{pkg.title}</div>
                <div className="text-brand-500 font-bold text-4xl mb-6">{formatRupiah(pkg.price)}</div>
                <ul className="space-y-2 text-slate-400 text-sm mb-8 flex-1">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand-500 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/6287748514337?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center font-semibold px-4 py-3 rounded-lg transition-all ${pkg.highlight ? 'bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-slate-900 font-bold' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                  Pilih Paket {pkg.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO RENT — langkah JIP */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-white text-center mb-4">Cara Sewa Gitar</h2>
          <p className="text-center text-slate-400 mb-16 text-lg max-w-2xl mx-auto">
            Proses peminjaman cepat dan mudah tanpa prosedur rumit.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Pilih Gitar', desc: 'Pilih gitar elektrik, akustik, atau bass yang sesuai dengan kebutuhan musik Anda.' },
              { step: 2, title: 'Hubungi Kami', desc: 'Hubungi melalui WhatsApp untuk menanyakan ketersediaan stok gitar pilihan Anda.' },
              { step: 3, title: 'Tentukan Durasi', desc: 'Pilih durasi sewa 24 jam, mingguan (1 minggu), atau bulanan (1 bulan).' },
              { step: 4, title: 'Antar atau Ambil', desc: 'Gitar dapat diantar ke lokasi Anda atau diambil langsung di lokasi usaha.' }
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

      {/* AREA LAYANAN — Jakarta & Tangerang + alamat */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <span className="inline-block bg-brand-500/20 text-brand-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Cakupan Wilayah
                </span>
                <h2 className="font-heading text-3xl font-bold text-white mb-4">Melayani Jakarta & Tangerang</h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  SEWAGITAR.COM melayani penyewaan gitar khusus untuk area Jakarta dan Tangerang dengan akses mudah untuk penjemputan langsung maupun pengantaran kurir.
                </p>
                <div className="flex items-start gap-3 mb-8">
                  <span className="text-brand-500 text-xl mt-1">📍</span>
                  <div>
                    <strong className="text-white block mb-1">Alamat Usaha:</strong>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Jl.+Semanan+Pintu+Air+No.+37+Duri+Kosambi+Cengkareng+Jakarta+Barat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 text-sm hover:text-brand-400 underline underline-offset-2 transition-colors"
                    >
                      Jl. Semanan Pintu Air No. 37, RT 07/RW 12, Duri Kosambi, Kecamatan Cengkareng, Jakarta Barat
                    </a>
                  </div>
                </div>
                <a
                  href="https://wa.me/6287748514337?text=Halo%20SEWAGITAR.COM%2C%20saya%20ingin%20tanya%20layanan%20pengantaran%20area%20Jakarta%20Tangerang."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-slate-900 font-bold px-6 py-3 rounded-lg transition-all">
                  Tanyakan Area Pengantaran
                </a>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 flex flex-col justify-center">
                <div className="text-brand-500 text-4xl mb-4">🎸</div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Jakarta & Tangerang</h3>
                <p className="text-slate-400">Siap melayani pengambilan langsung di Duri Kosambi Cengkareng atau koordinasi pengiriman wilayah Jabodetabek terdekat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-brand-700 text-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-4">Butuh Gitar untuk Disewa?</h2>
          <p className="text-lg text-slate-900 mb-8 max-w-2xl mx-auto">
            Hubungi kami melalui WhatsApp untuk mengecek ketersediaan gitar pilihan Anda hari ini.
          </p>
          <a 
            href="https://wa.me/6287748514337?text=Halo%20SEWAGITAR.COM%2C%20saya%20butuh%20gitar%20untuk%20disewa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-100 text-slate-900 font-bold px-12 py-5 rounded-lg text-xl transition-all transform hover:scale-105 shadow-2xl">
            Sewa Sekarang via WhatsApp
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
              <p className="text-slate-400 text-sm">Solusi praktis penyewaan gitar elektrik, akustik, dan bass untuk area Jakarta dan Tangerang.</p>
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
              <h4 className="font-bold text-white mb-4">Kategori</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/gitar/gitar-elektrik" className="hover:text-brand-500">Gitar Elektrik</a></li>
                <li><a href="/gitar/gitar-akustik" className="hover:text-brand-500">Gitar Akustik</a></li>
                <li><a href="/gitar/gitar-bass" className="hover:text-brand-500">Gitar Bass</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Kontak</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="https://wa.me/6287748514337" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-brand-500"><span className="text-brand-500 mr-2">📞</span> 0877-4851-4337</a></li>
                <li><a href="mailto:jdanwmusic@gmail.com" className="flex items-center hover:text-brand-500"><span className="text-brand-500 mr-2">✉️</span> jdanwmusic@gmail.com</a></li>
                <li><a href="https://www.facebook.com/share/1BkS7NkLxN/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-brand-500"><span className="text-brand-500 mr-2">📘</span> Facebook SEWAGITAR.COM</a></li>
                <li className="flex items-start"><span className="text-brand-500 mr-2 mt-0.5">📍</span> <a href="https://www.google.com/maps/search/?api=1&query=Jl.+Semanan+Pintu+Air+No.+37+Duri+Kosambi+Cengkareng+Jakarta+Barat" target="_blank" rel="noopener noreferrer" className="hover:text-brand-500 underline underline-offset-2">Jl. Semanan Pintu Air No. 37, Duri Kosambi, Cengkareng, Jakarta Barat</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm space-y-1">
            <p>&copy; 2026 SEWAGITAR.COM. All rights reserved.</p>
            <p>Sewa Gitar Elektrik, Akustik, & Bass Jakarta & Tangerang</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <FloatingWA />
    </div>
  );
}