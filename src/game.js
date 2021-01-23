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
    this.canvas = this.gameScreen.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.points = this.gameScreen.querySelector(".points .value");
    this.borderControl = this.gameScreen.querySelector(".lives .value");

    this.player = new Player(this.canvas, 3);

    // function handleKeyLeft(event) {
    //   if (event.key === "ArrowLeft") {
    //     this.player.setDirection("left");
    //   } else if (event.key === "ArrowRight") {
    //     this.player.setDirection("right");
    //   }
    // }

    // const boundHandleKeyLeft = handleKeyLeft.bind(this);
    // document.body.addEventListener("keyleft", boundHandleKeyLeft);

    this.startLoop();
  }

  startLoop() {
    const loop = function () {
      console.log("looping");

      this.player.draw();
    }.bind(this);

    // if (!this.gameOver) {
    //   window.requestAnimationFrame(loop);
    // }

    window.requestAnimationFrame(loop);
  }

  handleCollisionsEnemy() {}

  handleCollisionsGoods() {}

  gameOver() {}

  gameWon() {}

  gameStats() {}
}
