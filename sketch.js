var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor="white";

  wall = createSprite(1200,200,60,height/2);
  wall.shapeColor=(80,80,80);

  speed=random(55,90);
  weight=random(400,1500);(80,80,80)

}

function draw() {
  background("black");  

  car.velocityX=speed;

  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX=0;

    var deform=0.5 * weight * speed * speed/22500;
    if(deform > 180){
      car.shapeColor=color(255,0,0);
    }
    if(deform < 180 && deform > 100){
      car.shapeColor=color(230,230,0);
    }
    if(deform < 100){
      car.shapeColor=color(0,255,0);
    }
  }
   drawSprites();
}