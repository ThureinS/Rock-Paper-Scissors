const body = document.querySelector("body");

let result = document.createElement("div");
body.append(result);

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    let human = humanChoice.toUpperCase();
    let computer = computerChoice.toUpperCase();

    if (human === computer) {
      result.innerText = `Draw! You chose ${human} & the computer also chose ${computer}`;
    } else if (human === "ROCK" && computer === "PAPER") {
      result.innerText = `You Lose! ${computer} beats ${human}`;
      computerScore++;
    } else if (human === "PAPER" && computer === "SCISSORS") {
      result.innerText = `You Lose! ${computer} beats ${human}`;
      computerScore++;
    } else if (human === "SCISSORS" && computer === "ROCK") {
      result.innerText = `You Lose! ${computer} beats ${human}`;
      computerScore++;
    } else if (computer === "ROCK" && human === "PAPER") {
      result.innerText = `You Win! ${human} beats ${computer}`;
      humanScore++;
    } else if (computer === "PAPER" && human === "SCISSORS") {
      result.innerText = `You Win! ${human} beats ${computer}`;
      humanScore++;
    } else if (computer === "SCISSORS" && human === "ROCK") {
      result.innerText = `You Win! ${human} beats ${computer}`;
      humanScore++;
    } else {
      result.innerText = `You chose ${human} and it is wrong.`;
    }
    if (humanScore === 5) {
      scoreBoard.innerText = `You Win with a score of 5`;
      return;
    } else if (computerScore === 5) {
      scoreBoard.innerText = `Computer Win with a score of 5`;
      return;
    }
    scoreBoard.innerText = `Your Score: ${humanScore}  Computer Score: ${computerScore}`;
  }

  function handlePlayerChoice(humanChoice) {
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(humanChoice);
  }

  const btnRock = document.createElement("button");
  const btnPaper = document.createElement("button");
  const btnScissor = document.createElement("button");

  btnRock.innerText = "Rock";
  btnPaper.innerText = "Paper";
  btnScissor.innerText = "Scissor";

  btnRock.addEventListener("click", () => handlePlayerChoice("ROCK"));
  btnPaper.addEventListener("click", () => handlePlayerChoice("PAPER"));
  btnScissor.addEventListener("click", () => handlePlayerChoice("SCISSORS"));

  const scoreBoard = document.createElement("div");

  body.append(scoreBoard, btnRock, btnPaper, btnScissor);
}

playGame();
