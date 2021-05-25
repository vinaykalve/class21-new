var fixedRect, movingRect
var box1, box2, box3

function setup() {
  createCanvas(800, 400);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "green"
  movingRect = createSprite(600, 200, 80, 50);
  movingRect.shapeColor = "green"

  box1 = createSprite(50, 50, 50, 50);
  box1.shapeColor = "yellow";
  box2 = createSprite(250, 50, 50, 50);
  box2.shapeColor = "yellow";
  box3 = createSprite(500, 50, 50, 50);
  box3.shapeColor = "yellow"

  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(0);


  movingRect.x = mouseX;
  movingRect.y = mouseY;


  if (isTouching(box3, movingRect)) {
    box3.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    box3.shapeColor = "green";
  }


  drawSprites();
}
