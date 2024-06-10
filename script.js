// designed by Mohammed Jafer UGR/22624/13
var display = document.getElementById("display");

function inputNumber(num) {
  if (display.value == "Error!") {
    display.value = num;
  } else {
    display.value += num;
  }
}

function inputDecimal() {;
  if (display.value.indexOf(".") === -1) {
    display.value += ".";
  }
}

function clearDisplay() {
  display.value = "";
}

function inputOperator(op) {
  if (display.value !== "") {
    display.value += op;
  }
}

function calculate() {
  try {
    var result = eval(display.value);
    answered = result;
    if (result === Infinity || result === -Infinity) {
      throw new Error("Error!");
    }

    display.value = result;
  } catch (e) {
    display.value = "Error!";
  }
}