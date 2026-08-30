import { notFound } from 'next/navigation';
import products, { pricingPackages } from '../../../data/products';
import FloatingWA from '../../../components/FloatingWA';

function formatRupiah(num: number): string {
  return 'Rp ' + num.toLocaleString('id-ID');
}

// Wajib untuk output: export — pre-generate semua halaman detail
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const message = product.whatsappMessage
    ? encodeURIComponent(product.whatsappMessage)
    : encodeURIComponent(`Halo SEWAGITAR.COM, saya ingin menyewa ${product.name}.`);

  return (
    <div className="min-h-screen bg-surface-base text-slate-900">
      <header className="bg-white border-b border-border-subtle sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <a href="/gitar" className="text-ocean-deep hover:text-ocean-deep transition-colors">&larr; Kembali ke Katalog</a>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <div className="bg-surface-soft rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src={`/images/guitars/${product.image}`}
                alt={`Gitar ${product.type} untuk disewa`}
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-display text-4xl font-bold text-white mb-4">{product.name}</h1>

            <div className="mb-6 inline-block bg-ocean-deep/8 text-ocean-deep font-semibold px-3 py-1 rounded-full text-sm uppercase tracking-wide">
              {product.type}
            </div>

            <h3 className="font-bold text-white text-lg mb-3">Deskripsi</h3>
            <p className="text-slate-500 leading-relaxed mb-6">{product.description}</p>

            <h3 className="font-bold text-white text-lg mb-4">Harga Sewa</h3>
            <div className="space-y-4 mb-8">
              {pricingPackages.map((pkg) => (
                <div key={pkg.id} className={`rounded-xl p-4 border ${pkg.highlight ? 'bg-ocean-deep/5 border-ocean-deep/30' : 'bg-surface-soft border-border-subtle'}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-500 text-sm">{pkg.period}</span>
                    {pkg.tag && (
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${pkg.highlight ? 'bg-brand-500 text-slate-900' : 'bg-ocean-sea/20 text-ocean-sea'}`}>{pkg.tag}</span>
                    )}
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div className="font-display text-xl font-bold">
                      {pkg.title}
                    </div>
                    <div className="text-ocean-deep font-bold text-2xl">{formatRupiah(pkg.price)}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/6287748514337?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-ocean-deep hover:bg-ocean-deep/90 text-white font-semibold px-6 py-4 rounded-lg w-full text-center text-lg">
              Sewa via WhatsApp
            </a>
          </div>
        </div>
      </div>

      <FloatingWA />
    </div>
  );
}