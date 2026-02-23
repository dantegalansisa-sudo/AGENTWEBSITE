'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

const locations = [
  {
    name: 'Santa Cruz',
    count: 25,
    image: '/images/property-8.jpeg',
    span: 'row-span-2',
  },
  {
    name: 'Equipetrol',
    count: 12,
    image: '/images/property-7.jpeg',
    span: '',
  },
  {
    name: 'Urubó',
    count: 8,
    image: '/images/property-9.jpeg',
    span: '',
  },
  {
    name: 'Cochabamba',
    count: 10,
    image: '/images/property-10.jpeg',
    span: '',
  },
];

export default function TopLocations() {
  return (
    <section id="ubicaciones" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest text-gold">
            UBICACIONES
          </p>
          <h2 className="mt-2 text-center font-playfair text-3xl font-bold text-navy sm:text-4xl">
            Zonas Premium en Bolivia
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {locations.map((loc, i) => (
            <ScrollReveal
              key={loc.name}
              delay={i * 0.1}
              className={`${i === 0 ? 'sm:col-span-1 lg:row-span-2' : ''}`}
            >
              <div
                className={`group relative overflow-hidden rounded-2xl ${
                  i === 0 ? 'h-64 sm:h-full min-h-[280px] lg:min-h-0' : 'h-64'
                }`}
              >
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all group-hover:from-black/50" />
                <div className="absolute bottom-0 left-0 p-5 transition-transform group-hover:-translate-y-1">
                  <h3 className="font-playfair text-2xl font-bold text-white">
                    {loc.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/80">
                    {loc.count} Propiedades
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
