"use strict";

let game;
let splashScreen;
let gameScreen;
let gameOverScreen;
let winScreen;

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

      <div class="canvas">
      <canvas ></canvas>
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
  gameOverScreen = buildDom(`
     <main>
     <h1>You've been DEPORTED</h1>
     <img class="lose-img" src="" alt="" />
    <p>Put losers text here</p>
    <button>Try Again</button>
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
  winScreen = buildDom(`
     <main>
     <h1>Congrats! You made it into the EU</h1>
     <img class="win-img" src="" alt="" />
    <p>Put winners text here</p>
    <button>Restart</button>
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

  game = new Game();
  game.gameScreen = gameScreen;
}

function endGame() {
  removeGameScreen();
  createGameOverScreen();
  createWinScreen();
}

window.addEventListener("load", createSplashScreen);
