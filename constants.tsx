
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
  'pintxo-atun.jpeg',
  'pintxo-bolaCarne.jpeg',
  'pintxo-jamon.jpeg',
  'pintxo-mediaHamburguesa.jpeg',
  'pintxo-miniHamburguesa.jpeg',
  'pintxo-platanoMaduro.jpeg',
  'pintxo-sandwich.jpeg',
  'pintxo-cuartoDeHamburguesa.jpeg',
  'pintxo-miniTaco.jpeg',
];

// --- FOTOS DE COMIDA ---
export const GALLERY_FOOD = [
  'carta-B1.jpeg',
  'carta-P2.jpeg',
  'carta-R5.jpeg',
  'carta-S2.jpeg',
];

// --- FOTOS DE CAFÉ ---
export const GALLERY_COFFEE = [
  'cafe-CL1.jpeg',
  'cafe-CLV1.jpeg',
  'cafe-CL2.jpeg',
];

/**
 * ============================================================
 * 3. TÍTULOS DE SUBCATEGORÍAS
 * ============================================================
 */
export const SUB_CATEGORY_TITLES: Record<string, { ES: string, EUS: string }> = {
  raciones: { ES: 'RACIONES', EUS: 'RAZIOAK' },
  ensalada: { ES: 'ENSALADAS', EUS: 'ENTSALADAK' },
  enPan: { ES: 'EN PAN', EUS: 'OGIAN' },
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


  //======PINTXOS======
  {
    id: 1,
    category: 'pintxo',
    name: { ES: 'Cuarto de Hamburguesa', EUS: 'Hanburgesa laurdena' },
    price: '1.20€',
    description: {
      ES: 'Cuarto de hamburguesa de pulled pork, con huevo y queso.',
      EUS: 'Hanburgesa laurdena pulled pork-ena, harrautza eta gaztarekin.'
    },
    image: './img/pintxo-cuartoDeHamburguesa.jpeg'
  },
  {
    id: 2,
    category: 'pintxo',
    name: { ES: 'Mini Taco', EUS: 'Mini Tako' },
    price: '2.80€',
    description: { ES: 'Mini taco de pollo con queso y lechuga.', EUS: 'Mini tako oilaskoa, letxuga eta gazta.' },
    image: './img/pintxo-miniTaco.jpeg'
  },
  {
    id: 3,
    category: 'pintxo',
    name: { ES: 'Pintxo de atun con pan de semillas', EUS: 'Atun pintxoa hazi-ogiarekin' },
    price: '2.50€',
    description: { ES: 'Pincho normal de atun con pan de semillas', EUS: 'Atun pintxo normala hazi-ogiarekin' },
    image: './img/pintxo-atun.jpeg'
  },
  {
    id: 4,
    category: 'pintxo',
    name: { ES: 'Bola rellena de carne', EUS: 'Haragiz betetako bola' },
    price: '3.20€',
    description: { ES: 'Bola rellena de carne encima de pan', EUS: 'Haragiz betetako bola ogiaren gainean' },
    image: './img/pintxo-bolaCarne.jpeg'
  },
  {
    id: 5,
    category: 'pintxo',
    name: { ES: 'Pintxo de jamon', EUS: 'Urdaiazpiko pintxoa' },
    price: '2.50€',
    description: { ES: 'Pintxo normal de jamon', EUS: 'Urdaiazpiko pintxo normala' },
    image: './img/pintxo-jamon.jpeg'
  },
  {
    id: 6,
    category: 'pintxo',
    name: { ES: 'Media hamburguesa', EUS: 'Hanburgesa erdia' },
    price: '3.40€',
    description: {
      ES: 'Media hamburguesa con bacon, pechuga rebozada, queso y salsa de hamburguesa',
      EUS: 'Hanburgesa erdia bacon, papar errebozatua, gazta eta hanburgesa saltsarekin'
    },
    image: './img/pintxo-mediaHamburguesa.jpeg'
  },
  {
    id: 7,
    category: 'pintxo',
    name: { ES: 'Mini hamburguesa', EUS: 'Mini hanburgesa' },
    price: '2.80€',
    description: {
      ES: 'Mini hamburguesa con bacon, pechuga rebozada y salsa de hamburguesa',
      EUS: 'Mini hanburgesa bacon, papar errebozatua eta hanburgesa saltsarekin'
    },
    image: './img/pintxo-miniHamburguesa.jpeg'
  },
  {
    id: 8,
    category: 'pintxo',
    name: { ES: 'Especial iamai', EUS: 'Iamai-ren espeziala' },
    price: '2.80€',
    description: { ES: 'Platano maduro con carne picada.', EUS: 'Platano heldua haragi xehatuarekin.' },
    image: './img/pintxo-platanoMaduro.jpeg'
  },
  {
    id: 9,
    category: 'pintxo',
    name: { ES: 'Sandwich', EUS: 'Sandwich-a' },
    price: '3.40€',
    description: { ES: 'Sandwich vegetal', EUS: 'Barazki sandwich-a' },
    image: './img/pintxo-sandwich.jpeg'
  },

  //======PLATOS DE LA CARTA======

  {
    id: 10,
    category: 'carta',
    subcategory: 'raciones',
    name: { ES: 'R1. Nuestras croquetas', EUS: 'R1. Gure kroketak' },
    price: '8.00€',
    description: {
      ES: 'Cremosas por dentro y crujientes por fuera.',
      EUS: 'Barnean krematsuak eta kanpoan kurruskariak.'
    },
    image: './img/carta-R1.jpeg'
  },
  {
    id: 11,
    category: 'carta',
    subcategory: 'raciones',
    name: { ES: 'R2. Huevos rotos de jamon o panceta', EUS: 'R2. Urdaiazpiko edo hirugihar arrautza hautsiak' },
    price: '8.50€',
    description: {
      ES: 'Con base de patatas y opción de jamón o panceta.',
      EUS: 'Patata ohearekin eta urdaiazpiko edo hirugiharra aukeran.'
    },
    image: './img/carta-R2.jpeg'
  },
  {
    id: 12,
    category: 'carta',
    subcategory: 'raciones',
    name: { ES: 'R3. Tiras de pollo', EUS: 'R3. Oilasko tirak' },
    price: '9.00€',
    description: {
      ES: 'Tiras de pechuga empanadas estilo casero.',
      EUS: 'Etxeko eran arrautzatutako oilasko bular tirak.'
    },
    image: './img/carta-R3.jpeg'
  },
  {
    id: 13,
    category: 'carta',
    subcategory: 'raciones',
    name: { ES: 'R4. Tigres caseros', EUS: 'R4. Etxeko tigreak' },
    price: '8.90€',
    description: {
      ES: 'Mejillones rellenos con nuestra bechamel especial.',
      EUS: 'Gure bexamel bereziarekin betetako muskuiluak.'
    },
    image: './img/carta-R4.jpeg'
  },
  {
    id: 14,
    category: 'carta',
    subcategory: 'raciones',
    name: { ES: 'R5. Rabas caseras', EUS: 'R5. Etxeko rabak' },
    price: '8.50€',
    description: {
      ES: 'Clásico del Cantábrico, tiernas y sabrosas.',
      EUS: 'Kantauriko klasikoa, samurrak eta zaporetsuak.'
    },
    image: './img/carta-R5.jpeg'
  },
  {
    id: 15,
    category: 'carta',
    subcategory: 'raciones',
    name: { ES: 'R6. Patatas bravas (con salsa casera)', EUS: 'R6. Brabak (etxeko saltsarekin)' },
    price: '7.80€',
    description: {
      ES: 'Patatas doradas con nuestra salsa casera picante.',
      EUS: 'Patata urreztatuak gure etxeko saltsa minarekin.'
    },
    image: './img/carta-R6.jpeg'
  },
  {
    id: 16,
    category: 'carta',
    subcategory: 'raciones',
    name: { ES: 'R7. Jamón ibérico (reserva propia)', EUS: 'R7. Urdaiazpiko iberikoa (erreserba propioa)' },
    price: '19.00€',
    description: {
      ES: 'Corte fino y sabor intenso.',
      EUS: 'Mozketa fina eta zapore bizia.'
    },
    image: './img/carta-R7.jpeg'
  },
  {
    id: 17,
    category: 'carta',
    subcategory: 'ensalada',
    name: { ES: 'E1. César con Pollo Crujiente', EUS: 'E1. Zesar Oilasko Kurruskariarekin' },
    price: '12.00€',
    description: {
      ES: 'Lechuga, tomate, cebolla, panecillos, aceitunas, pollo crujiente y salsa césar.',
      EUS: 'Uraska, tomatea, tipula, ogi-takoak, olibak, oilasko kurruskaria eta zesar saltsa.'
    },
    image: './img/carta-E1.jpeg'
  },
  {
    id: 18,
    category: 'carta',
    subcategory: 'ensalada',
    name: { ES: 'E2. Langostinos Torpedo', EUS: 'E2. Torpedo Otarrainxkak' },
    price: '12.00€',
    description: {
      ES: 'Lechuga, tomate, cebolla, langostinos torpedo y salsa de yogurt agridulce.',
      EUS: 'Uraza, tomatea, tipula, torpedo otarrainxkak eta jogurt saltsa gazi-gozoa.'
    },
    image: './img/carta-E2.jpeg'
  },
  {
    id: 19,
    category: 'carta',
    subcategory: 'enPan',
    name: { ES: 'S1. Sándwich Doble Pavo y Queso', EUS: 'S1. Indioilar eta Gazta Sandwich Bikoitza' },
    price: '7.50€',
    description: {
      ES: 'Doble jamón de pavo y queso fundido.',
      EUS: 'Indioilar urdaiazpiko bikoitza eta gazta urtua.'
    },
    image: './img/carta-S1.jpeg'
  },
  {
    id: 20,
    category: 'carta',
    subcategory: 'enPan',
    name: { ES: 'S2. Sándwich de Pastrami', EUS: 'S2. Pastrami Sandwic-a' },
    price: '8.50€',
    description: {
      ES: 'Lechuga, cebolla caramelizada, huevo cocido, queso, pastrami y mahonesa.',
      EUS: 'Uraza, tipula karamelizatua, arrautza egosia, gazta, pastrami eta maionesa.'
    },
    image: './img/carta-S2.jpeg'
  },
  {
    id: 21,
    category: 'carta',
    subcategory: 'enPan',
    name: { ES: 'H1. Hamburguesa Iamai', EUS: 'H1. Iamai Hanburgesa' },
    price: '13.50€',
    description: {
      ES: 'Carne de vaca, panceta, cebolla pochada, huevo frito, queso y salsa de la casa.',
      EUS: 'Behi-haragia, hirugiharra, tipula potxatua, arrautza frijitua, gazta eta etxeko saltsa.'
    },
    image: './img/carta-H1.jpeg'
  },
  {
    id: 22,
    category: 'carta',
    subcategory: 'enPan',
    name: { ES: 'H2. Hamburguesa de Cochinillo', EUS: 'H2. Txerrikume Hanburgesa' },
    price: '13.50€',
    description: {
      ES: 'Carne de cochinillo frita en panko, panceta, cebolla pochada, huevo frito, queso y salsa.',
      EUS: 'Txerrikume haragia panko ogian frijitua, hirugiharra, tipula potxatua, arrautza frijitua, gazta eta saltsa.'
    },
    image: './img/carta-H2.jpeg'
  },
  {
    id: 23,
    category: 'carta',
    subcategory: 'enPan',
    name: { ES: 'B1. Bocadillo Iamai', EUS: 'B1. Iamai Bokata' },
    price: '9.00€',
    description: {
      ES: 'Pollo frito con pan rallado casero, cebolla caramelizada, panceta, queso, patatas y salsa especial.',
      EUS: 'Oilasko frijitua etxeko ogi birinduarekin, tipula karamelizatua, hirugiharra, gazta, patatak eta saltsa berezia.'
    },
    image: './img/carta-B1.jpeg'
  },
  {
    id: 24,
    category: 'carta',
    subcategory: 'combinados',
    name: { ES: 'P1. Pollo Frito', EUS: 'P1. Oilasko Frijitua' },
    price: '14.00€',
    description: {
      ES: 'Con panceta, dos huevos fritos, croquetas y patatas.',
      EUS: 'Hirugiharrarekin, bi arrautza frijitu, kroketak eta patatekin.'
    },
    image: './img/carta-P1.jpeg'
  },
  {
    id: 25,
    category: 'carta',
    subcategory: 'combinados',
    name: { ES: 'P2. Entrecot de Vaca', EUS: 'P2. Behi Entrekota' },
    price: '24.00€',
    description: {
      ES: 'Con patatas fritas y pimientos.',
      EUS: 'Patata frijituekin eta piperrekin.'
    },
    image: './img/carta-P2.jpeg'
  },
  {
    id: 26,
    category: 'carta',
    subcategory: 'combinados',
    name: { ES: 'P3. Jamón Ibérico', EUS: 'P3. Urdaiazpiko Iberikoa' },
    price: '14.00€',
    description: {
      ES: 'Con dos huevos fritos y patatas.',
      EUS: 'Bi arrautza frijitu eta patatekin.'
    },
    image: './img/carta-P3.jpeg'
  },
  {
    id: 27,
    category: 'carta',
    subcategory: 'postres',
    name: { ES: 'Tarta de Queso Casera', EUS: 'Etxeko Gazta-tarta' },
    price: '7.50€',
    description: {
      ES: 'Nuestra especialidad casera cremosa.',
      EUS: 'Gure etxeko espezialitate krematsua.'
    },
    image: './img/carta-tartaIamai.jpeg'
  },
  {
    id: 28,
    category: 'carta',
    subcategory: 'postres',
    name: { ES: 'Copa de Helado Iamai', EUS: 'Iamai Izozki Kopa' },
    price: '8.00€',
    description: {
      ES: 'Brownie, nata montada, helado de dulce de leche, chocolate y galleta.',
      EUS: 'Browniea, esne-gain harrotua, esne-gozoko izozkia, txokolatea eta gaileta.'
    },
    image: './img/carta-heladoIamai.jpeg'
  },

  //======CAFÉ======
  {
    id: 29,
    category: 'coffee',
    name: { ES: 'Café solo', EUS: 'Kafe hutsa' },
    price: '1.60€',
    description: { ES: 'Cafe solo.', EUS: 'Kafe hutsa.' },
    image: './img/CL1.jpeg'
  },
  {
    id: 30,
    category: 'coffee',
    name: { ES: 'Café cortado', EUS: 'Ebakia' },
    price: '1.75€',
    description: { ES: 'Cafe corto de leche.', EUS: 'Esne gutxiko kafea.' },
    image: './img/CL1.jpeg'
  },

  {
    id: 31,
    category: 'coffee',
    name: { ES: 'Café con leche', EUS: 'Kafesnea' },
    price: '1.90€',
    description: { ES: 'Cafe con leche tradicional sin crema en vaso.', EUS: 'Krema gabeko kafesne tradizionala basuan.' },
    image: './img/CL1.jpeg'
  },
  {
    id: 32,
    category: 'coffee',
    name: { ES: 'Café con leche en vaso', EUS: 'Kafesnea basuan' },
    price: '2.15€',
    description: { ES: 'Cafe con leche tradicional sin crema en vaso.', EUS: 'Krema gabeko kafesne tradizionala basuan.' },
    image: './img/CLV1.jpeg'
  },
  {
    id: 33,
    category: 'coffee',
    name: { ES: 'Colacao', EUS: 'Kolakaoa' },
    price: '2.15€',
    description: { ES: 'Colacao en vaso.', EUS: 'Kolakaoa basuan.' },
    image: './img/CLV1.jpeg'
  },
  {
    id: 34,
    category: 'coffee',
    name: { ES: 'Churrustada', EUS: 'Txurrustada' },
    price: '0.80€',
    description: { ES: 'Churrustada de el licor que más prefieras (Baileys, Ron, Whisky, etc).', EUS: 'Nahiago duzun likorearen txurrustada (Baileys, Ron, Whisky, etab.)' },
    image: './img/CLV1.jpeg'
  },
  {
    id: 35,
    category: 'coffee',
    name: { ES: 'Para llevar', EUS: 'Etxera eramateko' },
    price: '0.20€',
    description: { ES: 'Vaso para llevar.', EUS: 'Eramateko edalontzia.' },
    image: './img/CLV1.jpeg'
  },
];