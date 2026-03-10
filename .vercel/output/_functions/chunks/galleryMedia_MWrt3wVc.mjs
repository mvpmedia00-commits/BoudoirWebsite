import { _ as __ASTRO_IMAGE_IMPORT_Z1F4X4R } from './blog-placeholder-1_D1Pmb4Eu.mjs';
import { c as __ASTRO_IMAGE_IMPORT_1NHVvs, b as __ASTRO_IMAGE_IMPORT_ZulDpU, a as __ASTRO_IMAGE_IMPORT_1inyCS, _ as __ASTRO_IMAGE_IMPORT_MGbyL } from './blog-placeholder-5_UAO6lreG.mjs';
import { _ as __ASTRO_IMAGE_IMPORT_Z1Yq4sn } from './blog-placeholder-about_DKvlEyOU.mjs';

const GALLERY_CATEGORIES = [
  {
    slug: "boudoir",
    label: "Boudoir",
    description: "Private, confidence-forward portrait sessions with discreet direction.",
    sensitive: true
  },
  {
    slug: "artistic-nude",
    label: "Artistic Nude",
    description: "Fine-art studies focused on form, composition, and expressive light.",
    sensitive: true
  },
  {
    slug: "body-paint",
    label: "Body Paint",
    description: "Editorial body-art concepts with styling, detail, and set design.",
    sensitive: true
  },
  {
    slug: "editorial-portrait",
    label: "Editorial Portrait",
    description: "A non-sensitive portfolio baseline for brand and portrait storytelling.",
    sensitive: false
  }
];
const CATEGORY_CYCLE = ["editorial-portrait", "boudoir", "artistic-nude", "body-paint"];
const rawBaseSet = [
  {
    image: "https://res.cloudinary.com/douekbaqn/image/upload/v1771009257/5B1A0245_yo4xcf.jpg",
    title: "Cloudinary Test Frame A",
    description: "External Cloudinary image test frame for gallery validation."
  },
  {
    image: "https://res.cloudinary.com/douekbaqn/image/upload/v1771009327/84BC53CD-AC43-4BC4-8C9F-1E2C86489101_m2jwtm.jpg",
    title: "Cloudinary Test Frame B",
    description: "External Cloudinary image test frame for gallery validation."
  },
  {
    image: __ASTRO_IMAGE_IMPORT_Z1F4X4R.src,
    title: "Editorial Street Portrait",
    description: "Low-light portrait session focused on texture, contrast, and cinematic framing."
  },
  {
    image: __ASTRO_IMAGE_IMPORT_1NHVvs.src,
    title: "Brand Story Capture",
    description: "Short-form campaign frame designed for paid social and website hero usage."
  },
  {
    image: __ASTRO_IMAGE_IMPORT_ZulDpU.src,
    title: "Night Session Motion",
    description: "Fast shutter sequence with controlled blur accents to preserve movement and mood."
  },
  {
    image: __ASTRO_IMAGE_IMPORT_1inyCS.src,
    title: "Environment Detail",
    description: "Interior-forward frame balancing spatial depth, color control, and architectural lines."
  },
  {
    image: __ASTRO_IMAGE_IMPORT_MGbyL.src,
    title: "Live Crowd Energy",
    description: "High-energy event still captured for recap content and promotional distribution."
  },
  {
    image: __ASTRO_IMAGE_IMPORT_Z1Yq4sn.src,
    title: "Client Feature Frame",
    description: "Clean subject-led composition with natural light control and premium grading."
  }
];
const toCloudinaryOptimized = (url) => url.includes("/image/upload/") ? url.replace("/image/upload/", "/image/upload/f_auto,q_auto,w_900,c_fill/") : url;
const baseSet = rawBaseSet.map((item) => ({
  ...item,
  image: toCloudinaryOptimized(item.image)
}));
const cols = 8;
const gapX = 180;
const gapY = 240;
const startX = 38;
const startY = 34;
const categoryMetaBySlug = Object.fromEntries(GALLERY_CATEGORIES.map((category) => [category.slug, category]));
const galleryItems = Array.from({ length: 96 }, (_, idx) => {
  const base = baseSet[idx % baseSet.length];
  const category = CATEGORY_CYCLE[idx % CATEGORY_CYCLE.length];
  const categoryMeta = categoryMetaBySlug[category];
  const number = String(idx + 1).padStart(3, "0");
  const row = Math.floor(idx / cols);
  const col = idx % cols;
  const width = [170, 190, 210][idx % 3];
  const height = [240, 280, 300, 260][idx % 4];
  const x = startX + col * gapX + (row % 2 === 0 ? 0 : 32);
  const y = startY + row * gapY + (col % 2 === 0 ? 0 : 14);
  return {
    id: `img-${number}`,
    image: base.image,
    title: `${base.title} ${number}`,
    description: base.description,
    category,
    sensitive: categoryMeta.sensitive,
    x,
    y,
    w: width,
    h: height
  };
});
const getGalleryCategory = (slug) => categoryMetaBySlug[slug];
const getGalleryItemsByCategory = (slug) => galleryItems.filter((item) => item.category === slug);

export { GALLERY_CATEGORIES as G, getGalleryItemsByCategory as a, getGalleryCategory as g };
