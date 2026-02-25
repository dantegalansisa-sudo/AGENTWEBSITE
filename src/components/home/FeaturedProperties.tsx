'use client';

import { useState } from 'react';
import PropertyCard from '@/components/ui/PropertyCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

const properties = [
  {
    image: '/images/property-1.jpeg',
    name: 'Villa Punta Blanca',
    location: 'Punta Cana, La Altagracia',
    price: '$395,000',
    type: 'Villa',
    operation: 'Venta',
    beds: 4,
    baths: 3,
    area: 350,
    parking: 2,
    badge: 'Destacada',
  },
  {
    image: '/images/property-2.jpeg',
    name: 'Penthouse Torre Caribe',
    location: 'Naco, Santo Domingo',
    price: '$620,000',
    type: 'Penthouse',
    operation: 'Venta',
    beds: 3,
    baths: 3,
    area: 280,
    parking: 2,
    badge: 'Exclusiva',
  },
  {
    image: '/images/property-3.jpeg',
    name: 'Condo Resort Bayahibe',
    location: 'Bayahibe, La Romana',
    price: '$165,000',
    type: 'Condo',
    operation: 'Venta',
    beds: 2,
    baths: 2,
    area: 110,
    parking: 1,
    badge: 'CONFOTUR',
  },
  {
    image: '/images/property-4.jpeg',
    name: 'Residencia Arroyo Hondo',
    location: 'Arroyo Hondo, Santo Domingo',
    price: 'RD$85,000/mes',
    type: 'Casa',
    operation: 'Alquiler',
    beds: 5,
    baths: 4,
    area: 420,
    parking: 3,
    badge: 'Alquiler',
  },
  {
    image: '/images/property-5.jpeg',
    name: 'Eco Villa Las Terrenas',
    location: 'Las Terrenas, Samaná',
    price: '$245,000',
    type: 'Villa',
    operation: 'Venta',
    beds: 3,
    baths: 2,
    area: 200,
    parking: 1,
    badge: 'Oportunidad',
  },
  {
    image: '/images/property-6.jpeg',
    name: 'Studio Smart Living',
    location: 'Bávaro, Punta Cana',
    price: '$78,000',
    type: 'Condo',
    operation: 'Venta',
    beds: 1,
    baths: 1,
    area: 55,
    parking: 1,
    badge: 'Inversión',
  },
];

const filters = ['Todas', 'Villas', 'Condos', 'Casas'];

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
