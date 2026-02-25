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
  title: 'Elisa Reynoso | Broker Inmobiliaria en República Dominicana | +25 Años de Experiencia',
  description:
    'Broker inmobiliaria con más de 25 años de experiencia en República Dominicana. Propiedades en Punta Cana, Santo Domingo, La Romana, Samaná y todo el país. Asesoría personalizada en compra, venta e inversión.',
  openGraph: {
    title: 'Elisa Reynoso | Broker Inmobiliaria | República Dominicana',
    description:
      'Broker inmobiliaria con +25 años de experiencia. Propiedades en Punta Cana, Santo Domingo, La Romana, Samaná y todo RD.',
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
