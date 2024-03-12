function checkNumbers(num1, num2) {
    return (num1 === 50 || num2 === 50 || num1 + num2 === 50);
}
function promptUser(message) {
    var response = window.prompt(message);
    return response;
}
let firstNumber = promptUser("Enter the first number:");
firstNumber = parseFloat(firstNumber);
let secondNumber = promptUser("Enter the second number:");
secondNumber = parseFloat(secondNumber);
if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    const result = checkNumbers(firstNumber, secondNumber);
    console.log("Result:", result);
} else {
    console.log("Invalid input. Please enter valid numbers.");
}
