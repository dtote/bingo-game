import { _ } from "lodash";
let allNumbers = _.shuffle(_.range(1, 90, 1));
const firstPlayerCard = document.querySelectorAll(".card")[0];
const secondPlayerCard = document.querySelectorAll(".card")[1];
const startButton = document.querySelector(".start-button");
const pickerButton = document.querySelector(".picker-button");
const pickedNumber = document.querySelector(".picked-number");
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
};
const cleanGame = () => {
  const numbers = document.querySelectorAll(".number");
  allNumbers = _.shuffle(_.range(1, 90, 1));
  pickedNumber.textContent = "";
  numbers.forEach((number) => number.remove());
};
startButton.addEventListener("click", () => startGame());
pickerButton.addEventListener("click", () => pickNumber());
