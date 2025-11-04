let userChoicePara = document.getElementById("userChoice-para");
let computerChoicePara = document.getElementById("computerChoice-para");
let resultPara = document.getElementById("result-para");

let userScoreEl=document.getElementById('user-score');
let computerScoreEl=document.getElementById('computer-score');
let drawScoreEl=document.getElementById('draw-score');

let userScore=0;
let computerScore=0;
let drawScore=0;
function playGame(userChoice) {
  console.log(userChoice);

  let option = ["rock", "paper", "scissors"];

  const randomNum = Math.floor(Math.random() * 3);
  let computerChoice = option[randomNum];

  userChoicePara.innerText = "User Choice:" + userChoice;
  computerChoicePara.innerText = "Computer Choice:" + computerChoice;

  if (computerChoice === userChoice) {
    resultPara.innerText = "Result: It's Draw";
    drawScore=drawScore+1;
    drawScoreEl.innerText=drawScore;

  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultPara.innerText = "Result: You Won!!";
    userScore=userScore+1;
    userScoreEl.innerText=userScore;
  } else {
    resultPara.innerText = "Result: You Lost";
    computerScore=computerScore+1;
    computerScoreEl.innerText=computerScore;
  }
}
