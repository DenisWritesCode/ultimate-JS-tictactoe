import btnReceiver, {
  getBoard,
  isGameWon,
  resetGame,
  getTurn,
  getGameWinner,
} from "./server.js";

const buttons = Array.from(document.querySelectorAll(".board"));
const resetBtn = document.querySelector(".resetBtn");
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText;
    if (Number(value)) {
      btnReceiver(e.target.innerText);
      updateUI(); // Need to call that board function
    }
  });
});

resetBtn.addEventListener("click", () => {
  resetGame();
  buttons.map((btn) => {
    btn.disabled = false;
  });
  updateUI();
});

function disablePlay() {
  buttons.map((button) => {
    button.disabled = true;
  });
}

const updateUI = () => {
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
    turn.innerText = getTurn();
    winner.innerText = "-";
  }
};

updateUI();
