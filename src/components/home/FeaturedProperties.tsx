'use client';

import { useState } from 'react';
import PropertyCard from '@/components/ui/PropertyCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

const properties = [
  {
    image: '/images/property-1.jpeg',
    name: 'Residencia Vista Jardín',
    location: 'Zona Norte, Santa Cruz',
    price: '$320,000',
    type: 'Casa',
    operation: 'Venta',
    beds: 4,
    baths: 3,
    area: 350,
    parking: 2,
    badge: 'Destacada',
  },
  {
    image: '/images/property-2.jpeg',
    name: 'Villa Moderna Las Palmas',
    location: 'Equipetrol, Santa Cruz',
    price: '$485,000',
    type: 'Casa',
    operation: 'Venta',
    beds: 5,
    baths: 4,
    area: 480,
    parking: 3,
    badge: 'Nueva',
  },
  {
    image: '/images/property-3.jpeg',
    name: 'Casa Contemporánea Aurora',
    location: 'Urubó, Santa Cruz',
    price: '$550,000',
    type: 'Casa',
    operation: 'Venta',
    beds: 5,
    baths: 5,
    area: 520,
    parking: 4,
    badge: 'Exclusiva',
  },
  {
    image: '/images/property-4.jpeg',
    name: 'Residencia Premium Black',
    location: 'Las Palmas, Santa Cruz',
    price: '$2,800/mes',
    type: 'Casa',
    operation: 'Alquiler',
    beds: 4,
    baths: 3,
    area: 400,
    parking: 2,
    badge: 'Alquiler',
  },
  {
    image: '/images/property-5.jpeg',
    name: 'Cabaña Bosque Sereno',
    location: 'Samaipata, Santa Cruz',
    price: '$180,000',
    type: 'Casa de Campo',
    operation: 'Venta',
    beds: 3,
    baths: 2,
    area: 220,
    parking: 1,
    badge: 'Destacada',
  },
  {
    image: '/images/property-6.jpeg',
    name: 'Loft Container Garden',
    location: 'Zona Sur, Cochabamba',
    price: '$95,000',
    type: 'Casa',
    operation: 'Venta',
    beds: 2,
    baths: 1,
    area: 120,
    parking: 1,
    badge: 'Oportunidad',
  },
];

const filters = ['Todas', 'Casas', 'Apartamentos', 'Terrenos'];

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState('Todas');

  const filtered =
    activeFilter === 'Todas'
      ? properties
      : properties.filter(
          (p) =>
            p.type.toLowerCase() === activeFilter.toLowerCase().replace(/s$/, '')
        );

  return (
    <section id="propiedades" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest text-gold">
            PROPIEDADES DESTACADAS
          </p>
          <h2 className="mt-2 text-center font-playfair text-3xl font-bold text-navy sm:text-4xl">
            Encuentra Tu Próximo Hogar
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
