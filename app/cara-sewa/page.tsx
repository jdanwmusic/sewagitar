import FloatingWA from '../../components/FloatingWA';

export default function CaraSewaPage() {
  return (
    <div className="min-h-screen bg-surface-deep text-white">
      <header className="bg-surface-raised border-b border-brand-600/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center font-bold text-slate-900 text-lg">SG</div>
            <span className="font-heading text-xl font-bold text-white tracking-wide">SEWAGITAR.COM</span>
          </a>
          <a href="/gitar" className="text-text-secondary hover:text-brand-500 transition-colors">Katalog</a>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-4xl font-bold text-white mb-4">Cara Sewa Gitar</h1>
        <p className="text-text-muted text-lg mb-12">Proses peminjaman cepat dan mudah tanpa prosedur rumit.</p>

        {/* Steps */}
        <div className="space-y-8 max-w-3xl">
          {[
            { step: '01', title: 'Pilih Gitar', desc: 'Pilih gitar elektrik, akustik, atau bass yang sesuai dengan kebutuhan musik Anda.' },
            { step: '02', title: 'Hubungi Kami', desc: 'Hubungi melalui WhatsApp untuk menanyakan ketersediaan stok gitar pilihan Anda.' },
            { step: '03', title: 'Tentukan Durasi', desc: 'Pilih durasi sewa 24 jam, mingguan (1 minggu), atau bulanan (1 bulan).' },
            { step: '04', title: 'Antar atau Ambil', desc: 'Gitar dapat diantar ke lokasi Anda atau diambil langsung di lokasi usaha (Duri Kosambi, Cengkareng).' }
          ].map((item) => (
            <div key={item.step} className="bg-surface-raised rounded-xl p-6 border border-border-subtle flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center font-bold text-slate-900 text-2xl">{item.step}</div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-brand-600 to-brand-700 rounded-xl p-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-slate-900 mb-4">Butuh Bantuan?</h2>
          <p className="text-slate-900 mb-6">Tim kami siap membantu Anda melalui WhatsApp</p>
          <a 
            href="https://wa.me/6287748514337?text=Halo%20SEWAGITAR.COM%2C%20saya%20butuh%20bantuan%20untuk%20menyewa%20gitar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-100 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg">
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>

      <FloatingWA />
    </div>
  );
}