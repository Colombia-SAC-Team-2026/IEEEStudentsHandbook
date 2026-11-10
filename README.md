# IEEE Students Handbook

Spanish-language wiki for officers of IEEE Student Branches, Student Branch Chapters and Affinity Groups in the IEEE Colombia Section.

**Live site:** https://colombia-sac-team-2026.github.io/IEEEStudentsHandbook/

## Run locally

No build step. Open `frontend/index.html` directly, or serve it:

```sh
python3 -m http.server 8000 -d frontend
```

## Structure

- `frontend/index.html`: all wiki pages, one `<article class="page">` per page, plus the sidebar.
- `frontend/css/styles.css`: styles.
- `frontend/js/main.js`: hash routing, sidebar search, prev/next links, checklist persistence.
- `PREGUNTAS.md`: open questions for the SAC team that the content still depends on.

## Deploy

Every push to `main` publishes `frontend/` to GitHub Pages through `.github/workflows/pages.yml`.

## Contributing

Content is in Spanish and summarizes official IEEE sources: link to the source instead of copying it. The MGA Operations Manual and the IEEE Center for Leadership Excellence (CLE) are the main references. See `CLAUDE.md` for the conventions.
