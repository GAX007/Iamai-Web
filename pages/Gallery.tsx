
import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, GALLERY_PINTXOS, GALLERY_COFFEE, GALLERY_FOOD } from '../constants';

/**
 * INTERFAZ DE PROPS
 */
interface LazyImageProps {
  fileName: string;
  alt: string;
}

/**
 * COMPONENTE: LazyImage
 * Implementación robusta para evitar errores de desestructuración y eventos.
 */
function LazyImage(props: LazyImageProps) {
  const { fileName, alt } = props;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  const src = fileName.startsWith('http') ? fileName : `./img/${fileName}`;

  useEffect(() => {
    const node = imgRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(node);
        }
      },
      { rootMargin: '200px', threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={imgRef} 
      className="overflow-hidden rounded-xl bg-zinc-900 group min-h-[200px] relative transition-all duration-500 border border-zinc-800/30 shadow-lg"
    >
      {isIntersecting && (
        <img 
          src={src} 
          alt={alt} 
          className={`w-full h-auto object-cover group-hover:scale-105 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      )}
      
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      )}
    </div>
  );
}

/**
 * COMPONENTE: Gallery
 */
export default function Gallery({ lang }: { lang: Language }) {
  const t = TRANSLATIONS[lang];

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      {/* Cabecera */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl font-bold mb-4 uppercase tracking-widest">{t.navGallery}</h1>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <p className="text-zinc-400 max-w-2xl mx-auto italic">
          {lang === 'ES' 
            ? 'Momentos capturados en Iamai. Calidad en cada imagen.' 
            : 'Iamai-n hildako uneak. Kalitatea irudi bakoitzean.'}
        </p>
      </div>

      {/* SECCIÓN PINTXOS */}
      <section className="mb-24 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-2xl font-bold mb-10 text-center flex items-center justify-center text-accent uppercase tracking-widest">
          <span className="h-px w-8 bg-accent/30 mr-4"></span>
          {t.pintxosSection}
          <span className="h-px w-8 bg-accent/30 ml-4"></span>
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_PINTXOS.map((fileName, i) => (
            <LazyImage key={`pintxo-${i}`} fileName={fileName} alt={`Pintxo ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* SECCIÓN COCINA */}
      <section className="mb-24 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-2xl font-bold mb-10 text-center flex items-center justify-center text-accent uppercase tracking-widest">
          <span className="h-px w-8 bg-accent/30 mr-4"></span>
          {t.foodSection}
          <span className="h-px w-8 bg-accent/30 ml-4"></span>
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_FOOD.map((fileName, i) => (
            <LazyImage key={`food-${i}`} fileName={fileName} alt={`Comida ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* SECCIÓN CAFÉ */}
      <section className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <h2 className="text-2xl font-bold mb-10 text-center flex items-center justify-center text-accent uppercase tracking-widest">
          <span className="h-px w-8 bg-accent/30 mr-4"></span>
          {t.coffeeSection}
          <span className="h-px w-8 bg-accent/30 ml-4"></span>
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_COFFEE.map((fileName, i) => (
            <LazyImage key={`coffee-${i}`} fileName={fileName} alt={`Café ${i + 1}`} />
          ))}
        </div>
      </section>
    </div>
  );
}
