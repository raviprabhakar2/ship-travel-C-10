var ship ,ship_running,edges ;
var seaImage ;

function preload(){
seaImage = loadImage("sea.png")
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}


function setup(){
  createCanvas(1000,400);
sea = createSprite(300,160,1000,20)
sea.x = sea.width/2
sea.addImage(seaImage)


ship = createSprite(400,150,20,50);
ship.addAnimation("running",shipImage);
edges = createEdgeSprites();

ship.scale = 0.5;
ship.x = 50;
}

function draw() {
  background("blue"); 

  sea.velocityX = -3
  
if (sea.x < 0){
sea.x = sea.width/2

}

if (keyDown("space")){
  ship.velocityY = -10 ;
}
  ship.velocityY = ship.velocityY + 0.5 ;

  ship.collide(sea)
  drawSprites() ;
 
}
