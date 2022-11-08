// get html elements
var highScoresLink = document.getElementById('view-high-scores');
var timerText = document.getElementById('timer-text');
var startButton = document.getElementById('start-button');
var largeFont = document.querySelector(".large-font");
var mediumFont = document.querySelector(".medium-font");
// define variables for each choice, for each question. ex. Question 1, Choice 1. Question 1, Choice 2, etc.
var q1c1 = document.createElement("button");
var q1c2 = document.createElement("button");
var q1c3 = document.createElement("button");
var q1c4 = document.createElement("button");
var q2c1 = document.createElement("button");
var q2c2 = document.createElement("button");
var q2c3 = document.createElement("button");
var q2c4 = document.createElement("button");
var q3c1 = document.createElement("button");
var q3c2 = document.createElement("button");
var q3c3 = document.createElement("button");
var q3c4 = document.createElement("button");
var q4c1 = document.createElement("button");
var q4c2 = document.createElement("button");
var q4c3 = document.createElement("button");
var q4c4 = document.createElement("button");
var q5c1 = document.createElement("button");
var q5c2 = document.createElement("button");
var q5c3 = document.createElement("button");
var q5c4 = document.createElement("button");
// create elements for high scores
var answerDisplay = document.createElement("div");
var enterInitialsMessage = document.createElement("div");
var enterInitialsInput = document.createElement("input");
var submitButton = document.createElement("button");
var highScoresText = document.createElement("div");
var highScoresListEl = document.querySelector('#high-scores-list');
var goBackButton = document.createElement("button");
// create variables for tracking time and score
var timer;
var timerCount;
var scoreCount;
var highScores = [];

function startGame() {
    //initial time on countdown starting from 60
    timerCount = 60;
    scoreCount = 0;
    // Prevents start button from being clicked when round is in progress
    startButton.remove();
    //trigger startTimer and load first question
    startTimer();
    firstQuestion();
}

function startTimer() {
//Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerText.textContent = timerCount;
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      endGame();
    }
    else if (timerCount < 0) {
        // a wrong answer with less than 10 seconds left will cause timer to go negative. This will prevent that.
        clearInterval(timer);
        endGame();
    }
  }, 1000);
}

function firstQuestion() {
    //display first question
    largeFont.textContent = "Which one of these is not a Javascript datatype?";
    mediumFont.textContent = "";
    //display first question choices
    //To do: display in Flex columns
    //To do: define questions and choices in array, and loop through array to display
    mediumFont.appendChild(q1c1);
    mediumFont.appendChild(q1c2);
    mediumFont.appendChild(q1c3);
    mediumFont.appendChild(q1c4);
    q1c1.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q1c2.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q1c3.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q1c4.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q1c1.textContent = "Select";
    q1c2.textContent = "Number";
    q1c3.textContent = "String";
    q1c4.textContent = "Boolean";
    //display first question answer
    q1c1.addEventListener("click", function() {
        scoreCount = scoreCount + 10;
        console.log("first question right");
        console.log("score: " + scoreCount);
        rightAnswer();
        secondQuestion();
    });
    q1c2.addEventListener("click", function() {
        console.log("first question wrong");
        wrongAnswer();
        secondQuestion();
    });
    q1c3.addEventListener("click", function() {
        console.log("first question wrong");
        wrongAnswer();
        secondQuestion();
    });
    q1c4.addEventListener("click", function() {
        console.log("first question wrong");
        wrongAnswer();
        secondQuestion();
    });

}

function secondQuestion() {
    largeFont.textContent = "Which one of these ways is NOT how you create a string?";
    // remove previous question choices
    q1c1.remove();
    q1c2.remove();
    q1c3.remove();
    q1c4.remove();
    // load second question choices
    mediumFont.appendChild(q2c1);
    mediumFont.appendChild(q2c2);
    mediumFont.appendChild(q2c3);
    mediumFont.appendChild(q2c4);
    q2c1.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q2c2.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q2c3.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q2c4.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q2c1.textContent = "Enclose in single quotes";
    q2c2.textContent = "Enclose in backticks";
    q2c3.textContent = "Enclose in double quotes";
    q2c4.textContent = "Enclose in <string> tags";
    
    q2c1.addEventListener("click", function() {
        console.log("second question wrong");
        wrongAnswer();
        thirdQuestion();
    });
    q2c2.addEventListener("click", function() {
        console.log("second question wrong");
        wrongAnswer();
        thirdQuestion();
    });
    q2c3.addEventListener("click", function() {
        console.log("second question wrong");
        wrongAnswer();
        thirdQuestion();
    });
    q2c4.addEventListener("click", function() {
        console.log("second question right");
        rightAnswer();
        scoreCount = scoreCount + 10;
        console.log("score: " + scoreCount);
        thirdQuestion();
    });

}

