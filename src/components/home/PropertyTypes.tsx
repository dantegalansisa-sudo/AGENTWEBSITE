'use client';

import { Home, Building2, Construction, Store, Palmtree } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const types = [
  { icon: Home, label: 'Casas', count: 18 },
  { icon: Palmtree, label: 'Villas', count: 14 },
  { icon: Building2, label: 'Condos', count: 20 },
  { icon: Construction, label: 'Terrenos', count: 10 },
  { icon: Store, label: 'Comercial', count: 6 },
];

export default function PropertyTypes() {
  return (
    <section className="bg-gray-light py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest text-gold">
            NUESTRO PORTAFOLIO
          </p>
          <h2 className="mt-2 text-center font-playfair text-3xl font-bold text-navy sm:text-4xl">
            Explora por Tipo de Propiedad
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
          {types.map((type, i) => (
            <ScrollReveal key={type.label} delay={i * 0.1}>
              <div className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-gold hover:shadow-lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                  <type.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-dm text-base font-semibold text-navy">
                  {type.label}
                </h3>
                <p className="mt-1 text-sm text-gray-text">
                  {type.count} propiedades
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
