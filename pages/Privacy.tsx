import React from 'react';

// Información verificable sobre esta web; los datos legales pendientes se
// documentan en PRIVACY_REVIEW.md y no se sustituyen por datos inventados.
const Privacy: React.FC = () => (
  <article lang="es" className="pt-32 pb-24 px-4 max-w-3xl mx-auto text-zinc-300 leading-relaxed">
    <h1 className="text-4xl font-bold text-white mb-8">Privacidad y cookies</h1>
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-accent mb-3">Sobre esta web</h2>
        <p>iamaicafe.org ofrece información sobre Iamai Cafe, su carta y su ubicación.
          El titular de esta web es Pablo Ortiz. Puedes contactar con el
          establecimiento en Kontzezino Kalea, 14, 20500 Arrasate / Mondragón, Gipuzkoa,
          por teléfono en el <a className="underline" href="tel:+34943712995">943 71 29 95</a>
          {' '}o por correo en <a className="underline" href="mailto:iamaikafe9@gmail.com">iamaikafe9@gmail.com</a>.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-accent mb-3">Navegación y dirección IP</h2>
        <p>Para mostrarte la web, el proveedor de alojamiento recibe tu dirección IP
          y los datos técnicos de la conexión. Esto es necesario para entregar las páginas.
          La web no muestra listados de visitantes ni sus direcciones IP.</p>
        <p className="mt-3">El alojamiento de esta web lo presta Netlify. El proveedor puede
          mantener registros técnicos para operar y proteger el servicio. Esta información
          no significa que la navegación sea anónima ni que el proveedor no conserve registros.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-accent mb-3">Cookies y preferencias</h2>
        <p>Esta web no incorpora herramientas de analítica ni publicidad y no guarda cookies
          ni identificadores de seguimiento. La elección de idioma se mantiene mientras
          navegas y se restablece al recargar la página.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-accent mb-3">Servicios externos</h2>
        <p>Las fuentes, los estilos y las imágenes se sirven desde esta web. Google Maps,
          Instagram y Restaurant Guru solo se abren si pulsas sus enlaces. Al visitar
          esos servicios, recibirán tu dirección IP y podrán utilizar cookies según
          sus propias políticas de privacidad.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-accent mb-3">Tus derechos</h2>
        <p>Puedes contactar con el titular para solicitar información sobre el tratamiento
          de tus datos y ejercer los derechos de acceso, rectificación, supresión,
          oposición, limitación y portabilidad cuando resulten aplicables.
          También puedes presentar una reclamación ante la{' '}
          <a href="https://www.aepd.es/" target="_blank" rel="noopener noreferrer" className="underline">Agencia Española de Protección de Datos</a>.</p>
      </section>
    </div>
  </article>
);

export default Privacy;
