
function computerPlay() {
    let num = Math.floor(Math.random() * 3) + 1;
    switch (num) {
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        case 3:
            return "rock";
            break;
    }
}
function playRound(playerSelection, computerSelection) {

    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    if (player === computer) {
        return "Tie! No one win in this Round!"
    }
    if (player === "paper") {
        return computer === "scissors" ?
            "You Lose! Scissors beats Paper" : "You Win! Paper beats Rock";
    }
    if (player === "scissors") {
        return computer === "rock" ?
            "You Lose! Rock beats Scissors" : "You Win! Scissors beats Paper";
    }
    if (player === "rock") {
        return computer === "paper" ?
            "You Lose! Paper beats Rock" : "You Win! Rock beats Scissors";
    }
}

const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const player = button.id;
        console.log(player);
        const computer = computerPlay();
        console.log(computer);
        if (player === computer) {
            result.textContent = "Tie! No one win in this Round!"
        }
        if (player === "paper") {
            result.textContent = computer === "scissors" ?
                "You Lose! Scissors beats Paper" : "You Win! Paper beats Rock";
        }
        if (player === "scissors") {
            result.textContent = computer === "rock" ?
                "You Lose! Rock beats Scissors" : "You Win! Scissors beats Paper";
        }
        if (player === "rock") {
            result.textContent = computer === "paper" ?
                "You Lose! Paper beats Rock" : "You Win! Rock beats Scissors";
        }
    });
});
// document.querySelector()

// function game() {
//     let wins = 0;
//     let ties = 0;
//     let loses = 0;
//     let play;
//     for (i = 0; i < 5; i++) {
//         play = playRound(prompt("Throw what?"), computerPlay());
//         console.log(play);
//         if (play.includes("Win")) {
//             wins += 1;
//         } else if (play.includes("Lose")) {
//             loses += 1;
//         } else {
//             ties += 1;
//         }
    // }
//     console.log(`wins:${wins} loses:${loses} ties:${ties}`);
//     console.log(wins > loses ? "You are the winner!" : "Computer Wins");
// }

