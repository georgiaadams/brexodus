class Goods {
  constructor(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = canvas.height;
    this.size = 10;
    this.speed = speed;
    this.image = "";
  }
  draw() {
    this.ctx.fillStyle = "#F38B1D";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  update() {
    this.y--;
  }

  isInsideScreen() {
    return this.y + this.size / 2 > 0;
  }
}
