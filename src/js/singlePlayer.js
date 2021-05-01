import btnReceiver, {
  getBoard,
  isGameWon,
  resetGame,
  getTurn,
  getGameWinner,
  getPlayerName,
  setPlayers,
} from "./server.js";
import { playerOName, playerXName } from "./index.js";

const modal = document.querySelector(".pop-up");
const buttons = Array.from(document.querySelectorAll(".board"));
const resetBtn = document.querySelector(".resetBtn");
const popResetBtn = document.querySelector(".popResetBtn");

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText;
    if (Number(value)) {
      btnReceiver(e.target.innerText);
      updateUI(); // Need to call that board function
    }
  });
});

const gameReset = () => {
  resetGame();
  console.log("reset", playerOName);
  setPlayers(playerXName, playerOName);
  buttons.map((btn) => {
    btn.disabled = false;
  });
  updateUI();
};

resetBtn.addEventListener("click", () => {
  gameReset();
  modal.classList.add("hidden");
});

popResetBtn.addEventListener("click", () => {
  gameReset();
  modal.classList.add("hidden");
});

function disablePlay() {
  buttons.map((button) => {
    button.disabled = true;
  });

  modal.classList.remove("hidden");
}

function updateUI() {
  const winner = document.querySelector(".winner>span");
  const turn = document.querySelector(".turn>span");
  const board = getBoard();

  for (let i = 0, len = buttons.length; i < len; i++) {
    buttons[i].innerText = board[i];
  }

  if (isGameWon()) {
    // kill play
    disablePlay();
    winner.innerText = getGameWinner();
  } else {
    turn.innerText = getPlayerName(getTurn());
    winner.innerText = "-";
    modal.classList.add("hidden");
  }
}
