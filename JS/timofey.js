const inputs = document.querySelectorAll("input");
const resultEl = document.getElementById("result");

function updateMax() {
  let values = Array.from(inputs)
    .map((i) => i.value.trim())
    .filter((v) => v !== "" && !isNaN(v))
    .map(Number);

  if (values.length === 0) {
    resultEl.innerText = "Будь ласка, введіть хоча б одне число!";
    resultEl.style.color = "red";
    return;
  }

  let max = Math.max(...values);
  resultEl.innerText = "Найбільше число, яке ви ввели - " + max;
  resultEl.style.color = "black";
}

inputs.forEach((input) => input.addEventListener("input", updateMax));
