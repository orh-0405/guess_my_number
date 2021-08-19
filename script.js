"use strict";

let game_done = false;
let score_number = 20;

//HTML element selectors
// const input_guess = document.querySelector(".user") --> selects very first one
const ans = document.getElementById("answer");
const message = document.getElementById("message");
const score = document.getElementById("score");
const high_score = document.getElementById("high_score");

// Math.random() will gi e a random val in [0, 1)
// *20 will give a random value in [0, 20)
// Math.trunc() will give randint from 1 to 19
// +1 will give randint from 1 to 20
var secretNumber = Math.trunc(Math.random()*20) +1; //Should be using camo-case in javascript

// HTML buttons
const checkBtn = document.getElementById("btn-check");
const resetBtn = document.getElementById("btn-restart");

//Event listeners
checkBtn.addEventListener("click", check);
resetBtn.addEventListener("click", restart);

// Functions
function checkMsg(number) {
    console.log("Number input: ", number)
    if (number < secretNumber) {
        return "Too Low!"
    } else {
        return "Too high!"
    }
}

// console.log(secretNumber)

function check() {
    var input = document.getElementsByClassName("user")[0].value;
    // typecast: let guess = Number(input.value)
    console.log("Input: ", input)
    console.log(input, secretNumber)
    if (input < 1 || input > 20) {
        alert("Key in a number from 1 to 20");
        document.getElementsByClassName("user")[0].value = "";
    } else if (!game_done) {
        if (input == secretNumber) {
            console.log("correct")
            message.innerHTML = "YOU WIN!"
            ans.innerHTML = secretNumber
            document.body.style.backgroundColor = "#4d934d"
            game_done = true
            console.log(high_score)
            if (score_number >= high_score.innerHTML) {
                high_score.innerHTML = score_number
            }

        } else if (score_number - 1 == 0 && input != secretNumber) {
            console.log("lose")
            score.innerHTML -= 1
            message.innerHTML = "YOU LOSE"
            ans.innerHTML = secretNumber
            document.body.style.backgroundColor = "#AA0000"
            game_done = true

        } else if (input == "") {
            message.innerHTML = "Empty input"
            score.innerHTML -= 1
            score_number -= 1
        } else if (input != "" && input != secretNumber) {
            console.log("too high/too low")
            message.innerHTML = checkMsg(input)
            score.innerHTML -= 1
            score_number -= 1
        } else {
            score.innerHTML -= 1
            score_number -= 1
        }
    }
}

function restart() {
    if (game_done) {
        message.innerHTML = "Start Guessing:";
        score.innerHTML = 20;
        score_number = 20;
        document.body.style.backgroundColor = "#222";
        secretNumber = Math.trunc(Math.random()*20) +1;
        game_done = false
        answer.innerHTML = "?"
        document.getElementsByClassName("user")[0].value = "";
        console.log(secretNumber+1)
    }
}