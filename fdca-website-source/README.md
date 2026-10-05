# Fine Dining Chefs Academy website

Plain HTML, CSS and JavaScript. No build tools or frameworks required.

## Run locally
Open `index.html` in a browser, or serve the folder:
    python3 -m http.server 8000   # then visit http://localhost:8000

## Edit content
All copy, prices, menus, packages, lunch packs, courses, awards and contact
details live in `content.js`. Change a value there and refresh.
- Package prices and slots: `PACKAGES`
- Menu tabs (proteins, starches, harvest, desserts, snacks, beverages): `MENU`
- Lunch packs: `LUNCH`
- WhatsApp number / phones / email / address: `SITE`

## Files
- `index.html`  shell (nav, drawer, curtain)
- `styles.css`  design tokens, type scale, components, animation
- `app.js`      views, hash router, menu builder, forms, scroll effects
- `assets/`     WebP images, logo PNGs, Montserrat WOFF2 (subset from supplied files)
Display font Fraunces loads from Google Fonts.

## Needs a live service
- Enquiry form has no backend: it opens WhatsApp with a prefilled message
  (and offers an email link). Connect Formspree, Netlify Forms or similar
  if you want submissions stored.
- No analytics, no map embed (address links to Google Maps).

## Images
Files without an `r-` prefix are AI-generated illustrations; `r-` files are
real photos from the 2024 company profile. Do not caption generated people
as staff.
