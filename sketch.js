const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase, playerBow, computerBow;
var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  
  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerBow = new computerArcher(computer.body.position.x-50, computer.body.position.y -20 , 120, 120);
  playerBow = new playerArcher(player.body.position.x+50,player.body.position.y -20, 120, 120 );
  
 
  Engine.run(engine);
  //Create an arrow Object
   arrow = new playerArrow(playerBow.body.position.x, playerBow.body.position.y, 30, 30);
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerBow.display();
  computerBow.display();
  


  //Display arrow();
  arrow.display(); 

}
function keyPressed() {

  if(keyCode === 32){
    // create an arrow object and add into an array ; set its angle same as angle of playerArcher
    var posX = playerBow.body.position.x;
    var posY = playerBow.body.position.y;
    var angle = playerBow.body.angle+PI/2;

    arrow = new playerArrow(posX, posY, 100, 10);
    World.add(world, arrow);
    Matter.Body.setAngle(arrow.body, angle);


    Engine.update(engine);
  }
}
function keyReleased () {

  if(keyCode === 32){
   
      var angle = playerBow.body.angle+PI/2;
      Matter.Body.setAngle(arrow.body, angle);
      arrow.shoot(angle);
    }
  }
