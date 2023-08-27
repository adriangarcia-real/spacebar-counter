const counterElement = document.getElementById("counter");

let counter = 0;

function incrementCounter(e) {
  if (!(e.code === "Space")) return;
  counter += 1;
  counterElement.textContent = counter;
}

window.addEventListener("keyup", incrementCounter);
