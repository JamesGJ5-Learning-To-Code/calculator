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

// TODO: See TOP's 'Extra Credit' section


// Step-by-step plan:

// 1. DONE Load all buttons and the display div onto the page
// 2. Create event listener skeletons for each of the button types

const displayDiv = document.querySelector('#display');

const digitButtons = document.querySelectorAll('.digit');

const operatorButtons = document.querySelectorAll('.operator');

const clearButton = document.querySelector('#clear');