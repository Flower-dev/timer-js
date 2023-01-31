const start = 10;
let dataTime = start * 60;

const newStart = 10;
let newDataTime = newStart * 60;

const timerElement = document.getElementById("timer")
const newTimer = document.getElementById("timerAdd")

const decrement = () => {
    let min = parseInt(dataTime / 60, 10);
    let sec = parseInt(dataTime % 60, 10)
    
    min = min < 10 ? "0" + min : min
    sec = sec < 10 ? "0" + sec : sec

    timerElement.innerText = `${min}:${sec}`
    dataTime = dataTime <= 0 ? 0 : dataTime - 1
}
setInterval(decrement, 1000)

const increment = () => {
    let min = parseInt(newDataTime / 60, 10);
    let sec = parseInt(newDataTime % 60, 10)
    
    min = min < 10 ? "0" + min : min
    sec = sec < 10 ? "0" + sec : sec

    newTimer.innerText = `${min}:${sec}`
    newDataTime = newDataTime <= 0 ? 0 : newDataTime + 1
}

setInterval(increment, 1000)