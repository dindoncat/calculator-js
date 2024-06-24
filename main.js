let numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "( )"];
let mainStr = "0";
let secStr = "";
let continuez = false;

document.querySelector("#sum").innerHTML = mainStr;

const roundToSixDec = (strNum) => {
  let num = Number(strNum);
  return (Math.round(num * 1e6) / 1e6).toString();
};

const operatorsCheck = () => {
  const operators = ["/", "*", "-", "+", "."];
  if (operators.includes(mainStr[mainStr.length - 1])) {
    mainStr = mainStr.slice(0, -1);
  }
};
const applyOperator = (operator) => {
  operatorsCheck();
  mainStr += operator;
  document.querySelector("#sum").innerHTML = mainStr;
  continuez = false;
};
const divideOperator = () => applyOperator("/");
const multiplyOperator = () => applyOperator("*");
const minusOperator = () => applyOperator("-");
const plusOperator = () => applyOperator("+");

const erase = () => {
  mainStr = mainStr.slice(0, -1);
  if (mainStr.length === 0) {
    mainStr = "0";
  }
  document.querySelector("#sum").innerHTML = mainStr;
};

const equal = () => {
  if (isNaN(Number(mainStr[mainStr.length - 1])))
    mainStr = mainStr.substring(0, mainStr.length - 1);
  secStr = mainStr;
  document.querySelector("#calculation").innerHTML = secStr;
  let result = eval(mainStr);
  mainStr = roundToSixDec(result);
  document.querySelector("#sum").innerHTML = mainStr;
  continuez = true;
};

numbers.forEach((number) => {
  let btnDiv = document.querySelector("#numbers_btns");
  let btn = document.createElement("button");
  btn.innerHTML = number;
  btnDiv.appendChild(btn);
  btn.addEventListener("click", () => {
    if (continuez) {
      mainStr = "0";
      continuez = false;
    }
    if (
      (Number(number) || number === "0") &&
      mainStr[mainStr.length - 1] !== ")"
    ) {
      if (mainStr[0] === "0") mainStr = "";
      mainStr += number;
    } else if (number === "( )") {
      if(mainStr === "0") mainStr = "";
      operatorsCheck()
      if (mainStr.split("(").length > mainStr.split(")").length) {
        mainStr += ")";
      } else {
        mainStr += "(";
      }
    } else if (number === ".") {
      //if thers a dot to nothing add a zero to it
      operatorsCheck();
      if (mainStr[0] === "") mainStr = "0" + mainStr;
      mainStr += number;
    }
    document.querySelector("#sum").innerHTML = mainStr;
  });
});

document.querySelector("#clear").addEventListener("click", () => {
  mainStr = "0";
  secStr = "";
  document.querySelector("#sum").innerHTML = mainStr;
  document.querySelector("#calculation").innerHTML = secStr;
});
document.querySelector("#erase").addEventListener("click", erase);
document.querySelector("#divide").addEventListener("click", divideOperator);
document.querySelector("#multiply").addEventListener("click", multiplyOperator);
document.querySelector("#subtract").addEventListener("click", minusOperator);
document.querySelector("#add").addEventListener("click", plusOperator);
document.querySelector("#equal").addEventListener("click", equal);

addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Enter") {
    equal();
  } else if (key === "Backspace") {
    erase();
  } else if (["/", "+", "-", "*"].includes(key)) {
    applyOperator(key);
  } else if (Number(key) || key === "." || key === "(" || key === ")") {
    if (continuez) {
      mainStr = "0";
      continuez = false;
    }
    if (key !== "( )") mainStr += key;
    if (mainStr[0] === "0" && mainStr[1] !== ".") {
      mainStr = mainStr.slice(1);
    }
    document.querySelector("#sum").innerHTML = mainStr;
  }
});