function thirdQuestion() {
    largeFont.textContent = "Which one of these statements is not true?";
    q2c1.remove();
    q2c2.remove();
    q2c3.remove();
    q2c4.remove();
    mediumFont.appendChild(q3c1);
    mediumFont.appendChild(q3c2);
    mediumFont.appendChild(q3c3);
    mediumFont.appendChild(q3c4);
    q3c1.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q3c2.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q3c3.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q3c4.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q3c1.textContent = "JavaScript for loops are used after three loops";
    q3c2.textContent = "JavaScript for loops can be used to iterate through arrays";
    q3c3.textContent = "JavaScript for...in loops are used to iterate through an object's properties";
    q3c4.textContent = "JavaScript for...of loops can iterate over iterable objects";

    q3c1.addEventListener("click", function() {
        console.log("third question right");
        rightAnswer();
        scoreCount = scoreCount + 10;
        console.log("score: " + scoreCount);
        fourthQuestion();
    });
    q3c2.addEventListener("click", function() {
        console.log("third question wrong");
        wrongAnswer();
        fourthQuestion();
    });
    q3c3.addEventListener("click", function() {
        console.log("third question wrong");
        wrongAnswer();
        fourthQuestion();
    });
    q3c4.addEventListener("click", function() {
        console.log("third question wrong");
        wrongAnswer();
        fourthQuestion();
    });
}

function fourthQuestion() {
    largeFont.textContent = "Which operator is used to assign a value to a variable?";
    q3c1.remove();
    q3c2.remove();
    q3c3.remove();
    q3c4.remove();
    mediumFont.appendChild(q4c1);
    mediumFont.appendChild(q4c2);
    mediumFont.appendChild(q4c3);
    mediumFont.appendChild(q4c4);
    q4c1.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q4c2.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q4c3.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q4c4.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q4c1.textContent = "===";
    q4c2.textContent = "==";
    q4c3.textContent = "=";
    q4c4.textContent = "=|";

    q4c1.addEventListener("click", function() {
        console.log("fourth question wrong");
        wrongAnswer(); 
        fifthQuestion();
    });
    q4c2.addEventListener("click", function() {
        console.log("fourth question wrong");
        wrongAnswer();
        fifthQuestion();
    });
    q4c3.addEventListener("click", function() {
        console.log("fourth question right");
        rightAnswer();
        scoreCount = scoreCount + 10;
        console.log("score: " + scoreCount);
        fifthQuestion();
    });
    q4c4.addEventListener("click", function() {
        console.log("fourth question wrong");
        wrongAnswer();
        fifthQuestion();
    });

}

function fifthQuestion() {
    largeFont.textContent = "To comment out a line of code in JavaScript, you use which of the following?";
    q4c1.remove();
    q4c2.remove();
    q4c3.remove();
    q4c4.remove();
    mediumFont.appendChild(q5c1);
    mediumFont.appendChild(q5c2);
    mediumFont.appendChild(q5c3);
    mediumFont.appendChild(q5c4);
    q5c1.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q5c2.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q5c3.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q5c4.setAttribute("style", "font-size: 20px; margin-top: 20px; margin-bottom: 20px;");
    q5c1.textContent = "//";
    q5c2.textContent = "<comment>";
    q5c3.textContent = "{start comment}";
    q5c4.textContent = "(comment)";
    q5c1.addEventListener("click", function() {
        console.log("fifth question right");
        rightAnswer();
        scoreCount = scoreCount + 10;
        console.log("score: " + scoreCount);
        displayHighScores();
    });
    q5c2.addEventListener("click", function() {
        console.log("fifth question wrong");
        wrongAnswer();
        displayHighScores();
    });
    q5c3.addEventListener("click", function() {
        console.log("fifth question wrong");
        wrongAnswer();
        displayHighScores();
    });
    q5c4.addEventListener("click", function() {
        console.log("fifth question wrong");
        wrongAnswer();
        displayHighScores();
    });
}

