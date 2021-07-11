const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow = [];
var maxsnow = 100;
var engine,world;
var girl,girlImg,object1,object2,object1Img,object2Img;
function preload(){
  backgroundImg=loadImage("snow2.jpg");
  girlImg=loadImage("girl.png");
  object1Img=loadImage("extra1.png");
  object2Img=loadImage("extra2.png")
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  girl=createSprite(400, 290, 50, 50);
  girl.addImage(girlImg);
  girl.scale=0.5;
  object1=createSprite(600, 290, 50, 50);
  object1.addImage(object1Img);
  object1.scale=0.5;
  object2=createSprite(200, 290, 50, 50);
  object2.addImage(object2Img);
  object2.scale=0.5;
  if(frameCount%60===0){
    for(var p = 0;p < maxsnow;p++){
    snow.push(new Snow(random(0,800),random(0,400)))
  } }
}


function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  for(var p = 0;p < maxsnow;p++){
    snow[p].display();
    snow[p].updateY();
  }
  drawSprites();
  
}
function keyPressed(){
  if(keyCode===32){
    girl.y=girl.y-15;
  }
}