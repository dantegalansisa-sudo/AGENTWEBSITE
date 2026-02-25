'use client';

import Image from 'next/image';
import { Instagram, MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const miniStats = [
  { value: '250+', label: 'Ventas' },
  { value: '25+', label: 'Años' },
  { value: '500+', label: 'Clientes' },
];

export default function AboutAgent() {
  return (
    <section id="sobre-mi" className="bg-gray-light py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Photo Collage */}
        <ScrollReveal direction="left">
          <div className="relative mx-auto max-w-md">
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-purple-accent/30" />

            <div className="grid grid-cols-2 gap-3">
              {/* Main photo - spans 2 rows */}
              <div className="row-span-2 overflow-hidden rounded-2xl">
                <Image
                  src="/images/elisa.jpeg"
                  alt="Elisa Reynoso - Broker Inmobiliaria"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Secondary photo */}
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/elisa1.jpeg"
                  alt="Elisa Reynoso"
                  width={250}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Tertiary photo */}
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/elisa2.jpeg"
                  alt="Elisa Reynoso"
                  width={250}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-3 -left-3 rounded-xl bg-purple-accent px-4 py-2 text-center shadow-lg">
              <p className="font-playfair text-2xl font-bold text-white">25+</p>
              <p className="text-xs font-medium text-white/90">Años de Experiencia</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal direction="right">
          <div>
            <p className="text-sm font-semibold tracking-widest text-gold">CONÓCEME</p>
            <h2 className="mt-2 font-playfair text-3xl font-bold text-navy sm:text-4xl">
              Elisa Reynoso
            </h2>
            <p className="mt-1 text-base font-medium text-gray-text">
              Broker Inmobiliaria &middot; +25 Años de Experiencia
            </p>

            <p className="mt-5 text-base leading-relaxed text-gray-text">
              Con más de 25 años en el mercado inmobiliario dominicano, soy una de las
              brokers más experimentadas del país. He ayudado a cientos de familias e
              inversionistas a encontrar la propiedad perfecta en cada rincón de
              República Dominicana, desde las playas de Punta Cana hasta el corazón de
              Santo Domingo.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-text">
              Mi enfoque es simple: entender exactamente lo que necesitas y encontrarlo.
              Ya sea una villa frente al mar para inversión turística, un apartamento en
              la capital para tu familia, o un terreno con potencial de plusvalía. Mi red
              de contactos y mi conocimiento profundo del mercado me permiten ofrecerte
              oportunidades que otros no ven.
            </p>

            {/* Mini Stats */}
            <div className="mt-8 flex gap-8">
              {miniStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-playfair text-2xl font-bold text-purple-accent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-text">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/18094406527?text=Hola Elisa, me gustaría agendar una consulta gratuita."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-white transition-all hover:bg-gold-light hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                Agenda una Consulta Gratis
              </a>
              <a
                href="https://instagram.com/elisareynosobroker"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border-2 border-navy/20 px-6 py-3 font-semibold text-navy transition-all hover:border-purple-accent hover:bg-purple-accent hover:text-white"
              >
                <Instagram className="h-4 w-4" />
                @elisareynosobroker
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
