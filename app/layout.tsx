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
  title: 'Sewa Gitar Jakarta & Tangerang | SEWAGITAR.COM',
  description: 'Sewa gitar elektrik, akustik, dan bass di Jakarta & Tangerang. Pilihan sewa 24 jam, mingguan, dan bulanan. Hubungi SEWAGITAR.COM melalui WhatsApp.',
  keywords: [
    'sewa gitar',
    'sewa gitar jakarta',
    'sewa gitar tangerang',
    'rental gitar jakarta',
    'rental gitar tangerang',
    'sewa gitar elektrik',
    'sewa gitar akustik',
    'sewa gitar bass'
  ],
  openGraph: {
    title: 'Sewa Gitar Jakarta & Tangerang | SEWAGITAR.COM',
    description: 'Sewa gitar elektrik, akustik, dan bass di Jakarta & Tangerang. Pilihan sewa 24 jam, mingguan, dan bulanan.',
    url: 'https://sewagitar.com/',
    siteName: 'SEWAGITAR.COM',
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