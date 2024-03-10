const readline = require('readline');
function isPerfectSquare(number) {
    if (number < 0) {
        return false;
    }
    for (var i = 0; i * i <= number; i++) {
        if (i * i === number) {
            return true;
        }
    }
    return false;
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a number", function(input) {
    var num = parseInt(input);
    
    if (isNaN(num)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        if (isPerfectSquare(num)) {
            console.log(num + " is a perfect square.");
        } else {
            console.log(num + " is not a perfect square.");
        }
    }

    rl.close();
});

