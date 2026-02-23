import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Leidy Vallejos | Agente Inmobiliaria RE/MAX Fortaleza | Bolivia',
  description:
    'Encuentra tu hogar ideal en Bolivia. Compra, venta y alquiler de propiedades exclusivas en Santa Cruz, Cochabamba y más. Asesoría personalizada con Leidy Vallejos, agente certificada RE/MAX Fortaleza.',
  openGraph: {
    title: 'Leidy Vallejos | Agente Inmobiliaria RE/MAX Fortaleza',
    description:
      'Propiedades exclusivas en las mejores zonas de Bolivia. Compra, venta y alquiler con asesoría personalizada.',
    images: ['/images/hero.jpeg'],
    locale: 'es_BO',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-dm antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
