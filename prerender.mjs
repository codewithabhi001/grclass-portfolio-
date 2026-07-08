import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, 'dist');
const port = 5174; // Local port for the static server

// Define core static routes
const routes = [
  '/',
  '/about',
  '/services',
  '/how-it-works',
  '/contact',
  '/faq',
  '/careers',
  '/verify',
  '/vessel-search',
  '/press',
  '/investors',
  '/profile',
  '/legal/privacy',
  '/legal/terms',
  '/legal/compliance',
  '/news',
];

// Define known services
const services = [
  'fleet-in-services', 'new-construction', 'transfer-of-class', 'yacht-service',
  'offshore-service', 'conversion-projects', 'plan-approval', 'flag-statutory-services',
  'survey-certification', 'solas', 'marpol', 'load-line', 'tonnage', 'modu',
  'ballast-water-management', 'ihm-ship-recycling', 'energy-efficiency',
  'eu-mrv-compliance', 'vessel-emergency-response', 'compliance-support',
  'remote-surveys', 'port-state-control', 'technical-advisory'
];
services.forEach(s => routes.push(`/services/${s}`));

async function startServer() {
  const app = express();
  app.use(express.static(distPath));
  
  // SPA fallback
  app.use((req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });

  return new Promise((resolve) => {
    const server = app.listen(port, () => resolve(server));
  });
}

async function fetchNewsRoutes() {
  try {
    const res = await fetch('https://api.grclass.com/api/v1/news');
    const data = await res.json();
    if (data && data.data && data.data.news && Array.isArray(data.data.news)) {
      return data.data.news.map(article => `/news/${article.slug}`);
    }
  } catch (err) {
    console.error('Failed to fetch news slugs:', err);
  }
  return [];
}

async function prerender() {
  console.log('Starting prerender process...');
  
  // 1. Fetch dynamic news routes
  const newsRoutes = await fetchNewsRoutes();
  const allRoutes = [...routes, ...newsRoutes];
  console.log(`Total routes to prerender: ${allRoutes.length}`);

  // 2. Start local static server
  const server = await startServer();
  
  // 3. Launch Puppeteer
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  
  const page = await browser.newPage();
  
  for (const route of allRoutes) {
    console.log(`Prerendering ${route} ...`);
    try {
      // Go to the route and wait for network to be idle (so react-query fetches complete)
      await page.goto(`http://localhost:${port}${route}`, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      // Get the full HTML
      const html = await page.content();
      
      let outPath = path.join(distPath, route);
      if (route !== '/') {
        fs.mkdirSync(outPath, { recursive: true });
        outPath = path.join(outPath, 'index.html');
      } else {
        outPath = path.join(outPath, 'index.html');
      }
      
      fs.writeFileSync(outPath, html);
    } catch (err) {
      console.error(`Failed to prerender ${route}:`, err.message);
    }
  }

  // 4. Cleanup
  console.log('Closing browser and server...');
  await browser.close();
  server.close();
  console.log('Prerendering complete!');
}

prerender().catch(err => {
  console.error(err);
  process.exit(1);
});
