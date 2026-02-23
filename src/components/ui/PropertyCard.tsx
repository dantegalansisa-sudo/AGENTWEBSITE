'use client';

import Image from 'next/image';
import { Heart, MapPin, Bed, Bath, Maximize, Car, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface PropertyCardProps {
  image: string;
  name: string;
  location: string;
  price: string;
  type: string;
  operation: string;
  beds: number;
  baths: number;
  area: number;
  parking: number;
  badge: string;
}

const badgeColors: Record<string, string> = {
  Destacada: 'bg-gold text-white',
  Nueva: 'bg-green-accent text-white',
  Exclusiva: 'bg-purple-600 text-white',
  Alquiler: 'bg-blue-500 text-white',
  Oportunidad: 'bg-red-remax text-white',
};

export default function PropertyCard({
  image,
  name,
  location,
  price,
  beds,
  baths,
  area,
  parking,
  badge,
}: PropertyCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hola Leidy, me interesa la propiedad "${name}". ¿Podría darme más información?`
  );

  return (
    <motion.div
      className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      whileHover={{ y: -4 }}
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Badge */}
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
            badgeColors[badge] || 'bg-gold text-white'
          }`}
        >
          {badge}
        </span>

        {/* Favorite */}
        <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-colors hover:bg-white">
          <Heart className="h-4 w-4 text-gray-text hover:text-red-remax transition-colors" />
        </button>

        {/* Price */}
        <div className="absolute bottom-3 left-3">
          <p className="text-2xl font-bold text-white drop-shadow-lg">{price}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-dm text-lg font-bold text-navy">{name}</h3>
        <div className="mt-1 flex items-center gap-1 text-gray-text">
          <MapPin className="h-3.5 w-3.5" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="my-3 h-px bg-gray-200" />

        {/* Specs */}
        <div className="flex items-center justify-between text-sm text-gray-text">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{beds}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{baths}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            <span>{area}m²</span>
          </div>
          <div className="flex items-center gap-1">
            <Car className="h-4 w-4" />
            <span>{parking}</span>
          </div>
        </div>

        <div className="my-3 h-px bg-gray-200" />

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="flex-1 rounded-lg bg-navy py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-navy-medium">
            Ver Detalles
          </button>
          <a
            href={`https://wa.me/59178167409?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-whatsapp text-white transition-colors hover:bg-green-500"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
