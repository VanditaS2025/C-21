var rect1, rect2, rect3

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 100, 50, 50);
  rect2 = createSprite(400, 300, 50, 50);
  rect3 = createSprite (400,250,100,50);
  rect1.debug = true;
  rect2.debug = true;
 // rect1.velocityY = 5;
  //rect3.velocityY = -5;
}

function draw() {
  background(0,0,255); 

  rect3.x = mouseX;
  rect3.y = mouseY;

  if (isTouching(rect2, rect3)){
    rect2.shapeColor = "pink";
    rect3.shapeColor = "orange";
  }
  else{
    rect2.shapeColor = "green";
    rect3.shapeColor = "green";
  }


  
  //bounceOff(rect1, rect3);
  drawSprites();
}


