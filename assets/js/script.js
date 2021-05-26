var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var questionEl = document.getElementById('question-prompt');
var answerEl = document.getElementById('answers-prompt');
var resultEl = document.getElementById('result-prompt');
var inputEl = document.getElementById('input-initials');
var beginEl = document.getElementById('begin');
var questions = [
    
    {q: "Inside which HTML element do we put the JavaScript?", 
        a:[
            "<js>",
            "<script>",
            "<javascript>",
            "<scripting>",
        ], 
        correctAnswer: "<script>"
    }, 
        
    {q: "Which of the following type of variable is visible everywhere in your JavaScript code?", 
        a:[
            "Global variable",
            "Local variable",
            "Both of the above.",
            "None of the above.",
        ], 
        correctAnswer: "Global variable"
    },        
        
    {q: "Which built-in method returns the characters in a string beginning at the specified location?", 
        a:[
            "substr()",
            "getSubstring()",
            "slice()",
            "None of the above.",
        ], 
        correctAnswer: "substr()"
    }, 

    {q: "Which of the following function of Number object defines how many total digits to display of a number?", 
        a:[
            "toExponential()",
            "toFixed()",
            "toLocaleString()",
            "toPrecision()",
        ], 
        correctAnswer: "toPrecision()"
    }, 

    {q: "Which of the following function of Array object sorts the elements of an array?", 
        a:[
            "toSource()",
            "unshift()",
            "sort()",
            "toString()",
        ], 
        correctAnswer: "sort()"
    } 

];


var timeLeft = 90;
var interval;

function countdown() {

    timerEl.textContent = "Time: " + timeLeft;
    timeLeft--;

    if (timeLeft <= 0) {
    
        quizEnd();
    }
}

function testing () {
}

var questionNumber = 0;
var count = 0;

function score() {

    beginEl.setAttribute('class', "invisible");
    answerEl.removeAttribute('class');
    interval = setInterval(countdown, 1000);
    showAnswer();

};


function showAnswer () {

    var currentQ = questions[questionNumber];
    questionEl.textContent = currentQ.q;

    answerEl.innerHTML = "";

    for (var i = 0; i < currentQ.a.length; i++) {
        // buttonEl1.textContent = [currentQ.a[i]];
        // buttonEl2.textContent = [currentQ.a[i] + 1];
        // buttonEl3.textContent = [currentQ.a[i] + 2];
        // buttonEl4.textContent = [currentQ.a[i] + 3];

        var button = document.createElement("button");
        button.textContent = [currentQ.a[i]];
        button.setAttribute("value", currentQ.a[i]);
        button.onclick = checkScore;
        answerEl.append(button);
    }

}

function checkScore () {

    if (this.value === questions[questionNumber].correctAnswer) {
        count++;
        resultEl.textContent = "Correct!";
    } else {
        resultEl.textContent = "Wrong!";
        timeLeft -= 15;
    }

    questionNumber ++;

    if (questionNumber === questions.length) {
        quizEnd();
    } else {
        showAnswer();
    }

}

function quizEnd () {
    inputEl.removeAttribute("class");
    clearInterval(interval);
    questionEl.textContent = "Your score is " + count + "/" + questions.length;

    answerEl.textContent = "Enter your initials";

    var submitInitials = document.createElement("start");
    submitInitials.textContent = "Submit";
}

function saveScore () {
    localStorage.setItem("Initials", JSON.stringify(saveInitials && count))
};

startBtn.onclick = score;

