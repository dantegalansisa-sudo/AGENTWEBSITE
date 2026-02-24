'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.jpeg"
        alt="Casa moderna de lujo"
        fill
        className="z-0 object-cover"
        priority
        quality={90}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-navy/90 via-navy/60 to-navy/30" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 lg:px-8">
        <div className="max-w-2xl pb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 text-sm font-semibold tracking-widest text-gold"
          >
            HYJ REAL ESTATE RD &middot; REPÚBLICA DOMINICANA
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-playfair text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Tu Inversión en el{' '}
            <span className="text-gold">Paraíso</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Propiedades turísticas exclusivas en Juan Dolio, Bayahibe y Punta Cana. Villas, condos y terrenos frente al mar con asesoría personalizada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#propiedades"
              className="rounded-full bg-gold px-8 py-3 font-semibold text-white transition-all hover:bg-gold-light hover:shadow-lg"
            >
              Ver Propiedades
            </a>
            <a
              href="https://wa.me/18294152060"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white/40 px-8 py-3 font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              Contáctame
            </a>
          </motion.div>
        </div>

        {/* Search Bar */}
        <div className="absolute bottom-8 left-4 right-4 lg:left-8 lg:right-8">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
