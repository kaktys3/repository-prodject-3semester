 const randomNumber = Math.floor(Math.random() * 10) + 1;
    function checkNumber() {
      const userNumber = document.getElementById('userNumber').value;
      const result = document.getElementById('result');
      if (parseInt(userNumber) === randomNumber) {
        result.textContent = `Вітаю, ви вгадали число ${randomNumber}!`;
        result.className = "win";
      } else {
        result.textContent = `Ви програли, комп'ютер загадав ${randomNumber}`;
        result.className = "lose";
      }
    }