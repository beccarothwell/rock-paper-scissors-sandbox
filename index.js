const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors", "lizard", "spock"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === "scissors" && (moveTwo === "paper" || moveTwo === "lizard")) ||
    (moveOne === "rock" && (moveTwo === "scissors" || moveTwo === "lizard")) ||
    (moveOne === "paper" && (moveTwo === "rock" || moveTwo === "spock")) ||
    (moveOne === "lizard" && (moveTwo === "paper" || moveTwo === "spock")) ||
    (moveOne === "spock" && (moveTwo === "scissors" || moveTwo === "rock"))
  ) {
    return "Player One wins!";
  }

  return "Player Two wins!";
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById("outcome")) {
    const outcome = document.body.lastChild;
    document.body.removeChild(outcome);
  }
};

const playGame = () => {
  resetGame();
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  updateDOM(playerOneMove, playerTwoMove, outcome);
};

const updateDOM = (moveOne, moveTwo, outcome) => {
  // TODO Implement this method to update the DOM
  // There are some images you can use in the images directory

  const playerOneImg = document.getElementById("player-one-move__img");
  const playerOneName = document.getElementById("player-one-move__name");
  const playerTwoImg = document.getElementById("player-two-move__img");
  const playerTwoName = document.getElementById("player-two-move__name");

  let outcomeEl = document.querySelector(".outcome");
  if (!outcomeEl) {
    outcomeEl = document.createElement("p");
    outcomeEl.classList.add("outcome");
    document.querySelector(".container").append(outcomeEl);
  }
  outcomeEl.innerHTML = outcome;

  playerOneImg.src = `images/${moveOne}.jpg`;
  playerOneName.innerHTML = `${moveOne}`;
  playerTwoImg.src = `images/${moveTwo}.jpg`;
  playerTwoName.innerHTML = `${moveTwo}`;
};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);
