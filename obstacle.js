class Obstacle {
  constructor(img,x) {
    this.pos = createVector(400+x*100, height - 50-x*50);
    this.vel = createVector(0, 2*x );
    this.acc = createVector(0, 0);
    this.pic = img;
  }
  
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  
   applyForce(force) {
    this.acc.add(force);
  }
  
   display() {
    fill(25, 150,30);
    stroke(255);
    //rect(this.pos.x, this.pos.y, 50, 40);
    image(this.pic,this.pos.x, (this.pos.y%150)+100, 50, 40);
  }
  
  edges() {
    if (this.pos.y > height-50||this.pos.y<0) {
      this.vel.y *= -1;
    
    }
  }
  
}
