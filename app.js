
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
const drawCount = document.querySelector("#drawCount")
const winCount = document.querySelector("#winCount")
const loseCount = document.querySelector("#loseCount")
let drawCountNumber = 0;
let winCountNumber = 0;
let loseCountNumber = 0;
const condition = { scissors: "paper", rock: "scissors", paper: "rock" }
const translation = { scissors: "剪刀", rock: "石頭", paper: "布" }
const playerHand = document.querySelector(".playerHand")
const computerHand = document.querySelector(".computerHand")

buttons.forEach((button) => {
    button.addEventListener("click", playGame)
});

function playGame() {
    const player = this.id;
    playerHand.innerHTML = `玩家：  ${translation[player]}！！! `
    const computer = computerPlay();
    computerHand.innerHTML = `電腦：  ${translation[computer]}！!！`
    const draw = player === computer;
    const win = condition[player] === computer;
    const lose = player === condition[computer];
    if (draw) {
        result.textContent = "平手☺️";
        drawCountNumber++;
        drawCount.innerHTML = drawCountNumber;
    }
    if (win) {
        result.textContent = "贏了🤩";
        winCountNumber++;
        winCount.innerHTML = winCountNumber;

    }
    if (lose) {
        result.textContent = "輸了🥺";
        loseCountNumber++;
        loseCount.innerHTML = loseCountNumber;

    }
};
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

