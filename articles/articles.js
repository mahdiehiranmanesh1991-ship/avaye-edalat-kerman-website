(function () {
  "use strict";
  var ARTICLES = window.ARTICLES || [];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // base path so links work both at site root and inside /articles pages
  var inArticlesDir = /\/articles\//.test(location.pathname);
  var root = inArticlesDir ? "../" : "";

  function articleHref(a) {
    // a.url -> standalone page (e.g. articles/xyz.html); otherwise the generated template page
    return a.url ? root + a.url : root + "article.html?slug=" + encodeURIComponent(a.slug);
  }

  function cardHTML(a) {
    var cover = a.cover
      ? '<span class="post-card__cover" style="background-image:url(' + esc(root + a.cover) + ')"></span>'
      : '<span class="post-card__cover post-card__cover--ph" aria-hidden="true">' +
        '<svg viewBox="0 0 24 24" width="34" height="34"><path fill="currentColor" d="M6 2h9l5 5v15H6zm8 1.5V8h4.5zM8 12h8v2H8zm0 4h8v2H8z"/></svg></span>';
    return (
      '<article class="post-card">' +
        '<a class="post-card__link" href="' + esc(articleHref(a)) + '">' +
          cover +
          '<span class="post-card__body">' +
            '<span class="post-card__meta"><span class="post-card__cat">' + esc(a.category || "مقاله") + "</span><time>" + esc(a.date || "") + "</time></span>" +
            "<h3>" + esc(a.title) + "</h3>" +
            "<p>" + esc(a.excerpt || "") + "</p>" +
            '<span class="post-card__more">ادامه مطلب →</span>' +
          "</span>" +
        "</a>" +
      "</article>"
    );
  }

  // 1) Homepage: latest 3
  var latest = document.getElementById("latestArticles");
  if (latest) {
    if (!ARTICLES.length) {
      latest.innerHTML = '<p class="posts-empty">به‌زودی مقالات منتشر می‌شود.</p>';
    } else {
      latest.innerHTML = ARTICLES.slice(0, 3).map(cardHTML).join("");
    }
  }

  // 2) Archive page: all articles
  var list = document.getElementById("articleList");
  if (list) {
    list.innerHTML = ARTICLES.length
      ? ARTICLES.map(cardHTML).join("")
      : '<p class="posts-empty">هنوز مقاله‌ای منتشر نشده است.</p>';
  }

  // 3) Single article view
  var view = document.getElementById("articleView");
  if (view) {
    var slug = new URLSearchParams(location.search).get("slug");
    var a = ARTICLES.filter(function (x) { return x.slug === slug; })[0];
    if (!a) {
      view.innerHTML =
        '<div class="article-missing"><h1>مقاله یافت نشد</h1>' +
        '<p>متأسفانه مقاله‌ی موردنظر در دسترس نیست.</p>' +
        '<a class="btn btn--gold" href="' + root + 'articles.html">بازگشت به فهرست مقالات</a></div>';
      return;
    }
    document.title = a.title + " | گروه وکلای آوای عدالت کرمان";
    var coverBlock = a.cover
      ? '<div class="article-cover" style="background-image:url(' + esc(root + a.cover) + ')"></div>'
      : "";
    view.innerHTML =
      '<nav class="breadcrumb"><a href="' + root + 'index.html">خانه</a> › <a href="' + root + 'articles.html">مقالات</a> › <span>' + esc(a.category || "") + "</span></nav>" +
      '<header class="article-head">' +
        '<span class="article-cat">' + esc(a.category || "مقاله") + "</span>" +
        "<h1>" + esc(a.title) + "</h1>" +
        '<p class="article-date">تاریخ انتشار: ' + esc(a.date || "") + "</p>" +
      "</header>" +
      coverBlock +
      '<div class="article-body">' + (a.body || "") + "</div>" +
      '<div class="article-foot">' +
        '<a class="btn btn--ghost-dark" href="' + root + 'articles.html">→ بازگشت به همه مقالات</a>' +
        '<a class="btn btn--gold" href="' + root + 'index.html#contact">مشاوره با وکیل</a>' +
      "</div>";
  }
})();
