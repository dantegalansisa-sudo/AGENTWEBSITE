'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 80, suffix: '+', label: 'Apartamentos Vendidos' },
  { value: 5, suffix: '+', label: 'Años de Experiencia' },
  { value: 100, suffix: '+', label: 'Familias Satisfechas' },
  { value: 7, suffix: '', label: 'Sectores en SDO' },
];

function AnimatedNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-navy py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-playfair text-3xl font-bold text-gold sm:text-4xl">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={isInView} />
            </p>
            <p className="mt-1 text-sm text-white/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
