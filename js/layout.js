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
          '<p>發現臺灣原汁原味的幸福</p>' +
          '<p class="footer-since">SINCE 1980 · 傳承古法 · 堅持原味</p>' +
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
})();
