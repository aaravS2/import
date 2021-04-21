var logimg,car1img,car2img,coinimg,grassimg,policeimg,thiefimg,trafficimg,waterimg,rocketimg,morningimg,nightimg,showThief;
var logGroup,carGroup,bulletGroup;
var gameState;
var number,game,form;
function preload(){
logimg=loadImage('images/camp.png')
car1img=loadImage('images/car.png')
car2img=loadImage('images/car1.png')
coinimg=loadImage('images/coin.gif')
grassimg=loadImage('images/grassland.jpg')
policeimg=loadImage('images/police.jpg')
thiefimg=loadImage('images/thief.png')
trafficimg=loadImage('images/traffic.gif')
waterimg=loadImage('images/water.gif')
rocketimg=loadImage('images/rocket.png')
morningimg=loadImage('images/morning.jpg')
nightimg=loadImage('images/night.jpg')
}
function setup(){
createCanvas(1300,725)
gameState='Instructions'
number=0
game=new Game()
}
function draw(){
if (gameState==='Instructions') {
    game.start()

}

if(gameState==='play'){
game.play()
}
drawSprites()
}








