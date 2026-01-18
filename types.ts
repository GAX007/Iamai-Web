
export type Language = 'ES' | 'EUS';

export interface MenuItem {
  id: number;
  category: 'pintxo' | 'coffee' | 'carta' | 'menu';
  subcategory?: string; 
  name: {
    ES: string;
    EUS: string;
  };
  price: string;
  description: {
    ES: string;
    EUS: string;
  };
  image: string;
}

export interface TranslationStrings {
  navHome: string;
  navMenu: string;
  navGallery: string;
  navContact: string;
  heroSubtitle: string;
  viewMenu: string;
  favoritesTitle: string;
  pintxosSection: string;
  coffeeSection: string;
  foodSection: string; // Nueva sección para la galería de comida
  cartaSection: string;
  menuSection: string;
  scheduleTitle: string;
  scheduleNote: string;
  followUs: string;
  contactTitle: string;
}
