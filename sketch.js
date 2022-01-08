const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var link;


var bg_img;
var food;
var rabbit;
var rabbitSprite
var button

function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  link = new Link(rope,fruit);
  rabbitSprite = createSprite(215,630,30,30)
  rabbitSprite.addImage(rabbit)
  rabbitSprite.scale = 0.2

  button = createImg("cut_button.png")
  button.position(235,30)
  button.size(45,45)
  button.mouseClicked(drop)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);
  

  image(bg_img,width/2,height/2,490,690);

  image(food,fruit.position.x,fruit.position.y,70,70);

  rope.show();
  Engine.update(engine);
  ground.show();
  drawSprites()


 
   
}

function drop(){
link.detatch()
rope.break()
link  = null

}