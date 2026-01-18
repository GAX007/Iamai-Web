
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * PUNTO DE ENTRADA DE LA APLICACIÓN
 * Este es el primer archivo que lee el navegador. 
 * Se encarga de buscar el div con id "root" en el HTML y "dibujar" el componente App dentro.
 */
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("No se pudo encontrar el elemento root para montar la aplicación");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
