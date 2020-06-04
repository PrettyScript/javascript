console.log("time to start the timer!");

let seconds = 0;
let interval;

const startTimer = () => {
    console.log('Timer Started');
    interval = setInterval(countUp, 1000)
};

let countUp = function() {
    const time = document.getElementById('time');
    seconds ++;
    minutes = Math.floor(seconds / 60);
    currentSeconds = seconds % 60;
    time.innerHTML = currentSeconds < 10 ? `${minutes}:0${currentSeconds}` : `${minutes}:${currentSeconds}`;
}

const stopTimer = () => {
    console.log('Timer Stopped');
    clearInterval(interval);
};

const resetTimer = () => {
    console.log('Timer Reset');
    time.innerHTML = '0:00';
    seconds = 0;
    minutes = 0;
};
