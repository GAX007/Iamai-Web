
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
  'CuartoDeHamburguesa.jpeg',
  'MiniTaco.jpeg',
];

// --- FOTOS DE COMIDA ---
export const GALLERY_FOOD = [
  'B1-Bocadillo.jpeg',
  'H1-Hamburguesa.jpeg',
];

// --- FOTOS DE CAFÉ ---
export const GALLERY_COFFEE = [
  'CL1.jpeg',
  'CLV1.jpeg',
  'CL2.jpeg',
];

/**
 * ============================================================
 * 3. TÍTULOS DE SUBCATEGORÍAS
 * ============================================================
 */
export const SUB_CATEGORY_TITLES: Record<string, { ES: string, EUS: string }> = {
  raciones: { ES: 'RACIONES', EUS: 'RAZIOAK' },
  enPan: { ES: 'EN PAN', EUS: 'OGIAREKIN' },
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

    //======PINTXOS======
    id: 1,
    category: 'pintxo',
    name: { ES: 'Cuarto de Hamburguesa', EUS: 'Hamburgesa laurdena' },
    price: '1.20€',
    description: {
      ES: 'Cuarto de hamburguesa de pulled pork, con huevo y queso.',
      EUS: 'Hamburgesa laurdena pulled pork-ena, harrautza eta gaztarekin.'
    },
    image: './img/CuartoDeHamburguesa.jpeg'
  },
  {
    id: 2,
    category: 'pintxo',
    name: { ES: 'Mini Taco', EUS: 'Mini Tako' },
    price: '2.80€',
    description: { ES: 'Mini taco de pollo con queso y lechuga.', EUS: 'Mini tako oilaskoa, letxuga eta gazta.' },
    image: './img/MiniTaco.jpeg'
  },

//======PLATOS DE LA CARTA======

  {
    id: 3,
    category: 'carta',
    subcategory: 'enPan',
    name: { ES: 'B1-Bocadillo', EUS: 'B1-Ogitartekoa' },
    price: '9.00€',
    description: { ES: 'Bocadillo casero.', EUS: 'Ogitarteko kaseroak.' },
    image: './img/B1-Bocadillo.jpeg'
  },
  {
    id: 4,
    category: 'carta',
    subcategory: 'enPan',
    name: { ES: 'H1-Hamburguesa', EUS: 'H1-Hamburgesa' },
    price: '13.00€',
    description: { ES: 'Hamburguesa casera con patatas, pan de brioche y queso.', EUS: 'Hamburgesa kaseroak patatekin, brioche ogia eta gazta.' },
    image: './img/H1-Hamburguesa.jpeg'
  },


//======CAFÉ======
{
    id: 4,
    category: 'coffee',
    name: { ES: 'Café con leche', EUS: 'Kafesnea' },
    price: '1.90€',
    description: { ES: 'Cafe con leche tradicional sin crema.', EUS: 'Krema gabeko kafesne tradizionala.' },
    image: './img/CL1.jpeg'
  },


  {
    id: 5,
    category: 'coffee',
    name: { ES: 'Café con leche en vaso', EUS: 'Kafesnea basuan' },
    price: '2.15€',
    description: { ES: 'Cafe con leche tradicional sin crema en vaso.', EUS: 'Krema gabeko kafesne tradizionala basuan.' },
    image: './img/CLV1.jpeg'
  },
];