import products from '../../data/products';
import FloatingWA from '../../components/FloatingWA';

// Harga paket standar (acuan JIP) — mulai dari 24 jam
function formatRupiah(num: number): string {
  return 'Rp ' + num.toLocaleString('id-ID');
}

export default function GitarPage() {
  return (
    <div className="min-h-screen bg-surface-deep text-white">
      {/* Header */}
      <header className="bg-surface-raised border-b border-brand-600/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center font-bold text-slate-900 text-lg">SG</div>
            <span className="font-heading text-xl font-bold text-white tracking-wide">SEWAGITAR.COM</span>
          </a>
          
          <nav className="hidden md:flex space-x-6">
            <a href="/gitar" className="text-brand-500 font-semibold">Katalog</a>
            <a href="/cara-sewa" className="text-text-secondary hover:text-brand-500 transition-colors">Cara Sewa</a>
            <a href="/faq" className="text-text-secondary hover:text-brand-500 transition-colors">FAQ</a>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-4xl font-bold text-white mb-4">Pilih Gitar Anda</h1>
        <p className="text-text-muted text-lg mb-8">Tersedia 3 kategori instrumen berkualitas yang dirawat rutin dan siap pakai.</p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <a href={`/gitar/${product.slug}`} key={product.id} className="group">
              <div className="bg-surface-raised rounded-xl overflow-hidden shadow-xl border border-brand-600/20 group-hover:border-brand-500/40 transition-all h-full flex flex-col">
                <div className="h-64 bg-surface-base overflow-hidden">
                  <img
                    src={`/images/guitars/${product.image}`}
                    alt={`Gitar ${product.type} untuk disewa`}
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-white text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-brand-500 font-semibold mb-3 uppercase tracking-wide">{product.type}</p>
                  
                  <p className="text-text-muted text-sm mb-4 line-clamp-2 flex-1">{product.description}</p>
                  
                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                    <div className="text-brand-500 font-bold text-lg">{formatRupiah(100000)}<span className="text-sm text-text-muted font-normal">/24 jam</span></div>
                    <button className="bg-accent-primary hover:bg-accent-hover text-white font-semibold px-4 py-2 rounded-lg transition-all text-sm">Lihat Detail</button>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <FloatingWA />
    </div>
  );
}