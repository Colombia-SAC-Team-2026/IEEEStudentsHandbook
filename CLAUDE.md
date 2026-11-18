# CLAUDE.md

Spanish-language wiki for IEEE Student Branch, Student Branch Chapter and Affinity Group officers in the IEEE Colombia Section. Live at https://colombia-sac-team-2026.github.io/IEEEStudentsHandbook/ (deployed from `main` by `.github/workflows/pages.yml`).

## Architecture

MkDocs Material site, built from Markdown. Non-programmers edit pages through GitHub's web editor (the pencil on each page, `edit_uri: edit/main/docs/`).

- `mkdocs.yml`: site config, theme (IEEE blue, IBM Plex, light only), Markdown extensions and the explicit `nav:`. The `nav:` defines the sidebar and prev/next order. Each section has an `index.md` overview page (`navigation.indexes`).
- `docs/`: one `.md` per page. `docs/index.md` is home; sections are folders: `conoce-ieee/`, `cargos/` (one page per role), `operacion/`, `recursos/`. Role pages share one structure: description, "Checklist recomendado" (task lists, based on the CLE action plan), recommended courses, CLE links.
- `docs/imagenes/`: images. `docs/stylesheets/extra.css`: brand color, `.sources` paragraphs and the branch map.
- `docs/javascripts/checklist.js`: persists task list checkboxes in `localStorage`, keyed by page path plus checkbox index (so reordering items in a checklist resets their saved state).
- `docs/javascripts/ramas.js` and `ramas-geo.js`: Leaflet map of the Student Branches on the home page (embedded HTML in `docs/index.md`, Leaflet from unpkg).
- `requirements.txt` pins `mkdocs-material`. `.github/workflows/pages.yml` runs `mkdocs build --strict` and deploys `site/` from `main`.
- `CLE_Data/` (git-ignored): local export of login-gated CLE content used as a source. Never commit or publish it.

### Adding a page

1. Create `docs/<section>/new-id.md` starting with an `# Title` heading.
2. Add it to `nav:` in `mkdocs.yml` in the right section, and a card or link on that section's `index.md`.
3. End with a sources paragraph: `Fuentes: ...` followed by `{ .sources }` on the next line.

## Content rules

- **Language:** page content in neutral Spanish; keep official IEEE names in English in parentheses (e.g. "Consejero (Branch Counselor)"). Code, comments and commits in English.
- **Link, don't duplicate:** short summary plus a link to the official source. Only state numbers or deadlines inline when a chair needs them, and cite the source next to them.
- **Sources, in priority order:** MGA Operations Manual (current edition, June 2026: SB rules in sections 9.8 to 9.11, rebates and deadlines in 3.4), CLE (`ieee-elearning.org/CLE`, role descriptions and action plans, requires IEEE login), students.ieee.org, R9 SAC (`r9.ieee.org/sac`), SAC Colombia.
- **Recency:** prefer material from 2024 onward. The 2017 R9 MORE manual is outdated (deadlines, SAMIEEE, HAC, SPAC amounts); do not use it as a source.
- **Unverified facts:** do not publish them; add them to `PREGUNTAS.md` instead.
- **Key facts (MGA 2026):** Student Branch minimum 12 Student/GSM members and 4 activities per year; Student Branch Chapter and SB Affinity Group need 6 to form and 5 to stay active; officers, meeting reports and Annual Plan due 15 March; rebate US$50 (US$100 if 50+ members) plus US$2 per member; automatic dissolution after 3 consecutive years out of compliance.
- **Colombia practice (confirmed by the SAC team, November 2026):** the wiki covers every Student Branch of IEEE Colombia Section (the Caribbean belongs to the ColCaribe Section); Branches do not send a financial report to the Section (ignore the MGA 28 February rule); the rebate is claimed from the Section as membership payments or cash via cuenta de cobro (documents to sac@ieee.org.co and tesoreria@ieee.org.co); the Section has no own funds for Branches; recommended terms are 1 year, at most 2 in the same role; elections are a recommendation (choose before year end, with a council of former Branch chairs, using vTools Voting); students do not fill the IEEE COI form; chapter money is agreed between Branch and chapter, recommended to go through the Branch; contact is the SAC team via the IEEE Colombia WhatsApp community chat or sac@ieee.org.co, never a named person; zones: Antioquia, Centro (Bogotá, Cundinamarca, Boyacá, Meta, Tolima), Eje Cafetero (Caldas, Quindío, Risaralda), Santanderes, Suroccidente (Valle, Cauca, Huila, Nariño), Chocó has no zone; student membership is US$14 per year; SAC Colombia awards are given yearly at the RNR. vTools attendance can be filed before publishing an event; chapters and affinity groups have no fixed reporting dates, only their annual requirements by 31 December; the Branch Counselor signs the Branch Annual Plan; WIE membership is free for students (paid for professionals) and open to everyone, not only women; the official Branch directory is OU Analytics (members only).
- No em dash characters anywhere.

## Checking changes

```sh
python3 -m venv .venv && .venv/bin/pip install -r requirements.txt   # once
.venv/bin/mkdocs serve          # http://127.0.0.1:8000
.venv/bin/mkdocs build --strict # must pass with no warnings
```

Check the changed page on desktop and at phone width, and that the search finds it.
