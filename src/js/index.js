import _ from "lodash";

// DOM
const [firstPlayerCard, secondPlayerCard] = document.querySelectorAll(".card");
const startButton = document.querySelector(".start-button");
const pickerButton = document.querySelector(".picker-button");
const pickedNumber = document.querySelector(".picked-number");

// Variables
let allNumbers = _.shuffle(_.range(1, 90, 1));

// Functions
const startGame = () => {
  cleanGame();
  generateCardContent(firstPlayerCard);
  generateCardContent(secondPlayerCard);
};
const generateCardContent = (player) => {
  const playerNumbers = _.shuffle(allNumbers).slice(0, 15);
  playerNumbers.forEach((number) => {
    const numberCard = document.createElement("div");
    numberCard.textContent = number;
    numberCard.classList.add("number");
    player.appendChild(numberCard);
  });
};
const pickNumber = () => {
  const number = allNumbers.pop();
  pickedNumber.textContent = number;
  updateCard(firstPlayerCard, number);
  updateCard(secondPlayerCard, number);
  checkGameStatus();
};
const updateCard = (card, number) => {
  const allCardNumbers = card.childNodes;
  allCardNumbers.forEach((child) => {
    if (child.textContent === number.toString()) {
      child.classList.add("line-through");
    }
  });
};
const checkGameStatus = () => {
  const allNumbers = [...document.querySelectorAll(".card .number")];
  const firstPlayerNumbers = allNumbers.slice(0, (allNumbers.length / 2) - 1);
  const secondPlayerNumbers = allNumbers.slice(allNumbers.length / 2);
  const firstCrossedOutNumbers = firstPlayerNumbers.every((child) => child.classList.contains("line-through"));
  const secondCrossedOutNumbers = secondPlayerNumbers.every((child) => child.classList.contains("line-through"));
  const bingoResults = {
    "¡Empate!": firstCrossedOutNumbers && secondCrossedOutNumbers,
    "¡Gana Player 1!": firstCrossedOutNumbers && !secondCrossedOutNumbers,
    "¡Gana CPU!": !firstCrossedOutNumbers && secondCrossedOutNumbers,
  };
  const bingoResultsKeys = Object.keys(bingoResults);
  const bingoResultValues = Object.values(bingoResults);
  bingoResultValues.forEach((result, index) => {
    if (result) setGameMessage(bingoResultsKeys[index]);
  });
};
const setGameMessage = (message) => {
  if (message !== "") {
    alert(message);
    pickerButton.disabled = true;
  }
};
const cleanGame = () => {
  const numbers = document.querySelectorAll(".number");
  allNumbers = _.shuffle(_.range(1, 90, 1));
  pickedNumber.textContent = "";
  numbers.forEach((number) => number.remove());
  pickerButton.disabled = !pickerButton.disabled;
  setGameMessage("");
};

// Event handlers
startButton.addEventListener("click", () => startGame());
pickerButton.addEventListener("click", () => pickNumber());
