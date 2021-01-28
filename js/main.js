'use strict';
const betElement = document.querySelector('.js-myBet');
const trialElement = document.querySelector('.js-trialBtn');
const attemptElement = document.querySelector('.js-trialCounter');
const noticeElement = document.querySelector('.js-notice');
const messageElement = document.querySelector('.js-message');
const attemptsNumber = attemptElement.innerHTML;
const randomNumber = getRandomNumber(100);
let trialCounter = 0;

console.log(randomNumber);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function handleTrialButton (ev) {
    ev.preventDefault()
    trialCounter++;
    // console.log(trialCounter);
    // console.log('me han clicado');
    const myBet = parseInt(betElement.value);
    console.log(myBet);
    if (myBet >100 || myBet <= 0) {
        attemptElement.innerHTML = trialCounter;
        noticeElement.classList.toggle('hidden');
        messageElement.innerHTML = 'Tu número debe estar entre 1 y 100';
    } else if (myBet === randomNumber) {
        attemptElement.innerHTML = trialCounter;
        noticeElement.classList.toggle('hidden');
        messageElement.innerHTML = '¡¡¡Has ganado campeona!!!';
    } else if (myBet > randomNumber) {
        attemptElement.innerHTML = trialCounter;
        noticeElement.classList.toggle('hidden');
        messageElement.innerHTML = 'Tu número es demasiado alto';
    } else if (myBet < randomNumber) {
        attemptElement.innerHTML = trialCounter;
        noticeElement.classList.toggle('hidden');
        messageElement.innerHTML = 'Tu número es demasiado bajo';
    } else {
        attemptElement.innerHTML = trialCounter;
        noticeElement.classList.toggle('hidden');
        messageElement.innerHTML = 'Inténtalo de nuevo :)';
    }
    
}
trialElement.addEventListener ('click', handleTrialButton);
