'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const testimonials = [
  {
    text: 'Ramberto nos ayudó a encontrar el condo perfecto en Juan Dolio para nuestra inversión de Airbnb. En menos de 3 meses ya teníamos retorno. Su conocimiento de la zona es impresionante.',
    name: 'Miguel Ángel Rodríguez',
    city: 'Santo Domingo',
  },
  {
    text: 'Compramos nuestra villa en Punta Cana gracias a Ramberto. Nos llevó a ver opciones que no estaban ni publicadas. Un profesional de primera que realmente conoce el mercado turístico.',
    name: 'Carolina Méndez',
    city: 'Santiago',
  },
  {
    text: 'Como inversionista extranjero, necesitaba alguien de confianza en República Dominicana. Ramberto me guió en todo el proceso legal y encontró una propiedad con excelente plusvalía en Bayahibe.',
    name: 'James Patterson',
    city: 'Miami',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center font-playfair text-3xl font-bold text-white sm:text-4xl">
            Lo Que Dicen Nuestros Clientes
          </h2>
        </ScrollReveal>

        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <Quote className="mx-auto h-10 w-10 text-gold/40" />

              <p className="mt-6 font-playfair text-xl leading-relaxed text-white/90 italic sm:text-2xl">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="mt-6 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-gold text-gold"
                  />
                ))}
              </div>

              <p className="mt-4 font-semibold text-white">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-white/60">
                {testimonials[current].city}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === current ? 'w-8 bg-gold' : 'w-2.5 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
