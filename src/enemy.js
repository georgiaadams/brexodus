"use strict";

const macronAudio = new Audio("audios/macron.mov");
const goodsAudio = new Audio("audios/goods-audio.mov");
const merkelAudio = new Audio("audios/merkel.mov");
const borisAudio = new Audio("audios/boris.mov");

class Enemy {
  constructor(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = canvas.height;
    this.size = 100;
    this.speed = speed;
    this.audio = goodsAudio;
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
  }

  update() {
    this.y -= this.speed;
  }

  insideScreen() {
    return this.y + this.size;
  }

  play() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.audio.play();
  }
}

class Macron extends Enemy {
  constructor(canvas, x, speed) {
    super(canvas, x, speed);
    this.image = new Image();
    this.image.src = "img/macron-enemy.png";
    this.audio = macronAudio;
  }
}

class Merkel extends Enemy {
  constructor(canvas, x, speed) {
    super(canvas, x, speed);
    this.image = new Image();
    this.image.src = "img/merkel-enemy.png";
    this.audio = merkelAudio;
  }
}

class Boris extends Enemy {
  constructor(canvas, x, speed) {
    super(canvas, x, speed);
    this.size = 400;
    this.image = new Image();
    this.image.src = "img/boris-img.png";
    this.audio = borisAudio;
  }
}
