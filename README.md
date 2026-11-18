# IEEE Students Handbook

Spanish-language wiki for officers of IEEE Student Branches, Student Branch Chapters and Affinity Groups in the IEEE Colombia Section.

**Live site:** https://colombia-sac-team-2026.github.io/IEEEStudentsHandbook/

## Cómo editar

No necesitas saber programar. Cada página es un archivo de texto (Markdown) en la carpeta `docs/`.

1. Abre la página que quieres cambiar en el sitio.
2. Haz clic en el lápiz que aparece arriba a la derecha del título.
3. Inicia sesión en GitHub (o crea una cuenta gratis) y edita el texto.
4. Al terminar, pulsa **Commit changes** y elige proponer el cambio (Create a pull request). El equipo lo revisa y lo publica.

Formato básico: `## Título`, `**negrita**`, `- lista`, `- [ ] casilla del checklist`, `[texto](https://enlace)`. Cada página termina con las fuentes oficiales. Resume y enlaza la fuente oficial en lugar de copiarla. Las preguntas sin respuesta confirmada van en `PREGUNTAS.md`.

## Vista previa local

```sh
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/mkdocs serve
```

Abre http://127.0.0.1:8000. Antes de publicar, `.venv/bin/mkdocs build --strict` debe pasar sin avisos.

## Structure

- `mkdocs.yml`: site configuration and navigation (`nav:`).
- `docs/`: one Markdown file per page, one folder per section.
- `docs/javascripts/`, `docs/stylesheets/`: checklist persistence, branch map and styles.
- `PREGUNTAS.md`: open questions for the SAC team that the content still depends on.

## Deploy

Every push to `main` builds the site with MkDocs Material and publishes it to GitHub Pages through `.github/workflows/pages.yml`.

## Contributing

Content is in Spanish and summarizes official IEEE sources: link to the source instead of copying it. The MGA Operations Manual and the IEEE Center for Leadership Excellence (CLE) are the main references. See `CLAUDE.md` for the conventions.
