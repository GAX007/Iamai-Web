import { test, expect } from '@playwright/test';
import { readFileSync, readdirSync } from 'node:fs';
import { securityHeaders } from '../security-headers';

test('navegar no contacta terceros ni guarda identificadores', async ({ page, context }, testInfo) => {
  const externalRequests: string[] = [];
  const errors: string[] = [];
  await context.route('**/*', async route => {
    const url = new URL(route.request().url());
    if (url.origin !== 'http://127.0.0.1:4278') {
      externalRequests.push(url.origin);
      await route.abort();
    } else {
      await route.continue();
    }
  });
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text());
  });

  for (const route of ['/', '/menu', '/gallery', '/contact', '/privacy']) {
    await page.goto(`/#${route}`);
    await expect(page.locator('main h1')).toBeVisible();
    await page.evaluate(async () => {
      // Activa también las imágenes que se cargan al entrar en pantalla.
      for (let top = 0; top < document.body.scrollHeight; top += 600) {
        window.scrollTo(0, top);
        await new Promise(resolve => setTimeout(resolve, 30));
      }
    });
    await page.waitForLoadState('networkidle');
    expect(await page.evaluate(() => ({
      cookies: document.cookie,
      local: localStorage.length,
      session: sessionStorage.length,
    }))).toEqual({ cookies: '', local: 0, session: 0 });
    await expect(page.locator('iframe')).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  expect(externalRequests).toEqual([]);
  expect(errors).toEqual([]);
  expect(await context.cookies()).toEqual([]);

  await page.goto('/#/contact');
  await expect(page.getByRole('link', { name: 'Abrir Google Maps' })).toHaveAttribute('rel', 'noopener noreferrer');
  await expect(page.getByRole('link', { name: 'Abrir Google Maps' })).toHaveAttribute('target', '_blank');
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: testInfo.outputPath('contact.png'), fullPage: true });
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Ver Carta', exact: true })).toHaveCSS('background-color', 'rgb(255, 107, 0)');
  await page.getByRole('link', { name: 'Ver Carta', exact: true }).click();
  await page.getByRole('heading', { name: 'Cuarto de Hamburguesa', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Cerrar', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Cerrar', exact: true }).click();
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.locator('section').first().evaluate(async section => {
    await Promise.all(section.getAnimations({ subtree: true }).map(animation => animation.finished));
  });
  await page.screenshot({ path: testInfo.outputPath('home.png'), fullPage: true });
  // Comprueba el segundo idioma en ambos tamaños de pantalla.
  const languageButton = testInfo.project.name === 'mobile' ? 'ES' : 'EUS';
  await page.getByRole('button', { name: languageButton, exact: true }).filter({ visible: true }).click();
  await expect(page.getByRole('link', { name: 'Karta Ikusi', exact: true })).toBeVisible();
  expect(externalRequests).toEqual([]);
  expect(errors).toEqual([]);
});

test('la política bloquea intentos de cargar recursos externos', async ({ page, context }) => {
  const escapedRequests: string[] = [];
  await context.route('https://example.com/**', async route => {
    escapedRequests.push(route.request().url());
    await route.abort();
  });
  await page.goto('/');
  const violations = await page.evaluate(async () => {
    const blocked: string[] = [];
    document.addEventListener('securitypolicyviolation', event => blocked.push(event.effectiveDirective));
    const image = new Image();
    image.src = 'https://example.com/privacy-probe.png';
    document.body.append(image);
    const script = document.createElement('script');
    script.src = 'https://example.com/privacy-probe.js';
    document.head.append(script);
    const iframe = document.createElement('iframe');
    iframe.src = 'https://example.com/privacy-probe';
    document.body.append(iframe);
    await fetch('https://example.com/privacy-probe').catch(() => undefined);
    await new Promise(resolve => setTimeout(resolve, 200));
    return blocked;
  });
  expect(violations).toEqual(expect.arrayContaining(['img-src', 'script-src-elem', 'frame-src', 'connect-src']));
  expect(escapedRequests).toEqual([]);
});

test('el despliegue conserva las cabeceras y no publica archivos privados', async ({ request }) => {
  const response = await request.get('/');
  const netlify = readFileSync('netlify.toml', 'utf8');
  for (const [name, value] of Object.entries(securityHeaders)) {
    expect(response.headers()[name.toLowerCase()]).toBe(value);
    expect(netlify).toContain(`${name} = "${value}"`);
  }
  const html = await response.text();
  expect(html).toContain('http-equiv="Content-Security-Policy"');
  expect(html).not.toMatch(/(?:src|href)="https?:\/\//);
  const files = readdirSync('dist', { recursive: true }).map(String);
  expect(files.filter(file => /(?:^|[/\\])(?:\.env|\.git|logs?)(?:[./\\]|$)|\.(?:log|map|sql|sqlite|db|pem|key|bak)$/i.test(file))).toEqual([]);
});
