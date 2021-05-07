const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};

console.log(refs);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeColor = {
  changeBody: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.changeBody = setInterval(() => {
      let i = randomIntegerFromInterval(0, colors.length - 1);
      refs.body.style.backgroundColor = colors[i];
    }, 1000);
  },
  stop() {
    clearInterval(this.changeBody);
    this.isActive = false;
  },
};

refs.btnStart.addEventListener("click", changeColor.start.bind(changeColor));
refs.btnStop.addEventListener("click", changeColor.stop.bind(changeColor));
