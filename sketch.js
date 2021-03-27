
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperBallObj
var paperImg

function  preload() {
	paperImg=loadImage("paperBall.png")



}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	paperBallObj=createSprite(300,300,40,40)
	paperBallObj.addImage(paperImg)
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
    
}

function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
 paperBallObj.display();


 if (keyDown('space')){
	 paperBallObj.velocityX=9
	 paperBallObj.velocityY=2
 }
}

if (paperBallObj>1150){
	paperBallObj.x=1200
}