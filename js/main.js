'use strict';
const betElement = document.querySelector('.js-myBet');
const trialElement = document.querySelector('.js-trialBtn');
const resetElement = document.querySelector('.js-resetBtn');
const attemptElement = document.querySelector('.js-trialCounter');
const noticeElement = document.querySelector('.js-notice');
const messageElement = document.querySelector('.js-message');
const attemptsNumber = attemptElement.innerHTML;
// const customMessage = messageElement.innerHTML;
const randomNumber = getRandomNumber(100);
let trialCounter = 0;


console.log(randomNumber);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
function handleCounter() {
    trialCounter++;
    attemptElement.innerHTML = trialCounter;
}
function handleReset() {
    location.reload();
}
let messageText ='';
function handleMessage() {
    const myBet = parseInt(betElement.value);   
    if (myBet > 100 || myBet <= 0) {
        messageText = 'Tu número debe estar entre 1 y 100';
    } else if (myBet === randomNumber) {
        messageText = '¡¡¡Has ganado campeona!!!';
    } else if (myBet > randomNumber) {
        messageText = 'Tu número es demasiado alto';
    } else if (myBet < randomNumber) {
        messageText = 'Tu número es demasiado bajo';
    } else if (isNaN(myBet) || (myBet === '')) {
        messageText = 'Tienes que escribir un número ;)';
    }else {
        messageText = 'Inténtalo de nuevo :)';
    }
    noticeElement.classList.remove('hidden');
    messageElement.innerHTML = messageText;
}

function handleTrialButton(ev) {
    ev.preventDefault();
    handleCounter();
    handleMessage();
    
}
trialElement.addEventListener ('click', handleTrialButton);
resetElement.addEventListener ('click', handleReset);