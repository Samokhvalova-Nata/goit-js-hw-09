import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
        reject({ position, delay });
      }, delay);
    });
}

const refs = {
  form: document.querySelector('.form'),
}

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let delay = Number(event.target.delay.value);
  const step = Number(event.target.step.value);
  const amount = Number(event.target.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay).then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delay += step;
  }
}