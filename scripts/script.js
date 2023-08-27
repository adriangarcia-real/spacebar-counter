const counterElement = document.getElementById("counter");
const resetButton = document.getElementById("reset-button");
const clickSound = document.getElementById("click");
const resetSound = document.getElementById("reset");

let counter = 0;
function incrementCounter(e) {
  if (!(e.code === "Space")) return;
  clickSound.play();
  counter += 1;
  counterElement.textContent = counter;
}

function resetCounter(e) {
  resetSound.play();
  resetButton.blur();
  counter = 0;
  counterElement.textContent = counter;
}

window.addEventListener("keyup", incrementCounter);
resetButton.addEventListener("click", resetCounter);
