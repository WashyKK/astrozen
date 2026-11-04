# Washington Kamadi — Personal Portfolio

Personal portfolio site of **Washington Kigani Kamadi** — Mechatronics and Robotics
engineer, PhD researcher in Space Science and Technology at the University of Trento.

- **LinkedIn:** https://www.linkedin.com/in/WashingtonKK
- **GitHub:** https://github.com/WashingtonKK
- **ORCID:** https://orcid.org/0000-0003-2135-0125

Built with [Astro](https://astro.build) and [TailwindCSS](https://tailwindcss.com),
based on the [AstroZen](https://github.com/immois/astro-zen) template by Moisés Machuca.

## Editing the content

Nearly everything on the page comes from a single file: **`src/config/index.ts`**.

- `SITE_CONFIG` — page title, meta description, nav links, social links, OG image
- `SITE_CONTENT.hero` — name, specialty, summary, and the "Get in Touch" button target
- `SITE_CONTENT.experience` — education and research entries
- `SITE_CONTENT.projects` — featured projects (screenshot, summary, source and preview links)
- `SITE_CONTENT.about` — the About Me text and photo

Images live in `public/`:

| File                   | Used for                      |
| :--------------------- | :---------------------------- |
| `washington-small.jpg` | Header avatar (160×160)       |
| `washington-big.jpg`   | About Me photo (800×800)      |
| `washington-og.png`    | Social share card (1200×630)  |
| `project-*.png`        | Project screenshots (736×483) |
| `favicon.svg`          | WK monogram favicon           |

> Project screenshots are sized 736×483 on purpose — the card crops them from the
> top-left at natural size, so images much larger than this will appear zoomed in.

## Commands

| Command        | Action                                      |
| :------------- | :------------------------------------------ |
| `pnpm install` | Installs dependencies                       |
| `pnpm dev`     | Starts local dev server at `localhost:4321` |
| `pnpm build`   | Type-checks and builds to `./dist/`         |
| `pnpm preview` | Preview the build locally                   |

## Deployment

Deployed on Vercel as a static Astro site.

```sh
vercel deploy --prod
```

## License

Template licensed under MIT — see [LICENSE](LICENSE). Photographs and personal
content are © Washington Kigani Kamadi.
