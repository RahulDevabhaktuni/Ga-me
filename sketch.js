const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const SAT = Matter.SAT;
var crims;
var bullet
var ground, playerTest
var score = 0

function setup() {
	createCanvas(1250, 600);
	engine = Engine.create();
	world = engine.world;
	world.gravity.y = 0;

	ground = new Ground(625, 580, 1250, 40)
	
	bullet = new Bullet ()
	crims = new Criminal(100, 530)
	
	playerTest = new Player(1100, 535)

	Engine.run(engine);
}


function draw() {
  Engine.update(engine)
  background("skyblue");
  
  ground.display();
  playerTest.display();

  crims.display()
  crims.updateX()

  bullet.display();
textSize(40)
fill("green")
  text("Score: " + score, 530, 100)

if(SAT.collides(bullet.body, crims.body).collided){
Matter.Body.setPosition(crims.body, {x:0.000000000000000000000000001, y:530})
Matter.Body.setPosition(bullet.body, {x:1080, y:508})
console.log(crims.body.position.x)
score = score + 1
	}
	if(crims.body.position.x >= 1000){
		textSize(40)
		fill("red")
		text("Game Over", 510, 300)
		Matter.Body.setStatic(crims, true)
		
	}
}
 
function keyPressed(){
	if(keyCode === LEFT_ARROW){
		bullet.updateX();
	}
}
