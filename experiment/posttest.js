
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
      question: "Which of the following is an inversion of four bar kinematic chain?",
      answers: {
        a: "Reciprocating engine",
        b: "Rotary engine",
        c: "Oscillating Engine",
        d: "Beam engine"
      },
      correctAnswer: "a"
    },
    {
        question: "Inversions of Four Bar Chain: Match list 1 with list 2<br><img src=\"./images/posttest1.png\"\/>",
        answers: {
        a: "A-3, B-2, C-1, D-4",
        b: "A-2, B-1, C-3, D-4",
        c: "A-4, B-2, C-3, D-1",
        d: "A-2, B-3, C-4, D-1"
        },
        correctAnswer: "b"
    },
    {
      question: "What is the Grashof linkage criterion?",
      answers: {
        a: "s+l &gt; p+q",
        b: "s+l &lt; p+q",
        c: "s+p &gt; l+q",
        d: "s+p &lt; l+q"
      },
      correctAnswer: "b"
    },
    {
      question: "How many equations in total are formed in the process of finding out the forces on each link?",
      answers: {
        a: "3",
        b: "6",
        c: "9",
        d: "12"
      },
      correctAnswer: "c"
    },
    {
      question: "How many forces are acting on each link due to other links?",
      answers: {
        a: "2",
        b: "3",
        c: "4",
        d: "5"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the order of analysis of the four bar linkage?",
      answers: {
        a: "Position analysis, Velocity analysis, Dynamic Analysis, Acceleration analysis",
        b: "Dynamic Analysis, Acceleration analysis, Position analysis, Velocity analysis",
        c: "Position analysis, Velocity analysis, Acceleration analysis, Dynamic Analysis",
        d: "Dynamic Analysis, Position analysis, Velocity analysis, Acceleration analysis"
      },
      correctAnswer: "c"
    },
    {
      question: "How many degrees of freedom does a four bar mechanism have?",
      answers: {
        a: "0",
        b: "1",
        c: "2",
        d: "3"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the shortest link for the following category of four bar mechanism?<br>1. Double crank (s + l &lt; p + q)<br>2. Double rocker (s + l &lt; p + q)",
      answers: {
        a: "Frame and coupler",
        b: "Frame and side",
        c: "Coupler and side",
        d: "Coupler and frame"
      },
      correctAnswer: "a"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
