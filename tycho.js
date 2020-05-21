const date = new Date();

const tycho = [
  0,
  [1, 2, 4, 6, 11, 12, 29],
  [11, 17, 18],
  [1, 4, 14, 15],
  [9, 16, 17, 18, 19, 22, 29],
  [10, 17, 18],
  [6],
  [17, 21],
  [20, 21],
  [16, 18],
  [6],
  [6, 16],
  [6, 11, 18],
];

const t = tycho[date.getMonth()].indexOf(date.getDate()) != -1;

document.addEventListener("DOMContentLoaded", () => {
  if (t) {
    document.querySelector("#brahe").src = "brahe-ja.jpeg";
  } else {
    document.querySelector("#brahe").src = "brahe-nej.jpeg";
  }
});
