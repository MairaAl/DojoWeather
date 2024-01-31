function showAlert() {
  alert("Cargando informe metereológico...");
}
function hide() {
  let cookie = document.querySelector(".cookie");
  cookie.style.display = "none";
}
function celsToFar(temp) {
  return Math.round((9 / 5) * temp + 32);
}
function farToCels(temp) {
  return Math.round((5 / 9) * (temp - 32));
}
function showFar(element) {
  for (var i = 1; i < 9; i++) {
    var temp = document.querySelector("#temp" + i);
    var tempVal = parseInt(temp.innerText);
    if (element.value == "°C") {
      temp.innerText = farToCel(tempVal);
    } else {
      temp.innerText = celsToFar(tempVal);
    }
  }
}
