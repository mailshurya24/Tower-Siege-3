//Ma'am I had to put the speed for the blocks as less than 3.5 because the original speed is coming as 3.26 - 3.27.
//I also had to put less than 5 for blockTypeC and blockTypeD as somehow it has 4.5 as original speed.
//Sorry about any problems it might cause.

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand1;
var polygon,polygonImg;
var score = 0;

function preload()
{
  polygonImg = loadImage("Polygon.png");
}

function setup()
{
  
  createCanvas(800,400);
  
	engine = Engine.create();
	world = engine.world;

  stand1 = new stand(400,310,300,15);  

  //tower1 level4
  block1 = new blockTypeA(300,275,30,40);
  block2 = new blockTypeA(330,275,30,40);
  block3 = new blockTypeA(360,275,30,40);
  block4 = new blockTypeA(390,275,30,40);
  block5 = new blockTypeA(420,275,30,40);
  block6 = new blockTypeA(450,275,30,40);
  block7 = new blockTypeA(480,275,30,40);

  //tower1 level3
  block8 = new blockTypeB(330,235,30,40);
  block9 = new blockTypeB(360,235,30,40);
  block10 = new blockTypeB(390,235,30,40);
  block11 = new blockTypeB(420,235,30,40);
  block12 = new blockTypeB(450,235,30,40);

  //tower1 level2
  block13 = new blockTypeC(360,195,30,40);
  block14 = new blockTypeC(390,195,30,40);
  block15 = new blockTypeC(420,195,30,40);

  //tower1 top
  block16 = new blockTypeD(390,155,30,40);

  polygon = Bodies.circle(50,200,20);
  
  World.add(world,polygon);

  sling = new Sling(this.polygon,{x:100,y:200});

  Engine.run(engine);
}

function draw() {
  background(0);
  

  text("Score: "+score,700,100);
  
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,40,40);

  Engine.update(engine);
  
  stand1.display();
  
  

  //tower1
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  //scoring
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  
  getBgImg();

  drawSprites();
}

function mouseDragged()
{
	Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}
 
function mouseReleased()
{
	sling.fly();
}

function keyPressed()
{
  if(keyCode === 32)
  {
    sling.attach(this.polygon);
  }
}
  
async function getBgImg()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);

    if(hour>=06 && hour<=18)
    {
      background(255,255,0);
    }
    else
    {
      background(0,0,255);
    }
}
