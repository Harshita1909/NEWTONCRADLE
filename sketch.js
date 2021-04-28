
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;

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

	class Rope{
		constructor(body1, body2,offsetX,offsetY){
			this.offsetX=offsetX;
		this.offsetY=offsetY;
			var options = {
				bodyA: body1,
				bodyB: body2,
				stiffness: 0.7,
				length: 280,
				pointB:{x:this.offsetX,y:this.offsetY}
			};
		   
		

			this.sling = Constraint.create(options);
			World.add(world, this.sling);
		}
	
	
		display(){
			
			
				var pointA = this.sling.bodyA.position;
				var pointB = this.sling.bodyB.position;
			 
				   stroke("black");
								   strokeWeight(7);
					line(pointA.x , pointA.y, pointB.x+this.offsetX , pointB.y+this.offsetY);
					console.log("line");
				
			
		}
		
	}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof= new ground(400,20,200,20);
bob1=new Bob (400,300,40);
bob2= new Bob(440,300,40);
bob3= new Bob(360,300,40);
bob4= new Bob(320,300,40);
bob5= new Bob(480,300,40);
rope1=new Rope(bob1.body,roof.body,0,0);
rope2=new Rope(bob2.body,roof.body,40,0);
rope3=new Rope(bob3.body,roof.body,-40,0);
rope4=new Rope(bob4.body,roof.body,-80,0);
rope5=new Rope(bob5.body,roof.body,80,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(bob4.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){

}



