let userScore = 0;
let cmpScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const cmpScorePara = document.querySelector("#cmp-score");

const genCmpChoice = () => {
  const options = ["stone", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("game is draw");
  msg.innerText = "It's a Draw !Play again";
  msg.style.backgroundColor = " rgba(94, 98, 94, 0.57)";
};

const playGame = (userChoice) => {
  console.log("user choice=", userChoice);
  //generate computer choice
  const cmpChoice = genCmpChoice();
  console.log("cmp choice=", cmpChoice);

  if (userChoice === cmpChoice) {
    drawGame();
  } else {

    let userWin = true;
    if (userChoice === "stone") {
      userWin = cmpChoice === "paper" ? false : true;
    } 
    else if (userChoice === "paper") {
      userWin = cmpChoice === "scissors" ? false : true;
    }
     else if (userChoice === "scissors") {
      userWin = cmpChoice === "stone" ? false : true;
    }
    showWinner(userWin, userChoice, cmpChoice);
  }
};

const showWinner = (userWin, userChoice, cmpChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win!");
    msg.innerText = `You win 😆! Your ${userChoice} beats ${cmpChoice}`;
    msg.style.backgroundColor = " rgba(89, 186, 89, 0.652)";
  } else {
    cmpScore++;
    cmpScorePara.innerText = cmpScore;
    console.log("you lose!");
    msg.innerText = `You lose 😕! ${cmpChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "rgba(255, 0, 0, 0.499)";
  }
};

choices.forEach((choice) => {
  const userChoice = choice.getAttribute("id");
  choice.addEventListener("click", () => {
    console.log(userChoice + " was clicked");
    playGame(userChoice);
  });
});
