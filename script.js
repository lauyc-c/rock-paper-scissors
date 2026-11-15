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