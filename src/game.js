"use strict";

class Game {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.player = null;
    this.enemies = [];
    this.goods = [];
    this.gameOver = false;
    this.gameScreen = null;
    this.points = 0;
  }

  start() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    // this.points = this.gameScreen.querySelector(".points .value");
    // this.borderControl = this.gameScreen.querySelector(".lives .value");

    this.player = new Player(this.canvas, 3);
    this.enemy = new Enemy(this.canvas, 35, 3);

    function handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
        this.player.setDirection("left");
      } else if (event.key === "ArrowRight") {
        this.player.setDirection("right");
      }
    }

    function handleKeyUp(event) {
      this.player.setDirection();
    }

    const boundHandleKeyUp = handleKeyUp.bind(this);
    document.body.addEventListener("keyup", boundHandleKeyUp);

    const boundHandleKeyDown = handleKeyDown.bind(this);
    document.body.addEventListener("keydown", boundHandleKeyDown);

    this.startLoop();
  }

  startLoop() {
    const loop = function () {
      this.handleCollisionEnemy();

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.drawAll();

      this.updateAll();

      window.requestAnimationFrame(loop);
      console.log("looping");
    }.bind(this);

    // if (!this.gameOver) {
    //   window.requestAnimationFrame(loop);
    // }

    window.requestAnimationFrame(loop);
  }

  drawAll() {
    this.player.draw();
    this.enemy.draw();
  }

  updateAll() {
    this.player.update();
    this.enemy.update();
  }

  handleCollisionEnemy() {
    this.player.didCollide(this.enemy);
  }

  handleCollisionGoods() {}

  gameOver() {}

  gameWon() {}

  gameStats() {}
}
