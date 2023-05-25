// variables to keep track of quiz state
var currentQuestionIndex = 0;
//time left value here
var timeLeft = 20;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('timer');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');


function startQuiz() {
  // hide start screen
  var startScreenEl = document.getElementById('hide');
  startScreenEl.setAttribute('class', 'questions');

  // un-hide questions section
  questionsEl.removeAttribute('hide');

  // start timer
  timerId = setInterval(clockTick, 1000);

  // show starting time
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questionsEl[currentQuestionIndex];

  // update title with current question
  var titleEl = document.getElementById('');
  titleEl.textContent = document.getElementById(currentQuestion); //think dot notation

  // clear out any old question choices
  choicesEl.innerHTML = '';

  // loop over choices
  for (var i = 0; i < currentQuestion.choice ; i++) {
    // create new button for each choice
    var choice = currentQuestion.choices[i];
    var choiceNode = document.createElement('');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = i + 1 + '. ' + choice;

    // display on the page
    choicesEl.appendChild();
  }
}

function questionClick(event) {
  var buttonEl = event.target;

  // if the clicked element is not a choice button, do nothing.
  if (!buttonEl.matches('.choice')) {
    return;
  }

  // check if user guessed wrong
  if () {
    

  }

    // penalize time




    // display new time on page


    // flash right/wrong feedback on page for half a second


    // move to next question


    // check if we've run out of questions or if time ran out?
    if (timeLeft) {

      //if it did ???

    } else {

      // if it didnt??
    }
  }

  function quizEnd() {
    // stop timer

    // show end screen
    var endScreenEl = document.getElementById('');
    endScreenEl.removeAttribute('class');

    // show final score
    var finalScoreEl = document.getElementById('');
    finalScoreEl.textContent = time;

    // hide questions section
  }

  function clockTick() {
    // update time
    // decrement the variable we are using to track time
    timerEl.textContent = ; // update out time

    // check if user ran out of time
    if (time <= 0) {
      quizEnd();
    }
  }

  function saveHighscore() {
    // get value of input box
    var initials = initialsEl.value.trim();

    // make sure value wasn't empty
    if () {

      // get saved scores from localstorage, or if not any, set to empty array

      var highscores =
        JSON.parse() /* what would go inside the PARSE??*/ || [];

      // format new score object for current user
      var newScore = {
        score: time,
        initials: initials,
      };

      // save to localstorage
      highscores.push(newScore);
      window.localStorage.setItem('highscores', JSON.stringify(/* What would we put inside STRINGIFY? */));

      // redirect to next page
      window.location.href = '';
    }
  }

  function checkForEnter(event) {
    // "13" represents the enter key
    if (event.key === 'Enter') {
      saveHighscore();
    }
  }

  // user clicks button to submit initials
  submitBtn.onclick = saveHighscore;

  // user clicks button to start quiz
  startBtn.onclick = startQuiz;

  // user clicks on element containing choices
  choicesEl.onclick = questionClick;

  initialsEl.onkeyup = checkForEnter;
}
