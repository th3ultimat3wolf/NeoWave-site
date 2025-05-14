//Scroll automático de avaliações
const carousel = document.querySelector('.avaliacoes-carousel');
let scrollAmount = 0;

setInterval(() => {
  if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
    scrollAmount = 0;
  } else {
    scrollAmount += 260;
  }
  carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}, 3000);
