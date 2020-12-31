
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

const myQuestions = [
  {
    question: "Which of the following statement is correct as regard to the difference between a machine and a structure?",
    answers: {
      a: "A machine transforms the available energy into some useful work, whereas in a structure no energy is transformed into useful work",
      b: "The parts of a machine move relative to one another, whereas the members of a structure do not move relative to one another.",
      c: "The links of a machine may transmit both power and motion, whereas the members of a structure transmit forces only.",
      d: "All the above statement"
    },
    correctAnswer: "d"
  },

  {
    question: "A kinematic chain is known as a mechanism when",
    answers: {
      a: "Three of the links is fixed",
      b: "Two of the links is fixed",
      c: "One of the links is fixed",
      d: "None of the above"
    },
    correctAnswer: "c"
  },

  {
    question: "The Grubler’s criterion for determining the degrees of freedom (n) of a mechanism having plane motion is",
    answers: {
      a: "N= 4(l-1)-3j",
      b: "N= 3(l-1)-2j",
      c: "N= 2(l-1)-2j",
      d: "N= (l-1)- j"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the use of beam engine?",
    answers: {
      a: "To convert oscillatory motion into rotary motion",
      b: "To convert rotary motion into oscillatory motion",
      c: "To convert rotary motion into reciprocating motion",
      d: "To convert reciprocating motion into rotary motion"
    },
    correctAnswer: "c"
  },
  {
    question: "How many revolute joints are there in a four bar mechanism",
    answers: {
      a: "1",
      b: "4",
      c: "6",
      d: "8"
    },
    correctAnswer: "b"
  }
];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
