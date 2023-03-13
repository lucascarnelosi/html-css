const days = document.querySelector('.day');
const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');

const eventMoment = "1 apr 2023";

function countdown() {
    const eventMomentDate = new Date(eventMoment);
    const currentDate = new Date();  

    const totalSeconds = (eventMomentDate - currentDate) / 1000;

    const day = Math.floor(totalSeconds / 3600 / 24);
    const hour = Math.floor(totalSeconds / 3600) % 24;
    const minute = Math.floor(totalSeconds / 60) % 60;
    const second = Math.floor(totalSeconds) % 60;

    days.innerHTML = formatTime(day);
    hours.innerHTML = formatTime(hour);
    minutes.innerHTML = formatTime(minute);
    seconds.innerHTML = formatTime(second);
}

function formatTime(time) {
    if (time >= 0) {
        return time < 10 ? `0${time}` : time;
    } else {
        return '0'
    }
}

// countdown();

// setInterval(countdown, 1000);