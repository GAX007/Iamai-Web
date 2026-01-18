
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Language } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

/**
 * COMPONENTE PRINCIPAL (App)
 * Aquí configuramos la estructura global de la web.
 */
const App: React.FC = () => {
  /**
   * ESTADO DEL IDIOMA
   * 'lang' guarda el idioma elegido (ES o EUS).
   * 'setLang' permite cambiarlo. 
   * Lo pasamos a los componentes para que toda la web se actualice al instante.
   */
  const [lang, setLang] = useState<Language>('ES');

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        {/* La barra de navegación es fija en todas las páginas */}
        <Navbar lang={lang} setLang={setLang} />

        {/* El contenido principal (main) cambia según la ruta que visite el usuario */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/menu" element={<Menu lang={lang} />} />
            <Route path="/gallery" element={<Gallery lang={lang} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
          </Routes>
        </main>

        {/* El pie de página siempre visible al final */}
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
