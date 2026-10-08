
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { contentSecurityPolicy, securityHeaders } from './security-headers';

export default defineConfig({
  plugins: [react(), {
    name: 'production-privacy-policy',
    apply: 'build',
    transformIndexHtml() {
      // También protege las cargas en hosts que no lean netlify.toml.
      // frame-ancestors solo funciona como cabecera HTTP.
      return [{ tag: 'meta', attrs: {
        'http-equiv': 'Content-Security-Policy',
        content: contentSecurityPolicy.replace("; frame-ancestors 'none'", ''),
      }, injectTo: 'head-prepend' }];
    },
  }],
  base: './', // Asegura que las rutas de los archivos generados sean relativas
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  server: {
    host: '127.0.0.1',
    port: 3000
  },
  preview: { host: '127.0.0.1', headers: securityHeaders },
});
