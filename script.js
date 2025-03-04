let numOne = null;
let numTwo = null;
let opSymbol = null;
let result = null;

let opSymbolArray = ["+", "-", "*", "/"];

const body = document.querySelector("body");
const calcBox = document.createElement("div");
const numBox = document.createElement("div");
const opBox = document.createElement("div");
const inputScreen = document.createElement("input");

const clearButton = document.createElement("button");
clearButton.innerHTML = "C";
clearButton.className = "clear"
clearButton.addEventListener("click", () => {
    inputScreen.value = "";
    numOne = null;
    numTwo = null;
    opSymbol = null;
    result = "";
});

const operateButton = document.createElement("button");
operateButton.innerHTML = "=";
operateButton.addEventListener("click", operate);
opBox.appendChild(operateButton);

body.setAttribute("style", "display: flex; flex: auto; align-items: center; justify-content: center;")
calcBox.setAttribute("style", "width: 150px; height: 300px;")
opBox.appendChild(clearButton);

calcBox.appendChild(inputScreen);
calcBox.appendChild(numBox);
calcBox.appendChild(opBox);
body.appendChild(calcBox);


const calcScreen = document.createElement("input");

for (let i = 0; i <= 9; i++){
    let calcNumber = document.createElement("button");
    calcNumber.addEventListener("click", () => {
        if(result != null) {
            inputScreen.value = "";
            result = null;
            inputScreen.value += calcNumber.innerHTML;
        }else{
        inputScreen.value += calcNumber.innerHTML;
        }
    })
    numBox.appendChild(calcNumber);
    calcNumber.innerHTML = [i]; 
}

for (let i = 0; i < opSymbolArray.length; i++){
    let calcOperator = document.createElement("button");
    calcOperator.innerHTML = opSymbolArray[i];
    calcOperator.addEventListener("click", () => {
        numOne = Number(inputScreen.value);
        console.log(numOne);
        opSymbol = calcOperator.innerHTML;
        console.log(opSymbol);
        inputScreen.value="";
        return opSymbol && numOne;
        });
    opBox.appendChild(calcOperator);
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

function operate(){
    numTwo = Number(inputScreen.value);
    if(opSymbol == "+"){
        result = addNums(numOne, numTwo)
        inputScreen.value = result;
    }else if(opSymbol == "-"){
        result = subNums(numOne, numTwo);
        inputScreen.value = result;
    }else if(opSymbol == "*"){
        result = multiplyNums(numOne, numTwo);
        inputScreen.value = result;
    }else if(opSymbol == "/"){
        result = divNums(numOne, numTwo);
        inputScreen.value = result;
    }
    inputScreen.value = result;
    numOne = null;
    numTwo = null;
    opSymbol = null;
    return {numOne, numTwo, opSymbol};
}

