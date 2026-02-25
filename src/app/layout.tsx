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
  title: 'José Enrique Jiménez | Apartamentos en Santo Domingo Oeste | RE/MAX Cumbre',
  description:
    'Especialista en apartamentos en Santo Domingo Oeste. Proyectos en planos, entrega inmediata y las mejores opciones en Alameda, Los Álamos, Herrera y más. RE/MAX Cumbre.',
  openGraph: {
    title: 'José Enrique Jiménez | Apartamentos en Santo Domingo Oeste | RE/MAX Cumbre',
    description:
      'Especialista en apartamentos en Santo Domingo Oeste. Proyectos en planos, entrega inmediata. Alameda, Los Álamos, Herrera y más. RE/MAX Cumbre.',
    images: ['/images/hero.jpeg'],
    locale: 'es_DO',
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
