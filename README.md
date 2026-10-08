# Iamai Cafe

Web informativa de Iamai Cafe, construida con React y Vite.

## Desarrollo

1. Instalar Node.js (versión LTS compatible con las dependencias).
2. Ejecutar `npm ci`.
3. Ejecutar `npm run dev`.

No se necesitan claves de API. No incluir secretos ni registros de visitantes
en el código del navegador ni en la carpeta `public`.

## Verificación

- `npm run typecheck`
- `npm run test:privacy` (requiere Microsoft Edge instalado)
- `npm audit`

Las pruebas comprueban navegación en móvil y escritorio, ausencia de peticiones
a terceros y almacenamiento de identificadores, bloqueo de recursos externos,
cabeceras de seguridad y ausencia de archivos privados habituales en `dist`.

## Publicación

`npm run build` genera `dist`. Netlify usa `netlify.toml` para compilar, publicar
solo esa carpeta y aplicar las cabeceras. Nunca publicar la raíz del repositorio.

Las fuentes y estilos se generan localmente. Maps y redes sociales son enlaces
externos voluntarios. No añadir analítica ni contenido externo sin revisar su
impacto en privacidad, las cabeceras y la información/consentimiento aplicables.

Consultar [PRIVACY_REVIEW.md](PRIVACY_REVIEW.md) para los hallazgos y los datos legales
y ajustes del alojamiento que todavía requieren comprobación.
