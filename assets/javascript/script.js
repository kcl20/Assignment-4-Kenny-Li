var highScoresLink = document.getElementById('view-high-scores');
var timerText = document.getElementById('timer-text');
var startButton = document.getElementById('start-button');

var largeFont = document.querySelector(".large-font");
var mediumFont = document.querySelector(".medium-font");

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

var answerDisplay = document.createElement("div");
var enterInitialsMessage = document.createElement("div");
var enterInitialsInput = document.createElement("input");
var submitButton = document.createElement("button");
var highScoresText = document.createElement("div");
var highScoresListEl = $('#high-scores-list');
var goBackButton = document.createElement("button");


var timer;
var timerCount;
var scoreCount = 0;
var highScores = [];

function startGame() {
    //initial time on countdown
    timerCount = 60;
    // Prevents start button from being clicked when round is in progress
    startButton.remove();
    //trigger startTimer
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
    //To do: add event listeners to each choice
    //To do: display in Flex columns
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
    q1c1.remove();
    q1c2.remove();
    q1c3.remove();
    q1c4.remove();

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

function rightAnswer() {
    mediumFont.appendChild(answerDisplay);
    answerDisplay.setAttribute("style", "font-size: 2em; margin-top: 20px; margin-bottom: 20px;");
    answerDisplay.textContent = "Correct!";

}
function wrongAnswer() {
    mediumFont.appendChild(answerDisplay);
    answerDisplay.setAttribute("style", "font-size: 2em; margin-top: 20px; margin-bottom: 20px;");
    answerDisplay.textContent = "Incorrect!";
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
    //trigger display high scores
   displayHighScores();
}

function displayHighScores() {
    //display high scores
    timerText.remove();
    console.log("display high scores. score: " + scoreCount);
    console.log("timer count: " + timerCount);
    timeElapsed = 60 - timerCount;
    console.log("time elapsed:" + timerCount);
    largeFont.textContent = "All done!";
    mediumFont.textContent = "Your final score is " + scoreCount + timeElapsed;
    console.log("final score:" + scoreCount + timeElapsed);

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
    var initials = document.querySelector("#user-initials").value;
    var initialsAndScore= {
        initials: initials,
        score: scoreCount + timeElapsed,
        };
    console.log(initialsAndScore);
    localStorage.setItem("initialsAndScore", JSON.stringify(initialsAndScore));

    mediumFont.appendChild(highScoresText);
    highScoresText.textContent = "High Scores";
    highScoresText.setAttribute("style", "font-size: 2em; margin-top: 20px; margin-bottom: 20px;");
    highScoresListEl.append("<li>" + initialsAndScore.initials + " - " + initialsAndScore.score + "</li>");
    

    highScoresListEl.append(goBackButton);
    goBackButton.textContent = "Go Back";

    }
);

function init() {
    //grab any high scores from local storage
    var storedHighScores = JSON.parse(localStorage.getItem("highScores"));
    if (storedHighScores !== null) {
        highScores = storedHighScores;
    }
}

// if view high scores is clicked, stop timer and end any games in process
highScoresLink.addEventListener('click', endGame);

// startGame when startButton is clicked
startButton.addEventListener('click', startGame);

goBackButton.addEventListener('click', function() {
highScoresListEl.remove();
highScoresText.remove();
goBackButton.remove();
startGame();
}
);


// function stopTimer() {
//     //stop timer
//     clearInterval(timer);
//     endGame();
// }

// var wordBlank = document.querySelector(".word-blanks");
// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");
// var timerElement = document.querySelector(".timer-count");
// 

// var chosenWord = "";
// var numBlanks = 0;
// var winCounter = 0;
// var loseCounter = 0;
// var isWin = false;
// var timer;
// var timerCount;

// // Arrays used to create blanks and letters on screen
// var lettersInChosenWord = [];
// var blanksLetters = [];

// // Array of words the user will guess
// var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// // The init function is called when the page loads 
// function init() {
//   getWins();
//   getlosses();
// }

// // The startGame function is called when the start button is clicked
// function startGame() {
//   isWin = false;
//   timerCount = 10;
//   // Prevents start button from being clicked when round is in progress
//   startButton.disabled = true;
//   renderBlanks()
//   startTimer()
// }

