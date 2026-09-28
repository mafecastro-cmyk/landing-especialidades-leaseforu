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
