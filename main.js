let numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "( )"];
let mainSrt = "0";
let secStr = "";
let continuez = false;

const roundToSixDec = (strNum) => {
    let num = strNum;
    num = Number(num);
    console.log(num , typeof num , num == strNum);
    num = Math.round(num * Math.pow(10, 6)) / Math.pow(10, 6);
    return num.toString();
};
document.querySelector("#sum").innerHTML = mainSrt;

let btnDiv = document.querySelector("#numbers_btns");

const operatorsCheck = () => {
  if (
    mainSrt[mainSrt.length - 1] == "/" ||
    mainSrt[mainSrt.length - 1] == "*" ||
    mainSrt[mainSrt.length - 1] == "-" ||
    mainSrt[mainSrt.length - 1] == "+"
  ) {
    mainSrt = mainSrt.slice(0, -1);
  }

};
const divideOperator = () => {
  operatorsCheck();
  mainSrt += "/";
  document.querySelector("#sum").innerHTML = mainSrt;
  continuez = false;
};
const multipleOperator = () => {
  operatorsCheck();
  mainSrt += "*";
  document.querySelector("#sum").innerHTML = mainSrt;
  continuez = false;
};
const minusOperator = () => {
  operatorsCheck();
  mainSrt += "-";
  document.querySelector("#sum").innerHTML = mainSrt;
  continuez = false;
};
const plusOperator = () => {
  operatorsCheck();
  mainSrt += "+";
  document.querySelector("#sum").innerHTML = mainSrt;
  continuez = false;
};
const erase = () => {
  mainSrt = mainSrt.slice(0, -1);
  if (mainSrt.length == 0) {
    mainSrt = "0";
  }
  document.querySelector("#sum").innerHTML = mainSrt;
};
const equal = () => {
  secStr = mainSrt;
  document.querySelector("#calculation").innerHTML = secStr;
  let result = eval(mainSrt);
  console.log(result);
  mainSrt = roundToSixDec(result);
  document.querySelector("#sum").innerHTML = mainSrt;
  continuez = true;
};
numbers.forEach((number) => {
  let btn = document.createElement("button");
  btn.innerHTML = number;
  btnDiv.appendChild(btn);
  btn.addEventListener("click", () => {
    if (continuez) {
      mainSrt = "0";
      continuez = false;
    }
    if (number != "( )") mainSrt += number;
    if (mainSrt[0] == "0" && mainSrt[1] != ".") {
      mainSrt = mainSrt.slice(1);
    } else if (number === "( )") {
      if (mainSrt[0] == "0") {
        mainSrt = "(";
      }
      if (mainSrt.split("(").length > mainSrt.split(")").length) {
        mainSrt += ")";
      } else {
        mainSrt += "(";
      }
    }
    document.querySelector("#sum").innerHTML = mainSrt;
  });
});
document.querySelector("#claer").addEventListener("click", () => {
  mainSrt = "0";
  secStr = "";
  document.querySelector("#sum").innerHTML = mainSrt;
  document.querySelector("#calculation").innerHTML = secStr;
});
document.querySelector("#erase").addEventListener("click", () => erase());
document
  .querySelector("#divide")
  .addEventListener("click", () => divideOperator());
document
  .querySelector("#multiply")
  .addEventListener("click", () => multipleOperator());
document
  .querySelector("#subtract")
  .addEventListener("click", () => minusOperator());
document.querySelector("#add").addEventListener("click", () => plusOperator());
document.querySelector("#equal").addEventListener("click", () => equal());

addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    equal();
  } else if (e.key == "Backspace") {
    erase();
  }else if(e.key == "/"){
    divideOperator();
  } else if (e.key == "+") {
    plusOperator();
  } else if (e.key == "-") {
    minusOperator();
  } else if (e.key == "*") {
    multipleOperator();
  } else if (Number(e.key) || e.key == "." || e.key == "(" || e.key == ")") {
    if (continuez) {
        mainSrt = "0";
        continuez = false;
      }
    if (e.key != "( )") mainSrt += e.key;
    if (mainSrt[0] == "0" && mainSrt[1] != ".") {
      mainSrt = mainSrt.slice(1);
    }
    document.querySelector("#sum").innerHTML = mainSrt;
  }
});
