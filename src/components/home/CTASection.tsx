'use client';

import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function CTASection() {
  return (
    <section className="relative py-24">
      {/* Background */}
      <Image
        src="/images/property-3.jpeg"
        alt="Propiedad de lujo"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/85" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-8">
        <ScrollReveal>
          <h2 className="font-playfair text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            ¿Buscas Tu Apartamento en <span className="text-gold">Santo Domingo Oeste</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            Reserva desde US$500. Tengo las mejores opciones en Alameda, Los Álamos, Herrera y más. Agenda tu visita gratuita hoy.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/18496554048?text=Hola José Enrique, me gustaría agendar una visita para ver apartamentos en Santo Domingo Oeste."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 font-semibold text-white transition-all hover:bg-green-500 hover:shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Escríbeme por WhatsApp
            </a>
            <a
              href="#propiedades"
              className="rounded-full border-2 border-white/40 px-8 py-3.5 font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              Ver Apartamentos
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
