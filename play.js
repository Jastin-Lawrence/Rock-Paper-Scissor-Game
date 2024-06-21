const choices = ["ROCK","PAPER","SCISSOR"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const restart = document.getElementById("restart");

let playerScore = 0;
let computerScore = 0;

function playgame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = ""

    if(playerChoice === computerChoice){
        result = "IT'S A TIE...!"
    }else{
        switch(playerChoice){
        case"ROCK":
            result = (computerChoice === "SCISSOR") ? "YOU WIN...!" : "YOU LOSE...!"
            break;
        case"PAPER":
           result = (computerChoice === "ROCK") ? 
           "YOU WIN...!" : "YOU LOSE...!"
            break;
        case"SCISSOR":
            result = (computerChoice === "PAPER") ? 
            "YOU WIN...!" : "YOU LOSE...!"            
            break;
        }
    }

    resultDisplay.classList.remove("greenText","redText");

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case "YOU WIN...!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE...!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

if(playerScore === 5){
    alert("PLAYER WINS!...");
    restartGame();
}else if(computerScore === 5){
    alert("COMPUTER WINS!...")
    restartGame();
}

}
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerDisplay.textContent = "PLAYER:";
    computerDisplay.textContent = "COMPUTER:";
    resultDisplay.textContent = "";
    resultDisplay.classList.remove("greenText", "redText");
}

// Add event listener to the restart button
restartButton.addEventListener("click", restartGame);


