var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var questionEl = document.getElementById('question-prompt');
var answerEl = document.getElementById('answers-prompt');
var resultEl = document.getElementById('result-prompt');
var buttonEl1 = document.getElementById('btn1');
var buttonEl2 = document.getElementById('btn2');
var buttonEl3 = document.getElementById('btn3');
var buttonEl4 = document.getElementById('btn4');
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



function countdown() {
    var timeLeft = 10;


    var timeInterval = setInterval(function () {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--;
    }, 1000);

    if(timeLeft <= 0)
    quizEnd();
}

var questionNumber = 0;
var count = 0;

function score() {

    countdown();

    for (var i = 0; i < questions.length + 1; i++) {
        questionEl.textContent = [questions[i].q];
        buttonEl1.textContent = [questions[i].a[0]];
        buttonEl2.textContent = [questions[i].a[1]];
        buttonEl3.textContent = [questions[i].a[2]];
        buttonEl4.textContent = [questions[i].a[3]];

        var answerSelected = document.addEventListener("click", function(event){
            event.preventDefault();
        });        

        if (answerSelected === questions[i].correctAnswer) {
            count++;
            resultEl.textContent = "Correct!";
            console.log(answerSelected);
        } else {
            resultEl.textContent = "Wrong!";
            console.log(answerSelected);
        }

        if (questionNumber === questions.length) {
            quizEnd();
        }
    }
};

function quizEnd () {
    clearInterval(timeInterval);
    questionEl.textContent = "Your score is " + count + "/" + questions.length;

    var saveInitials = answerEl.style.display = "block";
    answerEl.textContent = "Enter your initials";
    var submitInitials = document.createElement("start");
    submitInitials.textContent = "Submit";
    saveScore();
}

function saveScore () {
    localStorage.setItem("Initials", JSON.stringify(saveInitials && count))
};

startBtn.onclick = score;
