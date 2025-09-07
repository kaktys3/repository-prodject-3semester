const inputOne = document.querySelector("#number-one");
const additionNumber = document.querySelector("#addition");
const multiplicationNumber = document.querySelector("#multiplication");
const minusNumber = document.querySelector("#minus");
const divisionNumber = document.querySelector("#division");
const inputTwo = document.querySelector("#number-two");
const numberResult = document.querySelector("#result");
const formCalculate = document.querySelector(".calculate-form");

let currentOperation = 'number';

function addition() {
  currentOperation = "addition";
}

function multiplication() {
  currentOperation = "multiplication";
}

function subtraction() {
  currentOperation = "subtraction";
}

function division() {
  currentOperation = "division";
}

function calculatorActions (e) {
  if (currentOperation === "addition") {
    let result = Number(inputOne.value.trim()) + Number(inputTwo.value.trim());
    numberResult.textContent = result;
  }
  if (currentOperation === "multiplication") {
    let result = Number(inputOne.value.trim()) * Number(inputTwo.value.trim());
    numberResult.textContent = result;
  }
  if (currentOperation === "subtraction") {
    let result = Number(inputOne.value.trim()) - Number(inputTwo.value.trim());
    numberResult.textContent = result;
  }  
  if (currentOperation === "division") {
    let result = Number(inputOne.value.trim()) / Number(inputTwo.value.trim());
    numberResult.textContent = result;
  } 
  e.preventDefault()
}

additionNumber.addEventListener("click",  addition);

multiplicationNumber.addEventListener("click", multiplication);

minusNumber.addEventListener("click", subtraction);

divisionNumber.addEventListener("click", division);

formCalculate.addEventListener("submit", calculatorActions);
