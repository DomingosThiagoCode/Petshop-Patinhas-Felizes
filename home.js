let slideIndex = 0;

function showSlides() {
  let slides = [
    document.getElementById("slide-1"),
    document.getElementById("slide-2"),
    document.getElementById("slide-3"),
    document.getElementById("slide-4")
  ];

  // Esconde todos
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Avança índice
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Mostra o slide atual
  slides[slideIndex - 1].style.display = "block";

  // Chama novamente depois de 2 segundos
  setTimeout(showSlides, 2000);
}

// Inicia o carrossel
showSlides();
