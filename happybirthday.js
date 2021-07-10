let x=100;
let y=100;
let x1=150;
let y1=150;


function setup() {
  createCanvas(600,600);
}
function draw(){
  background(250,180,200);
  
  fill(255,0,0);
  ellipse(x+10,y-1,50,50);
  
  fill(0,0,255)
  ellipse(x1-60,y1+60,50,50);
  
  fill(100,50,240)
  ellipse(250,170,50,50);
  
  fill(255,22,250);
  ellipse(350,150,50,50);
  
  fill(255,20,100);
  ellipse(120,100,50,50);
  
  fill(230,120,200);
  ellipse(x+200,y+225,50,50);
  
  fill(25,60,200);
  ellipse(x+260,y+260,50,50);
  
  fill(255,0,0);
  ellipse(x+100,y+300,50,50);
  
  ellipse(x+320,y+250,50,50);
  
  x=x-1;
  y=y-1;
  x1=x1-1;
  y1=y1-0.5;
  
  //Use createDiv() function to 
  //create a div element
  var myDiv=createDiv('Happy Birthday');
  myDiv.position(150,100);
  myDiv.style('text-align','center');
  myDiv.style('font-size','30px');
  myDiv.style('color','red');

  
}
  



