function getComputerChoice() {
  let randomNumber = 0;
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else if (randomNumber === 2) {
    return "Scissors";
  } else {
    return "Something Wrong";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Pick Rock or Paper or Scissors");
  return userChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    let human = humanChoice.toUpperCase();
    let computer = computerChoice.toUpperCase();

    if (human === computer) {
      console.log(
        `Draw! You chose ${human} & the computer also chose ${computer}`
      );
    } else if (human === "ROCK" && computer === "PAPER") {
      console.log(`You Lose! ${computer} beats ${human}`);
      computerScore++;
    } else if (human === "PAPER" && computer === "SCISSORS") {
      console.log(`You Lose! ${computer} beats ${human}`);
      computerScore++;
    } else if (human === "SCISSORS" && computer === "ROCK") {
      console.log(`You Lose! ${computer} beats ${human}`);
      computerScore++;
    } else if (computer === "ROCK" && human === "PAPER") {
      console.log(`You Win! ${human} beats ${computer}`);
      humanScore++;
    } else if (computer === "PAPER" && human === "SCISSORS") {
      console.log(`You Win! ${human} beats ${computer}`);
      humanScore++;
    } else if (computer === "SCISSORS" && human === "ROCK") {
      console.log(`You Win! ${human} beats ${computer}`);
      humanScore++;
    } else {
      console.log(`You chose ${human} and it is wrong.`);
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
  console.log(humanScore, computerScore);
}

playGame();
