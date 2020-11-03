
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mainBox, rightBox, leftBox, topBox;
var trash;

function setup() {
	createCanvas(1400, 400);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = new Ground(700,height,1400,20);
  trash = new Circle(100,100,20, 20);
  mainBox = new Box(940,385,170,16);
  rightBox = new Box(1036,335,16,110);
  leftBox = new Box(847,335,16,110);
  topBox = new Box(950,160,170,16);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  //displaying the Bodies.
  ground.display();
  trash.display();
  mainBox.display();
  rightBox.display();
  leftBox.display();
  //topBox.display();
  drawSprites();
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(trash.body,trash.body.position,{x:65,y:-65});
  }
}