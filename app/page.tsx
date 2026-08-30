'use client';
import { useState } from 'react';
import products, { pricingPackages } from '../data/products';
import FloatingWA from '../components/FloatingWA';

function formatRupiah(num: number): string {
  return 'Rp ' + num.toLocaleString('id-ID');
}

function formatRupiahFull(num: number): string {
  return 'Rp ' + num.toLocaleString('id-ID');
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/gitar', label: 'Katalog' },
    { href: '/cara-sewa', label: 'Cara Sewa' },
    { href: '/faq', label: 'FAQ' },
    { href: 'https://wa.me/6287748514337', label: 'Kontak', external: true },
  ];

  return (
    <div className="min-h-screen bg-surface-base text-slate-900 font-body">

      {/* ── HEADER / NAVIGATION ─────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border-subtle shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-ocean-deep rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11.5 2C6.8 2 3 5.8 3 10.5c0 2.6 1.2 5 3.2 6.6L5 21l4.4-1.4C10.7 20.2 12.3 21 14 21c1 0 2-.2 2.9-.5"/>
                <path d="M16 8l3 3m-3-3l3 3"/>
              </svg>
            </div>
            <span className="font-heading font-semibold text-ocean-deep text-lg tracking-tight">SEWAGITAR<span className="text-ocean-sea">.com</span></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="text-slate-600 hover:text-ocean-deep font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/6287748514337?text=Halo%20SEWAGITAR.COM%2C%20saya%20ingin%20menyewa%20gitar."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Sewa Sekarang
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-ocean-deep"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border-subtle px-4 pb-4 pt-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="block py-3 text-slate-700 hover:text-ocean-deep font-medium border-b border-border-subtle last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/6287748514337?text=Halo%20SEWAGITAR.COM%2C%20saya%20ingin%20menyewa%20gitar."
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 btn-primary text-center text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sewa Sekarang via WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative bg-surface-base py-12 md:py-16 overflow-hidden">
        {/* Ocean wave SVG bg accent (right side) */}
        <div className="absolute right-0 top-0 w-1/3 h-full pointer-events-none opacity-[0.03]" aria-hidden="true">
          <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M200 0 C300 100, 400 200, 350 300 C300 400, 200 500, 100 600 L0 600 L0 0 Z" fill="#0B3D5C"/>
            <path d="M250 50 C350 150, 450 250, 400 350 C350 450, 250 550, 150 650 L50 650 L50 50 Z" fill="#1E6F9F"/>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          {/* Tagline pill */}
          <div className="inline-flex items-center gap-2 bg-ocean-deep/8 border border-ocean-deep/10 rounded-full px-3 py-1 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ocean-deep animate-pulse"></span>
            <span className="text-[11px] font-medium text-ocean-deep tracking-wide">Layanan Cepat · Jakarta & Tangerang</span>
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-medium text-slate-900 mb-4 leading-[1.15]">
            Sewa Gitar<br />
            <span className="text-ocean-deep">yang Siap Pakai.</span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-xl mb-3 leading-snug font-medium">
            Gitar elektrik, akustik, dan bass untuk rekaman, latihan, atau panggung. Siap pakai, terawat, dan langsung kirim.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Elektrik • Akustik • Bass","Siap Pakai • Terawat • Siap Kirim"].map(t => (<span key={t} className="inline-block bg-ocean-deep/[0.06] text-ocean-deep text-xs font-medium px-2.5 py-0.5 rounded-full">{t}</span>))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href="/gitar"
              className="btn-primary text-center text-base"
            >
              Lihat Katalog Gitar
            </a>
            <a
              href="https://wa.me/6287748514337?text=Halo%20SEWAGITAR.COM%2C%20saya%20ingin%20menyewa%20gitar."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-center text-base flex items-center justify-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .162 5.331.165 11.885c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.822 11.822 0 005.683 1.448h.005c6.554 0 11.887-5.331 11.885-11.885a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Sewa via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST STATS ───────────────────────────────────── */}
      <section className="bg-ocean-deep/[0.03] py-6 border-y border-ocean-deep/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { num: '3+', label: 'Kategori Instrumen' },
              { num: 'Jabodetabek', label: 'Area Layanan' },
              { num: 'Same-day', label: 'Pengiriman' },
            ].map((stat) => (
              <div key={stat.label} className="py-2">
                <div className="text-xl font-display font-semibold text-ocean-deep">{stat.num}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATALOG PREVIEW ───────────────────────────────── */}
      <section className="py-20 bg-surface-base">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-slate-900 mb-3">
              Pilihan Instrumen
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Tersedia 3 kategori instrumen berkualitas, terawat rutin, dan siap pakai untuk berbagai kebutuhan musik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.filter((p) => p.featured).map((product) => (
              <a
                href={`/gitar/${product.slug}`}
                key={product.id}
                className="card group flex flex-col overflow-hidden"
              >
                <div className="min-h-[260px] sm:min-h-[300px] bg-surface-soft overflow-hidden relative">
                  <img
                    src={`/images/guitars/${product.image}`}
                    alt={`Gitar ${product.type} untuk disewa`}
                    className="w-full h-full object-contain transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-semibold text-slate-900 text-lg mb-1">{product.name}</h3>
                  <p className="text-ocean-sea text-xs font-medium uppercase tracking-wide mb-3">{product.type}</p>
                  <p className="text-slate-500 text-sm mb-4 flex-1 leading-relaxed">{product.description}</p>

                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                    <div className="font-mono text-ocean-deep font-medium text-lg">
                      {formatRupiah(100000)}
                      <span className="text-xs text-slate-400 font-normal">/24 jam</span>
                    </div>
                    <span className="text-ocean-sea text-sm font-medium group-hover:underline">Lihat Detail →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="/gitar" className="btn-secondary text-sm">
              Lihat Semua Pilihan Gitar →
            </a>
          </div>
        </div>
      </section>

      {/* ── PRICING ────────────────────────────────────────── */}
      <section className="py-20 bg-surface-soft">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-slate-900 mb-3">
              Harga Sewa
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              Tarif flat untuk seluruh kategori. Elektrik · Akustik · Bass.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-8 flex flex-col ${pkg.highlight
                  ? 'bg-ocean-deep text-white shadow-lg'
                  : 'bg-white border border-border-subtle'
                }`}
              >
                {pkg.tag && (
                  <span className={`inline-block self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${
                    pkg.highlight
                      ? 'bg-white/20 text-white'
                      : 'bg-ocean-deep/8 text-ocean-deep'
                  }`}>
                    {pkg.tag}
                  </span>
                )}
                <div className={`text-sm mb-1 ${pkg.highlight ? 'text-white/70' : 'text-slate-500'}`}>
                  {pkg.period}
                </div>
                <div className={`font-display text-2xl font-medium mb-1 ${pkg.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {pkg.title}
                </div>
                <div className={`font-mono text-3xl font-medium mb-6 ${pkg.highlight ? 'text-white' : 'text-ocean-deep'}`}>
                  {formatRupiahFull(pkg.price)}
                </div>
                <ul className="space-y-2.5 text-sm mb-8 flex-1">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-ocean-sky' : 'text-ocean-sea'}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </span>
                      <span className={pkg.highlight ? 'text-white/85' : 'text-slate-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/6287748514337?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={pkg.highlight
                    ? 'w-full text-center bg-white text-ocean-deep font-semibold px-4 py-3 rounded-xl hover:bg-white/90 transition-colors'
                    : 'w-full text-center btn-primary text-sm'
                  }
                >
                  Pilih Paket {pkg.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO RENT ───────────────────────────────────── */}
      <section className="py-20 bg-surface-base">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-slate-900 mb-3">
              Cara Sewa
            </h2>
            <p className="text-slate-500 max-w-md mx-auto">
              Proses peminjaman cepat dan transparan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Pilih Instrumen', desc: 'Lihat katalog dan pilih gitar elektrik, akustik, atau bass yang sesuai.' },
              { step: '02', title: 'Hubungi via WhatsApp', desc: 'Tanyakan ketersediaan dan informasikan durasi sewa yang dibutuhkan.' },
              { step: '03', title: 'Bayar Deposit', desc: 'DP 50% via transfer bank atau e-wallet untuk konfirmasi.' },
              { step: '04', title: 'Terima atau Ambil', desc: 'Gitar dikirim atau diambil langsung di lokasi usaha Duri Kosambi.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-ocean-deep/8 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono text-ocean-deep font-semibold text-lg">{item.step}</span>
                </div>
                <h3 className="font-semibold text-slate-900 text-base mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREA / ADDRESS ─────────────────────────────────── */}
      <section className="py-20 bg-surface-soft">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl border border-border-subtle shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left — info */}
              <div className="p-8 md:p-12">
                <span className="inline-block text-xs font-semibold text-ocean-sea uppercase tracking-widest mb-4">
                  Cakupan Wilayah
                </span>
                <h2 className="font-display text-3xl font-medium text-slate-900 mb-4">
                  Melayani Jakarta<br />& Tangerang
                </h2>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Pengantaran untuk area Jabodetabek. Pengambilan langsung di workshop Duri Kosambi, Cengkareng, Jakarta Barat.
                </p>
                <div className="flex items-start gap-3 mb-8">
                  <svg className="text-ocean-sea flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <strong className="text-slate-800 text-sm block mb-0.5">Workshop:</strong>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Jl.+Semanan+Pintu+Air+No.+37+Duri+Kosambi+Cengkareng+Jakarta+Barat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 text-sm hover:text-ocean-deep underline underline-offset-2 transition-colors"
                    >
                      Jl. Semanan Pintu Air No. 37, Duri Kosambi, Cengkareng, Jakarta Barat
                    </a>
                  </div>
                </div>
                <a
                  href="https://wa.me/6287748514337?text=Halo%20SEWAGITAR.COM%2C%20saya%20tanya%20layanan%20area%20Jakarta%20Tangerang."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Tanyakan Area Pengantaran
                </a>
              </div>

              {/* Right — visual accent */}
              <div className="bg-ocean-deep p-8 md:p-12 flex flex-col justify-center">
                <div className="text-ocean-sky mb-4" aria-hidden="true">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18V5l12-2v13"/>
                    <circle cx="6" cy="18" r="3"/>
                    <circle cx="18" cy="16" r="3"/>
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-medium text-white mb-2">Jakarta & Tangerang</h3>
                <p className="text-ocean-sky/80 text-sm leading-relaxed">
                  Pengantaran untuk area Jabodetabek terdekat. Pengambilan langsung di Duri Kosambi, Cengkareng, Jakarta Barat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-ocean-deep">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Butuh Gitar untuk Disewa?
          </h2>
          <p className="text-ocean-sky/80 text-lg mb-8 max-w-xl mx-auto">
            Hubungi via WhatsApp untuk cek ketersediaan gitar pilihan Anda hari ini.
          </p>
          <a
            href="https://wa.me/6287748514337?text=Halo%20SEWAGITAR.COM%2C%20saya%20butuh%20gitar%20untuk%20disewa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-ocean-deep font-semibold px-8 py-4 rounded-xl text-lg hover:bg-ocean-sky transition-colors shadow-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .162 5.331.165 11.885c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.822 11.822 0 005.683 1.448h.005c6.554 0 11.887-5.331 11.885-11.885a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Sewa via WhatsApp
          </a>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className="bg-slate-900 pt-14 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
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

            {/* Navigasi */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Navigasi</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {['Home', 'Katalog Gitar', 'Cara Sewa', 'FAQ'].map((item, i) => (
                  <li key={item}>
                    <a href={['/', '/gitar', '/cara-sewa', '/faq'][i]}
                       className="hover:text-ocean-sky transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kategori */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Kategori</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {['Gitar Elektrik', 'Gitar Akustik', 'Gitar Bass'].map((item) => (
                  <li key={item}>
                    <a href={`/gitar/${item.toLowerCase().replace(' ', '-')}`}
                       className="hover:text-ocean-sky transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontak */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="https://wa.me/6287748514337" target="_blank" rel="noopener noreferrer"
                     className="hover:text-ocean-sky transition-colors flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .162 5.331.165 11.885c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.822 11.822 0 005.683 1.448h.005c6.554 0 11.887-5.331 11.885-11.885a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    0877-4851-4337
                  </a>
                </li>
                <li>
                  <a href="mailto:jdanwmusic@gmail.com" className="hover:text-ocean-sky transition-colors flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    jdanwmusic@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-1.5">
                  <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Jl. Semanan Pintu Air No. 37, Duri Kosambi, Cengkareng, Jakarta Barat</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
            <p>&copy; 2026 SEWAGITAR.COM. Sewa Gitar Elektrik, Akustik & Bass Jakarta & Tangerang.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <FloatingWA />
    </div>
  );
}
