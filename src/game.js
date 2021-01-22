"use strict";

class Game {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.player = null;
    this.enemy = [];
    this.goods = [];
    this.gameOver = false;
    this.gameScreen = null;
    this.points = 0;
  }

  start() {
    //Create ctx, player and start loop
    this.gameCanvas = document.querySelector(".canvas");
    this.canvas = this.gameScreen.querySelector("canvas");
    this.ctx = canvas.getContext("2d");

    this.points = this.gameScreen.querySelector(".points .value");
    this.borderControl = this.gameScreen.querySelector(".lives .value");

    this.containerHeight = this.gameCanvas.offsetHeight;
    this.containerWidth = this.gameCanvas.offsetWidth;
    this.canvas.setAttribute("Height", this.containerHeight);
    this.canvas.setAttribute("Width", this.containerWidth);

    this.player = new Player(this.canvas, "something to go here");
  }

  startLoop() {}

  handleCollisionsEnemy() {}

  handleCollisionsGoods() {}

  gameOver() {}

  gameWon() {}

  gameStats() {}
}
