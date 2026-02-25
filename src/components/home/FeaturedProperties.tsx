'use client';

import { useState } from 'react';
import PropertyCard from '@/components/ui/PropertyCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

const properties = [
  {
    image: '/images/property-1.jpeg',
    name: 'Residencial Alameda Park',
    location: 'Alameda, Santo Domingo Oeste',
    price: 'US$95,000',
    type: 'Apartamento 3 Hab',
    operation: 'Venta',
    beds: 3,
    baths: 2,
    area: 128,
    parking: 1,
    badge: 'Destacada',
  },
  {
    image: '/images/property-2.jpeg',
    name: 'Torres del Oeste Premium',
    location: 'Los Álamos, Santo Domingo Oeste',
    price: 'US$120,000',
    type: 'Apartamento 3 Hab',
    operation: 'Venta',
    beds: 3,
    baths: 2,
    area: 148,
    parking: 2,
    badge: 'Entrega Inmediata',
  },
  {
    image: '/images/property-3.jpeg',
    name: 'Proyecto Vista Verde',
    location: 'Km 12, Santo Domingo Oeste',
    price: 'Desde US$78,000',
    type: 'Apartamento 2 Hab',
    operation: 'En Planos',
    beds: 2,
    baths: 2,
    area: 95,
    parking: 1,
    badge: 'En Planos',
  },
  {
    image: '/images/property-4.jpeg',
    name: 'Residencial Herrera Gardens',
    location: 'Herrera, Santo Domingo Oeste',
    price: 'US$85,000',
    type: 'Apartamento 2 Hab',
    operation: 'Venta',
    beds: 2,
    baths: 2,
    area: 105,
    parking: 1,
    badge: 'Nueva',
  },
  {
    image: '/images/property-5.jpeg',
    name: 'Penthouse Sky Living',
    location: 'Alameda, Santo Domingo Oeste',
    price: 'US$165,000',
    type: 'Penthouse',
    operation: 'Venta',
    beds: 3,
    baths: 3,
    area: 185,
    parking: 2,
    badge: 'Exclusiva',
  },
  {
    image: '/images/property-6.jpeg',
    name: 'Apartamento Starter Home',
    location: 'Manoguayabo, Santo Domingo Oeste',
    price: 'Desde US$62,000',
    type: 'Apartamento 1 Hab',
    operation: 'En Planos',
    beds: 1,
    baths: 1,
    area: 55,
    parking: 1,
    badge: 'Reserva US$500',
  },
];

const filters = ['Todas', 'Apartamento 3 Hab', 'Apartamento 2 Hab', 'Penthouse'];

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState('Todas');

  const filtered =
    activeFilter === 'Todas'
      ? properties
      : properties.filter((p) => p.type === activeFilter);

  return (
    <section id="propiedades" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest text-gold">
            APARTAMENTOS DESTACADOS
          </p>
          <h2 className="mt-2 text-center font-playfair text-3xl font-bold text-navy sm:text-4xl">
            Encuentra Tu Apartamento Ideal
          </h2>
        </ScrollReveal>

        {/* Filters */}
        <div className="mt-8 flex justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-navy text-white'
                  : 'bg-gray-100 text-gray-text hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((prop, i) => (
            <ScrollReveal key={prop.name} delay={i * 0.1}>
              <PropertyCard {...prop} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
