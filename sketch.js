var car, wall, speed, weight, deformation, wheel1,wheel2,wheel3,wheel4,windshield

function setup() {

  speed = random(55, 90) 
  weight = random(400,1500)  

  createCanvas(1600,400);
  wall = createSprite(1500,200,60,height/2)
  wall.shapeColor=color(60,60,60)
  car = createSprite(50, 200, 50, 50);
  car.shapeColor=color("purple")  
  wheel1 = createSprite(35,175,10,12) 
  wheel1.shapeColor=color("purple") 
  wheel2 = createSprite(60,175,10,12) 
  wheel2.shapeColor=color("purple") 
  wheel3 = createSprite(35,225,10,12) 
  wheel3.shapeColor=color("purple") 
  wheel4 = createSprite(60,225,10,12) 
  wheel4.shapeColor=color("purple") 
  windshield = createSprite(75,200,13,35) 
  windshield.shapeColor=color("purple")    
  car.velocityX = speed   
  wheel1.velocityX = speed   
  wheel2.velocityX = speed     
  wheel3.velocityX = speed    
  wheel4.velocityX = speed   
  windshield.velocityX = speed        
}

function draw() {
  background(225);  
  drawSprites();

if (car.isTouching(wall)) {
deformation = speed*0.5*weight*speed/22500
}

if(deformation<100){
car.shapeColor=color("lightGreen")
wheel1.shapeColor=color("lightGreen")
wheel2.shapeColor=color("lightGreen")
wheel3.shapeColor=color("lightGreen")
wheel4.shapeColor=color("lightGreen")
windshield.shapeColor=color("lightGreen")
car.velocityX = 0
wheel1.velocityX = 0
wheel2.velocityX = 0
wheel3.velocityX = 0
wheel4.velocityX = 0
windshield.velocityX = 0

}

if(deformation>100&&deformation<180){
  car.shapeColor=color("yellow")
  wheel1.shapeColor=color("yellow")
  wheel2.shapeColor=color("yellow")
  wheel3.shapeColor=color("yellow")
  wheel4.shapeColor=color("yellow")
  windshield.shapeColor=color("yellow")
  car.velocityX = 0
  wheel1.velocityX = 0
  wheel2.velocityX = 0
  wheel3.velocityX = 0
  wheel4.velocityX = 0
  windshield.velocityX = 0
}


 if(deformation>180){
  car.shapeColor=color("red")
  wheel1.shapeColor=color("red")
  wheel2.shapeColor=color("red")
  wheel3.shapeColor=color("red")
  wheel4.shapeColor=color("red")  
  windshield.shapeColor=color("red")
  car.velocityX = 0
  wheel1.velocityX = 0
  wheel2.velocityX = 0
  wheel3.velocityX = 0
  wheel4.velocityX = 0
  windshield.velocityX = 0

}

} 