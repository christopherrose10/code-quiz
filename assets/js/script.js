var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

function countdown() {
    var timeLeft = 90;


    var timeInterval = setInterval(function () {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft --;
    }, 1000);


}

startBtn.onclick = countdown;

