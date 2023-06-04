const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
let gameIsRunning = false;

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`,"").toUpperCase();

  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS )
  {
    alert(`Invalide choice! we choose ${DEFAULT_USER_CHOICE} for you!`);
    return;

  }
  return selection;
};

const getComputerChoice = function(){
  const randomValue = Math.random();
  if (randomValue < 0.34){
    return ROCK;
  }else if (randomValue < 0.67){

    return PAPER
  }else {
    return SCISSORS;
  }
}
const getWinner = (cChoice,pChoice=DEFAULT_USER_CHOICE) =>
     cChoice === pChoice
     ? RESULT_DRAW
     : cChoice === ROCK && pChoice === PAPER ||
     cChoice === PAPER && pChoice === SCISSORS ||
     cChoice === SCISSORS && pChoice === ROCK
     ? RESULT_PLAYER_WINS
     : RESULT_COMPUTER_WINS;
// const getWinner = function(cChoice,pChoice){
//   if(cChoice === pChoice){
//     return  RESULT_DRAW;
//   }else if (
//     cChoice === ROCK && pChoice === PAPER ||
//     cChoice === PAPER && pChoice === SCISSORS ||
//     cChoice === SCISSORS && pChoice === ROCK 
//   ){
//     return RESULT_PLAYER_WINS
//   }else{
//     return RESULT_COMPUTER_WINS;
//   };


// }
startGameBtn.addEventListener('click', function() {
  if (gameIsRunning){
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting.....');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice){
      winner = getWinner(playerChoice,computerChoice)
  }else {
    winner = getWinner(computerChoice, playerChoice)
  }
  let message = `You picked ${playerChoice? playerChoice : DEFAULT_USER_CHOICE },computer picked ${computerChoice} and you had `
  if (winner === RESULT_DRAW){
    message = message +'draw'
  }else if (winner === RESULT_PLAYER_WINS){
    message = message +'won'
  }else{
    message = message +'lost'
  }
  alert(message)
  gameIsRunning = false;
  
});

const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) 
  }
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    resultHandler(sum)
};


const subtractUp = function(resultHandler) {
  let sum = 0;
  for (const num of arguments){
    sum -= num;
  }
  resultHandler(sum)
}
const showResult = result => {
  alert("The result after adding all numbers is:" + result);
}
sumUp(showResult,1,5,10,-3,6,10)
subtractUp(showResult,1,10,15,20)