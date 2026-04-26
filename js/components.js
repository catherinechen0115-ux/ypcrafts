/* 共用元件注入 */
(function () {
  const inSubdir = window.location.pathname.includes('/products/') || window.location.pathname.includes('/categories/');
  const r = inSubdir ? '../' : '';

  const components = {

    header: `<header class="site-header">
  <div class="container nav-wrap">
    <a class="brand" href="${r}index.html">
      <img src="${r}images/7877A391-6CB6-4B10-8B7E-826D02F5E8BB.jpg" alt="YP Crafts logo">
      <span>YP Crafts</span>
    </a>
    <nav>
      <a class="brand" href="${r}about.html">About</a>
      <div class="social-links nav-social">
        <a class="social-facebook" href="https://www.facebook.com/profile.php?id=61587140589083" target="_blank" rel="noopener noreferrer" aria-label="Facebook｜Hand YP">
          <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.019 4.388 11.01 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.021 1.792-4.688 4.533-4.688 1.313 0 2.686.236 2.686.236v2.969h-1.514c-1.49 0-1.955.929-1.955 1.882v2.261h3.328l-.532 3.49h-2.796V24C19.612 23.083 24 18.092 24 12.073z"/>
          </svg>
        </a>
        <a class="social-instagram" href="https://www.instagram.com/yphand2026/" target="_blank" rel="noopener noreferrer" aria-label="Instagram｜@yphand2026">
          <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.75A4 4 0 0 0 3.75 7.75v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5zm8.88 1.62a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5z"/>
          </svg>
        </a>
        <a href="https://lin.ee/YLwzHWKr" target="_blank" rel="noopener noreferrer" aria-label="LINE｜YP Crafts">
          <div class="line-qrcode">
            <img src="${r}images/E2AC1DAE-8493-42A7-BA7E-186BBD5DBB44.png" alt="LINE QR Code">
          </div>
        </a>
      </div>
    </nav>
  </div>
</header>`,

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
