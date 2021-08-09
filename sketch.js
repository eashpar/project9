var box;

function setup() {
  createCanvas(400,400);
  background(30);
  box = createSprite(200,200,30,30);
}

function draw() 
{

  if(keyDown("RIGHT_ARROW")){
    background("red");
  }

  if(keyDown("LEFT_ARROW")){
    background("green");
  }

  if(keyDown("UP_ARROW")){
    background("yellow");
  }

  if(keyDown("DOWN_ARROW")){
    background("blue");
  }
  
  drawSprites();
}
