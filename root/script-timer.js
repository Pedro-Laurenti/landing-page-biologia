// TIMER JS
const __days = document.querySelector("#days")
const __hours = document.querySelector("#hours")
const __minutes = document.querySelector("#minutes")
const __seconds = document.querySelector("#seconds")

// Change the of this variable.
// ex: May 22 2024 18:00:00
// May 22, 2024 at 6PM
const newYearEnd = 'Dec 24 2023 00:00:00';

function countdown() {
    const newYearEndDate = new Date(newYearEnd);
    const currentDate = new Date();

    const totalSeconds = (newYearEndDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);


    __days.innerHTML = formatTime(days);
    __hours.innerHTML = formatTime(hours);
    __minutes.innerHTML = formatTime(minutes);
    __seconds.innerHTML = formatTime(seconds);
    // console.log(seconds)
    // console.log(minutes)
    // console.log(hours)

}
countdown();

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);