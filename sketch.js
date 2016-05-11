var allBees = [];
var i;
var field;

function preload(){
  createCanvas(1280,720);

}

function setup(){
  field = loadImage("p5/field.png");
  image(field,0,0);
 // background(240,0,0);
}

function draw(){
  image(field,0,0);
 // background(240,0,0);
for (var i = 0; i < allBees.length; i = i+1) {
allBees[i].drawData();
}

}


function mousePressed(){
  allBees.push(new Bee());

}

function Bee() {
    this.xCor=mouseX;
    this.yCor=mouseY;
    this.xLeader = random(-1,1);
    this.yLeader = random(-1,1);
    this.xDirNeg;
    this.yDirNeg;
    this.rot = PI;
    if(this.xLeader > 0){this.xDirNeg = true}else{this.xDirNeg = false };
    if(this.yLeader > 0){this.yDirNeg = true}else{this.yDirNeg = false };

  this.drawData = function() {


   // translate(this.xCor,this.yCor);
   //rotate(this.rot);
    //background(240,0,0);
    fill(0);
    ellipse(this.xCor,this.yCor,10,10);

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


