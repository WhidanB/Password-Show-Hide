const input = document.getElementById("input");
const display = document.getElementById("display");
const checkbox = document.getElementById("checkbox");
const mouse = document.querySelector(".mouse");

function show() {
  input.type = "text";
  display.textContent = "Hide";
}

function hide() {
  input.type = "password";
  display.textContent = "Show";
}

mouse.addEventListener("mousedown", show);
mouse.addEventListener("mouseup", hide);

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    show();
  } else {
    hide();
  }
});
