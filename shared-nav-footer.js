/* ═══════════════════════════════════════════════════════
   U4IA — Shared Navigation & Footer
   Single source of truth. Every page includes this file.
   ═══════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // ── NAV ──
  var navEl = document.getElementById('site-nav');
  if (navEl) {
    navEl.innerHTML =
      '<div class="nav-inner">' +
        '<a class="nav-logo" href="/">U4IA</a>' +
        '<div class="nav-links">' +
          '<a href="/#personas">Resources</a>' +
          '<a href="/#pricing">Pricing</a>' +
          '<a href="/blog">Blog</a>' +
          '<a class="btn btn-secondary" href="https://www.u4ia.ai/login" style="padding:10px 18px;font-size:.825rem">Log in</a>' +
          '<a class="btn btn-dark" href="https://cal.com/blake-williams-uzi88i/reverse-demo" data-cal-link="blake-williams-uzi88i/reverse-demo" data-cal-config=\'{"layout":"month_view"}\'>' +
            '<svg viewBox="0 0 24 24" style="width:16px;height:16px;stroke:currentColor;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' +
            'Meet the Founder<span class="btn-arrow"><svg viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span></a>' +
        '</div>' +
      '</div>';

    // Scroll shadow
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        navEl.classList.add('scrolled');
      } else {
        navEl.classList.remove('scrolled');
      }
    });
  }

  // ── FOOTER ──
  var footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.innerHTML =
      '<div class="container">' +
        '<div class="footer-top">' +
          '<div class="footer-logo">U4IA</div>' +
          '<div class="footer-compliance">' +
            '<span class="compliance-badge">\uD83D\uDD12 SOC 2 Aligned</span>' +
            '<span class="compliance-badge">\uD83D\uDD10 Encrypted at Rest</span>' +
            '<span class="compliance-badge">\uD83D\uDCCB GDPR Ready</span>' +
          '</div>' +
        '</div>' +
        '<p class="footer-text">\u00A9 2026 U4IA. Outcome-based acquisition infrastructure.</p>' +
        '<div class="footer-links">' +
          '<a href="/privacy">Privacy Policy</a>' +
          '<span class="footer-divider">\u00B7</span>' +
          '<a href="/terms">Terms of Service</a>' +
          '<span class="footer-divider">\u00B7</span>' +
          '<a href="/trust">Trust Center</a>' +
          '<span class="footer-divider">\u00B7</span>' +
          '<a href="/support">Support</a>' +
          '<span class="footer-divider">\u00B7</span>' +
          '<a href="/blog">Blog</a>' +
        '</div>' +
      '</div>';
  }
})();
