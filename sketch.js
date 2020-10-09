
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,tree_img;

function preload()
{
	tree_img = loadImage("tree.png");
}

function setup() {
  createCanvas(800, 700);
  
   tree =  createSprite(600,500,200,200);
  tree.addImage(tree_img);
  tree.scale = 0.3;


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
 

  mango1 = new Box1(430,480,20,20);
  
  mango2 = new Box1(515,360,20,20);

  mango3 = new Box1(780,455,20,20);

  mango4 = new Box1(700,490,20,20);

  mango5 = new Box1(680,350,20,20);


  stone = new Box(100,100,20,20);

  rope = new Rope(stone.body,{x:70,y:620});


  boy = new Boy(100,650,100,100);

  ground = new Ground(400,680,800,20);

  



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  mango1.display();
  mango2.display();
  stone.display();
  rope.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy.display();
  ground.display();
 

  detectollision(mango1,stone);
  
  detectollision(mango2,stone);

  detectollision(mango3,stone);

  detectollision(mango4,stone);

  detectollision(mango5,stone);

  drawSprites();

 

 
}

function detectollision(box,box1){
  boxBodyPosition = box.body.position;
  box1BodyPosition = box1.body.position;

  var distance = dist(boxBodyPosition.x,boxBodyPosition.y,box1BodyPosition.x,box1BodyPosition.y);
  if (distance<=box.width+box1.width){
    Matter.Body.setStatic(box.body,false);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
rope.fly();
}



