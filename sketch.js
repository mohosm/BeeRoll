var allBees = [];
var allHives = [];
var field;
var toolbar;
var b1;
var b2;
var b3;
var b4;
var hive1;


var beeSound;

var beehiveBoo = false;
var flowerBoo = false;
var addbeeBoo = true;
var killbeeBoo = false;
var inspectorBoo = false;



function preload(){
  createCanvas(1280,720);
 // beeSound = loadSound("bee.mp3");

}

function setup(){
  
  field = loadImage("field.jpg");
  toolbar = loadImage("toolbar.png");
  b1 = loadImage("bee1.png");
  b2 = loadImage("bee2.png");
  b3 = loadImage("bee3.png");
  b4 = loadImage("bee4.png");
  hive1 = loadImage("hive.png");

  image(field,0,0);
 // background(240,0,0);
}
function draw(){
  image(field,0,0);
  
  for (var i = 0; i < allBees.length; i = i+1) {
allBees[i].randomFly();
allHives[i].displayHive();
}
  
image(toolbar, width-350,height-50,340,40);  
  
  
}

function addBeehive(){
  allHives.push(new Hives());
}

function addFlower(){
}

function addBee(){
  allBees.push(new Bee());

}

function beeKiller(){
}

function useInspector(){
  
}

function mousePressed(){
  if (mouseY>=height-50 && mouseY<=height-10 && mouseX >= width-350 && mouseX <= width-290){
   beehiveBoo = true;
   flowerBoo = false;
   addbeeBoo = false;
   killbeeBoo = false;
   inspectorBoo = false;
    
    
  } else if (mouseY>=height-50 && mouseY<=height-10 && mouseX >= width-280 && mouseX <= width-220){
   beehiveBoo = false;
   flowerBoo = true;
   addbeeBoo = false;
   killbeeBoo = false;
   inspectorBoo = false;
    
  } else if(mouseY>=height-50 && mouseY<=height-10 && mouseX >= width-210 && mouseX <= width-150){
   beehiveBoo = false;
   flowerBoo = false;
   addbeeBoo = true;
   killbeeBoo = false;
   inspectorBoo = false;
    
  }else if(mouseY>=height-50 && mouseY<=height-10 && mouseX >= width-140 && mouseX <= width-80){
  beehiveBoo = false;
   flowerBoo = false;
   addbeeBoo = false;
   killbeeBoo = true;
   inspectorBoo = false;
    
  }else if(mouseY>=height-50 && mouseY<=height-10 && mouseX >= width-70 && mouseX <= width-10){
  beehiveBoo = false;
   flowerBoo = false;
   addbeeBoo = false;
   killbeeBoo = false;
   inspectorBoo = true; 
    
  }
  
  
  
  
  if (addbeeBoo == true && beehiveBoo == false && flowerBoo == false && killbeeBoo == false && inspectorBoo == false){
      addBee();
  } else if (addbeeBoo == false && beehiveBoo == true && flowerBoo == false && killbeeBoo == false && inspectorBoo == false){
    
  } else if(addbeeBoo == false && beehiveBoo == false && flowerBoo == true && killbeeBoo == false && inspectorBoo == false){
    
  } else if(addbeeBoo == false && beehiveBoo == false && flowerBoo == false && killbeeBoo == true && inspectorBoo == false){
    
  } else if(addbeeBoo == false && beehiveBoo == false && flowerBoo == false && killbeeBoo == false && inspectorBoo == true){
    
  }
}


function Hives(){
  this.xHive=mouseX;
  this.yHive=mouseY;
  
  this.displayHive = function(){
    image(hive1,this.xHive,this.yHive);
  }
  
  
  
}




function Bee() {

  // for randomFly:
    this.xCor=mouseX;
    this.yCor=mouseY;
    this.xLeader = random(-1,1);
    this.yLeader = random(-1,1);
    this.xDirNeg;
    this.yDirNeg;
    this.rot = PI;
    if(this.xLeader > 0){this.xDirNeg = true}else{this.xDirNeg = false };
    if(this.yLeader > 0){this.yDirNeg = true}else{this.yDirNeg = false };

    this.isDead = false;


  // for dieFuntion:
  this.fallSpeed = 0;
  this.gravity = 0.6;




  this.randomFly = function() {
    
 //   beeSound.play();
 //   beeSound.loop();
    if (this.isDead == false){
      
   // translate(this.xCor,this.yCor);
   //rotate(this.rot);
    //background(240,0,0);
    fill(0);
    //ellipse(this.xCor,this.yCor,10,10);



    if (this.xDirNeg == false && this.yDirNeg == false){
    image(b2,this.xCor,this.yCor,20,20);
    } else if (this.xDirNeg == false && this.yDirNeg == true){
      image(b1,this.xCor,this.yCor,20,20);
    } else if (this.xDirNeg == true && this.yDirNeg == false){
      image(b3,this.xCor,this.yCor,20,20);
    } else {
      image(b4,this.xCor,this.yCor,20,20);
    }


    this.rot = this.rot+PI/20;


     if(this.xCor>width){
    this.xDirNeg = true
  }
      if(this.xCor<0){
    this.xDirNeg = false
  }
  if (this.xDirNeg == false){
    this.xCor = this.xCor + random(-3,10) } else {
      this.xCor = this.xCor -random(-3,10) 
  };


if(this.yCor>height){
    this.yDirNeg = true
  }
      if(this.yCor<0){
    this.yDirNeg = false
  }
  if (this.yDirNeg == false){
    this.yCor = this.yCor +random(-3,10) } else {
      this.yCor = this.yCor -random(-3,10) 
  };


}

}


this.die = function(){
  if(mouseX >= this.xCor-10 && mouseX <= this.xCor+10 && mouseY >= this.yCor-10 && mouseY <= this.yCor+10){
  this.isDead = true;
  this.yCor = this.yCor + this.speed;
  this.speed = this.speed + this.gravity;


  if ( this.speed < 0.65 && this.yCor > height-10) {
    this.speed = 0;
    this.gravity = 0;


}


}

}





}
