let numOne
let numTwo
let opSymbol

let opSymbolArray = ["+", "-", "*", "/"];
let opClassArray = ["add", "sub", "multy", "divide"];

const body = document.querySelector("body");
const calcBox = document.createElement("div");
const numBox = document.createElement("div");
const opBox = document.createElement("div");
const inputScreen = document.createElement("input");

const clearButton = document.createElement("button")
clearButton.innerHTML = "C";
clearButton.className = "clear"
clearButton.addEventListener("click", () => {
    inputScreen.value = "";
});
body.setAttribute("stype", "display: flex; align-items: center; justify-content: center;")
calcBox.setAttribute("style", "width: 150px; height: 300px;")
opBox.appendChild(clearButton);

calcBox.appendChild(inputScreen);
calcBox.appendChild(numBox);
calcBox.appendChild(opBox);
body.appendChild(calcBox);


const calcScreen = document.createElement("input");

for (let i = 0; i <= 9; i++){
    let calcNumber = document.createElement("button");
    numBox.appendChild(calcNumber);
    calcNumber.innerHTML = [i]; 
}

for (let i = 0; i < opSymbolArray.length; i++){
    let calcOperator = document.createElement("button");
    opBox.appendChild(calcOperator);
    calcOperator.innerHTML = opSymbolArray[i];
    calcOperator.className = `${opClassArray[i]}`;
}

function addNums(a, b){
    return a + b;
}

function subNums(a, b){
    return a - b;
}

function multiplyNums(a, b){
    return a * b;
}

function divNums(a, b){
    return a / b;
}

function operate(numOne, numTwo, opSymbol){
    if(opSymbol == "+"){
        return addNums(numOne, numTwo);
    }else if(opSymbol == "-"){
        return subNums(numOne, numTwo);
    }else if(opSymbol == "*"){
        return multiplyNums(numOne, numTwo);
    }else if(opSymbol == "/"){
        return divNums(numOne, numTwo);
    }
}
