const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function rock(){
    if (getComputerChoice() === 'paper') {
           console.log('You lose! Paper covers Rock.');
    } else if (getComputerChoice() === 'scissors') {
           console.log('You win! Rock crushes Scissors.');
    } else if (getComputerChoice() === 'rock') {
           console.log('It\'s a tie! You both chose Rock.');
    }
}
function paper(){
    if (getComputerChoice() === 'scissors') {
           console.log('You lose! Scissors cut Paper.');
    } else if (getComputerChoice() === 'rock') {
           console.log('You win! Paper covers Rock.');
    } else if (getComputerChoice() === 'paper') {
           console.log('It\'s a tie! You both chose Paper.');
    }
}
function scissors(){
    if (getComputerChoice() === 'rock') {
           console.log('You lose! Rock crushes Scissors.');
    } else if (getComputerChoice() === 'paper') {
           console.log('You win! Scissors cut Paper.');
    } else if (getComputerChoice() === 'scissors') {
           console.log('It\'s a tie! You both chose Scissors.');
    }
};