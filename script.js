let humanScore = 0, computerScore = 0;

function getComputerChoice() {
  const choiceNumber = Math.ceil(3 * Math.random());
  switch (choiceNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

const isValidChoice = (choice) => choice === "rock" || choice === "paper" || choice === "scissors";

function getHumanChoice() {
  const input = prompt("Enter yout choice of rock, paper, or scissors: ") ?? "";
  return input.toLowerCase();
}

const capitalize = (input) => {
  const stringInput = String(input);
  return stringInput.charAt(0).toUpperCase() + stringInput.slice(1);
}

const humanWins = (humanChoice, computerChoice) => {
  return (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"
  );
};

function playRound(humanChoice, computerChoice) {
  if (!isValidChoice(humanChoice)) {
    console.log("Invalid choice!");
    return;
  }
  const humanOutput = capitalize(humanChoice);
  const computerOutput = capitalize(computerChoice);
  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
    return;
  } else if (humanWins(humanChoice, computerChoice)) {
    console.log(`You win! ${humanOutput} beats ${computerOutput}.`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerOutput} beats ${humanOutput}.`);
    computerScore++;
  }
  console.log(`Human: ${humanScore}.\nComputer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

