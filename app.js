//global variables
let timer = {};

//select time
const fiveMin = () => {
    timer.time = 300;
    document.querySelector("#timer").innerHTML = `5:00`
}
const tenMin = () => {
    timer.time = 600;
    document.querySelector("#timer").innerHTML = `10:00`
}
const fifteenMin = () => {
    timer.time = 900;
    document.querySelector("#timer").innerHTML = `15:00`
}

//select sound
const beachSound = () => {
    timer.audio = new Audio("./sounds/beach.mp3");
}
const rainSound = () => {
    timer.audio = new Audio("./sounds/rain.mp3");
}
const streamSound = () => {
    timer.audio = new Audio("./sounds/stream.mp3");
}
const fireSound = () => {
    timer.audio = new Audio("./sounds/fire.mp3");
}

//calculate timer
const countDown = () => {
    timer.time--;
    let m = Math.floor(timer.time / 60);
    let s = (timer.time % 60);
    let min = m < 10 ? `0${m}` : `${m}`;
    let sec = s < 10 ? `0${s}` : `${s}`;
    document.querySelector("#timer").innerHTML = `${min}:${sec}`;
    $(".time-select").fadeOut();
    $(".sound-select").fadeOut();
    if (timer.time <= 0) {
        clearInterval(timer.interval);
        document.querySelector("#timer").innerHTML = `00:00`;
        $(".time-select").fadeIn();
        $(".sound-select").fadeIn();
        let gong = new Audio("./sounds/gong.mp3");
        gong.play();
        timer.audio.pause();
        timer.audio.loop = false;
        timer.audio = new Audio("");
    }
}

const clickPlay = () => {
    timer.interval = setInterval(countDown, 1000);
    timer.audio.play();
    timer.audio.loop = true;
}

// const clickPause = () => {
//     clearInterval(timer.interval);
//     timer.audio.loop = false;
//     timer.audio.pause();
//     changeImg();
// }

// const changeImg = () => {
//     let img = document.querySelector(".playImg").src;
//     if (img == './play.svg') {
//         document.querySelector(".playImg").src = './pause.svg';
//     } else {
//         document.querySelector(".playImg").src = 'play.svg';
//     }
// }