/* 共用元件注入 — 直接寫入 DOM，不需要伺服器 */
(function () {
  const components = {
    footer: `<footer class="site-footer">
  <p>© 2026 YP Crafts. Handmade and Loved.</p>
</footer>`
  };

  document.querySelectorAll('[data-include]').forEach(el => {
    const key = el.getAttribute('data-include');
    if (components[key]) {
      el.outerHTML = components[key];
    }
  });
})();
