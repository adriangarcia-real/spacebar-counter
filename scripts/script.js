const counterElement = document.getElementById("counter");
const resetButton = document.getElementById("reset-button");

let counter = 0;
function incrementCounter(e) {
  if (!(e.code === "Space")) return;
  counter += 1;
  counterElement.textContent = counter;
}

function resetCounter(e) {
  resetButton.blur();
  counter = 0;
  counterElement.textContent = counter;
}

window.addEventListener("keyup", incrementCounter);
resetButton.addEventListener("click", resetCounter);
