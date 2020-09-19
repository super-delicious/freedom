class Mount {
  constructor(_xPos, _yPos, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.size = _size;

  }

  display() {
    push();
    translate(this.xPos, this.yPos);
   // rotate();
    scale(this.size);
    fill(149, 156, 153);
    triangle(410, 375, 380, 245, 350, 375);
    pop();



  }

  move() {

    if (this.xPos <= height + this.size / 3) {
      this.xPos += 2;

    } else {

      this.xPos = -this.size / 2;
      this.yPos = this.size /8;
      this.size = random(20, 80);

    }
  }
}