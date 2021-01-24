class Enemy {
  constructor(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = canvas.height;
    this.size = 15;
    this.speed = speed;
    this.image = "";
  }

  draw() {
    this.ctx.fillStyle = "#4C96B4";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  update() {
    this.y--;
  }

  isInsideScreen() {
    return this.y + this.size / 2 > 0;
  }
}
