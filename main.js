let mirrorLeft = document.getElementById("mirror1");
let mirrorRight = document.getElementById("mirror2");
let userInput = document.getElementById("message")


userInput.addEventListener("keyup", () => {
  mirrorLeft.textContent = userInput.value
  mirrorRight.textContent = userInput.value
})
