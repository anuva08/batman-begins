const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rainDrops;
var drops = [];
var maxDrops = 100;

function preload(){
    
}

function setup(){
  createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;  

  for(var i = 0; i < maxDrops; i+=2){
    drops.push(new Drop(random(0,1300),random(0,600)));
  }
 
 Engine.run(engine);  
}

function draw(){
  Engine.update(engine);
  background(0);
  for(var i = 0; i < maxDrops; i++){
    
   drops[i].updateY();
   drops[i].showDrop();
  }
}   

