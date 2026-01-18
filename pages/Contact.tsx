
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

/**
 * PÁGINA: Contacto
 * Muestra horario, mapa interactivo de Google y botones de redes sociales.
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
              <a href="tel:+34943000000" className="text-lg hover:text-accent transition-colors">+34 943 71 29 95</a>
            </div>

            {/* Botón Instagram */}
            <a
              href="https://www.instagram.com/iamaicafe?igsh=MXQwbmxsajNraXd4NA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-zinc-800 hover:bg-accent text-white py-3 px-6 rounded-xl transition-all font-bold w-full"
            >
              <span>{t.followUs}</span>
            </a>
          </div>
        </div>

        {/* COLUMNA DERECHA: Mapa interactivo (Iframe de Google Maps) */}
        <div className="h-[500px] lg:h-full min-h-[400px] bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.9454948131947!2d-2.494017023920752!3d43.06361389036377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4fd67a43172f57%3A0xd85b9d63232b7288!2sRestaurante%20Iamai!5e0!3m2!1ses!2ses!4v1768679041806!5m2!1ses!2ses"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="grayscale invert contrast-125" // Estilo oscuro para el mapa
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
