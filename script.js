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

function playGame() {
  let humanScore = 0, computerScore = 0;
  let round = 1;

  const buttonGroup = document.querySelectorAll("button");

  const roundDisplay = document.querySelector("#round-display");
  roundDisplay.textContent = `Round ${round}`;

  const results = document.querySelector("#results");

  const scores = document.createElement("p");
  scores.setAttribute("id", "scores");
  scores.innerText = `Human: ${humanScore}.\nComputer: ${computerScore}.`;
  results.appendChild(scores);

  const message = document.createElement("p");
  message.setAttribute("id", "message");
  results.appendChild(message);

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (!isValidChoice(humanChoice)) {
      console.log("Invalid choice!");
      message.innerText = "Invalid choice!"
      return;
    }
    const humanOutput = capitalize(humanChoice);
    const computerOutput = capitalize(computerChoice);
    if (humanChoice === computerChoice) {
      message.innerText = "It's a draw!";
    } else if (humanWins(humanChoice, computerChoice)) {
      message.innerText = `You win! ${humanOutput} beats ${computerOutput}.`;
      humanScore++;
    } else {
      message.innerText = `You lose! ${computerOutput} beats ${humanOutput}.`;
      computerScore++;
    }
    scores.innerText = `Human: ${humanScore}.\nComputer: ${computerScore}.`;
    round++;
    roundDisplay.textContent = `Round ${round}`;
  }

  function declareWinner(humanScore, computerScore) {
    const finalResult = document.createElement("p");

    if (humanScore > computerScore) {
      finalResult.innerText = "Human wins!";
    } else if (humanScore < computerScore) {
      finalResult.innerText = "Computer wins!";
    } else {
      finalResult.innerText = "Tie!";
    }

    results.appendChild(finalResult);
  }

  buttonGroup.forEach((button) => {
    const playerSelection = button.id;
    button.addEventListener("click", () => {
      playRound(playerSelection, getComputerChoice());

      if (round > 5) {
        roundDisplay.textContent = "Game Over";
        declareWinner(humanScore, computerScore);
        buttonGroup.forEach((button) => {
          button.setAttribute("disabled", true);
        });
      }
    });
  });
}

playGame();
