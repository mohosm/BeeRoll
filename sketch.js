var allBees = [];
var allHives = [];
var allFlowers = [];
var firstnames = [];
var nicknames = [];
var lastnames = [];
var hiveXs = [];
var hiveYs = [];
var flowerXs = [];
var flowerYs = [];
var s1s = [];
var s2s = [];
var s3s = [];
var data_table;
var field;
var toolbar;
var b1;
var b2;
var b3;
var b4;
var hive1;
var flower1;
var glass;
var swatter;


var beeSound;

var beehiveBoo = false;
var flowerBoo = false;
var addbeeBoo = true;
var killbeeBoo = false;
var inspectorBoo = false;
var texy = "";



function preload(){
  createCanvas(1280,720);
 // beeSound = loadSound("bee.mp3");
 data_table = loadTable("data.csv", "csv","header");

}

function setup(){
   for (var r = 0; r < data_table.getRowCount(); r++){
    var firstname = data_table.get(r, "firstname");
    var nickname = data_table.get(r, "nickname");
    var lastname = data_table.get(r, "lastname");
    var s1 = data_table.get(r, "s1");
    var s2 = data_table.get(r, "s2");
    var s3 = data_table.get(r, "s3");

    firstnames[r]=firstname;
    nicknames[r]=nickname;
    lastnames[r]=lastname;
    s1s[r]=s1;
    s2s[r]=s2;
    s3s[r]=s3;
  }

  
  field = loadImage("field.jpg");
  toolbar = loadImage("toolbar.png");
  b1 = loadImage("bee1.png");
  b2 = loadImage("bee2.png");
  b3 = loadImage("bee3.png");
  b4 = loadImage("bee4.png");
  hive1 = loadImage("hive.png");
  flower1 = loadImage("flower.png");
  glass = loadImage("glass.png");
  swatter = loadImage("swatter.png");

  image(field,0,0);
 // background(240,0,0);
}
function draw(){
  image(field,0,0);

        for (var g = 0; g < allFlowers.length; g = g+1) {
allFlowers[g].displayFlower();
  }  
    for (var j = 0; j < allHives.length; j = j+1) {
allHives[j].displayHive();
  }
  

for (var i = 0; i < allBees.length; i = i+1) {
  if(allFlowers.length == 0 && allHives.length == 0){
allBees[i].randomFly();
} else if (allFlowers.length == 0 && allHives.length > 0){
  
  
} else if (allFlowers.length > 0 && allHives.length == 0){
  
} else if (allFlowers.length > 0 && allHives.length > 0){
}
}
  
  image(toolbar, width-350,height-50,340,40);  
  
  strokeWeight(3);
  fill(255);
  rect(0,height-60,750,60);
  strokeWeight(1);
  fill(0);
  textSize(18);
  text(texy,15,height-30);  
  if (inspectorBoo == true){
  image(glass,mouseX-15,mouseY-15,60,60);
  } else if (addbeeBoo == true){
    image(b1,mouseX-15,mouseY-15,30,30);
  } else if (flowerBoo == true){
    image(flower1,mouseX-15,mouseY-15,60,100);
  } else if (beehiveBoo == true){
    image(hive1,mouseX-15,mouseY-15,70,100);
  } else if (killbeeBoo == true){
    image(swatter,mouseX-60,mouseY-20,80,80);
    
  }
}
function mouseClicked(){
  for (var i = 0; i < allBees.length; i = i+1) {
    if(mouseX<allBees[i].xCor+50 && mouseX>allBees[i].xCor-30 &&mouseY<allBees[i].yCor+50 && mouseY>allBees[i].yCor-30 && inspectorBoo == true){
    allBees[i].selected = true;
    texy = allBees[i].fn +" "+'"'+allBees[i].nn+'"'+" "+allBees[i].ln+"\n"+allBees[i].s11+" "+allBees[i].s22+" "+allBees[i].s33;
    } else {
    allBees[i].selected = false;
    }
     if(mouseX<allBees[i].xCor+50 && mouseX>allBees[i].xCor-30 &&mouseY<allBees[i].yCor+50 && mouseY>allBees[i].yCor-30 && killbeeBoo == true){
    allBees[i].isDead = true;
    
    }
    }
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
  
  
  
if (mouseX> width-400 && mouseY > height-150){
  println("nyugi van");
}else{  
  if (addbeeBoo == true && beehiveBoo == false && flowerBoo == false && killbeeBoo == false && inspectorBoo == false){
      allBees.push(new Bee());
  } else if (addbeeBoo == false && beehiveBoo == true && flowerBoo == false && killbeeBoo == false && inspectorBoo == false){
    allHives.push(new Hives());
    for (var l = 0; l < allBees.length; l = l+1) {
    allBees[l].Update();
    }
    
  } else if(addbeeBoo == false && beehiveBoo == false && flowerBoo == true && killbeeBoo == false && inspectorBoo == false){
    allFlowers.push(new Flower());
    for (var l = 0; l < allBees.length; l = l+1) {
    allBees[l].Update();
    }
  } else if(addbeeBoo == false && beehiveBoo == false && flowerBoo == false && killbeeBoo == true && inspectorBoo == false){
    println("time to kill");
    for (var i = 0; i < allBees.length; i = i+1) {
    if(i.XCor < mouseX +25 && i.XCor > mouseX-5 && i.YCor > mouseY-5 && i.YCor < mouseY+25){
      allBees[i].remove();
      println("removed");
      
    }
}
    
    
    
  } else if(addbeeBoo == false && beehiveBoo == false && flowerBoo == false && killbeeBoo == false && inspectorBoo == true){
    
  }
}
}
function Hives(){
  this.xHive=mouseX;
  this.yHive=mouseY;
  hiveXs.push(this.xHive);
  hiveYs.push(this.yHive);
  
  this.displayHive = function(){
    image(hive1,this.xHive,this.yHive,70,100);
  }
}


