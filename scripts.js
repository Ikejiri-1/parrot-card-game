function flipCard() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("flipped");
    });
  });
}
window.onload = flipCard;
