
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var roof, bob1, bob2, bob3, bob4, bob5, rope1, rope2, rope3, rope4, rope5, rof1, rof2, rof3, rof4, rof5;


function preload(){
	
}

function setup() {
	createCanvas(1300, 600);

 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof=new Top (650, 30, 1300, 30);
	bob1= new Bob(400, 430)
	bob2= new Bob(500, 430)
	bob3= new Bob(600, 430)
	bob4= new Bob(700, 430)
	bob5= new Bob(800, 430)
  rof1= new Rof(400, 30)
  rof2= new Rof(500, 30)
  rof3= new Rof(600, 30)
  rof4= new Rof(700, 30)
  rof5= new Rof(800, 30)

  rope1 = new Rope(rof1.body, bob1.body )
  rope2 = new Rope(rof2.body, bob2.body )
  rope3 = new Rope(rof3.body, bob3.body )
  rope4 = new Rope(rof4.body, bob4.body )
  rope5 = new Rope(rof5.body, bob5.body )
 


  keyPressed();
  Engine.run(engine); 
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  rof1.display();
  rof2.display();
  rof3.display();
  rof4.display();
  rof5.display(); 
  roof.display();
   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();
   bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
}

function keyPressed () {
		
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob5.body,bob5.body.position, {x:190, y:865} )
	}

}

