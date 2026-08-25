export default function ProductYamahaFG830() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="bg-slate-800 border-b border-brand-600/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <a href="/" className="text-slate-300 hover:text-white transition-colors">&larr; Kembali ke Katalog</a>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-4xl font-bold text-white mb-4">Yamaha FG830</h1>
        
        <p className="text-slate-400 mb-6">Yamaha • Acoustic</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="/images/guitars/yamaha-fg830.jpg"
                alt="Gitar akustik Yamaha FG830"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700">
              <div className="text-3xl font-bold text-brand-500 mb-2">
                Rp 75.000<span className="text-lg text-slate-400 font-normal">/hari</span>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-700 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-400">Deposit:</span> <span className="font-semibold">Rp 1.200.000</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Status:</span> <span className="text-green-500">Tersedia</span></div>
              </div>
            </div>

            <h3 className="font-bold text-white text-lg mb-3">Deskripsi</h3>
            <p className="text-slate-400 leading-relaxed mb-6">Gitar akustik solid-spruce top dengan suara jernih dan balanced. Perfect untuk cover band, latihan, maupun recording.</p>

            <a 
              href="https://wa.me/6287748514337?text=Halo%20Sewagitar%2C%20saya%20tertarik%20menyewa%20Yamaha%20FG830.%20Apakah%20masih%20tersedia%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-lg w-full text-center text-lg">
              Sewa via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
