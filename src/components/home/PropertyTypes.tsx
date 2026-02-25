'use client';

import { Home, Building2, ClipboardList } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const types = [
  { icon: Building2, label: 'Aptos 1 Hab', count: 8 },
  { icon: Building2, label: 'Aptos 2 Hab', count: 15 },
  { icon: Building2, label: 'Aptos 3 Hab', count: 10 },
  { icon: Home, label: 'Penthouses', count: 4 },
  { icon: ClipboardList, label: 'En Planos', count: 12 },
];

export default function PropertyTypes() {
  return (
    <section className="bg-gray-light py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest text-gold">
            NUESTRO CATÁLOGO
          </p>
          <h2 className="mt-2 text-center font-playfair text-3xl font-bold text-navy sm:text-4xl">
            Explora por Tipo de Apartamento
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
