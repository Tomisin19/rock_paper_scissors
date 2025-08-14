function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function updateScoreDisplay() {
  document.getElementById("yourScore").textContent = `You: ${humanScore}`;
  document.getElementById(
    "computerScore"
  ).textContent = `Computer: ${computerScore}`;
}
const results = document.getElementById("results");

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (gameOver) return;
  let pResult = document.createElement("P");
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    pResult.textContent = "You lose! Paper beats Rock.";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    pResult.textContent = "You lose! Scissors beats Paper.";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    pResult.textContent = "You lose! Rock beats Scissors.";
  } else if (humanChoice === computerChoice) {
    pResult.textContent = "Its a draw!";
  } else {
    humanScore++;
    pResult.textContent = "You win the round!";
  }
  updateScoreDisplay();
  results.appendChild(pResult);

  if (humanScore === 5) {
    pResult.textContent = "You won the game!";
    gameOver = true;
    let restart = document.createElement("BUTTON");
    restart.textContent = "Restart Game";
    restart.addEventListener("click", restartGame);
    results.appendChild(restart);
  } else if (computerScore === 5) {
    pResult.textContent = "The computer wins. You lost the game :(";
    gameOver = true;
    let restart = document.createElement("BUTTON");
    restart.textContent = "Restart Game";
    restart.addEventListener("click", restartGame);
    results.appendChild(restart);
  }
}

document.querySelectorAll(".choice-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.textContent.toLowerCase();
    playRound(humanChoice, getComputerChoice());
  });
});

function restartGame() {
  humanScore = 0;
  computerScore = 0;
  gameOver = false;
  results.textContent = "";
  updateScoreDisplay();
}
