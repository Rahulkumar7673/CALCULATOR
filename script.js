let screen = document.getElementById("screen");
let currentInput = "";
let lastValue = "";
function appendToScreen(value) {
  lastValue = "";
  currentInput += value;
  screen.innerText = currentInput;
}

function clearScreen() {
  currentInput = "";
  screen.innerText = "0";
}

function operation(operator) {
  currentInput += lastValue;
  if (currentInput !== "" && currentInput.slice(-1) !== operator) {
    appendToScreen(operator);
  }
}
function deletePriv() {
  currentInput = currentInput.slice(0, currentInput.length - 1);
  screen.innerText = currentInput;
}
function calculate() {
  try {
    let result = eval(currentInput);
    screen.innerText = result;
    currentInput = result.toString();
  } catch (error) {
    screen.innerText = "Error";
    currentInput = "";
  }
  lastValue = currentInput;
  currentInput = "";
}