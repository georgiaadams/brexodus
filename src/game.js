"use strict";

class Game {
  constructor(buildGameOverScreen) {
    this.canvas = null;
    this.ctx = null;
    this.player = null;
    this.enemies = [];
    this.goods = [];
    this.gameIsOver = false;
    this.gameScreen = null;
    this.gamePoints = 0;
    this.buildGameOverScreen = buildGameOverScreen;
  }

  start() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.points = this.gameScreen.querySelector(".points .value");
    this.borderControl = this.gameScreen.querySelector(".lives .value");

    this.player = new Player(this.canvas, 3);

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
      if (Math.random() > 0.98) {
        let randomX = (this.canvas.width - 15) * Math.random();
        let newEnemy = new Enemy(this.canvas, randomX, 2);
        this.enemies.push(newEnemy);
      }

      this.handleCollisionEnemy();

      if (Math.random() > 0.99) {
        let randomGX = (this.canvas.width - 10) * Math.random();
        let newGood = new Goods(this.canvas, randomGX, 2);
        this.goods.push(newGood);
      }

      this.handleCollisionGoods();

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.drawAll();

      this.updateAll();

      this.gameStats();

      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }
    }.bind(this);

    window.requestAnimationFrame(loop);
  }

  drawAll() {
    this.player.draw();
    this.enemies.forEach(function (enemy) {
      enemy.draw();
    });
    this.goods.forEach(function (good) {
      good.draw();
    });
  }

  updateAll() {
    this.player.update();

    this.enemies = this.enemies.filter(function (enemy) {
      enemy.update();
      return enemy.isInsideScreen();
    });

    this.goods = this.goods.filter(function (good) {
      good.update();
      return good.isInsideScreen();
    });
  }

  handleCollisionEnemy() {
    this.enemies = this.enemies.filter((enemy) => {
      const colliding = this.player.didCollide(enemy);

      if (colliding) {
        this.player.removeLife();
      }
      if (this.player.lives === 0) {
        this.gameOver(false);
      }

      return !colliding;
    });
  }

  handleCollisionGoods() {
    this.goods = this.goods.filter((good) => {
      const goodsCollide = this.player.didCollide(good);

      console.log(this.player.didCollide(good));

      if (goodsCollide) {
        this.player.gamePoints += 10;
      }
      if (this.player.gamePoints === 100) {
        this.gameOver(true);
      }

      return !goodsCollide;
    });
  }

  gameOver(hasWon) {
    this.gameIsOver = true;
    this.buildGameOverScreen(hasWon);
  }

  gameStats() {
    this.borderControl.innerHTML = this.player.lives;
    this.points.innerHTML = this.player.gamePoints;
  }
}
