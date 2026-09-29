/*
  Carrusel de la Sección de Equipos · OFTALMOLOGIA · LeaseForU
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

  btnPrev.addEventListener('click', function() {
    var maxScroll = grid.scrollWidth - grid.clientWidth;
    if (grid.scrollLeft <= 2) {
      grid.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      grid.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
    }
  });
  btnNext.addEventListener('click', function() {
    var maxScroll = grid.scrollWidth - grid.clientWidth;
    if (grid.scrollLeft >= maxScroll - 2) {
      grid.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      grid.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
    }
  });
})();
