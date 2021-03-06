const firstNumber = document.getElementById("firstNumber")
const operator = document.getElementById("activeOperator")
const secondNumber = document.getElementById("secondNumber")
const activeNumber = document.getElementById("activeNumber")

function addNumbers(a, b){
    activeNumber.innerHTML = parseFloat(a) + parseFloat(b);
}

function subtractNumbers(a, b){
    activeNumber.innerHTML = parseFloat(a) - parseFloat(b);
}

function multiplyNumbers(a, b){
    activeNumber.innerHTML = parseFloat(a) * parseFloat(b);
}

function divideNumbers(a, b){
    activeNumber.innerHTML = parseFloat(a) / parseFloat(b);
}

function addDecimal(){
    if(activeNumber.innerHTML.indexOf(".") === -1){
        if (activeNumber.innerHTML.length < 18){ 
            activeNumber.innerHTML += ".";
 }}}
 
 function makePosOrNeg(){
     activeNumber.innerHTML = parseFloat(activeNumber.innerHTML) * -1;
 }

function findPower(a, b){
    activeNumber.innerHTML = Math.pow(parseFloat(a), parseFloat(b));
}

function oops() {
    activeNumber.innerHTML = activeNumber.innerHTML.slice(0, -1);
}

function clear(){
    firstNumber.innerHTML = ""
    operator.innerHTML = ""
    secondNumber.innerHTML = ""
    activeNumber.innerHTML = ""
}

function numberPress(value){
    if (activeNumber.innerHTML.length < 18) {
    activeNumber.innerHTML += value;
}}


function changeOperator(value) {
switch (value) {
    case "plus":
    case "+":
        operator.innerHTML = "+"
        break;
    case "minus":
    case "-":
        operator.innerHTML = "-"
        break;
    case "multiply":
    case "*":
    case "x":
        operator.innerHTML = "*"
        break;
    case "divide":
    case "%":
    case "/":
        operator.innerHTML = "%"
        break;
    case "toPower":
    case "^":
        operator.innerHTML = "^"
        break;
    case "default":
        break;
}}

function operatorPress(value){
    if ((operator.innerHTML == "") && (activeNumber.innerHTML != "")) {
        changeOperator(value);
        firstNumber.innerHTML = activeNumber.innerHTML;
        activeNumber.innerHTML = "";
    } else if ((operator.innerHTML != "") && (firstNumber.innerHTML != "") && (secondNumber.innerHTML != "") && (activeNumber.innerHTML != "")) {
        firstNumber.innerHTML = activeNumber.innerHTML;
        secondNumber.innerHTML = "";
        activeNumber.innerHTML = "";
        changeOperator(value);
    } else if ((operator.innerHTML != "") && (firstNumber.innerHTML != "") && (secondNumber.innerHTML == "") && (activeNumber.innerHTML != "")) {
        calculate();
        changeOperator(value);
    }
}

function calculate(){
    if ((firstNumber.innerHTML != "")  && (operator.innerHTML != "")  && (activeNumber.innerHTML != "") && (secondNumber.innerHTML == "")) {
        secondNumber.innerHTML = activeNumber.innerHTML;
        switch (operator.innerHTML) {
            case "+":
                addNumbers(firstNumber.innerHTML, secondNumber.innerHTML);
                break;
            case "-":
                subtractNumbers(firstNumber.innerHTML, secondNumber.innerHTML);
                break;
            case "*":
                multiplyNumbers(firstNumber.innerHTML, secondNumber.innerHTML);
                break;
            case "%":
                if (secondNumber.innerHTML == "0") {
                    alert("universe.exe has crashed, nice going hero")
                 } else divideNumbers(firstNumber.innerHTML, secondNumber.innerHTML);
                break;
            case "^":
                findPower(firstNumber.innerHTML, secondNumber.innerHTML);
                break;
            case "default":
                break;
        }
    }
}

//button support
const wrapper = document.getElementById('buttons');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  switch (event.target.id) {
    case "0":
    case "1":
    case "2": 
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
        numberPress(event.target.id);
        break;
    case "plus":
    case "minus":
    case "multiply":
    case "divide":
    case "toPower":
        operatorPress(event.target.id);
        break;
    case "float":
        addDecimal();
        break;
    case "plusOrMinus":
        makePosOrNeg();
    case "equals":
        calculate();
        break;
    case "clear":
        clear();
        break;
    case "delete":
        oops();
        break;
    case "default":
        return;
        break;
  }
})

//keyboard support
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case "0":
        case "1":
        case "2": 
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            numberPress(event.key);
            break;
        case "+":
        case "-":
        case "*":
        case "x":
        case "%":
        case "/":
        case "^":
            operatorPress(event.key);
            break;
        case ".":
            addDecimal();
            break;
        case "=":
        case "Enter":
            calculate();
            break;
        case "Delete":
            clear();
            break;
        case "Backspace":
            oops();
            break;
        case "default":
            break;
    }})