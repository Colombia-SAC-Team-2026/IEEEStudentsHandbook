// Persist task list checkboxes in localStorage, keyed by page path and checkbox index.
(function () {
  var boxes = document.querySelectorAll('.task-list-item input[type="checkbox"]');
  boxes.forEach(function (box, i) {
    var key = 'wiki-check:' + location.pathname + ':' + i;
    try { box.checked = localStorage.getItem(key) === '1'; } catch (e) { /* storage blocked */ }
    box.addEventListener('change', function () {
      try { localStorage.setItem(key, box.checked ? '1' : '0'); } catch (e) { /* storage blocked */ }
    });
  });
})();
