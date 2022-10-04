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

// - Store the 'display value' in a variable somewhere for use in the next step

// - Store the first number input into the calculator when a user presses an 
// operator (presumably the one typed in afterwards) and operate on them when 
// the user presses the "=" key

// -- Once operate() has been called (when "=" is pressed) update the display 
// with the result of the function by using the display-populating code

// -- Figure out how to store all the values and call the operate function with 
// them

// - Specifics:

// -- Don't follow BIDMAS, just consider result of operation between firstOperand 
// and secondOperand
// --- In that regard, see https://mrbuddh4.github.io/calculator/

// -- Don't evaluate more than a single pair of numbers at once
// --- When you type 12, then press +, then type 7, then press -, afterwards, 
// the calculator should:
// ---- 1. Firstly, evaluate the first pair of numbers (in this case, do 12 + 7)
// ---- 2. Secondly, display the result of that calculation (19)
// ---- 3. Thirdly, use that result as the first number in your new calculation, 
// along with the next number typed in (but when the follow operator is pressed)

// -- Round answers with long decimals so they don't overflow the screen

// -- Make sure there won't be an issue if you press "=" before entering all the 
// numbers

// -- Make sure that pressing clear wipes out any existing data and allows the user 
// to start afresh

// -- Deliver a snarky error message if the user tries to divide by 0, and don't 
// let it crash the calculator

// TODO: See TOP's 'Extra Credit' section