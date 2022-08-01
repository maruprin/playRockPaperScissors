const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      return userInput;
    } else {
      console.log("error");
    }
  };
  const getComputerChoice = () => {
    let numRandom = Math.floor(Math.random() * 3);
    let choice = "";
    if (numRandom === 0) {
      choice = "rock";
    } else if (numRandom === 1) {
      choice = "paper";
    } else {
      choice = "scissors";
    }
    return choice;
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "The game is a tie";
    }
    if (userChoice === "rock") {
      if (computerCoice === "paper") {
        return "The computer won!";
      } else {
        ("You won!");
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "The computer won!";
      } else {
        return "You won!";
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "The computer won!";
      } else {
        return "You won!";
      }
    }
  };
  
  const playGame = () => {
    let userChoice = getUserChoice("paper");
    let computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw:" + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();