/*
  Carrusel de la Sección de Equipos · CARDIOLOGIA · LeaseForU
  Requiere HTML con .equipos-carousel > .equipos-grid + .carousel-btn-prev/next
  Vanilla JS, sin dependencias.
*/

(function() {
  var carousel = document.querySelector('.equipos-carousel');
  if (!carousel) return;
  var grid = carousel.querySelector('.equipos-grid');
  var btnPrev = carousel.querySelector('.carousel-btn-prev');
  var btnNext = carousel.querySelector('.carousel-btn-next');
  if (!grid || !btnPrev || !btnNext) return;

  function getCardWidth() {
    var card = grid.querySelector('.eq-card');
    if (!card) return 260;
    var gap = parseFloat(window.getComputedStyle(grid).gap) || 16;
    return card.getBoundingClientRect().width + gap;
  }

  function updateButtons() {
    var max = grid.scrollWidth - grid.clientWidth - 2;
    btnPrev.disabled = grid.scrollLeft <= 2;
    btnNext.disabled = grid.scrollLeft >= max;
  }

  btnPrev.addEventListener('click', function() {
    grid.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
  });
  btnNext.addEventListener('click', function() {
    grid.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
  });
  grid.addEventListener('scroll', updateButtons);
  window.addEventListener('resize', updateButtons);
  updateButtons();
})();
