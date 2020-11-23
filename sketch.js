
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,treeImage,boy,boyImage,mango1,stone
function preload()
{

treeImage=loadImage("tree.png")	

boyImage=loadImage("boy.png")

}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=createSprite(200,630,20,20)
	boy.addImage(boyImage)
	boy.scale=0.1

	ground = new Ground(600,height,1200,20);

	stone1= new Stone(50,50,20,20)

	mango1 = new Mango(750,420,20,20)
mango2=new Mango(500,400,20,20)
mango2.scale=0.5


tree=createSprite(750,450,20,20)
tree.addImage(treeImage);
tree.scale=0.4









	
	slingshot = new SlingShot(stone1.body,{x:150, y:580});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  

  mango1.display()
  mango2.display()
stone1.display()
mango1.display()
slingshot.display()
ground.display()

detectcollision(stone1,mango1)
detectcollision(stone1,mango2)
  drawSprites();
 
}

	function detectcollision(stone1,mango2) {

		mango2BodyPosition=mango1.body.position
		stone1BodyPosition=stone1.body.position

	var distance=dist(stone1BodyPosition.x,stone1BodyPosition.y,mango2BodyPosition.x,mango2BodyPosition.y)

	if (distance<=mango2.rect+stone1.rect) {

	Matter.Body.setStatic(mango2.body,false)
	}
	}

	function keyPressed() {

		if (keyCode===32) {

	Matter.Body.setPosition(stone1.body,{x:235,y:420})
	slingshot.attach(stone1.body)		

	}
}
