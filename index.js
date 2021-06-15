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
  question: "What is my age?\n",
  answer: "23",
};

var questionTwo = {
  question: "Where do I live?\n",
  answer: "Patna",
};

var questionThree = {
  question: "What is my favourite subject?\n",
  answer: "Computer Science",
};

var questions = [questionOne, questionTwo, questionThree];

var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName + ", to Do You Know Me Quiz.");
console.log("-----------------");

function basicQuiz(question, answer) {
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
  basicQuiz(currentQuestion.question, currentQuestion.answer);
}

console.log(info("-------------"));
console.log(success("\nYour total score is: ", score));

for (var i = 0; i < highScore.length; i++) {
  var currentScore = highScore[i];
  if (score >= currentScore.score) {
    console.log(info("WooHoo!! You have beaten the highest score."));
  }
}
