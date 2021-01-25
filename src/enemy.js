class Enemy {
  constructor(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = canvas.height;
    this.size = 100;
    this.speed = speed;
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
}

class Macron extends Enemy {
  constructor(canvas, x, speed) {
    super(canvas, x, speed);
    this.image = new Image();
    this.image.src = "../img/macron-enemy.png";
  }
}

class Merkel extends Enemy {
  constructor(canvas, x, speed) {
    super(canvas, x, speed);
    this.image = new Image();
    this.image.src = "../img/merkel-enemy.png";
  }
}
