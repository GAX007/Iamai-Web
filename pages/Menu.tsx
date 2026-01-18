
import React, { useState } from 'react';
import { Language, MenuItem } from '../types';
import { TRANSLATIONS, MENU_ITEMS, SUB_CATEGORY_TITLES } from '../constants';

/**
 * PÁGINA: Menu
 * Genera automáticamente la carta agrupando platos por categoría principal y subcategoría.
 */
const Menu: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  // Guardamos el plato pulsado para mostrar el Modal (Popup) de detalle
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  /**
   * LÓGICA DE ORGANIZACIÓN:
   * 1. Obtenemos categorías únicas (pintxo, coffee, carta, menu).
   */
  const categories = Array.from(new Set(MENU_ITEMS.map(item => item.category)));

  // Diccionario para traducir los nombres de las categorías principales
  const categoryTitles: Record<string, string> = {
    pintxo: t.pintxosSection,
    coffee: t.coffeeSection,
    carta: t.cartaSection,
    menu: t.menuSection
  };

  return (
    <div className="pt-32 pb-24 px-4 max-w-5xl mx-auto">
      {/* Cabecera de la Carta */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 uppercase tracking-widest">La Carta</h1>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <p className="text-zinc-400 max-w-xl mx-auto">
          {lang === 'ES' 
            ? 'Productos seleccionados con mimo, fusionando la tradición de nuestra tierra con toques contemporáneos.' 
            : 'Maitasunez hautatutako produktuak, gure lurraren tradizioa ukitu garaikideekin uztartuz.'}
        </p>
      </div>

      {/* RECORREMOS LAS CATEGORÍAS (Pintxo, Carta, etc.) */}
      {categories.map((cat) => {
        const itemsOfCategory = MENU_ITEMS.filter(item => item.category === cat);
        
        // Buscamos subcategorías dentro de esta sección (ej: raciones, postres)
        const subcategories = Array.from(new Set(itemsOfCategory.map(i => i.subcategory || 'default')));

        return (
          <div key={cat} className="mb-24">
            {/* Título de la Sección Principal */}
            <h2 className="text-3xl font-bold mb-12 flex items-center">
              <span className="text-accent mr-4">/</span>
              {categoryTitles[cat] || cat.toUpperCase()}
            </h2>

            {/* RECORREMOS LAS SUBCATEGORÍAS */}
            {subcategories.map((sub) => {
              const items = itemsOfCategory.filter(i => (i.subcategory || 'default') === sub);
              const subTitle = SUB_CATEGORY_TITLES[sub] ? SUB_CATEGORY_TITLES[sub][lang] : null;

              return (
                <div key={sub} className="mb-12 last:mb-0">
                  {/* Título de la Subcategoría (si existe) */}
                  {subTitle && (
                    <div className="flex items-center mb-8">
                      <div className="h-px flex-grow bg-zinc-800"></div>
                      <h3 className="px-6 text-sm font-black text-zinc-500 tracking-[0.4em] uppercase">
                        {subTitle}
                      </h3>
                      <div className="h-px flex-grow bg-zinc-800"></div>
                    </div>
                  )}

                  {/* Grid de platos */}
                  <div className="grid gap-4 md:grid-cols-2">
                    {items.map((item) => (
                      <div 
                        key={item.id} 
                        onClick={() => setSelectedItem(item)} // Abre el modal
                        className="group flex flex-col p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:border-accent/50 hover:bg-zinc-900 transition-all cursor-pointer relative overflow-hidden"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-xl font-bold group-hover:text-accent transition-colors">
                            {item.name[lang]}
                          </h4>
                          <span className="text-lg font-bold text-accent whitespace-nowrap ml-4">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed mb-4 flex-grow">
                          {item.description[lang]}
                        </p>
                        <div className="flex items-center text-xs font-bold text-zinc-600 uppercase tracking-widest group-hover:text-accent transition-colors">
                          <span>Ver detalle</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}

      {/* MODAL DETALLE (Popup que aparece al pulsar un plato) */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedItem(null)}>
          <div className="bg-zinc-950 rounded-3xl overflow-hidden max-w-3xl w-full border border-zinc-800 relative animate-scale-up shadow-2xl shadow-accent/10" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 z-10 bg-black/50 p-3 rounded-full text-white hover:text-accent border border-white/10 transition-all"
            >
              Cerrar
            </button>
            <div className="grid md:grid-cols-2">
              <div className="aspect-[4/5] md:aspect-auto bg-zinc-900">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.name[lang]} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <span className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-4">
                  {selectedItem.subcategory ? (SUB_CATEGORY_TITLES[selectedItem.subcategory]?.[lang] || selectedItem.subcategory) : (categoryTitles[selectedItem.category] || selectedItem.category)}
                </span>
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                  {selectedItem.name[lang]}
                </h2>
                <div className="w-12 h-1 bg-accent mb-6"></div>
                <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                  {selectedItem.description[lang]}
                </p>
                <div className="mt-auto flex items-baseline">
                  <span className="text-5xl font-black text-white">{selectedItem.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
