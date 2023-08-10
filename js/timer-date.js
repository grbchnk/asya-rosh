if (localStorage.getItem("endDate")) {
  var endDate = new Date(localStorage.getItem("endDate"));
} else {
  var endDate = new Date();
  endDate.setHours(endDate.getHours() + 20);

  localStorage.setItem("endDate", endDate);
}

var countdown = setInterval(function () {
  var now = new Date().getTime();

  var timeLeft = endDate.getTime() - now;

  // Проверяем, если время закончилось, останавливаем отсчет
  if (timeLeft < 0) {
    clearInterval(countdown);
  } else {
    var hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
}, 1000);
