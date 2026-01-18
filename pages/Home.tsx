
import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { TRANSLATIONS, MENU_ITEMS } from '../constants';

/**
 * PÁGINA DE INICIO (Home)
 */
const Home: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  // Usamos los items definidos en constants para mostrar favoritos en la Home
  const favorites = MENU_ITEMS;

  return (
    <div className="bg-black">
      {/* SECCIÓN HERO (Presentación con imagen de fondo) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            // Para usar foto local: src="./img/hero-bg.jpg"
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920" 
            alt="Bar Background" 
            className="w-full h-full object-cover opacity-50"
            loading="eager" // Se carga inmediatamente para evitar parpadeos
          />
          {/* Degradado para que el texto resalte sobre la foto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            IAMAI <span className="text-accent">CAFE</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-10 font-light">
            {t.heroSubtitle}
          </p>
          <Link 
            to="/menu" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-orange-900/20"
          >
            {t.viewMenu}
          </Link>
        </div>
      </section>

      {/* SECCIÓN FAVORITOS (Muestra los primeros 6 platos) */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.favoritesTitle}</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.slice(0, 6).map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 transition-all hover:border-accent">
              <div className="aspect-[4/5] overflow-hidden bg-zinc-800">
                <img 
                  src={item.image} 
                  alt={item.name[lang]} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-0"
                  loading="lazy"
                  onLoad={(e) => (e.currentTarget.classList.remove('opacity-0'), e.currentTarget.classList.add('opacity-100'))}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{item.name[lang]}</h3>
                  <span className="text-accent font-semibold">{item.price}</span>
                </div>
                <p className="text-zinc-400 text-sm line-clamp-2">
                  {item.description[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/gallery" 
            className="text-accent border-b border-accent pb-1 font-medium hover:text-white hover:border-white transition-all"
          >
            {t.navGallery} →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
