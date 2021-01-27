"use strict";
class Background {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = 0;
    this.y = 0;
    this.image = new Image();
    this.image.src = "img/background.png";
    this.speed = 2;
  }
  draw() {
    this.ctx.drawImage(this.image, 0, this.y);
    if (this.speed < 0) {
      this.ctx.drawImage(this.image, 0, this.y - this.image.height);
    } else {
      this.ctx.drawImage(this.image, 0, this.y + this.canvas.height);
    }
  }
  update() {
    this.y -= this.speed;
    this.y %= this.canvas.height;
  }

  playAudio() {
    this.sound.play;
    console.log("playing", this.sound);
  }
}
