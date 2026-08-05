// ===== 南榮老紅茶 前端互動 =====
document.addEventListener('DOMContentLoaded', function () {

  // 1. Header 捲動陰影
  const header = document.getElementById('header');
  const onScroll = () => {
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 2. 手機版選單開關
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
  // 點擊連結後關閉選單
  mainNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => mainNav.classList.remove('open'));
  });

  // 3. 導覽列 active 狀態（依捲動位置）
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const sections = navLinks
    .map(l => {
      const h = l.getAttribute('href');
      return (h && h.startsWith('#') && h.length > 1) ? document.querySelector(h) : null;
    })
    .filter(Boolean);

  const spy = () => {
    if (!sections.length) return;
    const pos = window.scrollY + 120;
    let current = sections[0];
    sections.forEach(sec => { if (sec.offsetTop <= pos) current = sec; });
    navLinks.forEach(l => {
      l.classList.toggle('active', current && l.getAttribute('href') === '#' + current.id);
    });
  };
  window.addEventListener('scroll', spy, { passive: true });
  spy();

  // 4. 捲動進場動畫
  const revealTargets = document.querySelectorAll(
    '.features-card, .about-text, .about-media, .contact-map, .contact-info, .hero-copy, .hero-visual, ' +
    '.pop-card, .fl-item, .gallery-item, .ap-block, .ap-photo, .notes-col, .cp-form-wrap, .cp-info'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('visible'));
  }

  // 5. 嚴選商品分類頁籤
  const menuTabs = document.querySelectorAll('.menu-tab');
  if (menuTabs.length) {
    const panels = document.querySelectorAll('.menu-panel');
    menuTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const id = tab.getAttribute('data-tab');
        menuTabs.forEach(t => t.classList.toggle('active', t === tab));
        panels.forEach(p => p.classList.toggle('active', p.getAttribute('data-panel') === id));
      });
    });
  }

  // 6. 聯絡表單（以 mailto 寄出）
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').trim();
      const email = data.get('email') || '';
      const message = data.get('message') || '';
      const subject = encodeURIComponent('【網站來信】' + name);
      const body = encodeURIComponent(
        '姓名：' + name + '\n電子郵件：' + email + '\n\n內容：\n' + message
      );
      window.location.href = 'mailto:x1028@ms52.url.com.tw?subject=' + subject + '&body=' + body;
    });
  }

  // 7. 回到頂部按鈕
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    const toggleTop = () => backToTop.classList.toggle('show', window.scrollY > 400);
    window.addEventListener('scroll', toggleTop, { passive: true });
    toggleTop();
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
