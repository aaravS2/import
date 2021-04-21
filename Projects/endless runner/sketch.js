var gameState,game,secondimage,button,bg1,alien,alienI,firstImagesprite;

function setup() {
  createCanvas(1290,700);
  gameState='instructions'
  game=new Game();
  game.instructions();
  
  
  
  // put setup code here
}
 function preload(){
  bg1=loadImage('images/bg2.png')
  alienI=loadAnimation('images/alien.png','images/alienwalking.png')

  //loadSound
}
function draw() {
  background(bg1)
  image(bg1,0,0,1290,700)
//  if(gameState==='instructions'){

//  }
  // put drawing code here
  if (button.mousePressed(function(){
    gameState='play'
    game.Run()
   //var. play()
  })) {
   
  }
  
  
  
  
 
  
  //console.log(camera.position.x)
  drawSprites()
}
 
  
