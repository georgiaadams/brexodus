class Goods {
  constructor() {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = canvas.width + this.size;
    this.y = y;
    this.size = 10;
    this.speed = speed;
    this.image = "";
  }
  draw() {
    this.ctx.fillStyle = "#F38B1D";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  update() {}
}
