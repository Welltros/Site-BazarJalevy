// build-deploy.mjs — gera a pasta deploy/ com só o que sobe pra HostGator.
//
// Uso:  node build-deploy.mjs
//
// A pasta deploy/ é o que você envia para public_html/ na HostGator.
// NÃO suba .git, .claude, DESIGN.md, README.md, as fotos IMG_*.jpg,
// nem a pasta Videos/ (vídeo bruto de 69 MB). Este script já cuida disso.

import { rmSync, mkdirSync, copyFileSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'deploy');

// Arquivos da raiz que vão para o site
const ROOT_FILES = [
  '.htaccess',
  'index.html',
  'support.js',
  'image-slot.js',
  'favicon.svg',
  'favicon.png',
  'apple-touch-icon.png',
  'robots.txt',
  'sitemap.xml',
];

// Só as fotos realmente usadas no site (conferido no index.html)
const PHOTOS = [
  'hero.webp',
  'og-cover.jpg',
  'fachada.jpg',
  'quem-somos.jpg',
  'loja-1.jpg',
  'vitrine-1.jpg',
  'vitrine-2.jpg',
  'ferramentas.jpg',
  'impressoras.jpg',
  'papelaria.jpg',
  'churrasqueiras.jpg',
  'logo-bazar-jalevy.png',
];

const VIDEOS = ['apresentacao.mp4'];

// --- sanity check: toda referência ./photos|videos do index.html existe no pacote?
const html = readFileSync(join(ROOT, 'index.html'), 'utf8');
const referenced = [...html.matchAll(/\.\/(photos|videos)\/([A-Za-z0-9._-]+)/g)].map(m => `${m[1]}/${m[2]}`);
const packaged = new Set([...PHOTOS.map(f => `photos/${f}`), ...VIDEOS.map(f => `videos/${f}`)]);
const missing = [...new Set(referenced)].filter(r => !packaged.has(r));
if (missing.length) {
  console.error('ERRO: index.html referencia arquivos que não estão no pacote:\n  ' + missing.join('\n  '));
  process.exit(1);
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(join(OUT, 'photos'), { recursive: true });
mkdirSync(join(OUT, 'videos'), { recursive: true });

for (const f of ROOT_FILES) copyFileSync(join(ROOT, f), join(OUT, f));
for (const f of PHOTOS) copyFileSync(join(ROOT, 'photos', f), join(OUT, 'photos', f));
for (const f of VIDEOS) copyFileSync(join(ROOT, 'videos', f), join(OUT, 'videos', f));

console.log(`deploy/ pronto — ${ROOT_FILES.length} arquivos na raiz, ${PHOTOS.length} fotos, ${VIDEOS.length} vídeo.`);
console.log('Envie o CONTEÚDO de deploy/ para public_html/ na HostGator.');
