let spaceInvader;
let Ship;
let player;
let fireBullet = [false];
let x = 100;
let y = 650;
let isKilled = [false,false,false,false];
let shot;

function preload(){
   shot = loadSound("sounds/Shoot.mp3")        
}

function setup(){
createCanvas(800,800)
//background(0)
   //Images
//spaceInvader = loadImage("images/)        
//ship = loadImages("images/ ")
//fire = loadImages("images/ ")   
  
  
}

function draw(){ 
   background(0);
   if(keyIsDown(LEFT_ARROW)){
       x-=5;                              
   }
   
   if(keyIsDown(RIGHT_ARROW)){
       x+=5;
   }
   //clear();
   //Player Ship
   fill(0,255,0);
   rect(x,700,20,30);
   if(x>800 && x<0){
       //let x =
   }
   //enemy ship
   if(isKilled[0]== false){ 
       fill(255,0,0);
       rect(400,100,50,50);
   }else if(isKilled[0]==true){ 
       fill(0);
       rect(400,100,50,50);
   }
  if(isKilled[1]== false){ 
       fill(255,0,0);
       rect(300,100,50,50);
   }else if(isKilled[1]==true){ 
       fill(0);
       rect(300,100,50,50);
   }
   if(isKilled[2]== false){ 
    fill(255,0,0);
    rect(200,100,50,50);
}else if(isKilled[2]==true){ 
    fill(0);
    rect(200,100,50,50);
}
if(isKilled[3]== false){ 
    fill(255,0,0);
    rect(100,100,50,50);
}else if(isKilled[3]==true){ 
    fill(0);
    rect(100,100,50,50);
}
   fill("yellow");
   rect(x,y,20,50);
   if(keyIsDown(UP_ARROW)){
       shot.play();        
       fireBullet[0] = true;   
   }       
   if(fireBullet[0]){
       y-=5;

   console.log(fireBullet);
   }
   if(y<0){
       y=650;
       fireBullet[0]=false;
   }
     if((x<450 && x>400) && (y>100 && y<150)){
         isKilled[0]=true;
         
   }
    if((x<350 && x>300) && (y>100 && y<150)){
         isKilled[1]=true;
         
   }
   if((x<250 && x>200) && (y>100 && y<150)){
        isKilled[2]=true;
   }
   if((x<150 && x>100) && (y>100 && y<150)){
    isKilled[3]=true;
   }

   // else(y>0){
               
    
   
   // if(keyIsDown(UP_ARROW)) {
   //      y-=5;
       
   //  }
}
