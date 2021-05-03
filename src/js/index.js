import { setPlayers, getPlayerName } from "./server.js";

const intro = document.querySelector(".intro");
const names = document.querySelector(".names");
const game = document.querySelector(".game");
const popUp = document.querySelector(".pop-up");
export let playerXName;
export let playerOName;

// step by step
function oneDiv(divToShow) {
  const divs = [intro, names, game, popUp];

  divs.map((div) => {
    if (div === divToShow) {
      div.classList.remove("hidden");
    } else {
      div.classList.add("hidden");
    }
  });
}

// Choose Play Mode
function choosePlayMode() {
  oneDiv(intro);
}

function enterNames() {
  oneDiv(names);
}

function playGame() {
  oneDiv(game);
}

// gameFlow
// choosePlayMode();
playGame();

// Wait for button to be pressed
const singleP = document.querySelector(".singlePlayer");
const multiP = document.querySelector(".multiPlayer");

singleP.addEventListener("click", () => {
  const p = document.createElement("p");
  p.innerText = "Single player functionality is coming soon";
  p.classList.add("mt-4");
  p.classList.add("text-lg");
  p.classList.add("text-center");
  intro.appendChild(p);

  setTimeout(() => {
    intro.removeChild(p);
  }, 1000);
});

multiP.addEventListener("click", () => {
  const p = document.createElement("p");
  p.innerText = "Alright, Let both foes ready their horses!";
  p.classList.add("mt-4");
  p.classList.add("text-lg");
  p.classList.add("text-center");
  intro.appendChild(p);

  setTimeout(() => {
    enterNames();
  }, 1000);
});

// Take names
const form = document.querySelector("#players");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const pX = document.querySelector("#playerX").value;
  const pO = document.querySelector("#playerO").value;

  playerXName = pX;
  playerOName = pO;
  console.log("form", playerOName);

  setPlayers(playerXName, playerOName);
  const turn = document.querySelector(".turn>span");
  turn.innerText = getPlayerName("x");

  playGame();
});
