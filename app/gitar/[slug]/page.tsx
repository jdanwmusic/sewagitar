import { notFound } from "next/navigation";
import { Metadata } from "next";
import { products } from "../../../data/products";
import FloatingWA from "../../../components/FloatingWA";
import Breadcrumb from "../../../components/Breadcrumb";
import {
  productTitle,
  productDescription,
  productUrl,
  absoluteUrl,
  productJsonLd,
  breadcrumbJsonLd,
  relatedProducts,
  sameTypeProducts,
  formatRupiah,
  SITE_URL,
} from "../../../lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Pre-generate all product routes at build time
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

// Dynamic metadata per product — unique title/description/H1
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  const title = productTitle(product);
  const description = productDescription(product);
  const url = productUrl(slug);
  const imageUrl = absoluteUrl(`/images/guitars/${product.image}`);

  return {
    title,
    description,
    keywords: product.seoKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "SEWAGITAR.COM",
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: `${product.name} untuk disewa di SEWAGITAR.COM`,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const imageUrl = absoluteUrl(`/images/guitars/${product.image}`);
  const pageUrl = productUrl(slug);
  const related = relatedProducts(product, 2);
  const sameType = sameTypeProducts(product, 4);

  const whatsappMsg = product.whatsappMessage
    ? encodeURIComponent(product.whatsappMessage)
    : encodeURIComponent(`Halo SEWAGITAR.COM, saya ingin menyewa ${product.name}.`);

  // JSON-LD: Product schema + BreadcrumbList
  const productSchema = productJsonLd(product, imageUrl);
  const breadcrumbSchema = breadcrumbJsonLd(product);

  return (
    <>
      {/* ── Structured Data ─────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-surface-base text-slate-900">
        {/* ── Sticky nav bar ────────────────────────────────── */}
        <header className="bg-white border-b border-border-subtle sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-ocean-deep rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11.5 2C6.8 2 3 5.8 3 10.5c0 2.6 1.2 5 3.2 6.6L5 21l4.4-1.4C10.7 20.2 12.3 21 14 21c1 0 2-.2 2.9-.5"/>
                  <path d="M16 8l3 3m-3-3l3 3"/>
                </svg>
              </div>
              <span className="font-heading font-semibold text-ocean-deep text-lg tracking-tight">
                SEWAGITAR<span className="text-ocean-sea">.com</span>
              </span>
            </a>
            <nav className="flex items-center gap-6 text-sm text-slate-600">
              <a href="/" className="hover:text-ocean-deep transition-colors">Beranda</a>
              <a href="/gitar" className="text-ocean-deep font-medium">Katalog</a>
              <a href="/cara-sewa" className="hover:text-ocean-deep transition-colors">Cara Sewa</a>
              <a href="/faq" className="hover:text-ocean-deep transition-colors">FAQ</a>
            </nav>
          </div>
        </header>

        {/* ── Breadcrumb ─────────────────────────────────────── */}
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Katalog", href: "/gitar" },
              { label: product.name },
            ]}
          />
        </div>

        {/* ── Main content ───────────────────────────────────── */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

            {/* Product Image */}
            <div>
              <div className="bg-surface-soft rounded-2xl overflow-hidden shadow-xl min-h-[420px] md:min-h-[520px]">
                <img
                  src={imageUrl}
                  alt={`${product.name} untuk disewa di Jakarta & Tangerang`}
                  className="w-full h-full object-contain min-h-[420px] md:min-h-[520px]"
                  width={800}
                  height={600}
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              {/* H1 — unique per product */}
              <h1 className="font-display text-4xl font-bold text-slate-900 mb-2">
                Sewa {product.name}
              </h1>
              {/* Supporting heading */}
              <p className="text-slate-500 text-lg mb-4">
                {product.name} – {product.category}
              </p>

              {/* Instrument type badge */}
              <div className="mb-6 inline-block bg-ocean-deep/8 text-ocean-deep font-semibold px-3 py-1 rounded-full text-sm uppercase tracking-wide">
                {product.instrumentType}
              </div>

              <h3 className="font-semibold text-slate-900 text-base mb-3">Deskripsi</h3>
              <p className="text-slate-500 leading-relaxed mb-6">{product.description}</p>

              {/* Price section */}
              <h3 className="font-semibold text-slate-900 text-base mb-4">Harga Sewa</h3>
              <div className="space-y-4 mb-8">
                {/* 24h */}
                <div className="rounded-xl p-4 border bg-surface-soft border-border-subtle">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-slate-500 text-sm">24 Jam</span>
                    </div>
                    <div className="text-ocean-deep font-bold text-2xl">
                      {product.price24h ? formatRupiah(product.price24h) : "Hubungi kami"}
                    </div>
                  </div>
                </div>
                {/* 1 Minggu */}
                <div className="rounded-xl p-4 border bg-ocean-deep/5 border-ocean-deep/30">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-slate-500 text-sm">1 Minggu</span>
                    </div>
                    <div className="text-ocean-deep font-bold text-2xl">
                      {product.price1w ? formatRupiah(product.price1w) : "Hubungi kami"}
                    </div>
                  </div>
                </div>
                {/* 1 Bulan */}
                <div className="rounded-xl p-4 border bg-surface-soft border-border-subtle">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-slate-500 text-sm">1 Bulan</span>
                    </div>
                    <div className="text-ocean-deep font-bold text-2xl">
                      {product.price1m ? formatRupiah(product.price1m) : "Hubungi kami"}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/6287748514337?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-ocean-deep hover:bg-ocean-deep/90 text-white font-semibold px-6 py-4 rounded-lg w-full text-center text-lg transition-colors"
              >
                Sewa via WhatsApp
              </a>
            </div>
          </div>

          {/* ── Related Products ───────────────────────────────── */}
          {related.length > 0 && (
            <section className="mb-16">
              <h2 className="font-display text-2xl font-medium text-slate-900 mb-6">
                Instrumen Lainnya
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((rp) => (
                  <a
                    key={rp.id}
                    href={productUrl(rp.slug)}
                    className="card group flex items-center gap-4 p-4 hover:shadow-card-hover transition-shadow"
                  >
                    <div className="w-20 h-20 bg-surface-soft rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={`/images/guitars/${rp.image}`}
                        alt={`${rp.name} untuk disewa`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm group-hover:text-ocean-deep transition-colors">
                        Sewa {rp.name}
                      </p>
                      <p className="text-slate-400 text-xs uppercase tracking-wide">{rp.instrumentType}</p>
                      <p className="text-ocean-deep font-mono text-sm mt-0.5">
                        {rp.price24h ? formatRupiah(rp.price24h) : ""}
                        {rp.price24h ? <span className="text-xs text-slate-400 font-normal">/24 jam</span> : null}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* ── Same Type / All Instruments ───────────────────── */}
          {sameType.length > 0 && (
            <section className="mb-16">
              <h2 className="font-display text-2xl font-medium text-slate-900 mb-6">
                Semua Instrumen Tersedia
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {sameType.map((sp) => (
                  <a
                    key={sp.id}
                    href={productUrl(sp.slug)}
                    className="card group p-4 text-center hover:shadow-card-hover transition-shadow"
                  >
                    <div className="w-full h-24 bg-surface-soft rounded-xl overflow-hidden mb-3">
                      <img
                        src={`/images/guitars/${sp.image}`}
                        alt={`${sp.name} untuk disewa`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        width={200}
                        height={96}
                      />
                    </div>
                    <p className="font-semibold text-slate-900 text-sm group-hover:text-ocean-deep transition-colors">
                      {sp.name}
                    </p>
                    <p className="text-slate-400 text-xs uppercase tracking-wide mt-0.5">
                      {sp.instrumentType}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* ── Navigation back ───────────────────────────────── */}
          <div className="text-center">
            <a href="/gitar" className="btn-secondary text-sm">
              ← Kembali ke Katalog
            </a>
          </div>
        </div>

        {/* ── Footer (same as homepage) ──────────────────────── */}
        <footer className="bg-slate-900 pt-14 pb-8 mt-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-ocean-deep rounded-lg flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11.5 2C6.8 2 3 5.8 3 10.5c0 2.6 1.2 5 3.2 6.6L5 21l4.4-1.4C10.7 20.2 12.3 21 14 21c1 0 2-.2 2.9-.5"/>
                      <path d="M16 8l3 3m-3-3l3 3"/>
                    </svg>
                  </div>
                  <span className="font-heading font-semibold text-white text-base">SEWAGITAR<span className="text-ocean-sea">.com</span></span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Solusi penyewaan gitar elektrik, akustik, dan bass untuk area Jakarta dan Tangerang.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm mb-4">Navigasi</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  {[["Beranda","/"],["Katalog Gitar","/gitar"],["Cara Sewa","/cara-sewa"],["FAQ","/faq"]].map(([label,href])=>(
                    <li key={label}><a href={href} className="hover:text-ocean-sky transition-colors">{label}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm mb-4">Kategori</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  {products.map((p)=>(
                    <li key={p.id}>
                      <a href={productUrl(p.slug)} className="hover:text-ocean-sky transition-colors">{p.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm mb-4">Kontak</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="https://wa.me/6287748514337" target="_blank" rel="noopener noreferrer" className="hover:text-ocean-sky transition-colors flex items-center gap-1.5">0877-4851-4337</a></li>
                  <li><a href="mailto:jdanwmusic@gmail.com" className="hover:text-ocean-sky transition-colors flex items-center gap-1.5">jdanwmusic@gmail.com</a></li>
                  <li className="flex items-start gap-1.5">Jl. Semanan Pintu Air No. 37, Duri Kosambi, Cengkareng, Jakarta Barat</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
              <p>&copy; 2026 SEWAGITAR.COM. Sewa Gitar Elektrik, Akustik &amp; Bass Jakarta &amp; Tangerang.</p>
            </div>
          </div>
        </footer>
      </div>

      <FloatingWA />
    </>
  );
}
