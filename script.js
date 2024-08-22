let display = document.getElementById('display');
let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    display.value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    display.value = displayValue;
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    display.value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        display.value = displayValue;
    } catch (error) {
        display.value = 'Error';
    }
}