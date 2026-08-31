/**
 * SEWAGITAR — SEO + structured-data helpers
 * Reused by every product page and the sitemap.
 */

import { products, categories, Product } from "../data/products";

export const SITE_URL = "https://sewagitar.com";
export const SITE_NAME = "SEWAGITAR.COM";
export const SITE_LOCALE = "id_ID";

/** Build a clean absolute URL from a path. */
export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}

export function formatRupiah(num: number): string {
  return "Rp " + num.toLocaleString("id-ID");
}

/** Build per-product page title. Falls back to a derived title if product has none. */
export function productTitle(p: Product): string {
  if (p.seoTitle) return p.seoTitle;
  return `Sewa ${p.name} – Rental ${p.instrumentType} | ${SITE_NAME}`;
}

/** Build per-product meta description. */
export function productDescription(p: Product): string {
  if (p.seoDescription) return p.seoDescription;
  const price = p.price24h ? formatRupiah(p.price24h) : "harga terjangkau";
  return `Sewa ${p.name} di Jakarta & Tangerang mulai ${price}/24 jam. ${p.description}`;
}

/** Slug-safe URL for product detail. */
export function productUrl(slug: string): string {
  return absoluteUrl(`/gitar/${slug}`);
}

/** Category URL. */
export function categoryUrl(slug: string): string {
  return absoluteUrl(`/gitar/${slug}`);
}

/** Find a product by slug. */
export function findProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** List related products. */
export function relatedProducts(p: Product, limit = 2): Product[] {
  const ids = p.relatedProductIds ?? [];
  const out: Product[] = [];
  for (const id of ids) {
    const rp = products.find((x) => x.id === id);
    if (rp && rp.id !== p.id) out.push(rp);
    if (out.length >= limit) break;
  }
  return out;
}

/** List all products of the same instrument type (excluding the current one). */
export function sameTypeProducts(p: Product, limit = 4): Product[] {
  return products.filter((x) => x.id !== p.id).slice(0, limit);
}

/** Construct a Product JSON-LD object from real data only. */
export function productJsonLd(p: Product, imageUrl: string) {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: `Sewa ${p.name}`,
    description: p.description,
    image: [imageUrl],
    brand: p.brand ? { "@type": "Brand", name: p.brand } : undefined,
    model: p.model ?? undefined,
    category: p.category,
    offers: {
      "@type": "Offer",
      url: productUrl(p.slug),
      priceCurrency: "IDR",
      price: p.price24h ?? 0,
      availability:
        "https://schema.org/InStock",
      itemCondition: "https://schema.org/UsedCondition",
    },
  };
}

/** BreadcrumbList JSON-LD for a product page. */
export function breadcrumbJsonLd(p: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Katalog",
        item: absoluteUrl("/gitar"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: p.name,
        item: productUrl(p.slug),
      },
    ],
  };
}

/** All static routes to include in sitemap. */
export function sitemapRoutes() {
  const staticPaths = ["/", "/gitar", "/cara-sewa", "/faq"];
  const productPaths = products.map((p) => `/gitar/${p.slug}`);
  // Category landing = same as product today (1 product per category) but
  // still surfaced as separate URLs (canonical keeps the product page primary).
  return [...staticPaths, ...productPaths, ...categories.map((c) => `/gitar/${c.slug}`)];
}
