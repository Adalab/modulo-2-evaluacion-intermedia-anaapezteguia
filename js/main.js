'use strict';
const betElement = document.querySelector('.js-myBet');
const trialElement = document.querySelector('.js-trialBtn');
const randomNumber = getRandomNumber(100);
let trialCounter = 0;

console.log(randomNumber);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function handleTrialButton (ev) {
    ev.preventDefault()
    const myBet = trialElement.value;
    console.log('me han clicado');
}
trialElement.addEventListener ('click', handleTrialButton);
