import { Metadata } from "next";
import products, { categories } from "../../data/products";
import { absoluteUrl, productUrl, productTitle, productDescription } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Katalog Sewa Gitar – Elektrik, Akustik & Bass | SEWAGITAR.COM",
  description:
    "Lihat semua pilihan sewa gitar: elektrik, akustik, dan bass. Rental mulai Rp100.000/24 jam untuk Jakarta & Tangerang.",
  keywords: [
    "sewa gitar",
    "katalog gitar",
    "sewa gitar elektrik",
    "sewa gitar akustik",
    "sewa gitar bass",
  ],
  alternates: { canonical: absoluteUrl("/gitar") },
  openGraph: {
    title: "Katalog Sewa Gitar – Elektrik, Akustik & Bass | SEWAGITAR.COM",
    description:
      "Lihat semua pilihan sewa gitar untuk Jakarta & Tangerang. Siap pakai, terawat, dan tersedia.",
    url: absoluteUrl("/gitar"),
    siteName: "SEWAGITAR.COM",
    locale: "id_ID",
    type: "website",
    images: [{ url: absoluteUrl("/images/guitars/gitar-elektrik.jpg"), width: 800, height: 600, alt: "Katalog gitar SEWAGITAR" }],
  },
};

export default function GitarPage() {
  return (
    <main className="min-h-screen bg-surface-base">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="font-display text-4xl md:text-5xl font-medium text-ocean-deep mb-4 text-center">
          Katalog Gitar
        </h1>
        <p className="text-slate-500 text-center max-w-xl mx-auto mb-12">
          Pilih instrumen yang sesuai dengan kebutuhan Anda — semua siap pakai dan terawat rutin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <a
              href={productUrl(product.slug)}
              key={product.id}
              className="card group flex flex-col overflow-hidden hover:shadow-card-hover transition-shadow"
            >
              <div className="min-h-[260px] sm:min-h-[300px] bg-surface-soft overflow-hidden relative">
                <img
                  src={`/images/guitars/${product.image}`}
                  alt={`${product.name} untuk disewa — ${product.instrumentType}`}
                  className="w-full h-full object-contain transition-transform group-hover:scale-105"
                  loading="lazy"
                  width={400}
                  height={300}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="font-display text-xl font-medium text-slate-900 mb-1">
                  {product.name}
                </h2>
                <p className="text-ocean-sea text-xs font-medium uppercase tracking-wide mb-3">
                  {product.instrumentType}
                </p>
                <p className="text-slate-500 text-sm mb-4 flex-1 leading-relaxed">{product.description}</p>
                <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                  <div className="font-mono text-ocean-deep font-medium text-lg">
                    {product.price24h ? "Rp " + product.price24h.toLocaleString("id-ID") : ""}
                    <span className="text-xs text-slate-400 font-normal">/24 jam</span>
                  </div>
                  <span className="text-ocean-sea text-sm font-medium group-hover:underline">Lihat Detail →</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Category navigation */}
        <div className="mt-16 text-center">
          <h3 className="font-display text-xl font-medium text-slate-900 mb-4">Kategori</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <a
                key={cat.slug}
                href={productUrl(cat.slug)}
                className="inline-block bg-ocean-deep/8 text-ocean-deep font-medium px-4 py-2 rounded-full text-sm hover:bg-ocean-deep hover:text-white transition-colors"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
