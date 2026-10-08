# Revisión de privacidad — 8 de octubre de 2026

## Alcance y resultado

Revisión del código de esta carpeta, de los archivos de publicación y de las
cabeceras de `https://iamaicafe.org`. El alojamiento publicado responde como Netlify.
No se ha accedido al panel de Netlify, sus registros, contratos o permisos de cuenta.
Las correcciones técnicas se publican mediante el repositorio conectado a Netlify;
la publicación debe comprobarse en la web pública después de cada despliegue.

En la web pública, `/.env`, `/.git/HEAD`, `/access.log`, `/logs/access.log`, `/debug`
y `/server-status` devolvieron el HTML de inicio (fallback de la aplicación), no
archivos privados. Es una comprobación limitada de rutas habituales, no una auditoría
exhaustiva del alojamiento ni prueba de que no existan otros registros accesibles.

No se ha encontrado código que recoja, almacene o publique IP de visitantes, ni
un backend, formularios de recogida de datos, analítica o cookies en esta aplicación.
Esto no acredita la ausencia de registros o tratamientos en el alojamiento.

Se detectaron conexiones automáticas a Google Fonts, Google Maps, el CDN de Tailwind
y el CDN de Restaurant Guru. Cada conexión proporciona la IP al servicio receptor;
eso no equivale por sí solo a que la IP sea pública. También había un importmap con
referencias a esm.sh innecesario para la aplicación compilada.

## Correcciones

- CSS, fuentes Inter e imágenes servidos desde el propio sitio. Eliminados los
  recursos remotos y el importmap.
- Mapa sustituido por un enlace a Google Maps con aviso previo. Distintivo de
  Restaurant Guru dibujado localmente, con enlace voluntario.
- Enlaces externos sin referencia de procedencia y con aislamiento de la ventana.
- Política de seguridad que bloquea scripts, fuentes, imágenes, conexiones y marcos
  externos. Cabeceras adicionales en Netlify; política de carga también incluida
  en el HTML de producción para otros alojamientos.
- Sin servidor de desarrollo accesible desde la red por defecto, ni mapas de código
  fuente en producción. Archivos de entorno excluidos de Git.
- Página de información sobre privacidad y cookies, accesible desde el pie.
- Dependencias actualizadas y pruebas de navegador para detectar regresiones.

La política permite estilos en atributos para conservar animaciones existentes,
pero no scripts inline ni hojas de estilo remotas. No oculta la IP al proveedor
que debe recibirla para entregar la web y no modifica los registros de Netlify.

## Pendiente del titular antes de considerar completa la documentación legal

Datos confirmados por el usuario: Pablo Ortiz; `iamaikafe9@gmail.com`.
Dirección y teléfono proceden de la web existente y deben verificarse:
Kontzezino Kalea, 14, 20500 Arrasate / Mondragón, Gipuzkoa; 943 71 29 95.

1. Facilitar el NIF y confirmar que el nombre identifica al titular legal completo.
   Completar el aviso legal con los datos exigibles y, si procede, información
   registral o de autorizaciones. La página actual no sustituye ese aviso completo.
2. Revisar en Netlify el acceso a registros, miembros de la cuenta, MFA, analítica,
   extensiones e inyección de scripts. Restringir los registros al personal necesario;
   no colocar registros, exportaciones o copias de seguridad en `public` o `dist`.
3. Confirmar qué datos conserva Netlify, finalidades, base jurídica y plazos efectivos;
   reducir conservación y datos al mínimo necesario. No se han inventado plazos.
4. Revisar el acuerdo de encargo del tratamiento, subencargados y, cuando proceda,
   transferencias internacionales y garantías. Completar esta información en la
   política según las condiciones reales de la cuenta y del servicio contratado.
5. Documentar la atención de consultas por correo/teléfono: datos, finalidades,
   base jurídica, destinatarios y conservación. Publicar la información aplicable.
6. Si se encuentra una exposición real de datos en los registros o servicios externos,
   cerrar el acceso y evaluar la brecha y las obligaciones de notificación; no se ha
   acreditado una brecha en esta revisión.

Los textos actuales describen el funcionamiento técnico conocido. No certifican
el cumplimiento integral del RGPD/LSSI ni cubren otras obligaciones del negocio
(por ejemplo, información alimentaria, derechos sobre imágenes o consumo).
Una revisión jurídica debe validar los datos y tratamientos reales.

## Verificación y publicación

- `npm run typecheck`: comprobación de tipos.
- `npm run test:privacy`: compila y ejecuta seis pruebas en Edge sin ventana,
  en tamaños de escritorio y móvil. Requiere Edge instalado (o adaptar el canal
  de Playwright al navegador de CI).
- `npm audit`: consulta de avisos conocidos; no equivale a ausencia de fallos.
- Publicar exclusivamente `dist`, usando `netlify.toml` en Netlify.
- Después del despliegue, verificar cabeceras y peticiones reales de todas las rutas
  con una sesión limpia. Descartar scripts añadidos desde el panel de alojamiento.
  Las pruebas locales no verifican configuraciones externas ni despliegues anteriores.

## Fuentes

- AEPD, protección de datos por defecto:
  https://www.aepd.es/derechos-y-deberes/cumple-tus-deberes/medidas-de-cumplimiento/proteccion-de-datos-por-defecto
- AEPD, guía sobre cookies: https://www.aepd.es/guias/guia-cookies.pdf
- LSSI, artículo 10: https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758
- Netlify, cabeceras: https://docs.netlify.com/manage/routing/headers/
