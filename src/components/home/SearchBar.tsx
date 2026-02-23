'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const operations = ['Compra', 'Venta', 'Alquiler'];

export default function SearchBar() {
  const [activeOp, setActiveOp] = useState('Compra');

  const handleSearch = () => {
    document.getElementById('propiedades')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="mx-auto w-full max-w-5xl rounded-2xl bg-white p-4 shadow-2xl md:p-6"
    >
      {/* Operation Tabs */}
      <div className="mb-4 flex gap-2">
        {operations.map((op) => (
          <button
            key={op}
            onClick={() => setActiveOp(op)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
              activeOp === op
                ? 'bg-gold text-white'
                : 'bg-gray-100 text-gray-text hover:bg-gray-200'
            }`}
          >
            {op}
          </button>
        ))}
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:gap-4">
        <div className="flex-1">
          <label className="mb-1 block text-xs font-medium text-gray-text">
            Tipo de Propiedad
          </label>
          <select className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-navy outline-none focus:border-gold">
            <option value="">Seleccionar tipo</option>
            <option value="casa">Casa</option>
            <option value="apartamento">Apartamento</option>
            <option value="terreno">Terreno</option>
            <option value="comercial">Comercial</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="mb-1 block text-xs font-medium text-gray-text">
            Ubicación
          </label>
          <select className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-navy outline-none focus:border-gold">
            <option value="">Seleccionar zona</option>
            <option value="santa-cruz">Santa Cruz</option>
            <option value="cochabamba">Cochabamba</option>
            <option value="la-paz">La Paz</option>
            <option value="tarija">Tarija</option>
            <option value="sucre">Sucre</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="mb-1 block text-xs font-medium text-gray-text">
            Rango de Precio
          </label>
          <select className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-navy outline-none focus:border-gold">
            <option value="">Seleccionar precio</option>
            <option value="50-100">$50K - $100K</option>
            <option value="100-200">$100K - $200K</option>
            <option value="200-500">$200K - $500K</option>
            <option value="500+">$500K+</option>
          </select>
        </div>

        <button
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-2.5 font-semibold text-white transition-colors hover:bg-navy-medium md:px-8"
        >
          <Search className="h-4 w-4" />
          Buscar
        </button>
      </div>
    </motion.div>
  );
}
