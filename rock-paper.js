// In order to start the game, open this file in VS code, run node rock-paper.js in terminal. Node.js must be installed to run the game.

const getUserChoice = userInput => {
    // 'bomb' keyword is a cheatcode, if it's typed, User wins no matter what.
    if( userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      userInput = userInput.toLowerCase();
      return userInput;
    }
    else return 'Input wrong';
  }
  
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
      case 0:
      return 'rock';
      break;
  
      case 1:
      return 'paper';
      break;
  
      case 2:
      return 'scissors';
      break;
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
      return "it's a tie"
    }
  
    else if(userChoice === 'bomb' || computerChoice) {
      return 'The User won'
    }
  
    else if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return "Computer won!"
      }
      else return "The User won!"
    }
  
    else if(userChoice === 'paper') {
      if(computerChoice === 'rock') {
        return "The User won!"
      }
      else return "The Computer won!"
    }
  
    else if(userChoice === 'scissors') {
      if(computerChoice === 'paper') {
        return "The User won!"
      }
      else return "The Computer won!"
    }
  }
  
  function playGame(x) {
    let userChoice = getUserChoice(x);
    let computerChoice = getComputerChoice();
    console.log('User: ' + userChoice);
    console.log('Computer: ' + computerChoice)
    console.log(determineWinner(userChoice, computerChoice));
  }

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter rock, paper or scissors: ', x => {
    playGame(x);
    readline.close();
  });