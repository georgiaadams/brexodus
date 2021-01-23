class Player {
  constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.x = canvas.width / 2;
    this.y = 50;
    this.size = 80;
    this.direction = 0;
    this.lives = lives;
    this.image = "";
    this.speed = 4;
  }

  draw() {
    this.ctx.fillStyle = "#C82FED";
    this.ctx.fillRect = (this.x, this.y, this.size, this.size);
    console.log("drawing", this.ctx);
  }
}
