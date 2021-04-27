var mario, mario_running, mario_collided, bg, bgImage;

function preload() {
  mario_running = loadAnimation(
    "./images/mar1.png",
    "./images/mar2.png",
    "./images/mar3.png",
    "./images/mar4.png",
    "./images/mar5.png",
    "./images/mar6.png",
    "./images/mar7.png"
  );

  bgImage = loadImage("./images/bgnew.jpg");
}

function setup() {
  createCanvas(1000, 600);

  bg = createSprite(500, 300);
  bg.addImage(bgImage);
  mario = createSprite(100, 500);
  mario.addAnimation("alive", mario_running);
  ground = createSprite(500, 580, 1000, 5);

//   mario.debug = true;
//   ground.debug = true;
  ground.visible = false;
  mario.scale = 0.25;
  bg.scale = 0.5;
}

function draw() {
  if (keyDown("space")) {
    mario.velocityY = -20;
  }
  mario.velocityY += 0.5
  mario.collide(ground);

  drawSprites();
}
