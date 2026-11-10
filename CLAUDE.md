# CLAUDE.md

Spanish-language wiki for IEEE Student Branch, Student Branch Chapter and Affinity Group officers in the IEEE Colombia Section. Live at https://colombia-sac-team-2026.github.io/IEEEStudentsHandbook/ (deployed from `main` by `.github/workflows/pages.yml`).

## Architecture

Plain static site, no build, no dependencies. It must keep working when `frontend/index.html` is opened via `file://` (no `fetch`, no ES modules).

- `frontend/index.html`: every page is an `<article class="page" id="...">` (all but the first have `hidden`). The sidebar link `<a href="#id" data-page="id">` must match the article id; its order defines prev/next links.
- `frontend/js/main.js`: hash router, accent-insensitive search over page text, pager, checklist persistence in `localStorage` (keyed by checkbox `id`, so ids must be unique and stable).
- `frontend/css/styles.css`: single stylesheet, IBM Plex Sans/Mono, light theme only, IEEE blue (`--blue`) for links.

### Adding a page

1. Add `<article class="page" id="new-id" hidden>` with a `.kicker` (group name) and an `<h2>`.
2. Add `<li><a href="#new-id" data-page="new-id">Title</a></li>` to the right sidebar group.
3. End with a `<p class="sources">` citing official sources.

## Content rules

- **Language:** page content in neutral Spanish; keep official IEEE names in English in parentheses (e.g. "Consejero (Branch Counselor)"). Code, comments and commits in English.
- **Link, don't duplicate:** short summary plus a link to the official source. Only state numbers or deadlines inline when a chair needs them, and cite the source next to them.
- **Sources, in priority order:** MGA Operations Manual (current edition, June 2026: SB rules in sections 9.8 to 9.11, rebates and deadlines in 3.4), CLE (`ieee-elearning.org/CLE`, role descriptions and action plans, requires IEEE login), students.ieee.org, R9 SAC (`r9.ieee.org/sac`), SAC Colombia.
- **Recency:** prefer material from 2024 onward. The 2017 R9 MORE manual is outdated (deadlines, SAMIEEE, HAC, SPAC amounts); do not use it as a source.
- **Unverified facts:** do not publish them; add them to `PREGUNTAS.md` instead.
- **Key facts (MGA 2026):** Student Branch minimum 12 Student/GSM members and 4 activities per year; Student Branch Chapter and SB Affinity Group need 6 to form and 5 to stay active; officers, meeting reports and Annual Plan due 15 March; financials to the Section by 28 February; rebate US$50 (US$100 if 50+ members) plus US$2 per member; automatic dissolution after 3 consecutive years out of compliance.
- No em dash characters anywhere.

## Checking changes

```sh
python3 -m http.server 8000 -d frontend
```

Check the changed page on desktop and at phone width, and that sidebar search still finds it.
