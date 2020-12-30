
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	bin1 = new Bin(600,330,75,0)
	bin2 = new Bin(700,330,75,0)
	bin3 = new Bin(650,360,100,90)

	ground = new Ground(400,380,800,30)

	ball = new Ball(100,300)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bin1.display()
  bin2.display()
  bin3.display()
  ground.display()
  ball.display()

  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-45})
  }
}


