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
  title: 'Ramberto Sosa | Propiedades Turísticas en Juan Dolio, Bayahibe y Punta Cana | HYJ Real Estate RD',
  description:
    'Especialista en propiedades turísticas en República Dominicana. Villas, condos y terrenos en Juan Dolio, Bayahibe y Punta Cana. Asesoría personalizada con Ramberto Sosa, HYJ Real Estate RD.',
  openGraph: {
    title: 'Ramberto Sosa | Propiedades Turísticas | HYJ Real Estate RD',
    description:
      'Propiedades turísticas exclusivas en Juan Dolio, Bayahibe y Punta Cana. Villas, condos y terrenos con asesoría personalizada.',
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
