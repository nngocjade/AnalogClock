let DigitalClock = setInterval(getTime, 1000);
let hour, min, sec;

// function myTimer() {
//   let date = new Date();
//  document.getElementById("digital-clock").innerHTML = date.toLocaleTimeString();
// }

function getTime() {
  let d = new Date();
  hour = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();

  setDigitalTime();
  moveAnalogClockHand();
}

function setDigitalTime() {
  document.getElementById("digital-clock").innerHTML = `${addZero(
    hour
  )}:${addZero(min)}:${addZero(sec)}`;
}

function addZero(t) {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}

function moveAnalogClockHand() {
  document.querySelector("#hour-hand").style.transform = `rotate(${
    30 * (hour - 30)
  }deg)`;
  document.querySelector("#minute-hand").style.transform = `rotate(${
    6 * (min - 30)
  }deg)`;
  document.querySelector("#second-hand").style.transform = `rotate(${
    6 * (sec - 30)
  }deg)`;
}

setInterval(setDigitalTime, 1000);
