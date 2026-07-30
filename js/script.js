document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('main-nav');

  // 手機版選單開關
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  // 點擊選單連結後自動關閉手機選單
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
    });
  });

  // 捲動時依據所在區塊，自動反白對應的導覽選項
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = mainNav.querySelectorAll('a');

  const highlightNav = () => {
    let currentId = 'top';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  };

  window.addEventListener('scroll', highlightNav);
  highlightNav();
});
