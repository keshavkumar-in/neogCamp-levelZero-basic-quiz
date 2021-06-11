var readlineSync = require("readline-sync");
var chalk = require("chalk");
var error = chalk.bold.red;
var success = chalk.keyword("green");
var info = chalk.keyword("orange");

var score = 0;

var highScore = [
  {
    name: "Keshav Kumar",
    score: 2,
  },
];

var questionOne = {
  question: "What does HTML stand for?\n",
  answer: "Hyper Text Markup Language",
};

var questionTwo = {
  question: "What is the correct HTML element for the largest heading?\n",
  answer: "h1",
};

var questions = [questionOne, questionTwo];

var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName + ", to HTML Basics Quiz.");
console.log("-----------------");

function htmlQuiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score = score + 1;
    console.log(success("Correct! Your score is: " + score));
  } else {
    console.log(error("Wrong! Your score is: " + score));
  }
}

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  htmlQuiz(currentQuestion.question, currentQuestion.answer);
}

console.log(info("-------------"));
console.log(success("\nYour total score is: ", score));

for (var i = 0; i < highScore.length; i++) {
  var currentScore = highScore[i];
  if (score >= currentScore.score) {
    console.log(info("WooHoo!! You have beaten the highest score."));
  }
}
