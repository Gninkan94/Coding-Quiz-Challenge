// variables to keep track of quiz state
var currentQuestionIndex = 0;
//time left value here
var timeLeft = 60;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');


function startQuiz() {
  // hide start screen
  var startScreenEl = document.getElementById('start-screen');
  startScreenEl.setAttribute('class', 'hide');

  // un-hide questions section
  questionsEl.removeAttribute('class');

  // start timer
  timerId = setInterval(clockTick, 1000);

  // show starting time
  timerEl.textContent = timeLeft;

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  var titleEl = document.getElementById('question-title');
  titleEl.textContent = currentQuestion.title //think dot notation

  // clear out any old question choices
  choicesEl.innerHTML = '';

  // loop over choices
  for (var i = 0; i < currentQuestion.choices.length ; i++) {
    // create new button for each choice
    var choice = currentQuestion.choices[i];
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = i + 1 + '. ' + choice;

    // display on the page
    choicesEl.appendChild(choiceNode);
  }
}

function questionClick(event) {
  var buttonEl = event.target;

  // if the clicked element is not a choice button, do nothing.
  if (!buttonEl.matches('.choice')) {
    return;
  }

  // check if user guessed wrong
  if (buttonEl.value !== questions){
    timeLeft-= 5;
    if (timeLeft <0) {
      timeLeft = 0;
    }
    
timerEl.textContent=timeLeft
  }

    currentQuestionIndex ++

    // flash right/wrong feedback on page for half a second


    // move to next question


    // check if we've run out of questions or if time ran out?
    if (timeLeft <= 0 || currentQuestionIndex === questions.length) {

      console.log('gameover')
     
    
    } else {getQuestion();

      
    } 
  }

  function quizEnd() {
    // stop timer
    clearInterval(time);
    // show end screen
    var endScreenEl = document.getElementById('hide');
    endScreenEl.removeAttribute('class');

    // show final score
    var finalScoreEl = document.getElementById('final-scores');
    finalScoreEl.textContent = time;

    // hide questions section
  }

  function clockTick() {
    // update time
    // decrement the variable we are using to track time
    timerEl.textContent = timeLeft --; // update out time

    // check if user ran out of time
    if (time <= 0) {
      quizEnd();
    }
  }
function saveHighscore () {

}
  
  function checkForEnter(event) {
    // "13" represents the enter key
    if (event.key === 'Enter') {
      saveHighscore();
    }
  }

  // user clicks button to submit initials
  //submitBtn.onclick = saveHighscore;

  // user clicks button to start quiz
  startBtn.onclick = startQuiz;

  // user clicks on element containing choices
  choicesEl.onclick = questionClick;

  initialsEl.onkeyup = checkForEnter;
