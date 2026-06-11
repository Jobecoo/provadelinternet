/* layout.js — injecta navbar i footer compartits
   Cada pàgina ha de definir window.SITE_BASE i window.ACTIVE_PAGE
   abans de carregar aquest script.
   Ex: <script>const SITE_BASE='../'; const ACTIVE_PAGE='fibra';</script>
*/
(function () {
  const B = (typeof SITE_BASE !== 'undefined' ? SITE_BASE : '') || '';
  const active = (typeof ACTIVE_PAGE !== 'undefined' ? ACTIVE_PAGE : '') || '';

  /* ---- NAVBAR ---- */
  const navHTML = `
<div class="top-bar">
  <a href="${B}index.html">Àrea d'usuari</a>
  <div class="lang-switcher">
    <a href="#" class="active">CA</a>
    <a href="#">ES</a>
  </div>
</div>
<header class="navbar">
  <a class="nav-logo" href="${B}index.html" style="display:flex;align-items:center;gap:1.2rem;">
    <img src="${B}assets/img/logo-b.png" alt="Delinternet" style="height:32px;width:auto;">
    <span style="color:#ccc;font-size:1.2rem;">×</span>
    <img src="${B}assets/img/pchard-logo.png" alt="PCHARD" style="height:28px;width:auto;">
  </a>
  <nav>
    <ul class="nav-links" id="nav-links">
      <li><a href="${B}index.html" data-page="home">Inici</a></li>
    </ul>
  </nav>
  <div class="nav-right">
    <a href="https://delinternet.com" target="_blank" rel="noopener" class="btn-green" style="font-size:0.85rem;padding:9px 18px;">VES A DELINTERNET →</a>
  </div>
  <button class="hamburger" id="hamburger" aria-label="Obrir menú" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</header>`;

  /* ---- FOOTER ---- */
  const footerHTML = `
<footer class="footer">
  <div class="footer-cols">
    <div class="footer-col">
      <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem;">
        <img src="${B}assets/img/logo-w.png" alt="Delinternet" style="height:28px;width:auto;">
        <span style="color:rgba(255,255,255,0.3);font-size:1.1rem;">×</span>
        <img src="${B}assets/img/pchard-logo-w.png" alt="PCHARD" style="height:24px;width:auto;">
      </div>
      <p class="fcol-tagline">Operadora local de telecomunicacions arrelada a les Terres de l'Ebre des de fa més de 10 anys.</p>
    </div>
    <div class="footer-col" style="display:flex;flex-direction:column;justify-content:center;">
      <a href="https://delinternet.com" target="_blank" rel="noopener" class="btn-green" style="display:inline-block;white-space:nowrap;padding:10px 24px;">VES A DELINTERNET →</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="footer-copy">© 2026 Delinternet · Tots els drets reservats</p>
    <div class="social-links">
      <a href="https://www.facebook.com/Delinternet.Telecom" target="_blank" rel="noopener" aria-label="Facebook">
        <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
      </a>
      <a href="https://www.instagram.com/delinternet_telecom/" target="_blank" rel="noopener" aria-label="Instagram">
        <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-width="2" stroke="#fff" stroke-linecap="round"/></svg>
      </a>
      <a href="https://www.linkedin.com/company/delinternet-telecom-sl/" target="_blank" rel="noopener" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
    </div>
  </div>
</footer>`;

  /* ---- INJECT ---- */
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ---- ACTIVE LINK ---- */
  document.querySelectorAll('.nav-links a[data-page]').forEach(function (a) {
    if (a.dataset.page === active) a.classList.add('active');
  });

  /* ---- HAMBURGER ---- */
  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('nav-links');
  if (ham && nav) {
    ham.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      ham.setAttribute('aria-expanded', open);
    });
  }

  /* ---- FAQ ACCORDION ---- */
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.faq-q');
    if (!btn) return;
    const answer = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');
    /* close all */
    document.querySelectorAll('.faq-q.open').forEach(function (q) {
      q.classList.remove('open');
      q.nextElementSibling.style.maxHeight = null;
    });
    if (!isOpen) {
      btn.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
})();
