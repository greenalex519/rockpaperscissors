const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors" || userInput == "bomb") {
      return console.log(userInput);
    } else {
      return console.log("error");
    }
};

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3 );
    
    if (choice == 0){
      return console.log("rock");
    } else if (choice == 1){
      return console.log("paper");
    } else if (choice ==2){
      return console.log("scissors");
    } else {
      return console.log("error");
    };
};

