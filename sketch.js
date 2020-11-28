var a,b;
function setup() {
  createCanvas(800,400);
  a =createSprite(400, 200, 50, 50);
  b =createSprite(200, 400, 50, 50);
  c =createSprite(400,100,20,20);
  box1 =createSprite(500,200,50,50);
  box2 =createSprite(100,200,50,50);
  box2.velocityX=2;
}

function draw() {
  background(255,255,255);
  
  b.x =World.mouseX;
  b.y =World.mouseY; 

  if(touching(a,b)){
    a.shapeColor=("red");
    b.shapeColor=("red");
  }
  else {
    a.shapeColor=("blue");
    b.shapeColor=("blue");
  }
  bounceoff(box1,box2);
  
  
  drawSprites();
}













