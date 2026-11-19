# CLAUDE.md

Spanish-language wiki for students, members, officers and Counselors of IEEE Student Branches, Student Branch Chapters and Affinity Groups in the IEEE Colombia Section. Live at https://colombia-sac-team-2026.github.io/IEEEStudentsHandbook/ (deployed from `main` by `.github/workflows/pages.yml`).

## Architecture

MkDocs Material site, built from Markdown. Non-programmers edit pages through GitHub's web editor (the pencil on each page, `edit_uri: edit/main/docs/`).

- `mkdocs.yml`: site config, theme (IEEE blue, IBM Plex, light only), Markdown extensions and the explicit `nav:`. The `nav:` defines the sidebar and prev/next order. Each section is organized by user goal and has an `index.md` overview page (`navigation.indexes`): one "Úsala si..." sentence plus a short list saying when to read each page, not a card grid that repeats the sidebar. Nav titles, page `# Title` headings and link texts must be identical.
- `docs/`: one `.md` per page. `docs/index.md` is home (six goal shortcuts plus the branch map); sections are folders: `empezar/` (new to IEEE), `mi-cargo/` (one page per role plus `primer-mes.md`, the first-month checklist shared by every officer), `operar/` (requirements, reports, board, elections and handover), `eventos/`, `dinero/`, `membresia/`, `capitulos/` (Chapters and Affinity Groups, with the two petition guides), `premios/`, `aprender/` (glossary and CLE training) and `ayuda/` (contacts, FAQ, tools and brand, official links). Role pages share one structure: description, "Checklist recomendado" (task lists, based on the CLE action plan), recommended courses, CLE links. Each fact lives on one canonical page and the others link to it (deadlines in `operar/reportes.md`, rebate in `dinero/rebate.md`, Chapter money in `dinero/otras-fuentes.md`, speakers in `eventos/conseguir-ponentes.md`, zones in `empezar/ieee-colombia.md`, contact channels in `ayuda/contacto.md`, membership calendar in `membresia/anio-de-membresia.md`).
- `docs/imagenes/`: images. `docs/stylesheets/extra.css`: brand color, `.sources` paragraphs and the branch map.
- `docs/javascripts/checklist.js`: persists task list checkboxes in `localStorage`, keyed by page path plus checkbox index (so reordering items in a checklist resets their saved state).
- `docs/javascripts/feedback.js`: adds the "Feedback wiki" link next to the header search, copying the URL from the footer link in the `copyright` field of `mkdocs.yml` (the footer link must keep `forms.gle` in its URL). The form URL is also written in `ayuda/contacto.md` and `ayuda/faq.md`.
- `docs/javascripts/ramas.js` and `ramas-geo.js`: Leaflet map of the Student Branches on the home page (embedded HTML in `docs/index.md`, Leaflet from unpkg).
- `includes/abbreviations.md`: acronym tooltips, appended to every page by `pymdownx.snippets` (`auto_append`) and rendered by the `abbr` extension and the `content.tooltips` feature. Add every new acronym here and in the glossary (`docs/aprender/glosario.md`).
- `VALIDACION.md` and `PREGUNTAS.md` (repo root, not published): plan for card sorting and tree testing of the navigation, and open content questions for the SAC team.
- `hooks/search_fold.py`: makes search accent-insensitive by appending folded spellings ("capitulos") to the search index in hidden spans. Material's lunr search does not fold accents.
- `requirements.txt` pins `mkdocs-material`. `.github/workflows/pages.yml` runs `mkdocs build --strict` and deploys `site/` from `main`.
- `CLE_Data/` (git-ignored): local export of login-gated CLE content used as a source. Never commit or publish it.

### Adding a page

