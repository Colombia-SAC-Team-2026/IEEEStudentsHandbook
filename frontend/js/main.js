// Wiki shell: hash routing between <article class="page"> blocks, collapsible sidebar groups,
// sidebar search, back button, prev/next links and persisted checklists.
// Plain script (no fetch, no modules) so it also works when index.html is opened via file://.

const pages = [...document.querySelectorAll('article.page')];
// Sidebar order (home link, group titles and their items) defines prev/next.
const links = [...document.querySelectorAll('#sidebar a[data-page]')];
const groups = [...document.querySelectorAll('#sidebar details.group')];
const sidebar = document.getElementById('sidebar');
const search = document.getElementById('search');
const noResults = document.getElementById('no-results');
const backBtn = document.getElementById('back');
const HOME = pages[0].id;

// Accent-insensitive normalization so "reunion" matches "reunión".
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

function show(id) {
  const page = document.getElementById(id);
  const target = page && page.classList.contains('page') ? page : document.getElementById(HOME);
  pages.forEach((p) => { p.hidden = p !== target; });
  links.forEach((l) => {
    const on = l.dataset.page === target.id;
    l.classList.toggle('on', on);
    if (on) {
      l.setAttribute('aria-current', 'page');
      const g = l.closest('details');
      if (g) g.open = true;
    } else {
      l.removeAttribute('aria-current');
    }
  });
  backBtn.hidden = target.id === HOME;
  const h = target.querySelector('h1, h2');
  document.title = (h ? h.textContent + ' · ' : '') + 'Wiki Ramas Estudiantiles IEEE Colombia';
  sidebar.classList.remove('open');
  // Instant: the browser's native anchor jump to the article id would otherwise leave the page offset.
  window.scrollTo({ top: 0, behavior: 'instant' });
}

window.addEventListener('hashchange', () => show(location.hash.slice(1)));
show(location.hash.slice(1) || HOME);
// On first load the browser jumps to the fragment after this script runs; undo it.
window.addEventListener('load', () => window.scrollTo({ top: 0, behavior: 'instant' }));

// Back: previous page in this tab, or home when the wiki was opened directly on a page.
const startLength = history.length;
backBtn.addEventListener('click', () => {
  if (history.length > startLength) history.back();
  else location.hash = HOME;
});

// Previous / next links, following sidebar order (each page appears once).
const order = links.filter((l, i) => links.findIndex((m) => m.dataset.page === l.dataset.page) === i);
order.forEach((l, i) => {
  const page = document.getElementById(l.dataset.page);
  if (!page) return;
  const nav = document.createElement('nav');
  nav.className = 'pager';
  nav.setAttribute('aria-label', 'Navegación entre páginas');
  const prev = order[i - 1];
  const next = order[i + 1];
  nav.innerHTML =
    (prev ? `<a href="#${prev.dataset.page}">← ${prev.textContent}</a>` : '<span></span>') +
    (next ? `<a href="#${next.dataset.page}">${next.textContent} →</a>` : '<span></span>');
  page.appendChild(nav);
});

// Search: hide sidebar entries whose page text does not contain the query; open groups with matches.
const pageText = Object.fromEntries(pages.map((p) => [p.id, norm(p.textContent)]));
const matches = (l, q) => !q || pageText[l.dataset.page].includes(q) || norm(l.textContent).includes(q);
search.addEventListener('input', () => {
  const q = norm(search.value.trim());
  let shown = 0;
  document.querySelectorAll('#sidebar li').forEach((li) => {
    const ok = matches(li.querySelector('a'), q);
    li.hidden = !ok;
    if (ok) shown++;
  });
  groups.forEach((g) => {
    const titleOk = matches(g.querySelector('summary a'), q);
    const anyItem = !!g.querySelector('li:not([hidden])');
    g.hidden = !titleOk && !anyItem;
    if (q && anyItem) g.open = true;
    if (titleOk || anyItem) shown++;
  });
  noResults.hidden = shown > 0;
});

document.getElementById('menu-toggle').addEventListener('click', () => sidebar.classList.toggle('open'));

// Checklists: remember ticked items per browser. Storage can be unavailable (private mode), so fail silently.
document.querySelectorAll('.checklist input[type="checkbox"]').forEach((box) => {
  const key = 'wiki-check:' + box.id;
  try { box.checked = localStorage.getItem(key) === '1'; } catch (e) { /* storage blocked */ }
  box.addEventListener('change', () => {
    try { localStorage.setItem(key, box.checked ? '1' : '0'); } catch (e) { /* storage blocked */ }
  });
});
