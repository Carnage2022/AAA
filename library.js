function touching(a,b) {
    if(a.x -b.x < a.width/2 + b.width/2 && b.x-a.x <a.width/2 + b.width/2 && a.y-b.y < a.height/2 + b.height/2 && b.y-a.y < a.height/2 + b.height/2){
      return true;
    }
    else{
      return false;
    }
  
  }
  
  function bounceoff(a,c) {
    if(a.x -c.x < a.width/2 + c.width/2 && c.x-a.x <a.width/2 + c.width/2 && a.y-c.y < a.height/2 + c.height/2 && c.y-a.y < a.height/2 + c.height/2){
      a.velocityX=a.velocityX*(-1);
      a.velocityY=a.velocityY*(-1);
      c.velocityX=c.velocityX*(-1);
      c.velocityY=c.velocityY*(-1);
      
     }
  
  }