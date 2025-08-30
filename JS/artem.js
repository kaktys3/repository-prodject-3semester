const userNumber = document.getElementById("userNumber").value;
const result = document.getElementById("result");

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber;
}

function checkNumber() {
  if (parseInt(userNumber) === getRandomNumber()) {
    result.textContent = `Вітаю, ви вгадали число ${getRandomNumber()}!`;
    result.className = "win";
  } else {
    result.textContent = `Ви програли, комп'ютер загадав ${getRandomNumber()}`;
    result.className = "lose";
  }
}
window.checkNumber = checkNumber;
