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
  return input;
}

const capitalize = (input) => {
  const stringInput = String(input);
  return stringInput.charAt(0).toUpperCase() + stringInput.slice(1);
};

const humanWins = (humanChoice, computerChoice) => {
  return (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"
  );
};

function declareWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    console.log("Human wins!");
  } else if (humanScore < computerScore) {
    console.log("Computer wins!");
  } else {
    console.log("Tie!");
  }
}

function playGame() {
  let humanScore = 0, computerScore = 0;

  const buttonGroup = document.querySelectorAll("button");

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (!isValidChoice(humanChoice)) {
      console.log("Invalid choice!");
      return;
    }
    const humanOutput = capitalize(humanChoice);
    const computerOutput = capitalize(computerChoice);
    if (humanChoice === computerChoice) {
      console.log("It's a draw!");
    } else if (humanWins(humanChoice, computerChoice)) {
      console.log(`You win! ${humanOutput} beats ${computerOutput}.`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerOutput} beats ${humanOutput}.`);
      computerScore++;
    }
    console.log(`Human: ${humanScore}.\nComputer: ${computerScore}`);
  }

  buttonGroup.forEach((button) => {
    const playerSelection = button.id;
    button.addEventListener("click", () => {
      playRound(playerSelection, getComputerChoice())
    });
  });

  declareWinner(humanScore, computerScore);
}

playGame();
