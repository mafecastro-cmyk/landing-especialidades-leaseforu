// ========== HEADER SHADOW ON SCROLL ==========
window.addEventListener('scroll', function() {
  var h = document.querySelector('.header');
  if (h) h.style.boxShadow = window.scrollY > 10 ? '0 2px 16px rgba(0,0,0,0.06)' : 'none';
});

// ========== HAMBURGER MENU ==========
var ham = document.getElementById('hamburger');
if (ham) {
  ham.addEventListener('click', function() {
    var nav = document.getElementById('nav');
    if (nav) nav.classList.toggle('open');
  });
}
document.querySelectorAll('.nav-links a').forEach(function(a) {
  a.addEventListener('click', function() {
    var nav = document.getElementById('nav');
    if (nav) nav.classList.remove('open');
  });
});

// ========== FAQ ACCORDION (altura calculada) ==========
document.querySelectorAll('.faq-q').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var item = btn.parentElement;
    var wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(function(i) {
      i.classList.remove('open');
      var a = i.querySelector('.faq-a');
      if (a) a.style.maxHeight = null;
    });
    if (!wasOpen) {
      item.classList.add('open');
      var panel = item.querySelector('.faq-a');
      if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});
window.addEventListener('resize', function() {
  var openPanel = document.querySelector('.faq-item.open .faq-a');
  if (openPanel) openPanel.style.maxHeight = openPanel.scrollHeight + 'px';
});

// ========== ANIMATED COUNTERS ==========
function animateCounters() {
  var counters = document.querySelectorAll('.count');
  counters.forEach(function(el) {
    var target = parseInt(el.dataset.target);
    var prefix = el.dataset.prefix || '';
    var useComma = el.dataset.format === 'comma';
    var duration = 2000;
    var start = performance.now();
    function update(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(eased * target);
      var formatted = useComma ? current.toLocaleString('en-US') : current.toString();
      el.textContent = prefix + formatted;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

var statsBar = document.querySelector('.stats-bar');
if (statsBar) {
  var statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateCounters();
        statsObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });
  statsObserver.observe(statsBar);
}

// ========== VIDEO TESTIMONIAL MODAL ==========
var modal = document.getElementById('videoModal');
var modalVideo = document.getElementById('modalVideo');
if (modal && modalVideo) {
  document.querySelectorAll('.testi-img').forEach(function(img) {
    var vid = img.querySelector('video');
    if (!vid) return;
    img.addEventListener('click', function() {
      var src = vid.querySelector('source').src;
      modalVideo.querySelector('source').src = src;
      modalVideo.load();
      modal.classList.add('active');
      modalVideo.play();
    });
  });
  function closeModal() {
    modal.classList.remove('active');
    modalVideo.pause();
    modalVideo.currentTime = 0;
  }
  var closeBtn = document.getElementById('modalClose');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });
}


// ========== SUBMIT DEMO -> THANK YOU PAGE ==========
var btnSubmit = document.getElementById('btnSubmit');
if (btnSubmit) {
  btnSubmit.addEventListener('click', function() {
    window.location.href = '/lp-gracias-ginecologia';
  });
}
