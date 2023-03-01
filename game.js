const cells = document.querySelectorAll("td");
let currentPlayer = "X";
let gameOver = false;
let messageEl = document.querySelector("#message");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    if (this.textContent || gameOver) return;
    this.textContent = currentPlayer;
    checkForWin();
    switchPlayer();
  });
}

function checkForWin() {
  let combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < combinations.length; i++) {
    let [a, b, c] = combinations[i];
    if (cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer) {
      gameOver = true;
      messageEl.textContent = `Jogador ${currentPlayer} ganhou!`;
      break;
    }
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}
