class Bob {
constructor(x,y,diameter){
var options={
             isStatic:false,
             restitution:1.0,
            friction:0,
             density:0.5
}
this.body = Bodies.circle(x,y,diameter/2,options)
this.diameter=diameter;

//this.image=loadImage("paper.png");
World.add(world,this.body)
}
 
display(){
 var angle=this.body.angle
// push();
 //translate(this.body.position.x,this.body.position.y);
// rotate(angle);
 rectMode(CENTER);
 stroke("red");
 fill("pink");
 ellipse(this.body.position.x,this.body.position.y,this.diameter);
// pop();
 }
}