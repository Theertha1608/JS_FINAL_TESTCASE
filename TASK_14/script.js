let quiz = [
    {
        question: "What symbol is used to display a message on the console in JavaScript?",
        options: ["alert()", "console.log()", "print()", "message()"],
        correctAnswer: "console.log()"
      },
    {
        question: "What keyword is used to create a simple loop in JavaScript?",
        options: ["repeat()", "loop()", "for", "while"],
        correctAnswer: "for"
      },
      {
        question: "How do you create a list of items in HTML?",
        options: ["<list>", "<items>", "<ul>", "<menu>"],
        correctAnswer: "<ul>"
      },
    {
        question: "What symbol is used to indicate comments in JavaScript?",
        options: ["//", "--", "**", "/* */"],
        correctAnswer: "//"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["let", "var", "const", "int"],
        correctAnswer: "let"
    }
];

function startQuiz() {
    let score = 0;
    for (let i = 0; i < quiz.length; i++) {
        let question = quiz[i].question;
        let options = quiz[i].options.join("\n");
        let userAnswer = prompt(question + "\n\n" + options);
        if (userAnswer !== null) {
            userAnswer = userAnswer.trim();
            if (userAnswer.toLowerCase() === quiz[i].correctAnswer.toLowerCase()) {
                alert("Correct!");
                score++;
            } else {
                alert("Incorrect. The correct answer is: " + quiz[i].correctAnswer);
            }
        } else {
            alert("Quiz terminated. You didn't answer all questions.");
            break;
        }
    }
    alert("Quiz ended. Your score is: " + score + "/" + quiz.length);
}

