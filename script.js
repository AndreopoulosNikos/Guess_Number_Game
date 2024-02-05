"use strict";
document.querySelector(".check").onclick = checkNumber;
document.querySelector(".again").onclick = reset;

const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const message = document.querySelector(".message");
const background = document.querySelector("body").style;
const hiddenNumber = document.querySelector(".number");

let guessNumber;
guessNumber = reset();

function checkNumber() {
  const guessValue = document.querySelector(".guess").value;
  if (guessValue != guessNumber) {
    if (score.innerHTML == 1) {
      score.innerHTML = 0;
      message.innerHTML = "You lost :(";
      background.backgroundColor = "#ee0707";
      hiddenNumber.innerHTML = guessNumber;
      setTimeout(reset, 2000);
    } else if (guessValue > guessNumber) {
      score.innerHTML--;
      message.innerHTML = "Too high";
    } else if (guessValue < guessNumber) {
      score.innerHTML--;
      message.innerHTML = "Too low";
    }
  } else {
    message.innerHTML = "Correct Number!";
    background.backgroundColor = "#60b347";
    hiddenNumber.innerHTML = guessNumber;
    if (Number(highscore.innerHTML) < Number(score.innerHTML)) {
      highscore.innerHTML = score.innerHTML;
    }
    setTimeout(reset, 2000);
  }
}

// Reset game when we press again
function reset() {
  guessNumber = Math.floor(Math.random() * 20) + 1;
  score.innerHTML = 20;
  hiddenNumber.innerHTML = "?";
  background.backgroundColor = "#222";
  message.innerHTML = "Start guessing...";
  return guessNumber;
}
