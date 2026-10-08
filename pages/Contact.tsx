
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

/**
 * PÁGINA: Contacto
 * Muestra horario, enlace a Google Maps y botones de redes sociales.
 */
const Contact: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 uppercase tracking-widest">{t.navContact}</h1>
        <p className="text-zinc-400">
          {lang === 'ES' ? '¿Quieres visitarnos o hacernos una consulta?' : 'Bisitatu nahi gaituzu edo galderaren bat egin?'}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* COLUMNA IZQUIERDA: Horarios e Información técnica */}
        <div className="space-y-12">
          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-accent">{t.scheduleTitle}</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">{lang === 'ES' ? 'Lunes - Viernes' : 'Astelehena - Ostirala'}</span>
                <span className="font-medium">10:00 - 23:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">{lang === 'ES' ? 'Sábado' : 'Larunbata'}</span>
                <span className="font-medium">10:00 - 23:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">{lang === 'ES' ? 'Domingo' : 'Igandea'}</span>
                <span className="font-medium">10:00 - 23:00</span>
              </div>
            </div>
            <p className="mt-8 text-sm text-zinc-500 italic">
              * {t.scheduleNote}
            </p>
          </div>

          {/* Información de Ubicación y Teléfono */}
          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-accent">{lang === 'ES' ? 'Ubicación' : 'Kokapena'}</h2>
            <div className="flex items-start space-x-4 mb-6">
              <p className="text-lg">Kontzezino Kalea, 14, 20500 Arrasate / Mondragón, Gipuzkoa</p>
            </div>
            <div className="flex items-center space-x-4 mb-8">
              <a href="tel:+34943712995" className="text-lg hover:text-accent transition-colors">+34 943 71 29 95</a>
            </div>

            {/* Botón Instagram */}
            <a
              href="https://www.instagram.com/iamaicafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-zinc-800 hover:bg-accent text-white py-3 px-6 rounded-xl transition-all font-bold w-full"
            >
              <span>{t.followUs}</span>
            </a>
          </div>
        </div>

        {/* Google Maps solo recibe la visita cuando se abre el enlace. */}
        <div className="min-h-[400px] bg-zinc-900 rounded-3xl border border-zinc-800 shadow-xl p-8 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold mb-6 text-accent">
            {lang === 'ES' ? 'Cómo llegar' : 'Nola iritsi'}
          </h2>
          <p className="text-lg mb-6">Kontzezino Kalea, 14, Arrasate / Mondragón</p>
          <p className="text-zinc-400 mb-8 max-w-md">
            {lang === 'ES'
              ? 'El mapa se abre en Google Maps solo si pulsas el enlace. Al hacerlo, Google recibirá tu dirección IP y aplicará su política de privacidad.'
              : 'Mapa Google Maps-en irekiko da esteka sakatzen baduzu soilik. Orduan, Googlek zure IP helbidea jasoko du eta bere pribatutasun-politika aplikatuko du.'}
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Restaurante+Iamai+Kontzezino+Kalea+14+Arrasate"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors"
          >
            {lang === 'ES' ? 'Abrir Google Maps ↗' : 'Google Maps ireki ↗'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
