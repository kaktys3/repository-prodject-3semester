console.log('Maksym Shamrai');

let compScore = document.querySelector(".rps-result-computer");
let userScore = document.querySelector(".rps-result-player");
let showWinner = document.querySelector(".rps-won");
let showComputerChoice = document.querySelector(".rps-comp-variant");

let defaultUserScore = 0;
let defaultComputerScore = 0;

let userChoice;
let compChoice;

document.querySelector(".rock").onclick = function() {
    // console.log("Вибрано камінь");
    userChoice = "rock"
    console.log(userChoice);
}
document.querySelector(".paper").onclick = function() {
    // console.log("Вибрано папір");
    userChoice = "paper"
    console.log(userChoice);
}
document.querySelector(".scissors").onclick = function() {
    // console.log("Вибрано ножиці");
    userChoice = "scissors"
    console.log(userChoice);
}

function increaseComputerScore() {}
function increaseUserScore() {}
function showComputerVariant() {}