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

console.log(getComputerChoice());

function getHumanChoice() {
  const input = prompt("Enter yout choice of rock, paper, or scissors: ") ?? "";
  // The function assumes the input will always be valid for now.
  return input.toLowerCase();
}

console.log(getHumanChoice());
