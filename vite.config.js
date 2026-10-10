import { defineConfig } from 'vite';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pages, renderPage, site } from './src/pages.js';

// Emit real HTML for every URL instead of relying on an SPA fallback.
export default defineConfig({
  build: { assetsInlineLimit: 0 },
  plugins: [{
    name: 'innspire-static-pages',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const pathname = new URL(req.url, 'http://localhost').pathname;
        const slug = pathname.replace(/\/index\.html$/, '').replace(/^\/|\/$/g, '');
        if (!slug || slug === 'index.html' || pathname.includes('.') && pathname !== '/404.html') return next();
        try {
          const template = await readFile(resolve('index.html'), 'utf8');
          const html = await server.transformIndexHtml(pathname, renderPage(template, slug));
          res.statusCode = pages[slug] ? 200 : 404;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end(html);
        } catch (error) { next(error); }
      });
    },
    async writeBundle(outputOptions) {
      const outDir = outputOptions.dir || resolve('dist');
      const template = await readFile(resolve(outDir, 'index.html'), 'utf8');
      for (const slug of Object.keys(pages)) {
        const pageDir = resolve(outDir, slug);
        await mkdir(pageDir, { recursive: true });
        await writeFile(resolve(pageDir, 'index.html'), renderPage(template, slug));
      }
      await writeFile(resolve(outDir, '404.html'), renderPage(template, '404'));
      await writeFile(resolve(outDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['', ...Object.keys(pages)].map((slug) => `<url><loc>${site.origin}/${slug ? `${slug}/` : ''}</loc></url>`).join('')}</urlset>`);
      await writeFile(resolve(outDir, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site.origin}/sitemap.xml\n`);
    },
  }],
});
