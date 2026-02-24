'use client';

import Image from 'next/image';
import { Instagram, MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const miniStats = [
  { value: '120+', label: 'Ventas' },
  { value: '6+', label: 'Años' },
  { value: '180+', label: 'Clientes' },
];

export default function AboutAgent() {
  return (
    <section id="sobre-mi" className="bg-gray-light py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Image */}
        <ScrollReveal direction="left">
          <div className="relative mx-auto max-w-md">
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-gold/30" />
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/agent.jpeg"
                alt="Ramberto Sosa - Especialista en Propiedades Turísticas HYJ Real Estate RD"
                width={500}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-3 -left-3 rounded-xl bg-gold px-4 py-2 text-center shadow-lg">
              <p className="font-playfair text-2xl font-bold text-white">6+</p>
              <p className="text-xs font-medium text-white/90">Años de Experiencia</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal direction="right">
          <div>
            <p className="text-sm font-semibold tracking-widest text-gold">CONÓCEME</p>
            <h2 className="mt-2 font-playfair text-3xl font-bold text-navy sm:text-4xl">
              Ramberto Sosa
            </h2>
            <p className="mt-1 text-base font-medium text-gray-text">
              Especialista en Propiedades Turísticas &middot; HYJ Real Estate RD
            </p>

            <p className="mt-5 text-base leading-relaxed text-gray-text">
              Con más de 6 años de experiencia en el mercado inmobiliario dominicano,
              me especializo en propiedades turísticas en las zonas más exclusivas del
              este del país. Juan Dolio, Bayahibe y Punta Cana son mi territorio. Mi
              compromiso es ayudarte a encontrar la inversión perfecta, ya sea una villa
              frente al mar, un condo con retorno de inversión, o el terreno ideal para
              tu proyecto.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-text">
              Conozco cada rincón de estas zonas turísticas y tengo acceso a las mejores
              oportunidades del mercado antes de que salgan al público. Si buscas invertir
              en el paraíso dominicano, estás en las manos correctas.
            </p>

            {/* Mini Stats */}
            <div className="mt-8 flex gap-8">
              {miniStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-playfair text-2xl font-bold text-gold">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-text">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/18294152060?text=Hola Ramberto, me gustaría agendar una consulta gratuita."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-white transition-all hover:bg-gold-light hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                Agenda una Consulta Gratis
              </a>
              <a
                href="https://instagram.com/rambertososa_hyjrealestaterd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border-2 border-navy/20 px-6 py-3 font-semibold text-navy transition-all hover:border-navy hover:bg-navy hover:text-white"
              >
                <Instagram className="h-4 w-4" />
                @rambertososa_hyjrealestaterd
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
