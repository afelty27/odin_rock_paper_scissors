//Andrew Felty
//8/10/22
//Odin Project Javascript rps

//gets random computer choice
//returns string containing name of choice
function getComputerChoice() {
    let returnNum = Math.floor(Math.random()*3);
    
    switch(returnNum) {
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
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1, playerSelection.length).toLowerCase();
    if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playRockPaperScissors == "Scissors" && computerSelection == "Paper")) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        return "Draw!";
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

//plays game and keeps track of score
function game() {
    let score = [0,0];
    let computerChoice = getComputerChoice();
    let userChoice = document.querySelector("input");

    let resultString = playRockPaperScissors(userChoice, computerChoice);

    
    score = updateScore(resultString, score);
    
}

function displayWinner(arr) {
    if (arr[0]>arr[1]) {
        console.log("You Win!");
    } else if (arr[0] < arr[1]) {
        console.log("You Lose!");
    } else {
        console.log("Draw!");
    }
}

function updateScore(resString, arr) {
    if (resString.substring(4,5) == "W") {
        arr[0] = arr[0] + 1; 
    } else if(resString.substring(4,5) == "L") {
        arr[1] = arr[1] + 1;
    }
    return arr;
}


//
//const choiceBtn = Array.from(document.querySelectorAll(".choiceBtn"));
const choiceBtns = Array.from(document.querySelectorAll('button'));
console.log(choiceBtns);
//choiceBtn.forEach(item => item.addEventListener('click', alert("Hello")));

