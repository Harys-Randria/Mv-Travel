import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'node:fs';

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://madaweavertour.netlify.app' });

  // Listez vos routes ici
  const routes = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  ];

  // Ajoutez chaque route au sitemap
  routes.forEach((route) => sitemap.write(route));

  sitemap.end();

  // Enregistrez le fichier sitemap dans le dossier public
  const data = await streamToPromise(sitemap);
  createWriteStream('./public/sitemap.xml').write(data);
  console.log('Sitemap généré avec succès !');
}

generateSitemap();
