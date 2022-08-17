//Andrew Felty
//8/10/22
//Odin Project Javascript rps

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

function game() {
    let score = [0,0];
    let computerChoice;
    let userChoice;

    let compChar;

    for (let i = 0; i <5; i++) {
        computerChoice = getComputerChoice();
        userChoice = prompt();
        
        if (playRockPaperScissors(userChoice, computerChoice).substring(4,5) == "W") {
            score[0] = score[0] + 1; 
        } else if(playRockPaperScissors(userChoice, computerChoice).substring(4,5) == "L") {
            score[1] = score[1] + 1;
        }
    }

    if (score[0]>score[1]) {
        console.log("You Win!");
    } else if (score[0] < score[1]) {
        console.log("You Lose!");
    } else {
        console.log("Draw!");
    }
}


game();