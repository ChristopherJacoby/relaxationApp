//global variables
let timer = {};

const fiveMin = () => {
    timer.time = 300;
}
const tenMin = () => {
    timer.time = 600;
}
const fifteenMin = () => {
    timer.time = 900;
}

const clickPlay = () => {
    console.log(timer.time);
    let m = Math.floor(timer.time / 60);
    let s = timer.time % 60;
    let min = m < 10 ? `0${m}` : `${m}`;
    let sec = s < 10 ? `0${s}` : `${s}`;
    document.querySelector("#timer").innerHTML = `${min}:${sec}`;
    timer.time--;
}

const clickPause = () => {
    clearInterval(interval);
}

let interval = setInterval(clickPlay, 1000);