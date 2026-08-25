import { notFound } from 'next/navigation';
import products from '../../../data/products';

function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

function formatRupiah(num: number): string {
  return 'Rp ' + num.toLocaleString('id-ID');
}

// Wajib untuk output: export — pre-generate semua halaman detail
export function generateStaticParams() {
  return products.map((p) => ({ slug: slugify(p.name) }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => slugify(p.name) === slug);

  if (!product) {
    notFound();
  }

  let specs: Record<string, unknown> = {};
  try {
    specs = JSON.parse(product.specs as string);
  } catch {
    specs = {};
  }

  // WhatsApp message default from data (or fallback)
  const message = product.whatsappMessage
    ? encodeURIComponent(product.whatsappMessage)
    : encodeURIComponent(`Halo Sewagitar, saya tertarik menyewa ${product.name}. Apakah masih tersedia?`);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="bg-slate-800 border-b border-brand-600/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <a href="/gitar" className="text-slate-300 hover:text-white transition-colors">&larr; Kembali ke Katalog</a>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src={`/images/guitars/${product.image}`}
                alt={`${product.brand} ${product.name}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-heading text-4xl font-bold text-white mb-4">{product.name}</h1>
            
            <p className="text-slate-400 mb-6">{product.brand} • {product.type}</p>
            
            <div className="bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700">
              <div className="text-3xl font-bold text-brand-500 mb-2">
                {formatRupiah(product.pricePerDay)}<span className="text-lg text-slate-400 font-normal">/hari</span>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-700 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Deposit:</span>
                  <span className="font-semibold">{formatRupiah(product.deposit as number)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Status:</span>
                  <span className="text-green-500 capitalize">{product.status}</span>
                </div>
              </div>
            </div>

            <h3 className="font-bold text-white text-lg mb-3">Deskripsi</h3>
            <p className="text-slate-400 leading-relaxed mb-6">{product.description}</p>

            {Object.keys(specs).length > 0 && (
              <>
                <h3 className="font-bold text-white text-lg mb-3">Spesifikasi</h3>
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6 space-y-2 text-sm">
                  {Object.entries(specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-slate-400 capitalize">{key}</span>
                      <span className="font-semibold">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            <a
              href={`https://wa.me/6287748514337?text=${message}`}
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