function gameController() {
  // game object
  const game = {
    board: "",
    turn: "",
    winner: "",
    x: "",
    o: "",

    // Supporting Functions
    cleanGame: function () {
      this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      this.turn = "x";
      this.winner = undefined;
      this.x = undefined;
      this.o = undefined;
    },

    setPlayers: function (x, o) {
      this.x = x;
      this.o = o;
    },

    setTurn: function (newTurn) {
      this.turn = newTurn;
    },
    setPlay: function (index) {
      this.board[index] = this.turn;
    },
    setWinner: function (winner) {
      this.winner = winner;
    },
    getBoard: function () {
      return this.board;
    },
    getWinner: function () {
      return this.winner;
    },
    getTurn: function () {
      return this.turn;
    },
    getPlayerName: function (turn) {
      if (turn === "o") {
        return this.o;
      } else {
        return this.x;
      }
    },
  };

  function flipGameTurn() {
    if (game.getTurn() === "x") {
      game.setTurn("o");
    } else {
      game.setTurn("x");
    }
  }

  function setButton(btnNumber) {
    // Assumes that button is not filled. Client won't allow checking
    // of checked box
    game.setPlay(btnNumber - 1);
    flipGameTurn();
  }

  function isGameWon() {
    // if game.winner is !undefined then there is a winner
    if (game.getWinner()) {
      return true;
    } else {
      return false;
    }
  }

  function getGameWinner() {
    if (isGameWon()) {
      // There is a winner.
      return game.getWinner();
    }
  }

  function getBoard() {
    return game.getBoard();
  }

  function setWinner(winnerTurn) {
    return game.setWinner(winnerTurn);
  }

  function resetGame() {
    return game.cleanGame();
  }

  function getTurn() {
    return game.getTurn();
  }

  function setPlayers(x, o) {
    return game.setPlayers(x, o);
  }

  function getPlayerName(turn) {
    return game.getPlayerName(turn);
  }

  return {
    isGameWon,
    getGameWinner,
    getBoard,
    setButton,
    setWinner,
    resetGame,
    getTurn,
    setPlayers,
    getPlayerName,
  };
}

const game = gameController();
game.resetGame(); // Initialise game

function getBoard() {
  return game.getBoard();
}

function isGameWon() {
  return game.isGameWon();
}

function resetGame() {
  return game.resetGame();
}

function getTurn() {
  return game.getTurn();
}

function getGameWinner() {
  return game.getGameWinner();
}

// checks win and updates winner in game
function checkWin() {
  const board = getBoard();

  if (board[0] === board[1] && board[1] === board[2]) {
    game.setWinner(board[0]);
  } else if (board[3] === board[4] && board[4] === board[5]) {
    game.setWinner(board[3]);
  } else if (board[6] === board[7] && board[7] === board[8]) {
    game.setWinner(board[6]);
  } else if (board[0] === board[3] && board[3] === board[6]) {
    game.setWinner(board[0]);
  } else if (board[1] === board[4] && board[4] === board[7]) {
    game.setWinner(board[1]);
  } else if (board[2] === board[5] && board[5] === board[8]) {
    game.setWinner(board[2]);
  } else if (board[0] === board[4] && board[4] === board[8]) {
    game.setWinner(board[0]);
  } else if (board[2] === board[4] && board[4] === board[6]) {
    game.setWinner(board[2]);
  }
}

function setPlayers(x, o) {
  return game.setPlayers(x, o);
}

function getPlayerName(turn) {
  return game.getPlayerName(turn);
}

export default function btnReceiver(btnNumber) {
  // update board;
  game.setButton(btnNumber);
  checkWin();
}

export {
  getBoard,
  isGameWon,
  resetGame,
  getTurn,
  getGameWinner,
  setPlayers,
  getPlayerName,
};
