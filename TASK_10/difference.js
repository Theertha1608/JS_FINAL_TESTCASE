function absolute(num) {
    if (num < 0) {
        return -num; 
    } else {
        return num; 
    }
}
function calculateDifference(num) {
    let difference = absolute(num - 13); 
    
    if (num > 13) {
        return difference * 2; 
    } else {
        return difference; 
    }
}
function promptUser(message) {
    var response = window.prompt(message);
    return response;
}
let userInput = promptUser("Enter a number:");
userInput = parseFloat(userInput);
if (!isNaN(userInput)) {
    const result = calculateDifference(userInput);
    console.log("The difference is:", result);
} else {
    console.log("Invalid input. Please enter a valid number.");
}
