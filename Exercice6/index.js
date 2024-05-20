const display = document.getElementById('display');

function appendToDisplay(elem) {
    display.value += elem
}

function calculateResult() {
    const expression = display.value;
    const parts = expression.split(/(\+|\-|\*|\/|\%)/);
    const num1 = parseInt(parts[0]);
    const num2 = parseInt(parts[2]);
    const symbol = parts[1];
    switch (symbol) {
        case '+':
            display.value = num1 + num2;
            break;
        case '-':
            display.value = num1 - num2;
            break;
        case '*':
            display.value = num1 * num2;
            break;
        case '/':
            display.value = num2 !==0 ? num1 / num2 : "Division by zero is not allowed";
            break;
        case '%':
            display.value = "Invalid operator";
            break;
    }
}

function clearDisplay() {
    display.value = '';
}