
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject 
var world;
var pap;

function setup() {
    createCanvas(1600, 700);
    rectMode(CENTER);


    engine = Engine.create();
    world = engine.world;
    
    groundObject=new ground(width/2,670,width,20);
    dustbinObj=new dustbin(1200,650);

    Engine.run(engine);
  pap=new paper(200,450,70);

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1200,
      height: 650,
      wireframes: false
    }
  });

  Engine.run(engine);
  Render.run(render);
}


function draw() {
  
  background(230);
  rectMode(CENTER);

  groundObject.display();
  dustbinObj.display();
  pap.display();
  
}

function keyPressed() {
    if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(pap.body,pap.body.position,{x:130,y:-145});

  
    }
}   