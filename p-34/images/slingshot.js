class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.0,
            length:400
        }
    this.pointB=pointB;
    this.rope=Constraint.create(options);
    World.add(world,this.rope);
    }
display(){
    if(this.rope.bodyA){
        var pointa=this.rope.bodyA.position;
        var pointb=this.pointB;
        strokeWeight(4);
        stroke("white");
        line(pointa.x,pointa.y,pointb.x,pointb.y);
    }
}

}