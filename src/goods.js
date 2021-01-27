"use strict";
class Goods {
  constructor(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = canvas.height;
    this.size = 40;
    this.speed = speed;
    this.image = new Image();
    this.image.src = "img/passport.png";
  }
  draw() {
    this.ctx.fillStyle = "#F38B1D";
    this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
  }

  update(boris) {
    if (boris) {
      this.y += this.speed * 3;
    } else {
      this.y -= this.speed;
    }
  }

  insideScreen() {
    return this.y + this.size / 2 > 0;
  }
}

class Money extends Goods {
  constructor(canvas, x, speed) {
    super(canvas, x, speed);
    this.image = new Image();
    this.image.src = "img/goods-img.png";
  }
}
