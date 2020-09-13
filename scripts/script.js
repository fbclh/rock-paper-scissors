// Plays 5 rounds of rock, paper and scissors
function game() {
  let playerScore = 0;
  let computerScore = 0;
  const totalRounds = 5;

  for (let i = 0; i < totalRounds; i++) {
    const playerSelection = userPlay();
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);

    playerScore = updateScore(roundResult, playerScore, "win");
    computerScore = updateScore(roundResult, computerScore, "lose");

    console.log(roundResult, "\n");
  }
  
  console.log(winner(playerScore, computerScore));
}

// Call function to start the game
game()

// Generates computer selection
function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
} 

// Gets user selection
function userPlay() {
  const input = prompt("Enter your selection: ");

  return input.toLowerCase();
}

// Plays single round
function playRound(playerSelection, computerSelection) {
  // Computer wins
  if ((playerSelection === "rock" && computerSelection === "paper") || 
     (playerSelection === "paper" && computerSelection === "scissors") ||
     (playerSelection === "scissors" && computerSelection === "rock")) {
       return `You lose, ${computerSelection} beats ${playerSelection}. :(`;
     }

  // Player wins
  else if ((playerSelection === "rock" && computerSelection === "scissors") || 
          (playerSelection === "paper" && computerSelection === "rock") ||
          (playerSelection === "scissors" && computerSelection === "paper")) {
       return `You win, ${playerSelection} beats ${computerSelection}. :)`;
     }

  // Tie
  else {
    return `It is a tie, you both choose ${playerSelection}. :|`;
  }
}

// Increment score if result of that round contains search string
function updateScore(roundResult, currentScore, searchStr) {
  if (roundResult.includes(searchStr)) {
    currentScore++;
  } else {
    currentScore;
  }
  return currentScore;
}

// Determines the winner based on total number of rounds
function winner(playerScore, computerScore, totalRounds) {
  if (playerScore > computerScore) {
    return `You won, you scored ${playerScore} and the computer scored ${computerScore}. :)`;
  } else if (playerScore < computerScore) {
    return `You lost, the computer scored ${computerScore} and you scored ${playerScore}. :(`;
  } else {
    return `It is a tie, you both scored ${playerScore}. :|`;
  }
}