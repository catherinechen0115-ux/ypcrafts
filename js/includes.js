/* HTML include loader
   Usage: <div data-include="components/footer.html"></div>
   Path is relative to the current page's location.
*/
(function () {
  const els = document.querySelectorAll('[data-include]');
  const promises = Array.from(els).map(el => {
    const src = el.getAttribute('data-include');
    return fetch(src)
      .then(r => {
        if (!r.ok) throw new Error(`include: ${src} not found`);
        return r.text();
      })
      .then(html => {
        el.outerHTML = html;
      })
      .catch(err => console.warn(err));
  });
  return Promise.all(promises);
})();
