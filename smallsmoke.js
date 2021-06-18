class ssmoke {
  constructor(img) {
    this.pos = createVector(random(800), random(-100, -5000));
    this.vel = createVector(0, 1);
    this.acc = createVector(0, 0);
    this.pic = img;
  }
//---------------------------------------------------------

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    
  }
//---------------------------------------------------------

  show() {
    fill("green");
    // ellipse(.pos.x,this.pos.y, 50,50);
    image(this.pic, this.pos.x, this.pos.y, 50, 50);
    //this.setCollider('circle',10,10,10)
  }






}