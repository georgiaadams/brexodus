"use strict";

let game;
let splashScreen;
let gameScreen;
let gameOverScreen;
let winScreen;
let gameAudio = new Audio("./audios/game.mp3");

function buildDom(htmlString) {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.children[0];
}

function createSplashScreen() {
  splashScreen = buildDom(`
    <main class="splash-screen">
      <h1>BREXODUS</h1>
      <button class="start-btn">START</button>
      <div>
      <h3>Rules of the Game</h3>
      <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      </ul>
      </div>
    </main>`);

  document.body.appendChild(splashScreen);

  const startBtn = splashScreen.querySelector(".start-btn");
  startBtn.addEventListener("click", startGame);
}

function removeSplashScreen() {
  splashScreen.remove();
}

function createGameScreen() {
  gameAudio.play();

  gameAudio.addEventListener(
    "ended",
    function () {
      this.currentTime = 0;
      this.play();
    },
    false
  );

  gameScreen = buildDom(`
    <main class="game-screen">
      <header>
        <div class="points">
        <span>Points:</span>
        <span class="value"></span>
        </div>
        <div class="lives">
        <span>Border Control:</span>
        <span class="value"></span>
        </div>
      </header>

    <div class="canvas-container">
      <canvas width="1240" height="660"></canvas>
      </div>
    
      
    </main>    
    `);

  document.body.appendChild(gameScreen);
  return gameScreen;
}

function removeGameScreen() {
  gameScreen.remove();
}

function createGameOverScreen() {
  gameAudio.pause();
  gameAudio.currentTime = 0;
  gameOverScreen = buildDom(`
<<<<<<< HEAD
     <main>
     <h2 class="game-over">GAME OVER</h2>
     <img class="lose-img" src="" alt="" />
    <p>Put losers text here</p>
    <button>TRY AGAIN</button>
=======
     <main class="gameover-screen">
     <img class="lose-img" src="../img/gameover-img.png" alt="lose-img" />
    <p>NO EUROPE FOR YOU! THE LAND OF TEA AND CRUMPETS AWAITS. BETTER LUCK NEXT TIME!</p>
    <button class="restart-btn">TRY AGAIN</button>
>>>>>>> master
     </main>
    `);

  const restartBtn = gameOverScreen.querySelector("button");
  restartBtn.addEventListener("click", startGame);

  document.body.appendChild(gameOverScreen);
}

function removeGameOverScreen() {
  if (gameOverScreen !== undefined) {
    gameOverScreen.remove();
  }
}

function createWinScreen() {
  gameAudio.pause();
  gameAudio.currentTime = 0;
  winScreen = buildDom(`
     <main>
     <img class="win-img" src="../img/win-img.png" alt="win-img" />
    <p>Put winners text here</p>
    <button class="restart-btn">Restart</button>
     </main>
    `);

  const restartBtn = winScreen.querySelector("button");
  restartBtn.addEventListener("click", startGame);

  document.body.appendChild(winScreen);
}

function removeWinScreen() {
  if (winScreen !== undefined) {
    winScreen.remove();
  }
}

function startGame() {
  removeSplashScreen();
  removeGameOverScreen();
  removeWinScreen();

  createGameScreen();

  game = new Game(endGame);
  game.gameScreen = gameScreen;

  game.start();
}

function endGame(hasWon) {
  removeGameScreen();

  if (hasWon) {
    createWinScreen();
  } else {
    createGameOverScreen();
  }
}

window.addEventListener("load", createSplashScreen);
