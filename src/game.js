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
    // this.gamePoints = 0;
    this.buildGameOverScreen = buildGameOverScreen;
    this.background = null;
    this.level1 = true;
    this.boris = null;
    this.level2 = true;
  }

  start() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.points = this.gameScreen.querySelector(".points .value");
    this.borderControl = this.gameScreen.querySelector(".lives .value");

    this.background = new Background(this.canvas);
    this.player = new Player(this.canvas, 3);

    this.goodsAudio = new Audio("audios/goods-audio.mov");

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
      if (Math.random() > 0.984) {
        let randomX = (this.canvas.width - 80) * Math.random();
        let newEnemy = new Macron(this.canvas, randomX, 4);
        this.enemies.push(newEnemy);
      }
      if (Math.random() > 0.984) {
        let randomX = (this.canvas.width - 80) * Math.random();
        let newEnemy = new Merkel(this.canvas, randomX, 4);
        this.enemies.push(newEnemy);
      }

      if (this.player.gamePoints === 40 && this.level1) {
        this.level1 = false;
        let randomX = (this.canvas.width - 400) * Math.random();
        this.boris = new Boris(this.canvas, randomX, 5);
      }

      if (this.player.gamePoints === 80 && this.level2) {
        this.level2 = false;
        let randomX = (this.canvas.width - 400) * Math.random();
        this.boris = new Boris(this.canvas, randomX, 5);
      }

      this.handleCollisionEnemy();

      if (Math.random() > 0.989) {
        let randomGX = (this.canvas.width - 40) * Math.random();
        let newGood = new Goods(this.canvas, randomGX, 4);
        this.goods.push(newGood);
      }
      if (Math.random() > 0.989) {
        let randomGX = (this.canvas.width - 40) * Math.random();
        let newGood = new Money(this.canvas, randomGX, 4);
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
    this.background.draw();
    this.player.draw();
    if (this.boris) {
      this.boris.draw();
    }

    this.enemies.forEach(function (enemy) {
      enemy.draw();
    });
    this.goods.forEach(function (good) {
      good.draw();
    });
  }

  updateAll() {
    this.background.update();
    this.player.update();
    if (this.boris) {
      this.boris.update();
      const borisInScreen = this.boris.insideScreen();
      console.log(borisInScreen);
      if (!borisInScreen) {
        this.boris = null;
      }
    }

    this.enemies = this.enemies.filter((enemy) => {
      enemy.update(this.boris);
      return enemy.insideScreen();
    });

    this.goods = this.goods.filter((good) => {
      good.update(this.boris);
      return good.insideScreen();
    });
  }

  handleCollisionEnemy() {
    if (this.player.lives === 0) {
      this.gameOver(false);
    }

    if (this.boris && this.player.didCollide(this.boris)) {
      this.boris.play();
      this.boris = null;
      this.player.gamePoints -= 15;
      this.player.lives += 2;
    }

    this.enemies = this.enemies.filter((enemy) => {
      const colliding = this.player.didCollide(enemy);

      if (colliding) {
        this.player.removeLife();
        if (this.player.lives !== 0) {
          enemy.play();
        }
      }

      return !colliding;
    });
  }

  handleCollisionGoods() {
    if (this.player.gamePoints === 100) {
      this.gameOver(true);
    }
    this.goods = this.goods.filter((good) => {
      const goodsCollide = this.player.didCollide(good);

      if (goodsCollide) {
        this.player.gamePoints += 5;
        this.goodsAudio.pause();
        this.goodsAudio.currentTime = 0;

        if (this.player.gamePoints < 100) {
          this.goodsAudio.play();
        }
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
