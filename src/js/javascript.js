//Andrew Felty
//8/10/22
//Odin Project Javascript rps

let score = [0, 0];
const choiceBtns = Array.from(document.querySelectorAll("button"));
console.log(choiceBtns);
let scoreDiv = Array.from(document.querySelector(".displayresult"));
console.log(scoreDiv);

//when button clicked, run game
choiceBtns.forEach((element) => {
  element.addEventListener("click", function (event) {
    game(element.id, score);
  });
});

//gets random computer choice
//returns string containing name of choice
function getComputerChoice() {
  let returnNum = Math.floor(Math.random() * 3);

  switch (returnNum) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
  }
}

//takes player selection and computer selection to return game result
function playRockPaperScissors(playerSelection, computerSelection) {
  playerSelection =
    playerSelection[0].toUpperCase() +
    playerSelection.slice(1, playerSelection.length).toLowerCase();
  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playRockPaperScissors == "Scissors" && computerSelection == "Paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return "Draw!";
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

//plays game and keeps track of score
//input is string containing user choice
function game(userChoice, scoreArr) {
  console.log("PLAYED");
  let computerChoice = getComputerChoice();
  let resultString = playRockPaperScissors(userChoice, computerChoice);
  scoreArr = updateScore(resultString, score);

  //now change div displaying score
}

//displays winner to console at end of game
function displayWinner(arr) {
  if (arr[0] > arr[1]) {
    console.log("You Win!");
  } else if (arr[0] < arr[1]) {
    console.log("You Lose!");
  } else {
    console.log("Draw!");
  }
}

//changes score tracker based on result
//takes result string and score array
//returns updated score array
function updateScore(resString, arr) {
  if (resString.substring(4, 5) == "W") {
    arr[0] = arr[0] + 1;
  } else if (resString.substring(4, 5) == "L") {
    arr[1] = arr[1] + 1;
  }
  return arr;
}

//
//const choiceBtn = Array.from(document.querySelectorAll(".choiceBtn"));

//choiceBtn.forEach(item => item.addEventListener('click', alert("Hello")));
