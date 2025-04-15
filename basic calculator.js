const display = document.getElementById("display");
const botText = document.getElementById("bot-text");

function appendValue(value) {
  display.value += value;
  botSpeak("Adding " + value);
}

function clearDisplay() {
  display.value = "";
  botSpeak("Display cleared!");
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
  botSpeak("Deleted last character");
}

function calculateResult() {
  try {
    display.value = eval(display.value);
    
  } catch {
    display.value = "Error";
    
  }
}


// Enable numpad and keyboard input
document.addEventListener("keydown", function(e) {
  const allowedKeys = "0123456789+-*/().%";
  if (allowedKeys.includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculateResult();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
