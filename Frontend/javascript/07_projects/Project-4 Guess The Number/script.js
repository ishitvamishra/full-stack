let randomNumber = parseInt(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}


function validateGuess(guess){
    if(isNaN(guess)) {
        alert('Please enter a valid number');
    } else if(guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100');
    } else {
        previousGuess.push(guess);
        if(numGuess >= 10){
            displayMessage(`Game Over! The number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Congratulations! You guessed the number in ${numGuess - 1} guesses!`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage('Too low! Try again!');
    } else if(guess > randomNumber){
        displayMessage('Too high! Try again!');
    } 
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    remaining.innerHTML = `${10 - numGuess} guesses left`;
    numGuess++;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    //disable the input and submit button
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    //create a button to start a new game
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    //add an event listener to the new game button
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        //reset all the variables and elements to start a new game
        randomNumber = parseInt(Math.random() * 100) + 1;
        previousGuess = [];
        numGuess = 1;
        userInput.value = '';
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        guessSlot.innerHTML = '';
        remaining.innerHTML = '10 guesses left';
        startOver.removeChild(p);
        lowOrHi.innerHTML = '';
        playGame = true;
    }); 
}


