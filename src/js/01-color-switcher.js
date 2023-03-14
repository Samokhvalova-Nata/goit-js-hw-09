const DELAY = 1000;
const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};
let timerId = null;
refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', handleStart);
refs.stopBtn.addEventListener('click', handleStop);

function handleStart() {
  timerId = setInterval(() => {
    addColorToBody();
    addDisabledToStartBtn();
    refs.stopBtn.disabled = false;
  }, DELAY);
  }

function handleStop() {
  clearInterval(timerId);
  removeDisabledToStartBtn();
  refs.stopBtn.disabled = true;
}

function addColorToBody() {
  document.body.style.backgroundColor = getRandomHexColor();
} 

function addDisabledToStartBtn() {
  refs.startBtn.disabled = true;
}

function removeDisabledToStartBtn() {
  refs.startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
