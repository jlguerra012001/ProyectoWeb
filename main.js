// Toggle tema claro/oscuro con persistencia
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const STORAGE_KEY = 'prefers-dark';

  function applyTheme(isDark) {
    if (isDark) {
      root.classList.add('theme-dark');
      if (btn) btn.textContent = '☼';
    } else {
      root.classList.remove('theme-dark');
      if (btn) btn.textContent = '☾';
    }
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  const prefersDark = stored !== null ? stored === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark);

  if (btn) {
    btn.addEventListener('click', () => {
      const isDark = !root.classList.contains('theme-dark');
      applyTheme(isDark);
      localStorage.setItem(STORAGE_KEY, String(isDark));
    });
  }
})();

// Año en el footer
(function () {
  const el = document.getElementById('year');
  if (el) el.textContent = String(new Date().getFullYear());
})();

// Sombra en header al hacer scroll
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => {
    if (window.scrollY > 8) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


