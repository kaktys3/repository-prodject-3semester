function checkYear() {
  const year = document.getElementById("yearInput").value;
  const result = document.getElementById("result");

  if (!year) {
    result.innerHTML = "Будь ласка, введіть рік!";
    result.className = "not-leap";
    return;
  }

  const isyear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  if (isyear) {
    result.innerHTML = "Ви народилися у високосний рік!";
    result.className = "leap";
  } else {
    result.innerHTML = "Ви народилися не у високосний рік!";
    result.className = "not-leap";
  }
}
window.checkYear = checkYear;
