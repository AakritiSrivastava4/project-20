var fixedRect, movingRect,g1,g2,g3,g5;
var deformation=0;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,200);
  speed=random(50,90);
  weight=random(400,1500);
  car.velocityX=speed;
 
}

function draw() {
  background(0,0,0);  
   
  if (istouching(wall,car)){
    car.setVelocity(0,0);
    deformation =(0.5* speed*speed*weight)/22500;
    if (deformation>180){
     car.shapeColor = "red";
     
    }
    else if (deformation<100) {
      car.shapeColor = "green";
      
    }
    else if(100<deformation<180)   {
      car.shapeColor = "yellow";
     
    }
  }
  else{
    car.shapeColor = "white";
    
  }
  
  drawSprites();
}
function istouching(object1,object2){
  if (object1.x - object2.x < (object1.width + object2.width)/2) {
  return true;
}
else {
  return false;
}

}
  
