function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return add(num1, -num2);
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return multiply(num1, 1 / num2);
};

function operate(operation, num1, num2) {
    return operation(num1, num2);
};

// Create the functions that populate the display when you click the number buttons 
// Should be storing the 'display value' in a variable somewhere for use in next 
// operation
// Use https://mrbuddh4.github.io/calculator/ as an example of the behaviour

// 1. DONE Create a variable called 'displayValue'
// 2. DONE Going to have to listen to see when a digit button is pressed
// 3. DONE When a new digit button is pressed, assign it to displayValue
// 4. DONE Put displayValue on the screen (or directly put the digit on the screen)

const display = document.querySelector('#display')
let displayValue = 0;

const digitButtons = document.querySelectorAll('.digit');

digitButtons.forEach((button) => {

    button.addEventListener('click', (e) => {
        const digit = button['id'];
        display.textContent = digit;

        displayValue = +digit;
    });
});