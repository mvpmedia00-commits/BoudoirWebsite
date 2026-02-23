# Gallery Code Snapshot

Source: src/pages/gallery.astro

```astro
---
import BaseHead from '../components/BaseHead.astro';
import Footer from '../components/Footer.astro';
import Header from '../components/Header.astro';
import { SITE_TITLE } from '../consts';
import ImgOne from '../assets/blog-placeholder-1.jpg';
import ImgTwo from '../assets/blog-placeholder-2.jpg';
import ImgThree from '../assets/blog-placeholder-3.jpg';
import ImgFour from '../assets/blog-placeholder-4.jpg';
import ImgFive from '../assets/blog-placeholder-5.jpg';
import ImgAbout from '../assets/blog-placeholder-about.jpg';

const rawBaseSet = [
	{
		image: 'https://res.cloudinary.com/douekbaqn/image/upload/v1771009257/5B1A0245_yo4xcf.jpg',
		title: 'Cloudinary Test Frame A',
		station: 'Test',
		location: 'Cloudinary',
		gear: 'External Source',
		description: 'External Cloudinary image test frame for gallery validation.'
	},
	{
		image: 'https://res.cloudinary.com/douekbaqn/image/upload/v1771009327/84BC53CD-AC43-4BC4-8C9F-1E2C86489101_m2jwtm.jpg',
		title: 'Cloudinary Test Frame B',
		station: 'Test',
		location: 'Cloudinary',
		gear: 'External Source',
		description: 'External Cloudinary image test frame for gallery validation.'
	},
	{
		image: 'https://res.cloudinary.com/douekbaqn/image/upload/v1771009327/84BC53CD-AC43-4BC4-8C9F-1E2C86489101_m2jwtm.jpg',
		title: 'Cloudinary Test Frame C',
		station: 'Test',
		location: 'Cloudinary',
		gear: 'External Source',
		description: 'Duplicate URL test to validate repeated external media handling.'
	},
	{
		image: ImgOne.src,
		title: 'Editorial Street Portrait',
		station: 'Street',
		location: 'Downtown Core',
		gear: 'Sony A7S III + 35mm',
		description: 'Low-light portrait session focused on texture, contrast, and cinematic framing.'
	},
	{
		image: ImgTwo.src,
		title: 'Brand Story Capture',
		station: 'Commercial',
		location: 'Studio Loft',
		gear: 'Sony FX3 + 24-70mm',
		description: 'Short-form campaign frame designed for paid social and website hero usage.'
	},
	{
		image: ImgThree.src,
		title: 'Night Session Motion',
		station: 'Fashion',
		location: 'Industrial District',
		gear: 'Canon R6 II + 50mm',
		description: 'Fast shutter sequence with controlled blur accents to preserve movement and mood.'
	},
	{
		image: ImgFour.src,
		title: 'Environment Detail',
		station: 'Real Estate',
		location: 'Private Property',
		gear: 'Sony A7 IV + 16-35mm',
		description: 'Interior-forward frame balancing spatial depth, color control, and architectural lines.'
	},
	{
		image: ImgFive.src,
		title: 'Live Crowd Energy',
		station: 'Events',
		location: 'Main Venue',
		gear: 'Sony A7S III + 24mm',
		description: 'High-energy event still captured for recap content and promotional distribution.'
	},
	{
		image: ImgAbout.src,
		title: 'Client Feature Frame',
		station: 'Portrait',
		location: 'On Location',
		gear: 'Canon R5 + 85mm',
		description: 'Clean subject-led composition with natural light control and premium grading.'
	}
];

const toCloudinaryOptimized = (url: string) =>
	url.includes('/image/upload/')
		? url.replace('/image/upload/', '/image/upload/f_auto,q_auto,w_900,c_fill/')
		: url;

const baseSet = rawBaseSet.map((item) => ({
	...item,
	image: toCloudinaryOptimized(item.image)
}));

const cols = 8;
const gapX = 180;
const gapY = 240;
const startX = 38;
const startY = 34;
const INITIAL_RENDER_COUNT = 24;

const galleryItems = Array.from({ length: 100 }, (_, idx) => {
	const base = baseSet[idx % baseSet.length];
	const number = String(idx + 1).padStart(3, '0');
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
		station: base.station,
		location: base.location,
		gear: base.gear,
		description: base.description,
		x,
		y,
		w: width,
		h: height
	};
});

const extraCanvasDepth = 1400;
const stageHeight = Math.max(...galleryItems.map((item) => item.y + item.h)) + extraCanvasDepth;
---

<!doctype html>
<html lang="en">
	<head>
		<BaseHead title={`Gallery | ${SITE_TITLE}`} description="Draggable photo environment with click-to-expand images." />
	</head>
	<body>
		<Header />
		<main class="gallery-main">
			<section class="gallery-head">
				<p class="eyebrow">MVP Media Gallery</p>
				<h1>Move The Environment. Click To Expand.</h1>
				<p>
					Drag cards anywhere in this canvas. Tap/click without dragging to open a large expanded image.
					Currently loaded: <strong>{galleryItems.length}</strong> images.
				</p>
			</section>

			<section class="stage-shell">
				<p id="drag-instruction" class="sr-only">Drag to reposition cards. Press Enter to open image preview.</p>
				<div class="stage" data-stage style={`min-height:${stageHeight}px;`}>
					{galleryItems.slice(0, INITIAL_RENDER_COUNT).map((item, index) => (
						<button
							type="button"
							class="project-card"
							data-draggable-card
							data-index={index}
							data-id={item.id}
							data-x={item.x}
							data-y={item.y}
							style={`width:${item.w}px; transform: translate3d(${item.x}px, ${item.y}px, 0); z-index:${10 + (index % 25)};`}
							aria-label={`Open ${item.title}`}
							aria-describedby="drag-instruction"
							aria-grabbed="false"
						>
							<div class="media-wrap" style={`height:${item.h}px;`}>
								<img src={item.image} alt={item.title} loading="lazy" draggable="false" />
								<div class="shade"></div>
							</div>
							<p>{item.title}</p>
						</button>
					))}
					<div class="stage-sentinel" data-stage-sentinel aria-hidden="true"></div>

					<div class="credit">
						<h3>MVP Media</h3>
						<p>Cinematic photography and visual storytelling</p>
					</div>
				</div>
			</section>
		</main>
		<Footer />

		<div class="image-lightbox" data-lightbox hidden>
			<div class="image-lightbox-overlay" data-close-lightbox></div>
			<div class="image-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Expanded gallery image">
				<button type="button" class="lightbox-close" data-close-lightbox aria-label="Close expanded image">&times;</button>
				<div class="lightbox-media">
					<div class="lightbox-loader" data-lightbox-loader aria-hidden="true"></div>
					<img data-lightbox-image src="" alt="" hidden />
				</div>
			</div>
		</div>

		<script type="application/json" id="gallery-items-data" set:html={JSON.stringify(galleryItems)}></script>
	</body>
</html>

<script>
	const dataEl = document.getElementById('gallery-items-data');
	const galleryItems = dataEl ? JSON.parse(dataEl.textContent || '[]') : [];
	const cards = Array.from(document.querySelectorAll('[data-draggable-card]'));
	const stage = document.querySelector('[data-stage]');
	const stageShell = document.querySelector('.stage-shell');
	const stageSentinel = document.querySelector('[data-stage-sentinel]');
	const stageCredit = document.querySelector('.credit');

	const lightbox = document.querySelector('[data-lightbox]');
	const closeButtons = document.querySelectorAll('[data-close-lightbox]');
	const lightboxImg = document.querySelector('[data-lightbox-image]');
	const lightboxLoader = document.querySelector('[data-lightbox-loader]');
	const mediaQuery = window.matchMedia('(max-width: 980px)');
	const STORAGE_KEY = 'mvp_gallery_positions_v1';
	const CHUNK_SIZE = 16;
	let isMobile = mediaQuery.matches;
	let previouslyFocused = null;
	let closeTimer = null;
	let renderedCount = cards.length;

	const savedPositions = (() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			return raw ? JSON.parse(raw) : {};
		} catch {
			return {};
		}
	})();

	let topLayer = 500;

	mediaQuery.addEventListener('change', (event) => {
		isMobile = event.matches;
	});

	const applyTransform = (card, x, y) => {
		card.style.transform = `translate3d(${x}px, ${y}px, 0)`;
		card.dataset.x = String(x);
		card.dataset.y = String(y);
	};

	const persistPositions = () => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(savedPositions));
		} catch {
			// ignore write failures
		}
	};

	const hydrateSavedPosition = (card) => {
		if (!(card instanceof HTMLElement)) return;
		const id = card.dataset.id;
		if (!id) return;
		const saved = savedPositions[id];
		if (!saved) return;
		if (typeof saved.x === 'number' && typeof saved.y === 'number' && !isMobile) {
			applyTransform(card, saved.x, saved.y);
		}
		if (typeof saved.z === 'number') {
			card.style.zIndex = String(saved.z);
			topLayer = Math.max(topLayer, saved.z);
		}
	};

	const saveCardPosition = (card) => {
		const id = card.dataset.id;
		if (!id) return;
		savedPositions[id] = {
			x: Number(card.dataset.x || 0),
			y: Number(card.dataset.y || 0),
			z: Number(card.style.zIndex || 1)
		};
		persistPositions();
	};

	const createCard = (item, index) => {
		const card = document.createElement('button');
		card.type = 'button';
		card.className = 'project-card';
		card.dataset.draggableCard = '';
		card.dataset.index = String(index);
		card.dataset.id = item.id;
		card.dataset.x = String(item.x);
		card.dataset.y = String(item.y);
		card.setAttribute('aria-label', `Open ${item.title}`);
		card.setAttribute('aria-describedby', 'drag-instruction');
		card.setAttribute('aria-grabbed', 'false');
		card.style.width = `${item.w}px`;
		card.style.transform = `translate3d(${item.x}px, ${item.y}px, 0)`;
		card.style.zIndex = String(10 + (index % 25));

		const mediaWrap = document.createElement('div');
		mediaWrap.className = 'media-wrap';
		mediaWrap.style.height = `${item.h}px`;

		const image = document.createElement('img');
		image.src = item.image;
		image.alt = item.title;
		image.loading = 'lazy';
		image.draggable = false;

		const shade = document.createElement('div');
		shade.className = 'shade';

		const label = document.createElement('p');
		label.textContent = item.title;

		mediaWrap.appendChild(image);
		mediaWrap.appendChild(shade);
		card.appendChild(mediaWrap);
		card.appendChild(label);
		return card;
	};

	const renderMoreCards = () => {
		if (!stage || renderedCount >= galleryItems.length) return;
		const end = Math.min(renderedCount + CHUNK_SIZE, galleryItems.length);
		for (let idx = renderedCount; idx < end; idx += 1) {
			const card = createCard(galleryItems[idx], idx);
			if (stageCredit) {
				stage.insertBefore(card, stageCredit);
			} else {
				stage.appendChild(card);
			}
			setupCard(card);
		}
		renderedCount = end;
	};

	const openLightbox = (item, triggerElement) => {
		if (!lightbox || !item) return;
		if (closeTimer) {
			window.clearTimeout(closeTimer);
			closeTimer = null;
		}
		previouslyFocused = triggerElement instanceof HTMLElement ? triggerElement : document.activeElement;
		if (lightboxImg) {
			lightboxImg.hidden = true;
			if (lightboxLoader) lightboxLoader.hidden = false;
			lightboxImg.src = item.image;
			lightboxImg.alt = item.title;
		}
		lightbox.hidden = false;
		requestAnimationFrame(() => {
			lightbox.classList.add('is-open');
			const closeBtn = lightbox.querySelector('.lightbox-close');
			if (closeBtn instanceof HTMLElement) closeBtn.focus();
		});
		document.body.classList.add('lightbox-open');
	};

	const finalizeClose = () => {
		if (!lightbox || lightbox.classList.contains('is-open')) return;
		lightbox.hidden = true;
		document.body.classList.remove('lightbox-open');
		if (lightboxImg) {
			lightboxImg.src = '';
			lightboxImg.alt = '';
		}
		if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
		previouslyFocused = null;
	};

	const closeLightbox = () => {
		if (!lightbox) return;
		lightbox.classList.remove('is-open');
		closeTimer = window.setTimeout(finalizeClose, 220);
	};

	if (lightboxImg) {
		lightboxImg.addEventListener('load', () => {
			lightboxImg.hidden = false;
			if (lightboxLoader) lightboxLoader.hidden = true;
		});
		lightboxImg.addEventListener('error', () => {
			if (lightboxLoader) lightboxLoader.hidden = true;
		});
	}

	if (lightbox) {
		lightbox.addEventListener('keydown', (event) => {
			if (event.key !== 'Tab' || lightbox.hidden) return;
			const focusable = lightbox.querySelectorAll(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			);
			if (!focusable.length) return;
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		});
	}

	const setupCard = (card) => {
		hydrateSavedPosition(card);

		let pointerId = -1;
		let startClientX = 0;
		let startClientY = 0;
		let originX = Number(card.dataset.x || 0);
		let originY = Number(card.dataset.y || 0);
		let moved = false;
		const baseZ = Number(card.style.zIndex || 1);
		let previousZ = baseZ;

		card.addEventListener('pointerdown', (event) => {
			if (isMobile) return;
			pointerId = event.pointerId;
			startClientX = event.clientX;
			startClientY = event.clientY;
			originX = Number(card.dataset.x || 0);
			originY = Number(card.dataset.y || 0);
			moved = false;
			previousZ = Number(card.style.zIndex || baseZ);
			card.style.zIndex = String(++topLayer);
			card.setAttribute('aria-grabbed', 'true');
			card.classList.add('dragging');
			card.setPointerCapture?.(event.pointerId);
		});

		card.addEventListener('pointermove', (event) => {
			if (event.pointerId !== pointerId) return;
			const dx = event.clientX - startClientX;
			const dy = event.clientY - startClientY;
			if (Math.abs(dx) > 4 || Math.abs(dy) > 4) moved = true;
			if (!moved) return;
			applyTransform(card, originX + dx, originY + dy);
			event.preventDefault();
		});

		card.addEventListener('pointerup', (event) => {
			if (event.pointerId !== pointerId) return;
			card.classList.remove('dragging');
			card.setAttribute('aria-grabbed', 'false');
			card.releasePointerCapture?.(event.pointerId);
			pointerId = -1;
			if (moved) {
				saveCardPosition(card);
				return;
			}
			if (!moved) {
				card.style.zIndex = String(previousZ);
				const idx = Number(card.dataset.index || -1);
				openLightbox(galleryItems[idx], card);
			}
		});

		card.addEventListener('pointercancel', (event) => {
			if (event.pointerId !== pointerId) return;
			card.classList.remove('dragging');
			card.setAttribute('aria-grabbed', 'false');
			card.style.zIndex = String(previousZ);
			pointerId = -1;
		});

		card.addEventListener('click', (event) => {
			event.preventDefault();
		});

		card.addEventListener('keydown', (event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				const idx = Number(card.dataset.index || -1);
				openLightbox(galleryItems[idx], card);
			}
		});
	};

	cards.forEach((card) => setupCard(card));

	if (stageSentinel && stageShell) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) renderMoreCards();
				});
			},
			{ root: stageShell, rootMargin: '280px' }
		);
		observer.observe(stageSentinel);
	}

	closeButtons.forEach((btn) => btn.addEventListener('click', closeLightbox));

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') closeLightbox();
	});
</script>

<style>
	.gallery-main {
		width: 100%;
		margin: 0;
		padding: 1rem 0 3rem;
	}
	.gallery-head {
		max-width: 820px;
		margin-bottom: 1rem;
	}
	.gallery-head h1 {
		font-size: clamp(2rem, 6vw, 4.2rem);
		margin: 0.2rem 0 0.5rem;
	}
	.stage-shell {
		height: min(92vh, 1200px);
		overflow: auto;
		background: #0b0b0b;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 24px;
	}
	.stage {
		position: relative;
		min-width: 100%;
		background:
			radial-gradient(circle at 18% 8%, rgba(212, 194, 161, 0.08), transparent 34%),
			radial-gradient(circle at 88% 4%, rgba(255, 255, 255, 0.06), transparent 33%),
			#0b0b0b;
	}
	.stage-sentinel {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 280px;
		height: 1px;
		pointer-events: none;
	}
	.project-card {
		position: absolute;
		padding: 0;
		border: 0;
		background: transparent;
		text-align: left;
		cursor: grab;
		touch-action: none;
		user-select: none;
	}
	.project-card.dragging {
		cursor: grabbing;
	}
	.media-wrap {
		position: relative;
		overflow: hidden;
		border-radius: 12px;
		background: #0f0f0f;
		box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
	}
	.project-card img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		pointer-events: none;
		border-radius: 0;
	}
	.shade {
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0.16), transparent 58%);
		opacity: 0.62;
		pointer-events: none;
	}
	.project-card p {
		margin: 0.42rem 0 0;
		font-size: 11px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: rgba(255, 255, 255, 0.84);
	}
	.credit {
		position: absolute;
		left: 24px;
		bottom: 24px;
		z-index: 15;
		color: #bdbdbd;
	}
	.credit h3 {
		margin: 0;
		font-size: 1.35rem;
		color: #f0f0f0;
	}
	.credit p {
		margin: 0.2rem 0 0;
	}
	.image-lightbox {
		position: fixed;
		inset: 0;
		z-index: 220;
		display: grid;
		place-items: center;
	}
	.image-lightbox[hidden] {
		display: none !important;
	}
	.image-lightbox-overlay {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.82);
	}
	.image-lightbox-dialog {
		position: relative;
		width: min(1200px, calc(100% - 2rem));
		max-height: calc(100vh - 2rem);
		overflow: hidden;
		background: #111;
		border: 1px solid rgba(255, 255, 255, 0.14);
		border-radius: 16px;
		display: block;
		padding: 0;
		z-index: 1;
		transform: translateY(16px) scale(0.98);
		opacity: 0;
		transition: transform 200ms ease, opacity 200ms ease;
	}
	.image-lightbox.is-open .image-lightbox-dialog {
		transform: translateY(0) scale(1);
		opacity: 1;
	}
	.lightbox-close {
		position: absolute;
		top: 0.6rem;
		right: 0.6rem;
		background: rgba(255, 255, 255, 0.1);
		color: #fff;
		border: 1px solid rgba(255, 255, 255, 0.18);
		border-radius: 999px;
		width: 2.2rem;
		height: 2.2rem;
		display: grid;
		place-items: center;
		font-size: 1.3rem;
		line-height: 1;
		cursor: pointer;
	}
	.lightbox-loader {
		width: 2.4rem;
		height: 2.4rem;
		border: 3px solid rgba(255, 255, 255, 0.2);
		border-top-color: rgba(255, 255, 255, 0.85);
		border-radius: 999px;
		animation: spin 0.9s linear infinite;
	}
	.lightbox-media img {
		width: 100%;
		height: 100%;
		max-width: 100%;
		max-height: calc(100vh - 2rem);
		object-fit: contain;
	}
	.lightbox-media {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #0a0a0a;
		min-height: calc(100vh - 2rem);
		overflow: hidden;
	}
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
	body.lightbox-open {
		overflow: hidden;
	}
	@media (max-width: 980px) {
		.stage-shell {
			height: auto;
			overflow: visible;
		}
		.stage {
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 0.85rem;
			padding: 0.9rem;
			min-height: 0 !important;
		}
		.project-card {
			position: static;
			width: auto !important;
			transform: none !important;
			touch-action: auto;
		}
		.media-wrap {
			height: 270px !important;
		}
		.credit {
			position: static;
			grid-column: 1 / -1;
			margin-top: 0.75rem;
		}
		.lightbox-media img {
			max-height: calc(100vh - 2rem);
		}
	}
	@media (max-width: 620px) {
		.stage {
			grid-template-columns: 1fr;
		}
	}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>

```
