let container = "container";
let button = "button";

const clickOnButton = document.getElementById(button);
clickOnButton.addEventListener("click", changeColor);

function randomNumber(toNumber) {
  return Math.round(Math.random() * toNumber);
}

function changeColor() {
  document.getElementById(container).style.backgroundColor = `rgb(
    ${randomNumber(255)},
    ${randomNumber(255)},
    ${randomNumber(255)})`;
}
