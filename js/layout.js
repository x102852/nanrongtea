// ===== 共用 Header / Footer 注入 =====
(function () {
  const NAV = [
    ['index.html', '首頁'],
    ['faq.html', '常見問題'],
    ['products.html', '嚴選商品'],
    ['recommend.html', '強力推薦'],
    ['about.html', '關於我們'],
    ['contact.html', '聯絡我們'],
  ];

  let page = location.pathname.split('/').pop();
  if (!page) page = 'index.html';

  const navHtml = NAV.map(function (item) {
    const active = item[0] === page ? ' active' : '';
    return '<a href="' + item[0] + '" class="nav-link' + active + '">' + item[1] + '</a>';
  }).join('');

  const header =
    '<header class="site-header" id="header">' +
      '<div class="header-inner">' +
        '<a href="index.html" class="logo" aria-label="南榮老紅茶">' +
          '<img src="images/logo-h.png" alt="南榮老紅茶" class="logo-img">' +
        '</a>' +
        '<nav class="main-nav" id="mainNav">' + navHtml + '</nav>' +
        '<div class="header-icons">' +
          '<button class="icon-btn menu-toggle" id="menuToggle" aria-label="選單"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>' +
        '</div>' +
      '</div>' +
    '</header>';

  const footer =
    '<footer class="site-footer">' +
      '<div class="footer-inner">' +
        '<div class="footer-brand">' +
          '<img src="images/logo-h-white.png" alt="南榮老紅茶" class="footer-logo-img">' +
          '<p>發現台灣原汁原味的幸福</p>' +
          '<p class="footer-since">SINCE 1983 · 傳承古法 · 堅持原味</p>' +
          '<div class="footer-social">' +
            '<a href="https://www.facebook.com/profile.php?id=61574625446759" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5z" fill="currentColor"/></svg></a>' +
            '<a href="https://www.instagram.com/nan.rong.black.tea/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="17" cy="7" r="1.1" fill="currentColor"/></svg></a>' +
            '<a href="https://line.me/R/ti/p/@fdi7146q" target="_blank" rel="noopener" aria-label="LINE"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path fill-rule="evenodd" d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg></a>' +
            '<a href="https://m.me/61574625446759" target="_blank" rel="noopener" aria-label="Messenger"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3C6.9 3 3 6.8 3 11.1c0 2.4 1.1 4.5 2.9 5.9V21l2.7-1.5c.7.2 1.5.3 2.4.3 5.1 0 9-3.8 9-8.1S17.1 3 12 3zm.6 10.9l-2.3-2.4-4.3 2.4 4.8-5 2.3 2.4 4.2-2.4-4.7 5z" fill="currentColor"/></svg></a>' +
          '</div>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>快速連結</h4>' +
          '<a href="faq.html">常見問題</a>' +
          '<a href="products.html">嚴選商品</a>' +
          '<a href="recommend.html">強力推薦</a>' +
          '<a href="about.html">關於我們</a>' +
          '<a href="contact.html">聯絡我們</a>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>五甲本店</h4>' +
          '<p>電話：07-7276621</p>' +
          '<p>信箱：x1028@ms52.url.com.tw</p>' +
          '<p>地址：83084 高雄市鳳山區南榮路 15 號</p>' +
          '<p>營業時間：09:00 ～ 00:00</p>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom"><p>© 2026 南榮老紅茶 NANRONG BLACK TEA. All Rights Reserved.</p></div>' +
    '</footer>';

  const h = document.getElementById('site-header');
  if (h) h.outerHTML = header;
  const f = document.getElementById('site-footer');
  if (f) f.outerHTML = footer;

  // 回到頂部按鈕（全站）
  const backToTop = document.createElement('button');
  backToTop.id = 'backToTop';
  backToTop.className = 'back-to-top';
  backToTop.setAttribute('aria-label', '回到頂部');
  backToTop.innerHTML =
    '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">' +
    '<path d="M12 19V6M6 12l6-6 6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  document.body.appendChild(backToTop);
})();
