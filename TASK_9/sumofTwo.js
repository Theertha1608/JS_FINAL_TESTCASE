const readline = require('readline');
function computeSum(a, b) {
    if (a === b) {
        return 3 * (a + b);
    } else {

        return a + b;
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number: ", function(input1) {
    rl.question("Enter the second number: ", function(input2) {
        var num1 = parseInt(input1);
        var num2 = parseInt(input2);

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Invalid input. Please enter valid numbers.");
        } else {
            var result = computeSum(num1, num2);
            console.log("The sum is: " + result);
        }
        rl.close();
    });
});