// // The winGame function is called when the win condition is met
// function winGame() {
//   wordBlank.textContent = "YOU WON!!!🏆 ";
//   winCounter++
//   startButton.disabled = false;
//   setWins()
// }

// // The loseGame function is called when timer reaches 0
// function loseGame() {
//   wordBlank.textContent = "GAME OVER";
//   loseCounter++
//   startButton.disabled = false;
//   setLosses()
// }

// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//   // Sets timer
//   timer = setInterval(function() {
//     timerCount--;
//     timerElement.textContent = timerCount;
//     if (timerCount >= 0) {
//       // Tests if win condition is met
//       if (isWin && timerCount > 0) {
//         // Clears interval and stops timer
//         clearInterval(timer);
//         winGame();
//       }
//     }
//     // Tests if time has run out
//     if (timerCount === 0) {
//       // Clears interval
//       clearInterval(timer);
//       loseGame();
//     }
//   }, 1000);
// }

// // Creates blanks on screen
// function renderBlanks() {
//   // Randomly picks word from words array
//   chosenWord = words[Math.floor(Math.random() * words.length)];
//   lettersInChosenWord = chosenWord.split("");
//   numBlanks = lettersInChosenWord.length;
//   blanksLetters = []
//   // Uses loop to push blanks to blankLetters array
//   for (var i = 0; i < numBlanks; i++) {
//     blanksLetters.push("_");
//   }
//   // Converts blankLetters array into a string and renders it on the screen
//   wordBlank.textContent = blanksLetters.join(" ")
// }

// // Updates win count on screen and sets win count to client storage
// function setWins() {
//   win.textContent = winCounter;
//   localStorage.setItem("winCount", winCounter);
// }

// // Updates lose count on screen and sets lose count to client storage
// function setLosses() {
//   lose.textContent = loseCounter;
//   localStorage.setItem("loseCount", loseCounter);
// }

// // These functions are used by init
// function getWins() {
//   // Get stored value from client storage, if it exists
//   var storedWins = localStorage.getItem("winCount");
//   // If stored value doesn't exist, set counter to 0
//   if (storedWins === null) {
//     winCounter = 0;
//   } else {
//     // If a value is retrieved from client storage set the winCounter to that value
//     winCounter = storedWins;
//   }
//   //Render win count to page
//   win.textContent = winCounter;
// }

// function getlosses() {
//   var storedLosses = localStorage.getItem("loseCount");
//   if (storedLosses === null) {
//     loseCounter = 0;
//   } else {
//     loseCounter = storedLosses;
//   }
//   lose.textContent = loseCounter;
// }

// function checkWin() {
//   // If the word equals the blankLetters array when converted to string, set isWin to true
//   if (chosenWord === blanksLetters.join("")) {
//     // This value is used in the timer function to test if win condition is met
//     isWin = true;
//   }
// }

// // Tests if guessed letter is in word and renders it to the screen.
// function checkLetters(letter) {
//   var letterInWord = false;
//   for (var i = 0; i < numBlanks; i++) {
//     if (chosenWord[i] === letter) {
//       letterInWord = true;
//     }
//   }
//   if (letterInWord) {
//     for (var j = 0; j < numBlanks; j++) {
//       if (chosenWord[j] === letter) {
//         blanksLetters[j] = letter;
//       }
//     }
//     wordBlank.textContent = blanksLetters.join(" ");
//   }
// }

// // Attach event listener to document to listen for key event
// document.addEventListener("keydown", function(event) {
//   // If the count is zero, exit function
//   if (timerCount === 0) {
//     return;
//   }
//   // Convert all keys to lower case
//   var key = event.key.toLowerCase();
//   var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
//   // Test if key pushed is letter
//   if (alphabetNumericCharacters.includes(key)) {
//     var letterGuessed = event.key;
//     checkLetters(letterGuessed)
//     checkWin();
//   }
// });

// // Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startGame);

// // Calls init() so that it fires when page opened
// init();

// // Bonus: Add reset button
// var resetButton = document.querySelector(".reset-button");

// function resetGame() {
//   // Resets win and loss counts
//   winCounter = 0;
//   loseCounter = 0;
//   // Renders win and loss counts and sets them into client storage
//   setWins()
//   setLosses()
// }
// // Attaches event listener to button
// resetButton.addEventListener("click", resetGame);
