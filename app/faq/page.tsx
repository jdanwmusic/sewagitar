'use client';
import { useState } from 'react';

const faqs = [
  { q: 'Apakah bisa antar gitar?', a: 'Ya, untuk area Jabodetabek.' },
  { q: 'DP-nya berapa?', a: 'DP 50% via transfer bank.' },
  { q: 'Berapa lama maksimal sewa?', a: 'Mulai dari 24 jam hingga bulanan.' },
  { q: 'Bagaimana jika gitar rusak?', a: 'Kerusakan ditanggung penyewa sesuai kesepakatan.' },
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-surface-base">
      <div className="max-w-2xl mx-auto px-4 py-20">
        <h1 className="font-display text-3xl font-medium text-ocean-deep mb-8">FAQ</h1>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-border-subtle rounded-xl shadow-sm overflow-hidden">
              <button
                className="w-full text-left p-4 flex items-center justify-between"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-semibold text-slate-900 text-sm pr-4">{faq.q}</span>
                <svg
                  className={`w-4 h-4 flex-shrink-0 text-ocean-deep transition-transform ${openIdx === idx ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openIdx === idx && (
                <div className="px-4 pb-4 text-slate-500 text-sm leading-relaxed border-t border-border-subtle pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
