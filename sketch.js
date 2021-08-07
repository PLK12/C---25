const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;

var myEngine, myWorld;
var cbImg, cannonBall;

var tower, towerImg, ground, cannon;
var backgroundImg;
var balls = [];

//new cannon balls when down is pressed. Please store it inside balls[]

function preload()
{
  towerImg = loadImage("assets/tower.png");
  backgroundImg = loadImage('assets/background.gif');
  cbImg = loadImage("assets/cannonball.png");

    
}

function setup(){
    createCanvas(1200,600);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    tower = new Tower(150, 380, 190, 330);

    ground = new Ground(600, height-1, width*2,1);
    angle = -PI/4
    cannon = new Cannon(185, 140, 90, 56,angle);

   
    
}

function draw(){
    background(backgroundImg);
    Engine.update(myEngine);


    for(var i=0; i<balls.length; i++)
    {
       //cannonball
        showCannonBalls(balls[i], i);
    }

    tower.display();
    ground.display();
    cannon.display();
   // cannonBall.display();
   
}

//user defined function
function showCannonBalls( ball, index)
{

     ball.display();

     if(ball.body.position.x >= width || ball.body.position.y >= height-80)
     {
          World.remove(myWorld, ball.body);
          balls.splice(index,1);
     }
}



function keyPressed()
{
  if (keyCode === 32)
  {
    cannonBall = new CannonBall(cannon.x, cannon.y, 40);
    balls.push(cannonBall);
    
    
  }
}

function keyReleased()
{
   if(keyCode === 32)
   {
      
      cannonBall.shoot();
   }
}