1. Create `docs/<section>/new-id.md` starting with an `# Title` heading. Pick the section by the goal of the reader, not by the topic, and check that the fact is not already on a canonical page (link to it instead).
2. Add it to `nav:` in `mkdocs.yml` in the right section with the same title as the `# Title` heading, and a line in that section's `index.md` saying when to read it.
3. End with a sources paragraph: `Fuentes: ...` followed by `{ .sources }` on the next line.
4. Add any new acronym to `includes/abbreviations.md` and to the glossary.

## Content rules

- **Language:** page content in neutral Spanish; keep official IEEE names in English in parentheses (e.g. "Consejero (Branch Counselor)"). Code, comments and commits in English.
- **Link, don't duplicate:** short summary plus a link to the official source. Only state numbers or deadlines inline when a chair needs them, and cite the source next to them.
- **Sources, in priority order:** MGA Operations Manual (current edition, June 2026: SB rules in sections 9.8 to 9.11, rebates and deadlines in 3.4), CLE (`ieee-elearning.org/CLE`, role descriptions and action plans, requires IEEE login), students.ieee.org, R9 SAC (`r9.ieee.org/sac`), SAC Colombia.
- **Recency:** prefer material from 2024 onward. The 2017 R9 MORE manual is outdated (deadlines, SAMIEEE, HAC, SPAC amounts); do not use it as a source.
- **Unverified facts:** do not publish them; add them to `PREGUNTAS.md` instead.
- **Key facts (MGA 2026):** Student Branch minimum 12 Student/GSM members and 4 activities per year; Student Branch Chapter and SB Affinity Group need 6 to form and 5 to stay active; officers, meeting reports and Annual Plan due 15 March; rebate US$50 (US$100 if 50+ members) plus US$2 per member; automatic dissolution after 3 consecutive years out of compliance.
- **Colombia practice (confirmed by the SAC team, November 2026):** the wiki covers every Student Branch of IEEE Colombia Section (the Caribbean belongs to the ColCaribe Section); Branches do not send a financial report to the Section (ignore the MGA 28 February rule), although preparing an annual financial report inside the Branch is good practice; the rebate is claimed from the Section as membership payments or cash via cuenta de cobro (documents to sac@ieee.org.co and tesoreria@ieee.org.co); the Section has no own funds for Branches; recommended terms are 1 year, at most 2 in the same role; elections are a recommendation (choose before year end, with a council of former Branch chairs, using vTools Voting); students do not fill the IEEE COI form; chapter money is agreed between Branch and chapter, recommended to go through the Branch; the Chapter and Affinity Group advisor is called "Consejero de Capítulo (Chapter Advisor)" and "Consejero del Grupo de Afinidad (Affinity Group Advisor)", distinct from the Consejero de Rama, and who can fill it follows MGA Manual 9.11 (a professor who is Graduate Student Member or higher, or a member of the Section Affinity Group); SIGHT is formed with the same petition as WIE; Young Professionals cannot be formed in a university because it is only for graduates; contact is the SAC team via the IEEE Colombia WhatsApp community chat or sac@ieee.org.co, never a named person; zones: Antioquia, Centro (Bogotá, Cundinamarca, Boyacá, Meta, Tolima), Eje Cafetero (Caldas, Quindío, Risaralda), Santanderes, Suroccidente (Valle, Cauca, Huila, Nariño), Chocó has no zone; student membership is US$14 per year; SAC Colombia awards are given yearly at the RNR. vTools attendance can be filed before publishing an event; chapters and affinity groups have no fixed reporting dates, only their annual requirements by 31 December; the Branch Counselor signs the Branch Annual Plan; WIE membership is free for students (paid for professionals) and open to everyone, not only women; the official Branch directory is OU Analytics (members only).
- No em dash characters anywhere.

## Checking changes

```sh
python3 -m venv .venv && .venv/bin/pip install -r requirements.txt   # once
.venv/bin/mkdocs serve          # http://127.0.0.1:8000
.venv/bin/mkdocs build --strict # must pass with no warnings (broken links and anchors fail the build)
```

Check the changed page on desktop and at phone width, and that the search finds it.
