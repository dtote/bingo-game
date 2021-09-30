import { _ } from "lodash";
const allNumbers = _.range(1, 90, 1);
const firstPlayerCard = document.querySelectorAll(".card")[0];
const secondPlayerCard = document.querySelectorAll(".card")[1];
const startButton = document.querySelector(".start-button");
const pickerButton = document.querySelector(".picker-button");

const startGame = () => {
  startButton.classList.toggle("hidden");
  pickerButton.classList.toggle("hidden");
  generateCardContent(firstPlayerCard);
  generateCardContent(secondPlayerCard);
};
const generateCardContent = (player) => {
  const playerNumbers = _.shuffle(allNumbers).slice(0, 15);
  playerNumbers.forEach((number) => {
    const numberCard = document.createElement("div");
    numberCard.textContent = number;
    player.appendChild(numberCard);
  });
};

startButton.addEventListener("click", () => startGame());
