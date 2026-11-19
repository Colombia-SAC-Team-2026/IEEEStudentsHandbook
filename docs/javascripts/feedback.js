// Add a "Feedback wiki" link next to the header search. The URL is read from the
// footer link in mkdocs.yml (copyright), so it only lives in one place.
(function () {
  var source = document.querySelector('.md-copyright a[href*="forms.gle"]');
  var search = document.querySelector('.md-header .md-search');
  if (!source || !search) return;
  var link = document.createElement('a');
  link.className = 'md-header__feedback';
  link.href = source.href;
  link.textContent = source.textContent;
  search.insertAdjacentElement('afterend', link);
})();
