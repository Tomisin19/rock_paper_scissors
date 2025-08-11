function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function getHumanChoice() {
  const humanInput = prompt("Rock, Paper, scissors ?");
  return humanInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("You lose! Paper beats Rock.");
    console.log(`Scores: You ${humanScore} computer ${computerScore}`);
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log("You lose! Scissors beats Paper.");
    console.log(`Scores: You ${humanScore} computer ${computerScore}`);
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("You lose! Rock beats Scissors.");
    console.log(`Scores: You ${humanScore} computer ${computerScore}`);
  } else if (humanChoice === computerChoice) {
    console.log("Its a draw!");
    console.log(`Scores: You ${humanScore} computer ${computerScore}`);
  } else {
    humanScore++;
    console.log("You win the round!");
    console.log(`Scores: You ${humanScore} computer ${computerScore}`);
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("Congrats! You won the game!");
  } else if (humanScore < computerScore) {
    console.log("You lost the game. Better luck next time!");
  } else {
    console.log("The game ended in a draw!");
  }
}

playGame();
