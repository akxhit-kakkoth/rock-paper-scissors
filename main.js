let userChoicePara = document.getElementById("userChoice-para");
let computerChoicePara = document.getElementById("computerChoice-para");
let resultPara = document.getElementById("result-para");

function playGame(userChoice) {
  console.log(userChoice);

  let option = ["rock", "paper", "scissors"];

  const randomNum = Math.floor(Math.random() * 3);
  let computerChoice = option[randomNum];

  userChoicePara.innerText = "User Choice:" + userChoice;
  computerChoicePara.innerText = "Computer Choice:" + computerChoice;

  if (computerChoice === userChoice) {
    resultPara.innerText = "Result: It's Draw";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultPara.innerText = "Result: You Won!!";
  } else {
    resultPara.innerText = "Result: You Lost";
  }
}