function Flower(){
  this.xFlo=mouseX;
  this.yFlo=mouseY;
  
  flowerXs.push(this.xFlo);
  flowerYs.push(this.yFlo);
  
    this.displayFlower = function(){
    image(flower1,this.xFlo,this.yFlo,60,100);
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
    this.r1 = floor(random(98));
    this.r2 = floor(random(98));
    this.r3 = floor(random(98));
    this.r4 = floor(random(12));
    this.r5 = floor(random(18));
    this.r6 = floor(random(18));
    
    this.fn = firstnames[this.r1];
    this.nn = nicknames[this.r2];
    this.ln = lastnames[this.r3];
    this.s11 = s1s[this.r4];
    this.s22 = s2s[this.r5];
    this.s33 = s3s[this.r6];
    this.selected = false;
    
  println(this.fn,"'",this.nn,"'",this.ln,"-",this.s11,this.s22,this.s33);
    this.isDead = false;
    this.movBetX1 = 0;
    this.movBetX2 = width;
    this.movBetY1 = 0;
    this.movBetY2 = height;
    this.index1;
    this.index2;
    


  // for dieFuntion:
  




  this.randomFly = function() {
    if (this.isDead == false){
    fill(0);
    if (this.xDirNeg == false && this.yDirNeg == false){
    image(b2,this.xCor,this.yCor,20,20);
    } else if (this.xDirNeg == false && this.yDirNeg == true){
      image(b1,this.xCor,this.yCor,20,20);
    } else if (this.xDirNeg == true && this.yDirNeg == false){
      image(b3,this.xCor,this.yCor,20,20);
    } else {
      image(b4,this.xCor,this.yCor,20,20);
    }
      if (this.selected ==true){
      strokeWeight(1);
      fill(255,0,0);
      ellipse(this.xCor,this.yCor,20,20);
    };

    this.rot = this.rot+PI/20;

     if(this.xCor>=this.movBetX2){
    this.xDirNeg = true
  }
      if(this.xCor<=this.movBetX1){
    this.xDirNeg = false
  }
  if (this.xDirNeg == false){
    this.xCor = this.xCor + random(-3,10) } else {
      this.xCor = this.xCor -random(-3,10) 
  };


if(this.yCor>=this.movBetY2){
    this.yDirNeg = true
  }
      if(this.yCor<=this.movBetY1){
    this.yDirNeg = false
  }
  if (this.yDirNeg == false){
    this.yCor = this.yCor +random(-3,10) } else {
      this.yCor = this.yCor -random(-3,10) 
  };


}

}

this.Update = function(){
if(allFlowers.length == 0 && allHives.length == 0){
    this.movBetX1 = 0;
    this.movBetX2 = width;
    this.movBetY1 = 0;
    this.movBetY2 = height;
} else if (allFlowers.length == 0 && allHives.length > 0){
  this.index1= random(hiveXs.length);
  this.index2=random(hiveYs.length);
  this.movBetX1 = hiveXs[this.index1];
  this.movBetX2 = hiveXs[this.index1];
  this.movBetY1 = hiveYs[this.index2];
  this.movBetY2 = hiveYs[this.index2];
  
  
} else if (allFlowers.length > 0 && allHives.length == 0){
    this.index1= random(flowerXs.length);
  this.index2=random(flowerYs.length);
  this.movBetX1 = flowerXs[this.index1];
  this.movBetX2 = flowerXs[this.index1];
  this.movBetY1 = flowerYs[this.index2];
  this.movBetY2 = flowerYs[this.index2];
  
} else if (allFlowers.length > 0 && allHives.length > 0){
}
  
}
}
}
