const readline = require('readline');

function calculateRectangleArea(length, width) {
    return length * width;
}

function sumEvenNumbers(numbers) {
    let sum = 0;
    for (let num of numbers) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}

function sortArray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // Destructuring assignment for swapping
            }
        }
    }
    return numbers;
}

function fibonacciSequence(nTerms) {
    let sequence = [];
    if (nTerms <= 0) {
        return sequence;
    } else if (nTerms === 1) {
        return [0];
    } else if (nTerms === 2) {
        return [0, 1];
    } else {
        sequence = [0, 1];
        while (sequence.length < nTerms) {
            let nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
            sequence.push(nextNum);
        }
        return sequence;
    }
}

// Function to handle user input
function askQuestion(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

async function main() {
    let numbersInput, numbers;

    let length = parseFloat(await askQuestion("Enter the length of the rectangle: "));
    let width = parseFloat(await askQuestion("Enter the width of the rectangle: "));
    let area = calculateRectangleArea(length, width);
    console.log("1. The area of the rectangle is:", area);

    numbersInput = await askQuestion("Enter numbers separated by space: ");
    numbers = numbersInput.split(" ").map(Number);
    let sumEven = sumEvenNumbers(numbers);
    console.log("2. Sum of all even numbers:", sumEven);

    numbersInput = await askQuestion("Enter numbers separated by space: ");
    numbers = numbersInput.split(" ").map(Number);
    let sortedNumbers = sortArray(numbers);
    console.log("3. Sorted array:", sortedNumbers);

    let nTerms = parseInt(await askQuestion("Enter the number of Fibonacci terms: "));
    let fibonacci = fibonacciSequence(nTerms);
    console.log("4. Fibonacci sequence:", fibonacci);
}

main();

