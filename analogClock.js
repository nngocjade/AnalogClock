let DigitalClock = setInterval(myTimer, 1000);

function myTimer() {
  let date = new Date();
 document.getElementById("digital-clock").innerHTML = date.toLocaleTimeString();
}
