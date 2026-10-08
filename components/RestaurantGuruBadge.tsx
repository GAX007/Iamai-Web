import React from 'react';

// Sin recursos remotos: el enlace solo contacta con Restaurant Guru al pulsarlo.
const RestaurantGuruBadge: React.FC = () => (
  <div className="flex justify-center my-6">
    <a
      href="https://es.restaurantguru.com/Iamai-Kafe-Arrasate"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-44 w-44 flex-col items-center justify-center rounded-full border-2 border-accent bg-zinc-900 text-center transition-transform duration-300 hover:scale-105"
      aria-label="Restaurante Iamai en Restaurant Guru (se abre en otra pestaña)"
    >
      <span className="text-xs uppercase tracking-widest text-accent">Recomendado</span>
      <span className="my-2 text-3xl font-bold">2026</span>
      <span className="text-sm font-semibold">Restaurante Iamai</span>
      <span className="mt-2 text-xs text-zinc-400">Restaurant Guru ↗</span>
    </a>
  </div>
);

export default RestaurantGuruBadge;
