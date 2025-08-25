// Animação de Scroll para os Cards
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target); // Desconecta após animar
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".image-card").forEach((card) => {
  observer.observe(card);
});