// display Correct if answer was correct
function rightAnswer() {
    mediumFont.appendChild(answerDisplay);
    answerDisplay.setAttribute("style", "font-size: 2em; margin-top: 20px; margin-bottom: 20px;");
    answerDisplay.textContent = "Correct!";
}
// display Wrong if answer was wrong
function wrongAnswer() {
    mediumFont.appendChild(answerDisplay);
    answerDisplay.setAttribute("style", "font-size: 2em; margin-top: 20px; margin-bottom: 20px;");
    answerDisplay.textContent = "Incorrect!";
    // take 10 seconds off timer
    if (timerCount > 10) {
        timerCount = timerCount - 10; }
    else if (timerCount < 10) {
        timerCount = 0;
    }
}

function endGame() {
    //display end game
    console.log("end game");
    startButton.remove();
    clearInterval(timer);
    //trigger display high scores
   displayHighScores();
}

function displayHighScores() {
    console.log("display high scores. score: " + scoreCount);
    console.log("timer count: " + timerCount);
    timeElapsed = 60 - timerCount;
    console.log("time elapsed:" + timeElapsed);
    largeFont.textContent = "All done!";
    mediumFont.textContent = "Your final score is " + scoreCount + " in " + timeElapsed + " seconds.";
    console.log("final score:" + scoreCount + " in " + timeElapsed + " seconds.");
    timerCount = 0;
    //display initials input
    mediumFont.appendChild(enterInitialsMessage);
    enterInitialsMessage.setAttribute("style", "font-size: 1em; margin-top: 20px; margin-bottom: 20px;");
    enterInitialsMessage.textContent = "Enter initials: ";
    //create form to enter initials
    mediumFont.appendChild(enterInitialsInput);
    enterInitialsInput.setAttribute("type", "text");
    enterInitialsInput.setAttribute("placeholder", "Enter initials");
    enterInitialsInput.setAttribute("name", "user-initials");
    enterInitialsInput.setAttribute("id", "user-initials");
    mediumFont.appendChild(submitButton);
    submitButton.setAttribute("id","submit-button");
    submitButton.textContent = "Submit";
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    saveScore();
    }
);

function saveScore() {
    //save user initials and score to local storage upon clicking Submit button
    var initialsInput = document.querySelector("#user-initials").value;
    var initialsInputAndScore = {
        "initials": initialsInput,
        "score": scoreCount + " in " + timeElapsed + " seconds.",
        };
    console.log(initialsInputAndScore);
    highScores.push(initialsInputAndScore);
    initialsInputAndScore = "";
    localStorage.setItem("savedHighscores", JSON.stringify(highScores));
    console.log(highScores);
    renderHighScores();
}

function renderHighScores () {
    mediumFont.appendChild(highScoresText);
    highScoresText.textContent = "High Scores";
    highScoresText.setAttribute("style", "font-size: 2em; margin-top: 20px; margin-bottom: 20px;");
    highScoresText.appendChild(highScoresListEl);
    // Render a new li for each highscore
    for (var i = 0; i < highScores.length; i++) {
        var highscoreEntry = highScores[i];
        var li = document.createElement("li");
        li.textContent = highscoreEntry.initials + " - " + highscoreEntry.score;
        li.setAttribute("data-index", i);
        highScoresListEl.appendChild(li);
    }
    highScoresListEl.append(goBackButton);
    goBackButton.textContent = "Back";
}





// if view high scores is clicked during quiz, end any games in process
highScoresLink.addEventListener('click', endGame);

// startGame when startButton is clicked
startButton.addEventListener('click', startGame);

goBackButton.addEventListener('click', function() {
    highScoresListEl.remove();
    highScoresText.remove();
    goBackButton.remove();
    startGame();
    scoreCount = 0;
    }
);

