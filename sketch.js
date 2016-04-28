var allBees = [];
var field;
var b1;
var b2;
var b3;
var b4;

var letThereBee = false;

function preload(){
  createCanvas(1280,720);

}

function setup(){
  field = loadImage("field.jpg");
  b1 = loadImage("bee1.png");
  b2 = loadImage("bee2.png");
  b3 = loadImage("bee3.png");
  b4 = loadImage("bee4.png");


  image(field,0,0);
 // background(240,0,0);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && letThereBee == true) {
    letThereBee = false;
  }
  if (keyCode === LEFT_ARROW && letThereBee == false) {
    letThereBee = true;
  }
}

function draw(){

  image(field,0,0);
 // background(240,0,0);
for (var i = 0; i < allBees.length; i = i+1) {
allBees[i].randomFly();
}

}


function mousePressed(){


  if (letThereBee ==true ){
  allBees.push(new Bee());
}  else if (letThereBee ==false){
  for (var j = 0; j < allBees.length; j = j+1) {
allBees[j].die();
}

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
