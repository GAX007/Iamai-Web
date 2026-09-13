
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
    price: '1.90€',
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
    price: '3.80€',
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
    name: { ES: 'R1. Nuestras croquetas caseras', EUS: 'R1. Gure etxeko kroketak' },
    price: '8.50€',
    description: { ES: 'Cremosas por dentro y crujientes por fuera.', EUS: 'Barnean krematsuak eta kanpoan kurruskariak.' },
    image: './img/carta-R1.jpeg'
  },
  {
    id: 11,
    category: 'carta',
    subcategory: 'raciones',
    name: { ES: 'R2. Tiras de pollo crujientes', EUS: 'R2. Oilasko tira kurruskariak' },
    price: '9.00€',
    description: { ES: 'Con salsa especial de la casa.', EUS: 'Etxeko saltsa bereziarekin.' },
    image: './img/carta-R3.jpeg'
  },
  {
    id: 12,
    category: 'carta',
    subcategory: 'raciones',
    name: { ES: 'R3. Tigres caseros', EUS: 'R3. Etxeko tigreak' },
    price: '9.50€',
    description: { ES: 'Mejillones rellenos con nuestra bechamel especial.', EUS: 'Gure bexamel bereziarekin betetako muskuiluak.' },
    image: './img/carta-R4.jpeg'
  },
  {
    id: 13,
    category: 'carta',
    subcategory: 'raciones',
    name: { ES: 'R4. Rabas caseras con alioli y limón', EUS: 'R4. Etxeko rabak alioli eta limoiarekin' },
    price: '9.50€',
    description: { ES: 'Clásico del Cantábrico.', EUS: 'Kantauriko klasikoa.' },
    image: './img/carta-R5.jpeg'
  },
  {
    id: 14,
    category: 'carta',
    subcategory: 'raciones',
    name: { ES: 'R5. Patatas bravas o alioli', EUS: 'R5. Patata brabak edo aliolia' },
    price: '7.50€',
    description: { ES: 'Con salsa casera.', EUS: 'Etxeko saltsarekin.' },
    image: './img/carta-R6.jpeg'
  },
  {
    id: 15,
    category: 'carta',
    subcategory: 'raciones',
    name: { ES: 'R6. Jamón ibérico (reserva propia)', EUS: 'R6. Urdaiazpiko iberikoa (erreserba propioa)' },
    price: '19.00€',
    description: { ES: 'Corte fino y sabor intenso.', EUS: 'Mozketa fina eta zapore bizia.' },
    image: './img/carta-R7.jpeg'
  },
  {
    id: 16,
    category: 'carta',
    subcategory: 'ensalada',
    name: { ES: 'E1. César con pollo crujiente', EUS: 'E1. Zesar oilasko kurruskariarekin' },
    price: '12.00€',
    description: { ES: 'Lechuga, tomate, cebolla, panecillos, aceitunas, pollo crujiente y salsa cesar casera.', EUS: 'Uraska, tomatea, tipula, ogi-takoak, olibak, oilasko kurruskaria eta etxeko zesar saltsa.' },
    image: './img/carta-E1.jpeg'
  },
  {
    id: 17,
    category: 'carta',
    subcategory: 'ensalada',
    name: { ES: 'E2. Mixta Iamai', EUS: 'E2. Iamai Mixtoa' },
    price: '8.50€',
    description: { ES: 'Lechuga, tomate, cebolla, huevo cocido, aceitunas y atún.', EUS: 'Uraza, tomatea, tipula, arrautza egosia, olibak eta atuna.' },
    image: './img/carta-E2-mixta.jpeg'
  },
  {
    id: 18,
    category: 'carta',
    subcategory: 'enPan',
    name: { ES: 'S1. Doble jamón de pavo y queso', EUS: 'S1. Indioilar urdaiazpiko bikoitza eta gazta' },
    price: '7.50€',
    description: { ES: 'Jamón de pavo y queso *(opción de añadir ingredientes extras: huevo frito y bacón).', EUS: 'Indioilar urdaiazpikoa eta gazta *(osagai estrak gehitzeko aukera: arrautza frijitua eta hirugiharra).' },
    image: './img/carta-S1.jpeg'
  },
  {
    id: 19,
    category: 'carta',
    subcategory: 'enPan',
    name: { ES: 'S2. Vegetal con pollo frito', EUS: 'S2. Begetala oilasko frijituarekin' },
    price: '9.50€',
    description: { ES: 'Lechuga, tomate, cebolla caramelizada, huevo cocido, queso, pollo frito y salsa especial de la casa.', EUS: 'Uraza, tomatea, tipula karamelizatua, arrautza egosia, gazta, oilasko frijitua eta etxeko saltsa berezia.' },
    image: './img/carta-S3.jpeg'
  },
  {
    id: 20,
    category: 'carta',
    subcategory: 'enPan',
    name: { ES: 'H1. Iamai Burguer', EUS: 'H1. Iamai Hanburgesa' },
    price: '12.50€',
    description: { ES: 'Carne de vaca smasheada, panceta, cebolla caramelizada, huevo frito, queso y salsa de la casa, en pan brioche.', EUS: 'Behi-haragi smasheada, hirugiharra, tipula karamelizatua, arrautza frijitua, gazta eta etxeko saltsa, brioche ogian.' },
    image: './img/carta-H1.jpeg'
  },
  {
    id: 21,
    category: 'carta',
    subcategory: 'enPan',
    name: { ES: 'H2. Crispy Burguer', EUS: 'H2. Crispy Hanburgesa' },
    price: '12.50€',
    description: { ES: 'Pollo frito casero, panceta, huevo frito, queso y salsa de la casa, en pan brioche.', EUS: 'Etxeko oilasko frijitua, hirugiharra, arrautza frijitua, gazta eta etxeko saltsa, brioche ogian.' },
    image: './img/carta-H2.jpeg'
  },
  {
    id: 22,
    category: 'carta',
    subcategory: 'combinados',
    name: { ES: 'P1. Chipirones a la plancha', EUS: 'P1. Txipiroiak plantxan' },
    price: '13.50€',
    description: { ES: 'Con ensalada, patatas panaderas y cebollas caramelizada.', EUS: 'Entsalada, patata panaderak eta tipula karamelizatuarekin.' },
    image: './img/carta-P1.jpeg'
  },
  {
    id: 23,
    category: 'carta',
    subcategory: 'combinados',
    name: { ES: 'P2. Escalope de ternera', EUS: 'P2. Txahal eskalopea' },
    price: '16.00€',
    description: { ES: 'Con huevos fritos y patatas.', EUS: 'Arrautza frijitu eta patatekin.' },
    image: './img/carta-P2.jpeg'
  },
  {
    id: 24,
    category: 'carta',
    subcategory: 'combinados',
    name: { ES: 'P3. Albóndigas en salsa caseras', EUS: 'P3. Etxeko albondigak saltsan' },
    price: '13.50€',
    description: { ES: 'Con huevos fritos y patatas.', EUS: 'Arrautza frijitu eta patatekin.' },
    image: './img/carta-P3.jpeg'
  },
  {
    id: 25,
    category: 'carta',
    subcategory: 'combinados',
    name: { ES: 'P4. Jamón ibérico', EUS: 'P4. Urdaiazpiko iberikoa' },
    price: '12.00€',
    description: { ES: 'Con huevos fritos, croquetas y patatas.', EUS: 'Arrautza frijitu, kroketa eta patatekin.' },
    image: './img/carta-P4.jpeg'
  },
  {
    id: 26,
    category: 'carta',
    subcategory: 'combinados',
    name: { ES: 'P5. Panceta de bellota', EUS: 'P5. Ezkur hirugiharra' },
    price: '12.00€',
    description: { ES: 'Con huevos fritos, croquetas y patatas.', EUS: 'Arrautza frijitu, kroketa eta patatekin.' },
    image: './img/carta-P5.jpeg'
  },
  {
    id: 27,
    category: 'carta',
    subcategory: 'combinados',
    name: { ES: 'P6. Entrecot de vaca', EUS: 'P6. Behi entrekota' },
    price: '26.50€',
    description: { ES: 'Con patatas fritas y pimientos.', EUS: 'Patata frijitu eta piperrekin.' },
    image: './img/carta-P6.jpeg'
  },
  {
    id: 28,
    category: 'carta',
    subcategory: 'combinados',
    name: { ES: 'P7. Lomo adobado', EUS: 'P7. Solomo ondua' },
    price: '12.00€',
    description: { ES: 'Con huevos fritos, croquetas, ensalada y patatas.', EUS: 'Arrautza frijitu, kroketa, entsalada eta patatekin.' },
    image: './img/carta-P7.jpeg'
  },
  {
    id: 29,
    category: 'carta',
    subcategory: 'combinados',
    name: { ES: 'P8. Arroz frito Iamai', EUS: 'P8. Iamai arroz frijitua' },
    price: '10.50€',
    description: { ES: 'Arroz frito con pollo, huevo frito, soja, setas y soja.', EUS: 'Arroz frijitua oilasko, arrautza frijitu, soja eta perretxikoekin.' },
    image: './img/carta-P8.jpeg'
  },
  //======CAFÉ======
  {
    id: 30,
    category: 'coffee',
    name: { ES: 'Café solo', EUS: 'Kafe hutsa' },
    price: '1.60€',
    description: { ES: 'Cafe solo.', EUS: 'Kafe hutsa.' },
    image: './img/CL1.jpeg'
  },
  {
    id: 31,
    category: 'coffee',
    name: { ES: 'Café cortado', EUS: 'Ebakia' },
    price: '1.75€',
    description: { ES: 'Cafe corto de leche.', EUS: 'Esne gutxiko kafea.' },
    image: './img/CL1.jpeg'
  },
  {
    id: 32,
    category: 'coffee',
    name: { ES: 'Café con leche', EUS: 'Kafesnea' },
    price: '1.90€',
    description: { ES: 'Cafe con leche tradicional sin crema en vaso.', EUS: 'Krema gabeko kafesne tradizionala basuan.' },
    image: './img/CL1.jpeg'
  },
  {
    id: 33,
    category: 'coffee',
    name: { ES: 'Café con leche en vaso', EUS: 'Kafesnea basuan' },
    price: '2.15€',
    description: { ES: 'Cafe con leche tradicional sin crema en vaso.', EUS: 'Krema gabeko kafesne tradizionala basuan.' },
    image: './img/CLV1.jpeg'
  },
  {
    id: 34,
    category: 'coffee',
    name: { ES: 'Colacao', EUS: 'Kolakaoa' },
    price: '2.15€',
    description: { ES: 'Colacao en vaso.', EUS: 'Kolakaoa basuan.' },
    image: './img/CLV1.jpeg'
  },
  {
    id: 35,
    category: 'coffee',
    name: { ES: 'Churrustada', EUS: 'Txurrustada' },
    price: '0.80€',
    description: { ES: 'Churrustada de el licor que más prefieras (Baileys, Ron, Whisky, etc).', EUS: 'Nahiago duzun likorearen txurrustada (Baileys, Ron, Whisky, etab.)' },
    image: './img/CLV1.jpeg'
  },
  {
    id: 36,
    category: 'coffee',
    name: { ES: 'Para llevar', EUS: 'Etxera eramateko' },
    price: '0.20€',
    description: { ES: 'Vaso para llevar.', EUS: 'Eramateko edalontzia.' },
    image: './img/CLV1.jpeg'
  }
];