const colorsbg = [
  "#4FC3F7",
  "#29B6F6",
  "#03A9F4",
  "#039BE5",
  "#0288D1",
  "#0277BD",
  "#01579B",
  "#9575CD",
  "#7E57C2",
  "#673AB7",
  "#5E35B1",
  "#512DA8",
  "#4527A0",
  "#311B92",
  "#7986CB",
  "#5C6BC0",
  "#3F51B5",
  "#3949AB",
  "#303F9F",
  "#283593",
  "#1A237E",
  "#64B5F6",
  "#42A5F5",
  "#2196F3",
  "#1E88E5",
  "#1976D2",
  "#1565C0",
  "#0D47A1",
];

// Get elements
let hoursEl = document.getElementById("hour");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
let body = document.querySelector("body");

// Format time
const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const currentDate = new Date();

// Get and display time.
const displayTime = () => {
  const currentDate = new Date();

  const hours = formatTime(currentDate.getHours());
  const minutes = formatTime(currentDate.getMinutes());
  const seconds = formatTime(currentDate.getSeconds());

  // Display the hour, minutes and seconds in the HTML.
  hoursEl.innerText = hours;
  minutesEl.innerText = minutes;
  secondsEl.innerText = seconds;
};

let index = 0;
function changeBackground() {
  body.style.background = colorsbg[index];
}

// Initial call of the functions.
changeBackground();
displayTime();

setInterval(() => {
  displayTime();
  changeBackground();
  if (index > colorsbg.length) {
    index = 0;
  }
  index++;
}, 1000);
