'use client';

import Image from 'next/image';
import { Instagram, MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const miniStats = [
  { value: '150+', label: 'Ventas' },
  { value: '8+', label: 'Años' },
  { value: '200+', label: 'Clientes' },
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
                src="/images/leidy.jpeg"
                alt="Leidy Vallejos - Agente Inmobiliaria RE/MAX"
                width={500}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-3 -left-3 rounded-xl bg-gold px-4 py-2 text-center shadow-lg">
              <p className="font-playfair text-2xl font-bold text-white">8+</p>
              <p className="text-xs font-medium text-white/90">Años de Experiencia</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal direction="right">
          <div>
            <p className="text-sm font-semibold tracking-widest text-gold">CONÓCEME</p>
            <h2 className="mt-2 font-playfair text-3xl font-bold text-navy sm:text-4xl">
              Leidy Vallejos
            </h2>
            <p className="mt-1 text-base font-medium text-gray-text">
              Agente Inmobiliaria Certificada &middot; RE/MAX Fortaleza
            </p>

            <p className="mt-5 text-base leading-relaxed text-gray-text">
              Con más de 8 años de experiencia en el mercado inmobiliario boliviano,
              me especializo en encontrar la propiedad perfecta para cada cliente. Mi
              compromiso es brindarte una asesoría personalizada, transparente y
              profesional en cada paso del proceso, ya sea que busques comprar, vender
              o alquilar.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-text">
              Como parte de la red RE/MAX, tengo acceso a las mejores herramientas y
              una amplia red de contactos que me permiten ofrecerte las mejores
              oportunidades del mercado.
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
                href="https://wa.me/59178167409?text=Hola Leidy, me gustaría agendar una consulta gratuita."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-white transition-all hover:bg-gold-light hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                Agenda una Consulta Gratis
              </a>
              <a
                href="https://instagram.com/leidy.remax"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border-2 border-navy/20 px-6 py-3 font-semibold text-navy transition-all hover:border-navy hover:bg-navy hover:text-white"
              >
                <Instagram className="h-4 w-4" />
                @leidy.remax
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
