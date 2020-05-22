const date = new Date();

const tycho = [
  0,
  [1, 2, 4, 6, 11, 12, 19], // Januari
  [11, 17, 18], // Februari
  [1, 4, 14, 15], // Mars
  [10, 17, 18], // April
  [7, 15, 18], // Maj
  [6], // Juni
  [17, 21], // Juli
  [2, 10], // Augusti
  [1, 16, 18], // September
  [6], // Oktober
  [6, 18], // November
  [6, 11, 18], // December
];


const t = tycho[date.getMonth()].indexOf(date.getDate()) != -1;

document.addEventListener("DOMContentLoaded", () => {
  if (t) {
    document.querySelector("#brahe").src = "brahe-ja.jpeg";
  } else {
    document.querySelector("#brahe").src = "brahe-nej.jpeg";
  }
});
