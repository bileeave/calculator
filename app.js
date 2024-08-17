(function(){
    /**
     * HTML DOM
     */

    // Container
    const container = document.querySelector(".container");

    // Item
    const item = document.createElement("div");
    item.setAttribute("class", "item");
    
    // Item's display
    const display = document.createElement("div");
    display.setAttribute("class", "display");

    // Display's text
    const text = document.createElement("p");
    text.textContent = "";

    // Item's keys
    const keys = document.createElement("div");
    keys.setAttribute("class", "keys");

    // Key 1
    const key1 = document.createElement("button");
    key1.setAttribute("id", "key1");
    key1.textContent = 1;

    // Key 2
    const key2 = document.createElement("button");
    key2.setAttribute("id", "key2");
    key2.textContent = 2;

    // Key 3
    const key3 = document.createElement("button");
    key3.setAttribute("id", "key3");
    key3.textContent = 3;

    // Key 4
    const key4 = document.createElement("button");
    key4.setAttribute("id", "key4");
    key4.textContent = 4;

    // Key 5
    const key5 = document.createElement("button");
    key5.setAttribute("id", "key5");
    key5.textContent = 5;

    // Key 6
    const key6 = document.createElement("button");
    key6.setAttribute("id", "key6");
    key6.textContent = 6;

    // Key 7
    const key7 = document.createElement("button");
    key7.setAttribute("id", "key7");
    key7.textContent = 7;

    // Key 8
    const key8 = document.createElement("button");
    key8.setAttribute("id", "key8");
    key8.textContent = 8;

    // Key 9
    const key9 = document.createElement("button");
    key9.setAttribute("id", "key9");
    key9.textContent = 9;

    // Key 0
    const key0 = document.createElement("button");
    key0.setAttribute("id", "key0");
    key0.textContent = 0;

    // Key add
    const keyAdd = document.createElement("button");
    keyAdd.setAttribute("id", "keyAdd");
    keyAdd.textContent = "+";
    keyAdd.classList.add("separator");

    // Key subtract
    const keySubtract = document.createElement("button");
    keySubtract.setAttribute("id", "keySubtract");
    keySubtract.textContent = "-";
    keySubtract.classList.add("separator");

    // Key multiply
    const keyMultiply = document.createElement("button");
    keyMultiply.setAttribute("id", "keyMultiply");
    keyMultiply.textContent = "×";
    keyMultiply.classList.add("separator");

    // Key divide
    const keyDivide =  document.createElement("button");
    keyDivide.setAttribute("id", "keyDivide");
    keyDivide.textContent = "/";
    keyDivide.classList.add("separator");

    // Key total
    const keyTotal =  document.createElement("button");
    keyTotal.setAttribute("id", "keyTotal");
    keyTotal.textContent = "=";
    keyTotal.classList.add("total");

    // Key period
    const keyPeriod =  document.createElement("button");
    keyPeriod.setAttribute("id", "keyPeriod");
    keyPeriod.textContent = ".";
    keyPeriod.classList.add("total");

    // Key all clear
    const keyClear =  document.createElement("button");
    keyClear.setAttribute("id", "keyClear");
    keyClear.textContent = "AC";
    keyClear.classList.add("remove");

    // Key backspace
    const keyBack =  document.createElement("button");
    keyBack.setAttribute("id", "keyBack");
    keyBack.textContent = "DEL";
    keyBack.classList.add("remove");

    // Order of the HTML DOM
    container.appendChild(item);
    item.appendChild(display);
    display.appendChild(text);
    item.appendChild(keys);
    keys.append(key1, key2, key3, key4, key5, key6, key7, key8, key9, key0,
        keyAdd, keySubtract, keyClear, keyMultiply, keyDivide, keyBack, keyPeriod, keyTotal);
    
    /**
     * CALCULATOR LOGIC
     */

    // Global variables
    let operand1 = "";
    let operator = "";
    let operand2 = "";
    let total = 0;

    // Methods
    function Calculator () {
        this.add = function (a, b) {
            return +(a + b).toFixed(2);
        }
        this.subtract = function (a, b) {
            return +(a - b).toFixed(2);
        }
        this.multiply = function (a, b) {
            return +(a * b).toFixed(2);
        }
        this.divide = function (a, b) {
            if (b === 0) return "The quotient is Infinity.";
            return +(a / b).toFixed(2);
        }
    }

    function operate (a, op, b) {
        const calculator = new Calculator();
        if (op === "+") {
            return calculator.add(+a, +b);
        } else if (op === "-") {
            return calculator.subtract(+a, +b);
        } else if (op === "*") {
            return calculator.multiply(+a, +b);
        } else if (op === "/") {
            return calculator.divide(+a, +b);
        }
    }

    // Helpers
    function storeToOperands (value) {
        if(!operator) {
            return operand1 += value;
        } else {
            return operand2 += value;
        }
    }

    function removeFromOperands () {
        if(!operator) {
            return operand1 = operand1.slice(0, -1);
        } else {
            return operand2 = operand2.slice(0, -1);
        }
    }

    function clearTheRest () {
        operator = "";
        operand2 = "";
    }

    function clearAllValues () {
        operand1 = "";
        operator = "";
        operand2 = "";
        total = 0;
    }

    function calculate () {
        if (operator && operand2) {
            total = operate(operand1, operator, operand2);
            operand1 = total;
            clearTheRest();
        }
    }

    function changeBgColor (key) {
        let className = "selected";
        switch (key) {
            case "keyAdd":
                keyAdd.classList.add(className);
                keySubtract.classList.remove(className);
                keyMultiply.classList.remove(className);
                keyDivide.classList.remove(className);
                break;
            case "keySubtract":
                keySubtract.classList.add("selected");
                keyAdd.classList.remove("selected");
                keyMultiply.classList.remove("selected");
                keyDivide.classList.remove("selected");
                break;
            case "keyMultiply":
                keyMultiply.classList.add("selected");
                keyAdd.classList.remove("selected");
                keySubtract.classList.remove("selected");
                keyDivide.classList.remove("selected");
                break;
            case "keyDivide":
                keyDivide.classList.add("selected");
                keyAdd.classList.remove("selected");
                keySubtract.classList.remove("selected");
                keyMultiply.classList.remove("selected");
                break;
            default:
                keyAdd.classList.remove("selected");
                keySubtract.classList.remove("selected");
                keyMultiply.classList.remove("selected");
                keyDivide.classList.remove("selected");
                break;
        }
    }

    // Listeners
    keys.addEventListener("click", (event) => {

        let target = event.target;
        let add = "+";
        let subtract = "-";
        let multiply = "*";
        let divide = "/";

        switch (target.id) {
            case "key0":
                text.textContent = storeToOperands("0");
                break;
            case "key1":
                text.textContent = storeToOperands("1");
                break;
            case "key2":
                text.textContent = storeToOperands("2");
                break;
            case "key3":
                text.textContent = storeToOperands("3");
                break;
            case "key4":
                text.textContent = storeToOperands("4");
                break;
            case "key5":
                text.textContent = storeToOperands("5");
                break;
            case "key6":
                text.textContent = storeToOperands("6");
                break;
            case "key7":
                text.textContent = storeToOperands("7");
                break;
            case "key8":
                text.textContent = storeToOperands("8");
                break;
            case "key9":
                text.textContent = storeToOperands("9");
                break;
            case "keyAdd":
                calculate();
                operator = add;
                changeBgColor("keyAdd");
                break;
            case "keySubtract":
                calculate();
                operator = subtract;
                changeBgColor("keySubtract");
                break;
            case "keyMultiply":
                calculate();
                operator = multiply;
                changeBgColor("keyMultiply");
                break;
            case "keyDivide":
                calculate();
                operator = divide;
                changeBgColor("keyDivide");
                break;
            case "keyTotal":
                total = operate(operand1, operator, operand2);
                text.textContent = total;

                if (operand1 && operator && operand2) {
                    operand1 = total;
                    (total) ? clearAllValues() : clearTheRest();
                }
                
                changeBgColor("keyTotal");
                break;
            case "keyClear":
                clearAllValues();
                text.textContent = "";
                changeBgColor("keyClear");
                break;
            case "keyBack":
                text.textContent = removeFromOperands();
                changeBgColor("keyBack");
            break;
            case "keyPeriod":
                text.textContent = storeToOperands(".");
                changeBgColor("keyBack");
            break;
        };
    });

    // Keyboard support
    document.addEventListener("keydown", (event) => {

        let target = event.key;
        let add = "+";
        let subtract = "-";
        let multiply = "*";
        let divide = "/";

        switch (target) {
            case "0":
                text.textContent = storeToOperands("0");
                break;
            case "1":
                text.textContent = storeToOperands("1");
                break;
            case "2":
                text.textContent = storeToOperands("2");
                break;
            case "3":
                text.textContent = storeToOperands("3");
                break;
            case "4":
                text.textContent = storeToOperands("4");
                break;
            case "5":
                text.textContent = storeToOperands("5");
                break;
            case "6":
                text.textContent = storeToOperands("6");
                break;
            case "7":
                text.textContent = storeToOperands("7");
                break;
            case "8":
                text.textContent = storeToOperands("8");
                break;
            case "9":
                text.textContent = storeToOperands("9");
                break;
            case "+":
                calculate();
                operator = add;
                changeBgColor("keyAdd");
                break;
            case "-":
                calculate();
                operator = subtract;
                changeBgColor("keySubtract");
                break;
            case "*":
                calculate();
                operator = multiply;
                changeBgColor("keyMultiply");
                break;
            case "x":
                calculate();
                operator = multiply;
                changeBgColor("keyMultiply");
                break;
            case "/":
                calculate();
                operator = divide;
                changeBgColor("keyDivide");
                break;
            case "Enter":
                total = operate(operand1, operator, operand2);
                text.textContent = total;

                if (operand1 && operator && operand2) {
                    operand1 = total;
                    (total) ? clearAllValues() : clearTheRest();
                }

                changeBgColor("keyTotal");
                break;
            case "Backspace":
                text.textContent = removeFromOperands();
                changeBgColor("keyBack");
            break;
            case ".":
                text.textContent = storeToOperands(".");
                changeBgColor("keyBack");
            break;
        }
    });
})();