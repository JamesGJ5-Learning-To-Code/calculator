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

// Create the functions that populate the display when you click the number buttons 
// Should be storing the 'display value' in a variable somewhere for use in next 
// operation
// Use https://mrbuddh4.github.io/calculator/ as an example of the behaviour

// 1. DONE Create a variable called 'displayValue'
// 2. DONE Going to have to listen to see when a digit button is pressed
// 3. DONE When a new digit button is pressed, assign it to displayValue
// 4. DONE Put displayValue on the screen (or directly put the digit on the screen)

// So first, the calculator shows a 0. When you click a digit, it shows that digit. 
// If you click another digit, it appends that digit to the current display value. 
// You could append to 0 initially too, and then just get rid of the 0. However, 
// when an operator is pressed, the cumulative result so far is shown. Then, when 
// a new digit is pressed, the operation is done on that cumulative result and 
// the new digit, but the new digit alone is shown. When equals sign is pressed, 
// same display value is shown as when any other operator is pressed (the 
// cumulative value so far)

// DONE So, have to store: firstOperand and secondOperand
// DONE Must also store the secondOperand as it is being typed out

let firstOperand = 0;

const display = document.querySelector('#display');
let secondOperand = 0;

const digitButtons = document.querySelectorAll('.digit');

digitButtons.forEach((button) => {

    button.addEventListener('click', (e) => {
        const digit = +button['id'];

        secondOperand *= 10;
        secondOperand += digit;

        display.textContent = secondOperand;
    });
});

// 1. DONE Every time an operator is pressed, must show firstOperand, no matter 
// what the operator is.
// 2. However, must also trigger the operation on firstOperand and 
// secondOperand.
// - So, we would have to click an operator button but delay its operation, because 
// we would then have to enter a secondOperand; perhaps the operation could be 
// done the next time any operator (equals, multiply, divide, plus or -) is 
// pressed, because then we will know the secondOperand has been typed in full.
// - We would have to initialise this as something, so that the first operator 
// clicked could follow this rule too.
// - Since firstOperand is 0, we can just add firstOperand to secondOperand the 
// first time we click an operator button. If the first button clicked is an 
// operator, secondOperand will also be 0, so 0 will be added to 0 and firstOperand 
// made 0, so no big deal; if we turn on calculator and type numbers (making 
// secondOperand nonzero) then press an operator, 0 will be added to secondOperand 
// and secondOperand made the result, so no big deal.
// - Will have to perform this logic before displaying text content.
// - Will have to reset secondOperand to 0.

const operatorButtons = document.querySelectorAll('.operator');
let nextOperation = add;

operatorButtons.forEach((button) => {

    button.addEventListener('click', (e) => {
        
        firstOperand = nextOperation(firstOperand, secondOperand);
        secondOperand = 0;

        display.textContent = firstOperand;

        switch(button['id']) {
            case "add":
                nextOperation = add;
                break;
            case "subtract":
                nextOperation = subtract;
                break;
            case "multiply":
                nextOperation = multiply;
                break;
            case "divide":
                nextOperation = divide;
                break;
        };
    });
});