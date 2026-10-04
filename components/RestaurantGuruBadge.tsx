import React, { useEffect } from 'react';

/**
 * COMPONENTE: RestaurantGuruBadge
 * Insignia oficial "Recomendado 2026" de Restaurant Guru para Restaurante Iamai.
 */
const RestaurantGuruBadge: React.FC = () => {
  useEffect(() => {
    // Cargar la hoja de estilos oficial de Restaurant Guru si no está presente
    const linkId = 'rg-award-css';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.href = 'https://awards.infcdn.net/2026/r_rcm.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-6">
      <div
        className="transition-transform duration-300 hover:scale-105"
        dangerouslySetInnerHTML={{
          __html: `
            <div id="b-rcircle" data-length="29" class="b-rcircle_black rg-award-lang-es_ES" onclick="if(event.target.nodeName.toLowerCase() != 'a') {window.open(this.querySelector('.b-rcircle_r-link').href);return 0;}">
              <a href="https://es.restaurantguru.com/Iamai-Kafe-Arrasate" class="b-rcircle_r-link" target="_blank" rel="noopener noreferrer">Restaurante Iamai</a>
              <p class="b-rcircle_year">2026</p>
              <div class="b-rcircle_bottom">
                <p class="b-rcircle_str1">Recomendado</p>
              </div>
              <div class="b-rcircle_heading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="144px" height="144px" viewBox="0 0 144 144">
                  <defs>
                    <path id="b-rcircle-arc" d="M 12 72 a 60 60 0 0 0 120 0"></path>
                  </defs>
                  <text class="b-rcircle_heading__bottom" fill="#fff" text-anchor="middle">
                    <textPath startOffset="50%" xlink:href="#b-rcircle-arc">
                      <a href="https://restaurantguru.com/" target="_blank" rel="noopener noreferrer" class="b-rcircle_heading__link">Restaurant Guru</a>
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          `,
        }}
      />
    </div>
  );
};

export default RestaurantGuruBadge;
