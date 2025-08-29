let input = document.querySelector(".time-calculator__input");
let resultBtn = document.querySelector(".time-calculator__btn");
let resultTxt = document.querySelector(".time-calculator__result");

let timeCalculator = (event) => {
  event.preventDefault();
  let totalHours = Number.parseFloat(input.value);
  let totalMinutes = Math.floor(totalHours);
  let decimalPart = totalHours - totalMinutes;
  let hours = Math.floor(totalMinutes / 60);
  let minutes = totalMinutes % 60;
  let seconds = Math.round(decimalPart * 60);

  resultTxt.textContent = `${hours}h : ${minutes}m : ${seconds}s`;
};
resultBtn.addEventListener("click", timeCalculator);
