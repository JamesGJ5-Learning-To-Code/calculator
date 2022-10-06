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

// e) DONE If the decimal button is inactive and we click it, it is made active but we 
// want to augment secondOperand first. Probably going to have to do this in the 
// digit button click event listener. In there, if decimal button is active, 
// want to multiply by 10 and add digit as normal, but later, want to divide 
// firstOperand by 10**(number of decimal digits) before operating or showing 
// result of equals. Increase number of decimal places by 1 whenever a digit is 
// added like this while active.

// f) DONE Make sure what's in the display is also augmented.

// g) DONE Make sure you have declared variables appropriately using let etc.

// h) DONE Amend bug regarding changing mind about operator and this not being doable. 
// To do this, maybe make it so that, when an operator button has just been 
// pressed, "justPressedOperator" is made true. Next, when you press an operator and 
// this is true, all that should happen is that the click should replace 
// queuedOperator with the new operator, and do this before the check for whether 
// the secondOperand is null. When you type in a new digit or equals or trigger 
// reset(), however, justPressedOperator should be made false if it is true.


// 6. Backspace button

// a) Add a backspace button to the HTML with an ID of 'backspace'

// b) Backspace should only affect secondOperand. It shouldn't affect firstOperand. 
// When operator or equals is pressed, backspace should have no effect; when either of 
// these is clicked successfully, secondOperand is made null, so make it so that when 
// secondOperand is null, backspace has no effect. When secondOperand has 
// only one digit, backspace should make it null and not let it show up on the display.


const displayDiv = document.querySelector('#display');


const digitButtons = document.querySelectorAll('.digit');

var countDecimals = function (value) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
    }

digitButtons.forEach((button) => {

    button.addEventListener('click', (e) => {

        if (justPressedEquals === true) {reset();};

        justPressedOperator = false;

        let digit = parseInt(button['id']);

        // If secondOperand === null (when it is time to type in a new number), 
        // have to make it 0 before digits can be "appended" to it by the process 
        // below.
        if (secondOperand === null) {
            secondOperand = 0;
        };

        if (decimalButton.classList.contains('active')) {

            let string = displayDiv.textContent
            console.log(string)
            if (string.includes('.')) {
                string += digit
            } else {
                string = string + '.' + digit
            };

            displayDiv.textContent = string;

            secondOperand = +string;

        } else {

            secondOperand *= 10;
            secondOperand += digit;

            displayDiv.textContent = secondOperand;

        };

    });

});


const decimalButton = document.querySelector('#decimal');

decimalButton.addEventListener('click', (e) => {

    // Don't want pressing decimalButton again to do anything until it is made 
    // inactive
    if (decimalButton.classList.contains('active')) {
        return;
    };

    decimalButton.classList.add('active');

});


const backspaceButton = document.querySelector('#backspace');

backspaceButton.addEventListener('click', (e) => {

    if (secondOperand === null) {
        return;
    };

    if (decimalButton.classList.contains('active')) {

        let string = displayDiv.textContent;

        if (!string.includes('.')) {
            decimalButton.classList.remove('active');

        } else if (string.charAt(string.length - 1) === '.') {
            string = string.slice(0, -1);
            decimalButton.classList.remove('active')

        } else {
            string = string.slice(0, -1);
        };

        displayDiv.textContent = string;

        secondOperand = +string;

    } else {

        secondOperand = Math.floor(secondOperand / 10);

        if (secondOperand === 0) {
            displayDiv.textContent = '_';

        } else {
            displayDiv.textContent = secondOperand;
        };

    };

});


const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach((button) => {

    button.addEventListener('click', (e) => {

        decimalButton.classList.remove('active');

        // If justPressedEquals is true and you leave it true, then the next time 
        // you press a number after pressing this operator, everything is reset instead 
        // of contributing the next number to previous operation/result
        justPressedEquals = false;

        if (justPressedOperator === false) {

            // Don't want anything to perform a new computation if you haven't typed in a new number to 
            // perform the queued operation on (because below the queued operator will 
            // be implemented on firstOperand and secondOperand)
            if (secondOperand === null) return;

            // Clicking the operator button doesn't cause the clicked operator to take 
            // effect immediately, because the clicked operator would have to wait 
            // for the following number to be typed in. Instead, the queued operator 
            // (the last one clicked) is implemented between the result so far and the 
            // last number typed in
            let previousOperatorResult = queuedOperator(firstOperand, secondOperand);
            displayDiv.textContent = previousOperatorResult;

            firstOperand = previousOperatorResult;
            secondOperand = null;

            justPressedOperator = true;

        };

        // Doing this instead of using eval(button['id']), for safety, because 
        // executing JavaScript from a string is a security risk 
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

equalsButton.addEventListener('click', (e) => {

    decimalButton.classList.remove('active');

    justPressedEquals = false;

    // So that equals takes no effect if the last thing clicked was an operator 
    // (because it would try to perform the queuedOperator on a null value) 
    // or if nothing has been typed in yet
    if (secondOperand === null) return;

    // TODO: refactor this code and the same code that appears in the 
    // operatorButtons event listener
    let previousOperatorResult = queuedOperator(firstOperand, secondOperand);
    displayDiv.textContent = previousOperatorResult;

    // So that, when a number is next pressed in immediately afterwards, everything 
    // is reset, so that the stored result and operations can be discontinued
    justPressedEquals = true;

});


const clearButton = document.querySelector('#clear');

function reset() {

    firstOperand = 0;
    secondOperand = null;
    displayDiv.textContent = 0;

    decimalButton.classList.remove('active');

    // This is first because, when number is typed in and operator is clicked, 
    // queued operator will simply add this secondOperand to firstOperand (0), meaning 
    // the stored result will simply be the first number typed in
    queuedOperator = add;
    
    // Want to know this so that, if user clicks an operator and then click another 
    // one (if user changes mind) they can do so without triggering another 
    // computation in operator click listener
    justPressedOperator = false;

    // Specifically, "just pressed equals while secondOperand not null"
    justPressedEquals = false;

};

clearButton.addEventListener('click', (e) => {

    reset();

});

let firstOperand, secondOperand, queuedOperator, justPressedOperator, justPressedEquals;
reset()
