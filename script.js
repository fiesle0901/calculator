document.addEventListener("DOMContentLoaded", function(){
    //Store al components on HTML in our JS

    let clear = document.querySelector("#clear__btn")
    let equal = document.querySelector(".equal")
    let decimal = document.querySelector(".decimal")

    let numbers = document.querySelectorAll(".number")
    let operators = document.querySelectorAll(".operator")

    let previousScreen = document.querySelector("#previous")
    let currentScreen = document.querySelector("#current")

    numbers.forEach((number)=>number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue
    }))

    operators.forEach((op) =>op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        if(result !== "")
            previousScreen.textContent = result + " " + operator;
        else
            previous.textContent = previousValue + " " + operator;

        currentScreen.textContent = currentValue
    }))

    clear.addEventListener("click", function(){
        previousScreen.textContent = '';
        currentScreen.textContent = '';
        previousValue = '';
        currentValue = '';
        operator = ''
        result = ''
    })

    equal.addEventListener("click", function () {
        calculate();

        // Update the previous screen to show the operation
        previousScreen.textContent = previousValue + " " + operator + " " + currentValue + " =";

        // Display result on the current screen
        currentScreen.textContent = result;

        // Reset previousValue to the result
        previousValue = result.toString();
        currentValue = "";
        operator = "";
    });
})

let previousValue = '';
let currentValue = '';
let operator = '';
let result = '';

function handleNumber(number){
    // Maximum of 5 numbers
    if(currentValue.length <=5)
        currentValue += number;
}

function handleOperator(op){
    if (previousValue && currentValue) {
        // Calculate if there's already an operation pending
        calculate();
    }
    operator = op;
     // If there is a result from previous calculation, update the previousValue
     if (result !== "") {
        previousValue = result;
        result = ""; // Clear the result for the next computation
    } else {
        previousValue = currentValue
    }
    currentValue = '';
}

function calculate(){
    
// Convert to number
previousValue = +previousValue;
currentValue = +currentValue;

  switch(operator){
    case"+":
        result = previousValue +currentValue
        break;
    case"-":
        result = previousValue-currentValue
        break;
    case"x":
        result = previousValue*currentValue
    case"/":
        result = previousValue/currentValue
        break;
  }
}
