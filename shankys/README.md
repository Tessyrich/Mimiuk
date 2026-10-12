# Shanky's Restaurant, Bar & Lounge — concept site

Static site built with Astro 7 and Tailwind CSS 4. One page, no backend.

## Run it

```
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into dist/
```

## Where things live

- `src/data/site.ts` — menu, prices, hours, phone, reviews. Edit this, not the components.
- `src/components/` — one file per section (Nav, Hero, Strip, Menu, Lounge, Gallery, Reviews, Visit, Footer).
- `src/assets/photos/` — photos from the restaurant's Google listing. Replace with the owner's own photos when they come on board.
- `scripts/make-artifact.mjs` — makes an `artifact/` copy of the build with relative asset paths for publishing as a Claude artifact.

## Booking

The booking form has no server. It builds a WhatsApp message to the restaurant's mobile (`phoneIntl` in `site.ts`) and opens it in WhatsApp. Swap for a real booking widget later if the owner wants one.

## Deploying for real

`dist/` is plain static files. Drop it on Netlify, Vercel, Cloudflare Pages or GitHub Pages, then point `shankysrestaurantbarlounge.co.uk` at it.
