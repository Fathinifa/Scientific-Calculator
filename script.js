let display = document.getElementById("display");
let toggleBtn = document.getElementById("toggleMode");
let calculatorDiv = document.querySelector('.calculator');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expr = display.value;
    let result = eval(expr);
    display.value = result;
  } catch(e) {
    display.value = "Error";
  }
}

// Dark Mode Toggle
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  calculatorDiv.classList.toggle("dark");
  display.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});
