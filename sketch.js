var hr
var mn 
var sc 
function setup() {
  createCanvas(800,400);
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES) 
    
  scAngle = map(sc, 0, 60, 0,360) ;
  mnAngle = map(mn, 0, 60, 0,360) ;
  hrAngle = map(hr%12,0,12,0,360)
    
   
}

function draw() {
  background("black");  
  //drawing seconds hand
  push() ;
  rotate(scAngle); 
  stroke(255, 0, 250) ;
  arc(50, 55, 50, 50, 0)
  strokeWeight (7) ;
  line(400, 400, 100, 0);
  pop()
  
  push() ;
  rotate(mnAngle); 
  stroke(0, 255, 0) ;
  arc(50, 55, 50, 50, 0)
  strokeWeight (7) ;
  line(400, 400, 100, 0);
  pop()
  push() ;
  rotate(hrAngle); 
  stroke(255, 0, 0) ;
  arc(50, 55, 50, 50, 0)
  strokeWeight (7) ;
  line(400,400, 100, 0);
  pop()
  
  


  drawSprites();
}