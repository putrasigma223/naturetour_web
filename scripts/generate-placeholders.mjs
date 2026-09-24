// Membuat gambar placeholder lanskap (SVG) agar proyek langsung jalan tanpa
// koneksi internet. Ganti file di /public/images dengan foto asli Anda.
// Jalankan ulang dengan: node scripts/generate-placeholders.mjs

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, "../public/images");
mkdirSync(outDir, { recursive: true });

const moods = {
  dawn: { sky: ["#DCE3D5", "#E8E0D2"], layers: ["#A3AE94", "#7C8B6F", "#4C5A48", "#2C3A2E"], sun: "#F1E7D4" },
  forest: { sky: ["#E4E8DC", "#CBD5C3"], layers: ["#93A186", "#72836A", "#4A5945", "#26311F"], sun: "#EDF1E6" },
  sea: { sky: ["#DFE6E2", "#C9D6CE"], layers: ["#9DB0A5", "#748C7E", "#4B6357", "#233830"], sun: "#EFF4F0" },
  dusk: { sky: ["#E5DCCB", "#D3C7B2"], layers: ["#A9A38C", "#867F67", "#5A5442", "#2E2B21"], sun: "#F5ECD9" },
};

function ridge(seed, amplitude, baseline, width, height) {
  let d = `M 0 ${height} L 0 ${baseline}`;
  const steps = 8;
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = 1; i <= steps; i += 1) {
    const x = (width / steps) * i;
    const prevX = (width / steps) * (i - 1);
    const y = baseline - (rand() - 0.35) * amplitude;
    const cx = (prevX + x) / 2;
    d += ` Q ${cx} ${y - amplitude * 0.25} ${x} ${baseline - (rand() - 0.35) * amplitude * 0.8}`;
  }
  d += ` L ${width} ${height} Z`;
  return d;
}

function makeSvg({ mood, seed, width, height, label }) {
  const m = moods[mood];
  const layers = m.layers
    .map((color, i) => {
      const baseline = height * (0.5 + i * 0.13);
      const amplitude = height * (0.22 - i * 0.04);
      return `<path d="${ridge(seed + i * 37, amplitude, baseline, width, height)}" fill="${color}" opacity="${0.92 - i * 0.02}"/>`;
    })
    .join("\n    ");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${m.sky[0]}"/>
      <stop offset="100%" stop-color="${m.sky[1]}"/>
    </linearGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#sky)"/>
  <circle cx="${width * 0.72}" cy="${height * 0.26}" r="${height * 0.09}" fill="${m.sun}" opacity="0.75"/>
  ${layers}
  <rect width="${width}" height="${height}" filter="url(#grain)" opacity="0.06"/>
</svg>
`;
}

const files = [
  ["hero-1", "dawn", 1600, 1000],
  ["hero-2", "dusk", 1600, 1000],
  ["hero-3", "sea", 1600, 1000],
  ["bromo", "dawn", 1200, 900],
  ["rajaampat", "sea", 1200, 900],
  ["toba", "forest", 1200, 900],
  ["ijen", "dusk", 1200, 900],
  ["ubud", "forest", 1200, 900],
  ["komodo", "sea", 1200, 900],
  ["jakarta", "dusk", 1200, 900],
  ["yogyakarta", "dawn", 1200, 900],
  ["collage-1", "forest", 700, 900],
  ["collage-2", "sea", 900, 700],
  ["collage-3", "dawn", 800, 800],
  ["collage-4", "dusk", 760, 940],
  ["team", "forest", 1200, 800],
];

let index = 11;
for (const [name, mood, w, h] of files) {
  index += 17;
  writeFileSync(resolve(outDir, `${name}.svg`), makeSvg({ mood, seed: index, width: w, height: h, label: name }));
}

console.log(`Generated ${files.length} placeholder images in public/images`);
