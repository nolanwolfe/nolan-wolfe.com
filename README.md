# nolan-wolfe.com

Personal hub / digital business card for Nolan Wolfe — director & photographer,
builder of thoughtful software. Point people at the domain instead of handing
them a card.

Sister site: **nolanfilm.com** (photography portfolio, image-first, no tech
content). This site is the person; that site is the work.

Design direction: william-espegren.com-style full-viewport "card" — huge
centered name, metadata pinned in the corners (name / local time / city /
made-with), vertical letter-by-letter "keep scrolling" cue — over a warm-dark,
type-first system (Instrument Serif + Inter, grain overlay, scroll reveals,
custom cursor). Work list with one-liners inspired by laszlo.com.

## Stack

Zero dependencies, zero build step. Plain HTML + CSS + JS.

```
index.html            the card + work + writing + contact
css/style.css         design system (tokens at the top of the file)
js/main.js            reveals, scroll cue, cursor, corner clock
writing/template.html copy this to publish an article
```

## Develop

```sh
python3 -m http.server 4000
# → http://localhost:4000
```

## Publish an article

1. Copy `writing/template.html` → `writing/your-slug.html`, write the piece.
2. Add a list item in the Writing section of `index.html` (commented example
   is in place).

## Deploy

Static hosting anywhere — Vercel, Netlify, Cloudflare Pages, or GitHub Pages.
No build command; publish directory is the repo root.

## TODO before launch

- [ ] Confirm "Based in" city on the card (currently Los Angeles)
- [ ] Real links: Verg, AI project, Instagram, X, GitHub — search `TODO` in index.html
- [ ] AI Work one-liner (item 03) — or trim the list to two
- [ ] OG image (`og:image` meta) for link previews
- [ ] Point the nolan-wolfe.com domain at the host
