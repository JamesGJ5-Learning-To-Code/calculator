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

// function operate(operator, num1, num2) {
//     return opererator(num1, num2);
// };


// From https://www.theodinproject.com/lessons/foundations-calculator:

// Recommendations:
// - Create functions that populate the display when you click the number buttons
// --# Yep, whenever any digit button is pressed, you want to make it the screen 
// content if it is the first digit pressed since an operator or since turning 
// on the calculator, and if that's not the case, multiply the screen content by 
// 10 and add the new digit to the result. Can do this for the first typed in digit 
// by multiplying 0 by 10 and adding the first typed digit to the result.

// - Store the 'display value' in a variable somewhere for use in the next step

// - Store the first number input into the calculator when a user presses an 
// operator (presumably the one typed in afterwards) and operate on them when 
// the user presses the "=" key

// -- Once operate() has been called (when "=" is pressed) update the display 
// with the result of the function by using the display-populating code
// ---# Probably will assign the result to displayValue

// -- Figure out how to store all the values and call the operate function with 
// them

// - Specifics:

// -- Don't follow BIDMAS, just consider result of operation between a fist operand  
// and a second
// --- In that regard, see https://mrbuddh4.github.io/calculator/
// ---# Going to operate between variables firstOperand and secondOperand

// -- Don't evaluate more than a single pair of numbers at once
// --- When you type 12, then press +, then type 7, then press -, afterwards, 
// the calculator should:
// ---- 1. Firstly, evaluate the first pair of numbers (in this case, do 12 + 7)
// ---- 2. Secondly, display the result of that calculation (19)
// ---- 3. Thirdly, use that result as the first number in your new calculation, 
// along with the next number typed in (but when the follow operator is pressed)
// -----# Since we're only doing the operation when we next operator, we must store 
// both the first operand and second operand in memory. Will probably create 
// variables firstOperand and secondOperand, but not necessarily make it so that 
// secondOperand is the displayed value

// -- Round answers with long decimals so they don't overflow the screen
// ---# Will probably just round every result to a certain number of decimal places

// -- Make sure there won't be an issue if you press "=" before entering all the 
// numbers
// ---# Maybe have firstOperand and secondOperand null by default and only do 
// any sort of operation if they are both truthy

// -- Make sure that pressing clear wipes out any existing data and allows the user 
// to start afresh
// ---# Might have to reset firstOperand and secondOperand to null, and displayValue 
// to 0
// ---# Maybe write this into the divide() function definition itself

// -- Deliver a snarky error message if the user tries to divide by 0, and don't 
// let it crash the calculator
// ---# Probably want to implement clear when this happens, but don't want to clear 
// the display immediately... Instead, maybe we could have it so that the message 
// remains for a few seconds. If another button is pressed in the time it remains, 
// we are fast-tracked to clear and then the button operates as normal.

// Extra Credit:

// - Allow pressing a . button to enable the input of decimals, but don't allow 
// them to press it again--if there's a decimal button in the display, make it 
// so that the decimal button is not pressable.

// - Practise your CSS skills, at least make the operations a different color 
// from the keypad buttons.

// - Add a "backspace" button, so the user can undo if they click the wrong number.

// - Add keyboard support.


// Step-by-step plan:

// 1. DONE Load all buttons and the display div onto the page

// 2. DONE Create event listener skeletons for each of the button types

// 3. Start with what happens when you have just turned the calculator on and you: 
//  -> Click digit buttons (digits should populate the display)
//  -> Click an operator button or equals button (nothing should happen)
// a) DONE In either case, will have to have firstOperand initialised as 0 and secondOperand 
// initialised as null.
// b) DONE Then, when you type in a number, replace secondOperand with 
// 0 if it is null and start updating it and populating the display with it. 
// c) DONE If you press an operator or equals and secondOperand is null, do nothing.

// 4. After the assurances made above, it seems we must now consider what happens 
// when you press an operator or equals and the secondOperand is NOT null.
// a) DONE First, do this for the non-equals operators. Will probably initialise 
// queuedOperator as addition (the name of the function), so that when another operator 
// is pressed and secondOperand has its first number since the calculator is 
// turned on, it simply adds this to firstOperand (0) and makes the firstOperand the 
// result and also displays the result. The operator just pressed then has its function assigned to 
// queuedOperator for subsequent operations, and secondOperand is made null so that further 
// operator (and equals) button clicks without typing in a number first do nothing.

