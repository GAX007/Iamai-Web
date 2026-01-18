
import { MenuItem, TranslationStrings } from './types';

/**
 * ============================================================
 * 1. TEXTOS DE LA WEB (Traducciones)
 * ============================================================
 */
export const TRANSLATIONS: Record<'ES' | 'EUS', TranslationStrings> = {
  ES: {
    navHome: 'Inicio',
    navMenu: 'Carta',
    navGallery: 'Galería',
    navContact: 'Contacto',
    heroSubtitle: 'Pintxos de autor y Café de especialidad en el corazón de la ciudad.',
    viewMenu: 'Ver Carta',
    favoritesTitle: 'Nuestros Favoritos',
    pintxosSection: 'Nuestra Barra de Pintxos',
    coffeeSection: 'Café de Especialidad',
    foodSection: 'Nuestra Cocina',
    cartaSection: 'Nuestra Carta Completa',
    menuSection: 'Menú del Día',
    scheduleTitle: 'Horario',
    scheduleNote: 'Horario a confirmar',
    followUs: 'Síguenos en Instagram',
    contactTitle: 'Contacto y Ubicación',
  },
  EUS: {
    navHome: 'Hasiera',
    navMenu: 'Karta',
    navGallery: 'Galeria',
    navContact: 'Kontaktua',
    heroSubtitle: 'Egile-pintxoak eta espezialitateko kafea hiriaren bihotzean.',
    viewMenu: 'Karta Ikusi',
    favoritesTitle: 'Gure Gogokoenak',
    pintxosSection: 'Gure Pintxo Barra',
    coffeeSection: 'Espezialitateko Kafea',
    foodSection: 'Gure Sukaldea',
    cartaSection: 'Gure Karta Osoa',
    menuSection: 'Eguneko Menua',
    scheduleTitle: 'Ordutegia',
    scheduleNote: 'Ordutegia baieztatzeko',
    followUs: 'Jarrai gaitzazu Instagramen',
    contactTitle: 'Kontaktua eta Kokapena',
  },
};

/**
 * ============================================================
 * 2. GESTIÓN DE LA GALERÍA (Todo en /img/)
 * Solo añade el nombre del archivo. Ejemplo: 'gilda.jpg'
 * ============================================================
 */

// --- FOTOS DE PINTXOS ---
export const GALLERY_PINTXOS = [
  'gilda.jpg',
  'tortilla.jpg',
  'bacalao.jpg',
  'gallery-pintxo-1.jpg',
  'gallery-pintxo-2.jpg',
  'gallery-pintxo-3.jpg',
];

// --- FOTOS DE COMIDA ---
export const GALLERY_FOOD = [
  'comida-1.jpg',
  'comida-2.jpg',
  'comida-3.jpg',
  'comida-4.jpg',
  'comida-5.jpg',
  'comida-6.jpg',
];

// --- FOTOS DE CAFÉ ---
export const GALLERY_COFFEE = [
  'cafe-flat-white.jpg',
  'cafe-v60.jpg',
  'cafe-espresso.jpg',
  'cafe-latte-art.jpg',
  'cafe-grano-especialidad.jpg',
  'cafe-barista.jpg',
];

/**
 * ============================================================
 * 3. TÍTULOS DE SUBCATEGORÍAS
 * ============================================================
 */
export const SUB_CATEGORY_TITLES: Record<string, { ES: string, EUS: string }> = {
  raciones: { ES: 'RACIONES', EUS: 'RAZIOAK' },
  bocadillos: { ES: 'BOCADILLOS', EUS: 'OGITARTEKOAK' },
  combinados: { ES: 'PLATOS COMBINADOS', EUS: 'PLATER KONBINATUAK' },
  postres: { ES: 'POSTRES', EUS: 'POSTREAK' },
  primero: { ES: 'PRIMEROS PLATOS', EUS: 'LEHENENGO PLATERAK' },
  segundo: { ES: 'SEGUNDOS PLATOS', EUS: 'BIGARREN PLATERAK' }
};

/**
 * ============================================================
 * 4. PLATOS DE LA CARTA (Rutas en /img/ directas)
 * ============================================================
 */
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    category: 'pintxo',
    name: { ES: 'Gilda Moderna', EUS: 'Gilda Modernoa' },
    price: '3.50€',
    description: {
      ES: 'Anchoa del cantábrico, piparra y cítricos.',
      EUS: 'Kantauri itsasoko antxoa, piparra eta zitrikoak.'
    },
    image: './img/gilda.jpg'
  },
  {
    id: 4,
    category: 'coffee',
    name: { ES: 'Flat White', EUS: 'Flat White' },
    price: '3.20€',
    description: { ES: 'Café de especialidad.', EUS: 'Espezialitateko kafea.' },
    image: './img/cafe-flat-white.jpg'
  },
  {
    id: 7,
    category: 'carta',
    subcategory: 'raciones',
    name: { ES: 'Rabas Crujientes', EUS: 'Raba Kurruskariak' },
    price: '9.50€',
    description: { ES: 'Calamares frescos con alioli de lima.', EUS: 'Txipiroi freskoak limazko alioliarekin.' },
    image: './img/rabas.jpg'
  }
];
