var fixedRect, movingRect;

function setup() {
  createCanvas(800, 400);
  fixedRect = createSprite(400, 200, 30, 70);
  movingRect = createSprite(600, 200, 70, 30);

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";

  fixedRect.debug = true;
  movingRect.debug = true;

  movingRect.velocityX = -5;
  fixedRect.velocityX = 5;
}

function draw() {
  // movingRect.y = mouseY;
  // movingRect.x = mouseX;

  if (movingRect.x - fixedRect.x < movingRect.width / 2 + fixedRect.width / 2 &&
    fixedRect.x - movingRect.x < movingRect.width / 2 + fixedRect.width / 2 &&
    fixedRect.y - movingRect.y < movingRect.height / 2 + fixedRect.height / 2 &&
    movingRect.y - fixedRect.y < movingRect.height / 2 + fixedRect.height / 2) {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  if (movingRect.x - fixedRect.x < movingRect.width / 2 + fixedRect.width / 2 &&
    fixedRect.x - movingRect.x < movingRect.width / 2 + fixedRect.width / 2 &&
    fixedRect.y - movingRect.y < movingRect.height / 2 + fixedRect.height / 2 &&
    movingRect.y - fixedRect.y < movingRect.height / 2 + fixedRect.height / 2) {

    movingRect.velocityX *= (-1);
    fixedRect.velocityX *= (-1);

    movingRect.velocityY *= (-1);
    fixedRect.velocityY *= (-1);
  }

  background(0);
  drawSprites();
}