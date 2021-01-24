class Goods {
  constructor(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = canvas.height;
    this.size = 50;
    this.speed = speed;
    this.image = new Image();
  }
  draw() {
    this.ctx.fillStyle = "#F38B1D";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  update() {
    this.y -= this.speed;
  }

  isInsideScreen() {
    return this.y + this.size / 2 > 0;
  }
}
