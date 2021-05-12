class Ball {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':5.0,
          'density':1.0,
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      //this.image = loadImage("superhero-01.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;

      
      push();
      translate(pos.x,pos.y);
     // imageMode(CENTER);
     // this.image(this.image,this.body.position.x,this.body.position.y,this.radius)
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("green");
      fill(255);
      ellipse(0,0, this.radius, this.radius);
      pop();
    }
  };