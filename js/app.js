const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


const countdown = () => {
    let hh = parseInt(hours.innerText);
    let mm = parseInt(minutes.innerText);
    let ss = parseInt(seconds.innerText);

    ss++;
    if (ss === 60) {
        ss = 0;
        mm++;
    }

    if (mm === 60) {
        mm = 0;
        hh++;
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    hours.innerText = hh;
    minutes.innerText = mm;
    seconds.innerText = ss;
}


let intervalId;
const startCountdown = () => {
    intervalId = setInterval(() => {
        countdown();
    }, 1000);
}


const stopCountdown = () => {
    clearInterval(intervalId);
}


const restCountdown = () => {
    clearInterval(intervalId);
    hours.innerText = '00';
    minutes.innerText = '00';
    seconds.innerText = '00';
}