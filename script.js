let button = document.querySelectorAll(".game-button");
let massageBox = document.querySelector('.game-over-msg');
let msgExpression = document.querySelector('.expression-game-over');
let msgChose = document.querySelector('.computer-choise');
let values = ["rock", "paper", "scissor"];
let turnA = true;

button.forEach((currentButton, index) => {
  currentButton.addEventListener("click", () => {
    if (turnA) {
      console.log(values[index]);
      // turnA == false;
      let clicks = new Audio('click.wav');
      clicks.play();
      if (turnA) {
        let computerTurn = Math.floor(Math.random() * 3);
          console.log(values[computerTurn]);
          turnA == true;

          if (index === computerTurn) {
            massageBox.innerText = "It's a draw.";
            msgExpression.innerText = "Oh shit !";
            msgChose.innerText = `Computer choose ${values[computerTurn]}`
            
            return;
          }
          if (index === 0 && computerTurn === 1) {
            massageBox.innerText = "Computer Wins.";
            msgExpression.innerText = "Sorry !";
            msgChose.innerText = `Computer choose ${values[computerTurn]}`
            return;
          }
          if (index === 0 && computerTurn === 2) {
            massageBox.innerText = "You Win.";
            msgExpression.innerText = "Congratulations !";
            msgChose.innerText = `Computer choose ${values[computerTurn]}`
            return;
          }
          if (index === 1 && computerTurn === 2) {
            massageBox.innerText = "Computer Wins.";
            msgExpression.innerText = "Sorry !";
            msgChose.innerText = `Computer choose ${values[computerTurn]}`
            return;
          }
          if (index === 1 && computerTurn === 0) {
            massageBox.innerText = "You Win.";
            msgExpression.innerText = "Congratulations !";
            msgChose.innerText = `Computer choose ${values[computerTurn]}`
            return;
          }
          if (index === 2 && computerTurn === 0) {
            massageBox.innerText = "Computer Wins.";
            msgExpression.innerText = "Sorry !";
            msgChose.innerText = `Computer choose ${values[computerTurn]}`
            return;
          }
          if (index === 2 && computerTurn === 1) {
            massageBox.innerText = "You Win.";
            msgExpression.innerText = "Congratulations !";
            msgChose.innerText = `Computer choose ${values[computerTurn]}`
            return;
          }
      }
    }
  });
});
