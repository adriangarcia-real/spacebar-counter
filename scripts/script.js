const counterElement = document.querySelector(".counter");

let counter = 0;

window.addEventListener("keypress", (e) => {
  if (!(e.code === "Space")) return;
  counter += 1;
  counterElement.textContent = counter;
});
