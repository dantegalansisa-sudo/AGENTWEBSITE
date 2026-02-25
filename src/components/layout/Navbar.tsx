'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const propertyDropdown = [
  { label: 'Casas', href: '#propiedades' },
  { label: 'Villas', href: '#propiedades' },
  { label: 'Condos', href: '#propiedades' },
  { label: 'Apartamentos', href: '#propiedades' },
  { label: 'Terrenos', href: '#propiedades' },
  { label: 'Comercial', href: '#propiedades' },
];

const zonasDropdown = [
  { label: 'Punta Cana', href: '#ubicaciones' },
  { label: 'Santo Domingo', href: '#ubicaciones' },
  { label: 'La Romana', href: '#ubicaciones' },
  { label: 'Santiago', href: '#ubicaciones' },
  { label: 'Samaná', href: '#ubicaciones' },
  { label: 'Puerto Plata', href: '#ubicaciones' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [propOpen, setPropOpen] = useState(false);
  const [zonasOpen, setZonasOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-purple-accent font-playfair text-lg font-bold text-white">
            ER
          </div>
          <div>
            <p className="font-playfair text-lg font-bold leading-tight text-white">
              ELISA REYNOSO
            </p>
            <p className="text-[11px] tracking-wider text-gold">
              BROKER GROUP
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="#inicio"
            className="text-sm font-medium text-white/90 transition-colors hover:text-gold"
          >
            Inicio
          </Link>

          {/* Propiedades Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPropOpen(true)}
            onMouseLeave={() => setPropOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-white/90 transition-colors hover:text-gold">
              Propiedades
              <ChevronDown className={`h-4 w-4 transition-transform ${propOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {propOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-2 w-48 overflow-hidden rounded-xl bg-white shadow-xl"
                >
                  {propertyDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-navy transition-colors hover:bg-gold/10 hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Zonas Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setZonasOpen(true)}
            onMouseLeave={() => setZonasOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-white/90 transition-colors hover:text-gold">
              Zonas
              <ChevronDown className={`h-4 w-4 transition-transform ${zonasOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {zonasOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-2 w-48 overflow-hidden rounded-xl bg-white shadow-xl"
                >
                  {zonasDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-navy transition-colors hover:bg-gold/10 hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="#sobre-mi"
            className="text-sm font-medium text-white/90 transition-colors hover:text-gold"
          >
            Sobre Mí
          </Link>
          <Link
            href="#contacto"
            className="text-sm font-medium text-white/90 transition-colors hover:text-gold"
          >
            Contacto
          </Link>

          <a
            href="https://wa.me/18094406527"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gold-light hover:shadow-lg"
          >
            <MessageCircle className="h-4 w-4" />
            Contáctame
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 bg-navy lg:hidden"
          >
            <div className="flex items-center justify-between px-4 py-4">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-purple-accent font-playfair text-lg font-bold text-white">
                  ER
                </div>
                <div>
                  <p className="font-playfair text-lg font-bold text-white">ELISA REYNOSO</p>
                  <p className="text-[11px] tracking-wider text-gold">BROKER GROUP</p>
                </div>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-white">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-2 px-6">
              <Link href="#inicio" onClick={() => setMobileOpen(false)} className="py-3 text-lg font-medium text-white/90 hover:text-gold">
                Inicio
              </Link>

              <div>
                <button
                  onClick={() => setPropOpen(!propOpen)}
                  className="flex w-full items-center justify-between py-3 text-lg font-medium text-white/90 hover:text-gold"
                >
                  Propiedades
                  <ChevronDown className={`h-5 w-5 transition-transform ${propOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {propOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4"
                    >
                      {propertyDropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-white/70 hover:text-gold"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <button
                  onClick={() => setZonasOpen(!zonasOpen)}
                  className="flex w-full items-center justify-between py-3 text-lg font-medium text-white/90 hover:text-gold"
                >
                  Zonas
                  <ChevronDown className={`h-5 w-5 transition-transform ${zonasOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {zonasOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4"
                    >
                      {zonasDropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-white/70 hover:text-gold"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="#sobre-mi" onClick={() => setMobileOpen(false)} className="py-3 text-lg font-medium text-white/90 hover:text-gold">
                Sobre Mí
              </Link>
              <Link href="#contacto" onClick={() => setMobileOpen(false)} className="py-3 text-lg font-medium text-white/90 hover:text-gold">
                Contacto
              </Link>

              <a
                href="https://wa.me/18094406527"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-base font-semibold text-white"
              >
                <MessageCircle className="h-5 w-5" />
                Contáctame por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
