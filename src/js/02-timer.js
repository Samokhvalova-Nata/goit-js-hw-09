import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let stopTime = null;
const refs = {
    datePicker: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    daysEl: document.querySelector('[data-days]'),
    hoursEl: document.querySelector('[data-hours]'),
    minutesEl: document.querySelector('[data-minutes]'),
    secondsEl: document.querySelector('[data-seconds]'),
};
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        stopTime = selectedDates[0].getTime();

        if (stopTime < Date.now()) {
            Notify.failure('Please choose a date in the future');
            return;
        } refs.startBtn.disabled = false;
    },
};

const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = stopTime - currentTime;
            const time = convertMs(deltaTime);
            updateClockFace(time);
        }, 1000);
    },
    stop() {
        const stopDelay = stopTime - Date.now();
        setTimeout(() => {
            clearInterval(this.intervalId);
            this.isActive = false;
        }, stopDelay);
    },
};

flatpickr(refs.datePicker, options);

refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', () => {
    timer.start();
    timer.stop();
});

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

const days = addLeadingZero(Math.floor(ms / day));
const hours = addLeadingZero(Math.floor((ms % day) / hour));
const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

function updateClockFace({ days, hours, minutes, seconds }) {
    refs.daysEl.textContent = `${days}`;
    refs.hoursEl.textContent = `${hours}`;
    refs.minutesEl.textContent = `${minutes}`;
    refs.secondsEl.textContent = `${seconds}`;
};