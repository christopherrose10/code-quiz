var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
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
    var timeLeft = 90;


    var timeInterval = setInterval(function () {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--;
    }, 1000);


}

var count = 0;

var score = function () {

    for (var i = 0; i < questions.length + 1; i++) {
        var answer = confirm(questions[i].q);
        if (
            (answer === true && questions[i].a === 't') || answer === false && questions[i].a === 'f') {
            count++;
            alert('Correct');
            console.log(answer);
        } else {
            alert('Wrong!');
            console.log(answer);
        }
    }

}


startBtn.onclick = countdown;

