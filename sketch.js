var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,side1,side2,side3,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	side1 = createSprite(277.4,609.5,20,100);
	side1.shapeColor=color("red");

	side2 = createSprite(387.3,650,200,20);
	side2.shapeColor=color("red");

	side3 = createSprite(490,609.5,20,100);
	side3.shapeColor=color("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 18 , {isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	side1 = Bodies.rectangle(277.4,609.5,20,100, {isStatic:true} );
	World.add(world, side1);

	side2 = Bodies.rectangle(387.3,650,200,20, {isStatic:true} );
	World.add(world, side2);

	side3 = Bodies.rectangle(490,609.5,20,100, {isStatic:true} );
	World.add(world, side3);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}



