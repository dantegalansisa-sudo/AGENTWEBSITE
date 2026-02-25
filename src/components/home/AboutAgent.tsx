'use client';

import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const miniStats = [
  { value: '80+', label: 'Ventas' },
  { value: '5+', label: 'Años' },
  { value: '100+', label: 'Familias' },
];

export default function AboutAgent() {
  return (
    <section id="sobre-mi" className="bg-gray-light py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Photo */}
        <ScrollReveal direction="left">
          <div className="relative mx-auto max-w-md">
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-remax-blue/30" />

            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/jose.png"
                alt="José Enrique Jiménez - Asesor Inmobiliario RE/MAX Cumbre"
                width={500}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-3 -left-3 rounded-xl bg-remax-blue px-4 py-2 text-center shadow-lg">
              <p className="font-playfair text-2xl font-bold text-white">5+</p>
              <p className="text-xs font-medium text-white/90">Años de Experiencia</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal direction="right">
          <div>
            <p className="text-sm font-semibold tracking-widest text-gold">CONÓCEME</p>
            <h2 className="mt-2 font-playfair text-3xl font-bold text-navy sm:text-4xl">
              José Enrique Jiménez
            </h2>
            <p className="mt-1 text-base font-medium text-gray-text">
              Asesor Inmobiliario &middot; RE/MAX Cumbre
            </p>

            <p className="mt-5 text-base leading-relaxed text-gray-text">
              Soy especialista en apartamentos en Santo Domingo Oeste, la zona de mayor
              crecimiento inmobiliario de la capital dominicana. Con más de 5 años asesorando
              familias, me dedico a encontrar el apartamento perfecto para cada presupuesto
              y necesidad.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-text">
              Trabajo exclusivamente con proyectos verificados y desarrolladores de confianza.
              Ya sea que busques un apartamento en planos con facilidades de pago, o uno listo
              para entrega inmediata, te guío en todo el proceso: desde la selección hasta la
              firma. Como parte de RE/MAX Cumbre, cuento con el respaldo de la red inmobiliaria
              más grande del mundo.
            </p>

            {/* Mini Stats */}
            <div className="mt-8 flex gap-8">
              {miniStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-playfair text-2xl font-bold text-remax-blue">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-text">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/18496554048?text=Hola José Enrique, me gustaría agendar una visita gratuita."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-white transition-all hover:bg-gold-light hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                Agenda una Visita Gratis
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
