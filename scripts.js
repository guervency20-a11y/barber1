// scroll:
window.addEventListener('scroll', function () {
  const header = document.querySelector('.encabezado');
  const scrollY = window.scrollY;

  if (scrollY > 300) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// menu:
const botonMenu = document.getElementById('boton-menu');
const menuLateral = document.getElementById('menuLateral');
const fondoOscuro = document.getElementById('fondoOscuro');

function alternarMenu() {
  const activo = menuLateral.classList.toggle('activo');
  fondoOscuro.classList.toggle('activo', activo);
}

botonMenu.addEventListener('click', alternarMenu);
fondoOscuro.addEventListener('click', alternarMenu);

menuLateral.querySelectorAll('a').forEach(enlace => {
  enlace.addEventListener('click', () => {
    menuLateral.classList.remove('activo');
    fondoOscuro.classList.remove('activo');
  });
});

// Galería (solo Splide)
document.addEventListener('DOMContentLoaded', function() {
  // Galería principal
  var principal = new Splide('#carrusel-principal', {
    type: 'loop',
    pagination: false,
    arrows: false,
    cover: true,
    lazyLoad: 'nearby',
    autoplay: false,
    heightRatio: 1,
    interval: 4000,
    breakpoints: {
      768: { heightRatio: 0.8 }
    }
  });

  // Miniaturas (también en loop)
  var miniaturas = new Splide('#carrusel-miniaturas', {
    type: 'loop',          // 👈 antes no lo tenías
    fixedWidth: 100,
    fixedHeight: 90,
    gap: 12,
    pagination: false,
    isNavigation: true,
    cover: true,
    focus: 'center',
    rewind: false,         // 👈 que no se corte
    breakpoints: {
      768: { fixedWidth: 60, fixedHeight: 60 }
    }
  });

  principal.sync(miniaturas);
  principal.mount();
  miniaturas.mount();

  // Flechas personalizadas arriba
  document.querySelector('.flecha-prev').addEventListener('click', () => principal.go('-1'));
  document.querySelector('.flecha-next').addEventListener('click', () => principal.go('+1'));
});

