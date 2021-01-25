class Goods {
  constructor(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = canvas.height;
    this.size = 70;
    this.speed = speed;
    this.image = new Image();
    this.image.src = "../img/passport.png";
  }
  draw() {
    this.ctx.fillStyle = "#F38B1D";
    this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
  }

  update() {
    this.y -= this.speed;
  }

  insideScreen() {
    return this.y + this.size / 2 > 0;
  }
}
