const cardsList = [
  "img/bobrossparrot.gif",
  "img/bobrossparrot.gif",
  "img/explodyparrot.gif",
  "img/explodyparrot.gif",
  "img/fiestaparrot.gif",
  "img/fiestaparrot.gif",
  "img/metalparrot.gif",
  "img/metalparrot.gif",
  "img/revertitparrot.gif",
  "img/revertitparrot.gif",
  "img/tripletsparrot.gif",
  "img/tripletsparrot.gif",
  "img/unicornparrot.gif",
  "img/unicornparrot.gif",
];

const gameList = [];
function randomCards() {
  return Math.random() - 0.5;
}
let cardNumber = 0;
let position = 0;

const cardsContainer = document.querySelector(".cards-container");
function createCards() {
  gameList.sort(randomCards);
  while (position < cardNumber) {
    let card = `<div class="card" onclick="flipCard(this)">
          <div class="back-face face">
            <img src="/${gameList[position]}" alt="" />
          </div>
          <div class="front-face face">
            <img src="img/back.png" alt="" />
          </div>`;

    cardsContainer.innerHTML += card;
    position++;
  }
}

function askforCards() {
  const numberOfCards = prompt("Com quantas cartas você quer jogar? 4 a 14!");
  cardNumber = Number(numberOfCards);
  if (cardNumber >= 4 && cardNumber <= 14 && cardNumber % 2 === 0) {
    for (let i = 0; i < cardNumber; i++) {
      gameList.push(cardsList[i]);
    }
    createCards();
  } else {
    alert(
      "Quantidade de cartas inválida, as quantidades válidas são: 4, 6, 8, 10, 12 e 14"
    );
    askforCards();
  }
  const grid = document.querySelector(".cards-container");
  const layoutColunas = {
    4: 2,
    6: 3,
    8: 4,
    10: 5,
    12: 4,
    14: 7,
  };
  grid.style.gridTemplateColumns = `repeat(${layoutColunas[cardNumber]}, 117px)`;
}
askforCards();

let rounds = 0;
let firstClick = null;
let secondClick = null;

function flipCard(clickedCard) {
  if (clickedCard.classList.contains("flipped") || secondClick) {
    return;
  }
  clickedCard.classList.add("flipped");
  if (!firstClick) {
    firstClick = clickedCard;
  } else {
    secondClick = clickedCard;
    rounds++;
    console.log(rounds);

    console.log(clickedCard);

    if (firstClick.innerHTML === secondClick.innerHTML) {
      keepCards();
    } else {
      resetCards();
    }
  }
  console.log(clickedCard);
}
function keepCards() {
  firstClick = null;
  secondClick = null;
}
function resetCards() {
  setTimeout(() => {
    firstClick.classList.remove("flipped");
    secondClick.classList.remove("flipped");
    firstClick = null;
    secondClick = null;
  }, 1000);
}
