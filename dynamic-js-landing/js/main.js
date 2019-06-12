//DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

//Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    //Set AM Or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';
    //12hr Format
    hour = hour % 12 || 12;
    //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

    setTimeout(showTime, 1000);
}

function addZero(num) {
    return (parseInt(num, 10) < 10 ? '0' : '') + num;
}

showTime();