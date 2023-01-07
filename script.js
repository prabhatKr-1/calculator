let scr = document.getElementsByClassName("display");
let screenText = scr[0];
var buttons = document.getElementsByClassName("btn");
let opr1 = 0;
let opr2 = null;
let operand = null;
for (let i = 0; i < 19; i++) {
  buttons[i].addEventListener("click", function () {
    // accessing the attribute data-value to determine which button was clicked
    let data = this.getAttribute("data-value");
    switch (data) {
      case "0":
        screenText.innerText += 0;
        break;
      case "1":
        screenText.innerText += 1;
        break;
      case "2":
        screenText.innerText += 2;
        break;
      case "3":
        screenText.innerText += 3;
        break;
      case "4":
        screenText.innerText += 4;
        break;
      case "5":
        screenText.innerText += 5;
        break;
      case "6":
        screenText.innerText += 6;
        break;
      case "7":
        screenText.innerText += 7;
        break;
      case "8":
        screenText.innerText += 8;
        break;
      case "9":
        screenText.innerText += 9;
        break;
      case "AC":
        screenText.innerText = "";
        opr1 = 0;
        opr2 = null;
        break;
      case "+/-":
        screenText.innerText *= -1;
        break;
      case ".":
        screenText.innerText += ".";
        break;
      case "%":
        opr1 = parseFloat(screenText.innerText);
        operand = "%";
        screenText.innerText = "";
        break;
      case "/":
        opr1 = parseFloat(screenText.innerText);
        operand = "/";
        screenText.innerText = "";
        break;
      case "*":
        opr1 = parseFloat(screenText.innerText);
        operand = "*";
        screenText.innerText = "";
        break;
      case "-":
        opr1 = parseFloat(screenText.innerText);
        operand = "-";
        screenText.innerText = "";
        break;
      case "+":
        opr1 = parseFloat(screenText.innerText);
        operand = "+";
        screenText.innerText = "";
        break;
      case "=":
        opr2 = parseFloat(screenText.innerText);
        console.log(opr1, operand, opr2);
        let ans = eval(opr1 + operand + opr2);
        screenText.innerText = ans;
        break;
      default:
        window.alert("Invalid Input! Please Try Again");
    }
  });
}
