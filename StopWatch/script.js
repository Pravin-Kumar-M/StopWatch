

// JS

let interval;
let minVal = 0;
let secVal = 0;
let milliVal = 0;

function watch() {

    milliVal = milliVal + 1;
    if (milliVal >= 100) {
        milliVal = 0;
        secVal++;
    }
    if (secVal >= 60) {
        secVal = 0
        minVal++
    }
    document.getElementById('min').innerHTML = zero(minVal)
    document.getElementById('sec').innerHTML = zero(secVal)
    document.getElementById('milli').innerHTML = zero(milliVal)
}

function zero(num) {
    return num < 10 ? "0" + num : num;
}

function start() {
    interval = setInterval(watch, 10)
}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    minVal = 0;
    secVal = 0;
    milliVal = 0;
    document.getElementById('min').innerHTML = "00"
    document.getElementById('sec').innerHTML = "00"
    document.getElementById('milli').innerHTML = "00"
    document.getElementById('lap').innerHTML = ""
}

function lap() {
    const val = zero(minVal) + ":" + zero(secVal) + ":" + zero(milliVal);
    const lapItem = document.createElement('div');
    lapItem.textContent = val;
    const lapContainer = document.getElementById('lap');
    if (lapContainer.children.length >= 10) {
        lapContainer.removeChild(lapContainer.firstChild);
    }
    lapContainer.appendChild(lapItem);
}

