
 var path;
 var pathImg;
 var surferboy;
 var invisibleboundary1;
 var invisibleboundary2;
 var surferRunning;
 
 surferRunning;
 function preload(){
   //pre-load image
   pathImg = loadImage("path.png");
   surferRunning = loadAnimation("Runner-1.png","Runner-2.png");
 }
 
 function setup(){
   createCanvas(400,400);
   //create sprites here
 
   path=createSprite(200,200,20,20);
   path.addImage(pathImg);
   path.velocityY = 4;
   path.scale = 1.2;
  
   surferboy=createSprite(200,300);
   surferboy.addAnimation("Running", surferRunning);
   surferboy.scale = 0.08;
   surferboy.velocityX = 3;
 
   invisibleboundary1=createSprite(10,200,10,400);
   invisibleboundary1.visible = false;
 
   invisibleboundary2=createSprite(390,200,10,400);
   invisibleboundary2.visible = false;
 
 }
 
 function draw() {
   background(0);
 //moving background
  if (path.y > 400){
     path.y = height/2
   }
   
   //move the boy left and right with mouse
   surferboy.x = World.mouseX;
 
   //make teh surferboy collide with invisible boundaries
   surferboy.collide(invisibleboundary1);
   surferboy.collide(invisibleboundary2);
 
   
 drawSprites();
 }
 
