import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata = {
  title: 'SEWAGITAR.COM | Sewa Gitar Profesional Jakarta & Jabodetabek',
  description: 'Sewa gitar berkualitas untuk latihan, recording, panggung, dan event. Tersedia gitar elektrik, akustik, bass beserta amplifier dan aksesoris. Ready to use, delivery Jabodetabek.',
  keywords: [
    'sewa gitar',
    'rental gitar',
    'sewa gitar listrik',
    'sewa gitar akustik',
    'sewa bass',
    'rental amplifier',
    'sewa gitar untuk event',
    'sewa gitar untuk recording',
    'sewa gitar jakarta',
    'rental alat musik'
  ],
  openGraph: {
    title: 'SEWAGITAR.COM | Sewa Gitar Profesional',
    description: 'Rental alat musik profesional Jakarta - Sewa gitar, bass, amplifier siap pakai',
    url: 'https://sewagitar.com',
    siteName: 'SewaGitar.com',
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${playfair.variable} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
