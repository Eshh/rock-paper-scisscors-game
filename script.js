// Refs

const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const gameIcons = document.querySelectorAll(".far");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let computerChoice = "";
let playerScoreNo = 0;
let computerScoreNo = 0;

function updateScore(input) {
  let result = "";
  if (input == computerChoice) {
    resultText.textContent = "Its a TIE";
    return;
  }
  let defeats = choices[input.toLowerCase()].defeats;
  if (!defeats.includes(computerChoice)) {
    result = "You LOST!";
    computerScoreNo++;
    computerScoreEl.textContent = computerScoreNo;
  } else {
    result = "You WON!";
    playerScoreNo++;
    playerScoreEl.textContent = playerScoreNo;
  }
  resultText.textContent = result;
}
function resetAll() {
  computerScoreNo = 0;
  playerScoreNo = 0;
  computerScoreEl.textContent = computerScoreNo;
  playerScoreEl.textContent = playerScoreNo;
  playerChoiceEl.textContent = "";
  computerChoiceEl.textContent = "";
  resultText.textContent = "";
  resetSelection();
}

function resetSelection() {
  gameIcons.forEach((each) => each.classList.remove("selected"));
}
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) return "rock";
  if (computerChoiceNumber <= 0.4) return "paper";
  if (computerChoiceNumber <= 0.6) return "scissors";
  if (computerChoiceNumber <= 0.8) return "lizard";
  return "spock";
}
function computerSelect(input) {
  computerChoice = input;
  let text = "";
  switch (input) {
    case "rock":
      computerRock.classList.toggle("selected");
      text = "Rock";
      break;
    case "paper":
      computerPaper.classList.toggle("selected");
      text = "Paper";
      break;
    case "scissors":
      computerScissors.classList.toggle("selected");
      text = "Scissors";
      break;
    case "lizard":
      computerLizard.classList.toggle("selected");
      text = "Lizard";
      break;
    case "spock":
      computerSpock.classList.toggle("selected");
      text = "Spock";
      break;
    default:
      break;
  }
  computerChoiceEl.textContent = "--" + text;
}

function checkResult(input) {
  resetSelection();
  computerSelect(computerRandomChoice());
  updateScore(input);
}

function select(input) {
  checkResult(input);
  let text = "";
  switch (input) {
    case "rock":
      playerRock.classList.toggle("selected");
      text = "Rock";
      break;
    case "paper":
      playerPaper.classList.toggle("selected");
      text = "Paper";
      break;
    case "scissors":
      playerScissors.classList.toggle("selected");
      text = "Scissors";
      break;
    case "lizard":
      playerLizard.classList.toggle("selected");
      text = "Lizard";
      break;
    case "spock":
      playerSpock.classList.toggle("selected");
      text = "Spock";
      break;
    default:
      break;
  }
  playerChoiceEl.textContent = "--" + text;
}
