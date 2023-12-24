const display = document.getElementById('display');

function appendToDisplay(input) {
    const finalChar = display.value.length-1;
    //If display contains no inputs yet, add the first input
    if (display.value === '0'){
        display.value = input;
    }

    // If the same operator input is added, skip over input
    else if ((display.value[finalChar] === '+' && input === '+') || 
    (display.value[finalChar] === '-' && input === '-') ||
    (display.value[finalChar] === '*' && input === '*') ||
    (display.value[finalChar] === '/' && input === '/')) {}

    //Add input to Calculator Display
    else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = '0';
}


function evaluateDisplay() {
    try {
            display.value = eval(display.value);
    }
    catch (error){
        display.value = "Error"
    }

}

function backspace(){

    //If display value has 2 or more digits, remove the last digit
    if (display.value.length != 1){
        display.value = display.value.substring(0, display.value.length-1)
    }
    else {
        //If display value has 1 digit, set display to 0
        display.value = '0';
    }


}

function appendClosingToDisplay(){
    //Can not start with closing bracket as first character
    if (display.value === '0'){
    }
    //If closing bracket is not first character, add closing bracket
    else {
        display.value += ')'
    }
}