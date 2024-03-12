function checkPositiveNegative(num1, num2) {
    return (num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0);
}
function promptUser(message) {
    var response = window.prompt(message);
    return response;
}
let firstNumber = promptUser("Enter the first number:");
firstNumber = parseInt(firstNumber);
let secondNumber = promptUser("Enter the second number:");
secondNumber = parseInt(secondNumber);
if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    const result = checkPositiveNegative(firstNumber, secondNumber);
    console.log("Result:", result);
} else {
    console.log("Invalid input. Please enter valid integers.");
}
