const min_value = 32;

function updateTimer() {
  var counter = document.getElementById("timer__value");
  var remainingSeats = parseInt(counter.textContent);

  if (remainingSeats > min_value) {
    var decrement = Math.floor(Math.random() * 2) + 1;
    remainingSeats -= decrement;

    if (remainingSeats < min_value) {
      remainingSeats = min_value;
    }

    counter.textContent = remainingSeats;

    localStorage.setItem("remainingSeats", remainingSeats);
  }

  var randomTime = Math.floor(Math.random() * 30);
  var timeout = randomTime * 1000;

  timerInterval = setTimeout(updateTimer, timeout);
}

var savedSeats = localStorage.getItem("remainingSeats");

if (savedSeats) {
  var counter = document.getElementById("timer__value");
  counter.textContent = savedSeats;
}

var timerInterval;

var randomTime = Math.floor(Math.random() * 30);
var timeout = randomTime * 1000;

timerInterval = setTimeout(updateTimer, timeout);

window.addEventListener("beforeunload", function () {
  clearTimeout(timerInterval);
});