// b) DONE Make sure things are ok when you press the equals button and then an operator:
//  i) DONE So, when you press the equals button, you simply want to implement 
// queuedOperator on firstOperand and secondOperand if secondOperand is not null.
//  ii) DONE You also want to display the result on the screen as usual.
//  iii) DONE However, make sure you don't change firstOperand and secondOperand, so that 
//  if you press another operator, then the same operation occurs, the same result 
//  is shown and you can type new numbers as usual.

// c) DONE Make sure things are ok when you press the equals button and then start 
// typing another number from scratch. Current issue is that, when you press equals 
// and start typing out another number, secondOperand is not null, so secondOperand 
// just gets modified as it is. One way we could prevent this is by adding a 
// variable to tell us whether or not = has just been pressed, so that when we 
// type a new number in, we can check if it has been pressed. If it has, call 
// clear to reset things before going on to continue typing the number in as 
// normal. We'd have to: 
//  i) DONE Create the variable (justPressedEquals) telling us if equals has just been 
//  pressed
//  ii) DONE Create a 'clear' function (resetting firstOperand, secondOperand, 
//  queuedOperator and justPressedEquals and displayDiv)
//  iii) DONE Add the aforementioned logic to the digitButtons event listener.

// 5. Time for decimal stuff.

// a) DONE Make a decimal button in index.html

// b) DONE Make it so that, when you click the decimal button, nothing happens if it 
// has the class "active". Otherwise, give it a class of "active".

// d) DONE When you press an operator or equals sign or clear button, make it so that 
// the decimal button becomes inactive.

// e) If the decimal button is inactive and we click it, it is made active but we 
// want to augment secondOperand first. Probably going to have to do this in the 
// digit button click event listener. In there, if decimal button is active, 
// want to multiply by 10 and add digit as normal, but later, want to divide 
// firstOperand by 10**(number of decimal digits) before operating or showing 
// result of equals. Increase number of decimal places by 1 whenever a digit is 
// added like this while active.

// f) Make sure what's in the display is also augmented.


let firstOperand = 0;
let secondOperand = null;

const displayDiv = document.querySelector('#display');


const digitButtons = document.querySelectorAll('.digit');

digitButtons.forEach((button) => {

    button.addEventListener('click', (e) => {

        if (justPressedEquals === true) {
            reset();
        };

        digit = parseInt(button['id']);

        if (secondOperand === null) {
            secondOperand = 0;
        };

        secondOperand *= 10;
        secondOperand += digit;

        if (decimalButton.classList.contains('active')) {
            numberOfDecimalDigits += 1;
        };

        displayDiv.textContent = secondOperand;
    });
});


const decimalButton = document.querySelector('#decimal');

// This will be incremented in the event listener for digit clicks, and made 0 
// again when an operator, equals or clear is pressed.
let numberOfDecimalDigits = 0;

decimalButton.addEventListener('click', (e) => {

    if (decimalButton.classList.contains('active')) {
        return;
    };

    decimalButton.classList.add('active');

});


let queuedOperator = add;

const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach((button) => {

    button.addEventListener('click', (e) => {

        decimalButton.classList.remove('active');

        if (secondOperand === null) {
            return;
        };

        if (numberOfDecimalDigits > 0) {
            secondOperand /= (10 ** numberOfDecimalDigits);
            numberOfDecimalDigits = 0;
        };

        previousOperatorResult = queuedOperator(firstOperand, secondOperand);
        displayDiv.textContent = previousOperatorResult;

        firstOperand = previousOperatorResult;
        secondOperand = null;

        switch (button['id']) {
            case "add":
                queuedOperator = add;
                break;
            case "subtract":
                queuedOperator = subtract;
                break;
            case "multiply":
                queuedOperator = multiply;
                break;
            case "divide":
                queuedOperator = divide;
                break;
        };

    });
});


const equalsButton = document.querySelector('#equals');

// Specifically, "just pressed equals while secondOperand not null"
let justPressedEquals = false;

equalsButton.addEventListener('click', (e) => {

    decimalButton.classList.remove('active');

    if (secondOperand === null) {
        return;
    };

    // TODO: refactor this code and the same code that appears in the 
    // operatorButtons event listener
    previousOperatorResult = queuedOperator(firstOperand, secondOperand);
    displayDiv.textContent = previousOperatorResult;

    justPressedEquals = true;

});


const clearButton = document.querySelector('#clear');

function reset() {

    firstOperand = 0;
    secondOperand = null;
    displayDiv.textContent = 0;

    queuedOperator = add;
    justPressedEquals = false;

    decimalButton.classList.remove('active');

    numberOfDecimalDigits = 0;

};

clearButton.addEventListener('click', (e) => {

    reset();

});
