import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs'; // Votre client Contentful
import client from './src/contentfulClient.js';

// Domaine de votre site
const BASE_URL = 'https://madaweavertour.netlify.app';

// Routes statiques
const staticRoutes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/destinations', changefreq: 'weekly', priority: 0.8 },
  { url: '/tailormadetour', changefreq: 'monthly', priority: 0.7 },
];

// Fonction pour générer un slug (même logique que dans votre composant)
const generateSlug = (title) =>
  title
    .toLowerCase()
    .replace(/ /g, '-') // Remplace les espaces par des tirets
    .replace(/[^\w-]+/g, ''); // Supprime les caractères spéciaux

// Récupération des routes dynamiques depuis Contentful
const fetchDynamicRoutes = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'destinationCard', // Remplacez par le type d'entrée Contentful
    });

    // Mappez les données pour créer les URLs
    return response.items.map((item) => ({
      url: `/destinations/${generateSlug(item.fields.title)}`,
      changefreq: 'weekly',
      priority: 0.9,
    }));
  } catch (error) {
    console.error('Erreur lors de la récupération des données depuis Contentful :', error);
    return [];
  }
};

// Génération du sitemap
const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  // Ajouter les routes statiques
  staticRoutes.forEach((route) => sitemap.write(route));

  // Ajouter les routes dynamiques depuis Contentful
  const dynamicRoutes = await fetchDynamicRoutes();
  dynamicRoutes.forEach((route) => sitemap.write(route));

  sitemap.end();

  // Générer le fichier XML
  const xmlData = await streamToPromise(sitemap);
  writeFileSync('./public/sitemap.xml', xmlData.toString());
  console.log('Sitemap généré : ./public/sitemap.xml');
};

generateSitemap().catch(console.error);
