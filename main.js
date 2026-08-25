function display(value) {
  document.getElementById("display").value += value;
}
function cleardisplay() {
  document.getElementById("display").value = "";
}
function calculate() {
  let expression = document.getElementById("display").value;
  try {
    document.getElementById("display").value = eval(expression);
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
function deletelast() {
  let currentValue = document.getElementById("display").value;
  document.getElementById("display").value = currentValue.slice(0, -1);
}
