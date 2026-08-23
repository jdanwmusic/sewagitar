export default function GitarPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-brand-600/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center font-bold text-slate-900 text-lg">SG</div>
            <span className="font-heading text-xl font-bold text-white tracking-wide">SEWAGITAR.COM</span>
          </a>
          
          <nav className="hidden md:flex space-x-6">
            <a href="/gitar" className="text-brand-500 font-semibold">Katalog</a>
            <a href="/cara-sewa" className="text-slate-300 hover:text-brand-500 transition-colors">Cara Sewa</a>
            <a href="/faq" className="text-slate-300 hover:text-brand-500 transition-colors">FAQ</a>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-4xl font-bold text-white mb-4">Katalog Gitar</h1>
        <p className="text-slate-400 text-lg mb-8">Pilih instrument terbaik untuk kebutuhan Anda.</p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <a href={`/gitar/yamaha-fg830`} key={i} className="group">
              <div className="bg-slate-800 rounded-xl overflow-hidden shadow-xl border border-brand-600/20 group-hover:border-brand-500/40 transition-all h-full">
                <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <div className="text-8xl opacity-20">🎸</div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-white text-lg mb-2">{i === 1 ? 'Yamaha FG830' : i === 2 ? 'Fender Stratocaster' : 'Gibson Les Paul'}</h3>
                  <p className="text-sm text-slate-400 mb-4">{i === 1 ? 'Acoustic' : i === 2 ? 'Electric' : 'Electric'}</p>
                  
                  <div className="pt-4 border-t border-slate-700 flex items-center justify-between">
                    <div className="text-brand-500 font-bold text-lg">Rp {(75000 + i * 25000).toLocaleString('id-ID')}/hari</div>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-all text-sm">Sewa Sekarang</button>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
