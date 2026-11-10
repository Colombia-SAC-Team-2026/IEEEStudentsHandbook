# CLAUDE.md

Spanish-language wiki for IEEE Student Branch, Student Branch Chapter and Affinity Group officers in the IEEE Colombia Section. Live at https://colombia-sac-team-2026.github.io/IEEEStudentsHandbook/ (deployed from `main` by `.github/workflows/pages.yml`).

## Architecture

Plain static site, no build, no dependencies. It must keep working when `frontend/index.html` is opened via `file://` (no `fetch`, no ES modules).

- `frontend/index.html`: every page is an `<article class="page" id="...">` (all but the first have `hidden`). The sidebar has a home link and one `<details class="group">` per section; the `<summary>` link opens the section's overview page and the chevron toggles the group. Every sidebar link has `data-page` matching an article id, and sidebar order defines prev/next links.
- Sections: Conoce IEEE (`conoce-ieee`), Cargos (`cargos`, one page per role), Operación (`operacion`), Recursos (`recursos`). Role pages share one structure: description, "Checklist recomendado" (interactive, based on the CLE action plan), recommended courses, CLE links.
- `frontend/js/main.js`: hash router, collapsible groups, back button, accent-insensitive search over page text, pager, checklist persistence in `localStorage` (keyed by checkbox `id`, so ids must be unique and stable).
- `frontend/css/styles.css`: single stylesheet, IBM Plex Sans/Mono, light theme only, IEEE blue (`--blue`) for links.
- `CLE_Data/` (git-ignored): local export of login-gated CLE content used as a source. Never commit or publish it.

### Adding a page

1. Add `<article class="page" id="new-id" hidden>` with a `.kicker` (section name) and an `<h2>`.
2. Add `<li><a href="#new-id" data-page="new-id">Title</a></li>` inside the right `<details class="group">`, and a card on that section's overview page.
3. End with a `<p class="sources">` citing official sources.

## Content rules

- **Language:** page content in neutral Spanish; keep official IEEE names in English in parentheses (e.g. "Consejero (Branch Counselor)"). Code, comments and commits in English.
- **Link, don't duplicate:** short summary plus a link to the official source. Only state numbers or deadlines inline when a chair needs them, and cite the source next to them.
- **Sources, in priority order:** MGA Operations Manual (current edition, June 2026: SB rules in sections 9.8 to 9.11, rebates and deadlines in 3.4), CLE (`ieee-elearning.org/CLE`, role descriptions and action plans, requires IEEE login), students.ieee.org, R9 SAC (`r9.ieee.org/sac`), SAC Colombia.
- **Recency:** prefer material from 2024 onward. The 2017 R9 MORE manual is outdated (deadlines, SAMIEEE, HAC, SPAC amounts); do not use it as a source.
- **Unverified facts:** do not publish them; add them to `PREGUNTAS.md` instead.
- **Key facts (MGA 2026):** Student Branch minimum 12 Student/GSM members and 4 activities per year; Student Branch Chapter and SB Affinity Group need 6 to form and 5 to stay active; officers, meeting reports and Annual Plan due 15 March; rebate US$50 (US$100 if 50+ members) plus US$2 per member; automatic dissolution after 3 consecutive years out of compliance.
- **Colombia practice (confirmed by the SAC team, November 2026):** the wiki covers every Student Branch of IEEE Colombia Section (the Caribbean belongs to the ColCaribe Section); Branches do not send a financial report to the Section (ignore the MGA 28 February rule); the rebate is claimed from the Section as membership payments or cash via cuenta de cobro (documents to sac@ieee.org.co and tesoreria@ieee.org.co); the Section has no own funds for Branches; recommended terms are 1 year, at most 2 in the same role; elections are a recommendation (choose before year end, with a council of former Branch chairs, using vTools Voting); students do not fill the IEEE COI form; chapter money is agreed between Branch and chapter, recommended to go through the Branch; contact is the SAC team via the IEEE Colombia WhatsApp community chat or sac@ieee.org.co, never a named person; zones: Antioquia, Centro (Bogotá, Cundinamarca, Boyacá, Meta, Tolima), Eje Cafetero (Caldas, Quindío, Risaralda), Santanderes, Suroccidente (Valle, Cauca, Huila, Nariño), Chocó has no zone; student membership is US$14 per year; SAC Colombia awards are given yearly at the RNR.
- No em dash characters anywhere.

## Checking changes

```sh
python3 -m http.server 8000 -d frontend
```

Check the changed page on desktop and at phone width, and that sidebar search still finds it.
