class Player {
  constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.x = canvas.width / 2;
    this.y = 30;
    this.size = 20;
    this.direction = 0;
    this.lives = lives;
    this.image = "";
    this.speed = 4;
  }

  draw() {
    this.ctx.fillStyle = "#C82FED";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  update() {
    this.x = this.x + this.direction * this.speed;
    this.handleScreenCollision();
  }

  setDirection(direction) {
    if (direction === "left") {
      this.direction = -1;
    } else if (direction === "right") {
      this.direction = 1;
    } else {
      this.direction = 0;
    }
  }

  handleScreenCollision() {
    const screenLeft = 0;
    const screenRight = this.canvas.width;

    const playerLeft = this.x;
    const playerRight = this.x + this.size;

    if (playerRight > screenRight) {
      this.direction = 0;
      this.x = screenRight - this.size;
    } else if (playerLeft < screenLeft) {
      this.direction = 0;
      this.x = screenLeft;
    }
  }

  didCollide(item) {
    const collideLeft = this.x < item.x + item.size;

    const collideRight = this.x + this.size > item.x;

    const collideTop = this.y < item.y + item.size;

    const collideBottom = this.y + this.size > item.y;

    return collideLeft && collideRight && collideTop && collideBottom;
  }
}
