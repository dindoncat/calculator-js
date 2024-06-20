let numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "( )"];
let mainSrt = "0";
let secStr = "";


document.querySelector("#sum").innerHTML = mainSrt;

let btnDiv = document.querySelector("#numbers_btns");

numbers.forEach((number) => {
  let btn = document.createElement("button");
  btn.innerHTML = number;
  btnDiv.appendChild(btn);
  btn.addEventListener("click", () => {
    mainSrt += number;
    if (number != "( )" && mainSrt[0] == "0" && mainSrt[1] != ".") {
      mainSrt = mainSrt.slice(1);
    }
    else if (number === "( )"){
        //if thers an opening open in the string then add closing bracket else add opening bracket
        if(mainSrt.split("(").length > mainSrt.split(")").length){
            mainSrt += ")";
        }
        else{
            mainSrt += "(";
        }
    } 
    document.querySelector("#sum").innerHTML = mainSrt;
  });
});


document.querySelector("#erase").addEventListener("click", () => {
    mainSrt = mainSrt.slice(0, -1);
    if (mainSrt.length == 0) {
        mainSrt = "0";
    }

    document.querySelector("#sum").innerHTML = mainSrt;
});
document.querySelector("#claer").addEventListener("click", () => {
    mainSrt = "0";
    secStr = "";
    document.querySelector("#sum").innerHTML = mainSrt;
    document.querySelector("#calculation").innerHTML = secStr;
});
document.querySelector("#divide").addEventListener("click", () => {
    if (mainSrt[mainSrt.length - 1] == "/" || mainSrt[mainSrt.length - 1] == "*" || mainSrt[mainSrt.length - 1] == "-" || mainSrt[mainSrt.length - 1] == "+") {
        mainSrt = mainSrt.slice(0, -1);
    }
    mainSrt += "/";
    document.querySelector("#sum").innerHTML = mainSrt;
});
document.querySelector("#multiply").addEventListener("click", () => {
    if (mainSrt[mainSrt.length - 1] == "/" || mainSrt[mainSrt.length - 1] == "*" || mainSrt[mainSrt.length - 1] == "-" || mainSrt[mainSrt.length - 1] == "+") {
        mainSrt = mainSrt.slice(0, -1);
    }
    mainSrt += "*";
    document.querySelector("#sum").innerHTML = mainSrt;
});
document.querySelector("#subtract").addEventListener("click", () => {
    if (mainSrt[mainSrt.length - 1] == "/" || mainSrt[mainSrt.length - 1] == "*" || mainSrt[mainSrt.length - 1] == "-" || mainSrt[mainSrt.length - 1] == "+") {
        mainSrt = mainSrt.slice(0, -1);
    }
    mainSrt += "-";
    document.querySelector("#sum").innerHTML = mainSrt;
});
document.querySelector("#add").addEventListener("click", () => {
    if (mainSrt[mainSrt.length - 1] == "/" || mainSrt[mainSrt.length - 1] == "*" || mainSrt[mainSrt.length - 1] == "-" || mainSrt[mainSrt.length - 1] == "+") {
        mainSrt = mainSrt.slice(0, -1);
    }
    mainSrt += "+";
    document.querySelector("#sum").innerHTML = mainSrt;
});
document.querySelector("#equal").addEventListener("click", () => {
    secStr = mainSrt;
    document.querySelector("#calculation").innerHTML = secStr;
    mainSrt = eval(mainSrt);
    document.querySelector("#sum").innerHTML = mainSrt;
});




