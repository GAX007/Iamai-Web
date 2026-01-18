
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

/**
 * COMPONENTE: Barra de Navegación (Navbar)
 */
const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false); // Menú móvil abierto/cerrado
  const [scrolled, setScrolled] = useState(false); // Detectar scroll para cambiar estilo
  const location = useLocation(); // Saber en qué página estamos para resaltar el link
  const t = TRANSLATIONS[lang];

  /**
   * EFECTO: Detectar Scroll
   * Si el usuario baja más de 50px, la barra se vuelve más oscura y compacta.
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enlaces de navegación extraídos de las traducciones
  const navLinks = [
    { name: t.navHome, path: '/' },
    { name: t.navMenu, path: '/menu' },
    { name: t.navGallery, path: '/gallery' },
    { name: t.navContact, path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
            IAMAI <span className="text-accent">CAFE</span>
          </Link>

          {/* MENÚ DE ESCRITORIO (Solo visible en pantallas grandes) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === link.path ? 'text-accent' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* SELECTOR DE IDIOMA */}
            <div className="flex items-center bg-zinc-900 rounded-full p-1 border border-zinc-800">
              <button
                onClick={() => setLang('ES')}
                className={`px-3 py-1 text-xs rounded-full transition-all ${lang === 'ES' ? 'bg-accent text-white' : 'text-zinc-400'}`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('EUS')}
                className={`px-3 py-1 text-xs rounded-full transition-all ${lang === 'EUS' ? 'bg-accent text-white' : 'text-zinc-400'}`}
              >
                EUS
              </button>
            </div>
          </div>

          {/* BOTÓN MÓVIL (Hamburgesa) */}
          <div className="md:hidden flex items-center space-x-4">
             <button
                onClick={() => setLang(lang === 'ES' ? 'EUS' : 'ES')}
                className="text-xs font-bold text-accent border border-accent px-2 py-1 rounded"
              >
                {lang}
              </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-white hover:text-accent"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
