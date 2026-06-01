(function () {
  "use strict";

  var toPersian = function (n) {
    var d = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return String(n).replace(/\d/g, function (x) { return d[x]; });
  };

  /* ===== Mobile nav ===== */
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");

  function closeNav() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  /* ===== Header shadow on scroll + back to top ===== */
  var header = document.getElementById("header");
  var toTop = document.getElementById("toTop");
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("is-scrolled", y > 8);
    if (toTop) toTop.classList.toggle("is-visible", y > 480);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ===== Reveal on scroll ===== */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          ro.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { ro.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ===== Animated counters ===== */
  var counters = document.querySelectorAll(".stat__num");
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1500, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = toPersian(Math.round(target * eased)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && counters.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { animateCount(entry.target); co.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { co.observe(el); });
  } else {
    counters.forEach(function (el) {
      el.textContent = toPersian(el.getAttribute("data-count")) + (el.getAttribute("data-suffix") || "");
    });
  }

  /* ===== Active nav link via scroll spy ===== */
  var navLinks = nav ? Array.prototype.slice.call(nav.querySelectorAll('.nav__list a[href^="#"]')) : [];
  var sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute("id");
          navLinks.forEach(function (a) {
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { so.observe(s); });
  }

  /* ===== Contact form validation ===== */
  var form = document.getElementById("contactForm");
  if (form) {
    var success = document.getElementById("formSuccess");

    function setError(field, msg) {
      var wrap = field.closest(".field");
      var err = wrap.querySelector(".field__error");
      if (msg) {
        wrap.classList.add("field--invalid");
        if (err) err.textContent = msg;
        field.setAttribute("aria-invalid", "true");
      } else {
        wrap.classList.remove("field--invalid");
        if (err) err.textContent = "";
        field.removeAttribute("aria-invalid");
      }
    }

    function validatePhone(v) {
      var digits = v.replace(/[۰-۹]/g, function (d) { return "۰۱۲۳۴۵۶۷۸۹".indexOf(d); }).replace(/\D/g, "");
      return digits.length >= 8 && digits.length <= 13;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      var name = form.querySelector("#name");
      var phone = form.querySelector("#phone");
      var subject = form.querySelector("#subject");

      if (!name.value.trim()) { setError(name, "لطفاً نام خود را وارد کنید."); ok = false; }
      else setError(name, "");

      if (!phone.value.trim()) { setError(phone, "لطفاً شماره تماس را وارد کنید."); ok = false; }
      else if (!validatePhone(phone.value)) { setError(phone, "شماره تماس معتبر نیست."); ok = false; }
      else setError(phone, "");

      if (!subject.value) { setError(subject, "لطفاً موضوع را انتخاب کنید."); ok = false; }
      else setError(subject, "");

      if (!ok) {
        var firstInvalid = form.querySelector(".field--invalid input, .field--invalid select");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Demo behavior: no backend yet — show confirmation locally.
      if (success) { success.hidden = false; }
      form.reset();
      setTimeout(function () { if (success) success.hidden = true; }, 6000);
    });

    form.querySelectorAll("input, select").forEach(function (f) {
      f.addEventListener("input", function () { setError(f, ""); });
      f.addEventListener("change", function () { setError(f, ""); });
    });
  }

  /* ===== Current year (Jalali approx) ===== */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    var jYear = new Date().getFullYear() - 621; // approximate Gregorian -> Jalali
    yearEl.textContent = toPersian(jYear);
  }
})();
