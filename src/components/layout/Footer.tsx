'use client';

import Link from 'next/link';
import { Instagram, MessageCircle, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Propiedades', href: '#propiedades' },
  { label: 'Zonas', href: '#ubicaciones' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
];

const services = [
  'Compra de Propiedades',
  'Venta de Propiedades',
  'Alquiler',
  'Asesoría de Inversión',
  'Valoración Gratuita',
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white" id="contacto">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gold font-playfair text-lg font-bold text-white">
                LV
              </div>
              <div>
                <p className="font-playfair text-lg font-bold">LEIDY VALLEJOS</p>
                <p className="text-[11px] tracking-wider text-gold">RE/MAX FORTALEZA</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Agente inmobiliaria certificada con amplia experiencia en el mercado
              boliviano. Tu aliada de confianza para comprar, vender o alquilar
              propiedades.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com/leidy.remax"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/59178167409"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-whatsapp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-blue-600"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-playfair text-lg font-semibold">Navegación</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-playfair text-lg font-semibold">Servicios</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/60">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-playfair text-lg font-semibold">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Santa Cruz de la Sierra, Bolivia
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                +591 78167409
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                leidy.vallejos@remax.bo
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <Clock className="h-4 w-4 shrink-0 text-gold" />
                Lun-Sáb 8:00-19:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-white/40 md:flex-row">
            <p>&copy; 2026 Leidy Vallejos &middot; RE/MAX Fortaleza. Todos los derechos reservados.</p>
            <p>
              Desarrollado por{' '}
              <span className="font-semibold text-gold">NEXIX Tech Studio</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
