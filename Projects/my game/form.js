class Form{
constructor(){
}        
start(){
if(gameState==='Instructions'){         
this.hr=hour()
if (this.hr<18) {
background(morningimg)
}else{
background(nightimg)
}
if(frameCount<80&&number<50){
number=number+2
push()
noFill()
angleMode(DEGREES)
stroke(rgb(12,132,252))
this.angle=10
if(this.angle<600){
this.angle=this.angle+10
}else{
this.angle=10
}
strokeWeight(5)
arc(650,350,30,30,600,this.angle)
pop()
}
if(number===50){
number=10 
}
fill('red')
textSize(number)
this.line1=text('RunTheThief',650,50)
if(frameCount>80){
textSize(20)
fill(rgb(123,43,10))
 this.line2= text('Objectives-',30,190)
this.line3=   text('You are the thief ',30,210)
textSize(20)
this.line4=   text('=',175,210)
showThief=createSprite(280,175,50,50)
showThief.addImage('showThief',thiefimg)
showThief.scale=0.3
this.line5=text('Get away from the police & he can also shoot bullets',30,240)
this.line6=text('Reach the escape veichle,before the time limit!!!',30,300)
this.line7= text('Instructions-',30,390)
this.line8=    text('Up arrow to move up,right arrow to go right,left to go left,space to jump',30,420) 
if (frameCount>80) { 
    this.startbutton=createButton('play')
    this.startbutton.position(600,600)
    this.startbutton.style('width','200px')
    this.startbutton.style('background',rgb(0,255,191))
    this.startbutton.mousePressed(()=>{
    gameState='play'
    })

}
}
}
}
hide(){
this.line1.hide()
this.line2.hide()
this.line3.hide()
this.line4.hide()
this.line5.hide()
this.line6.hide()
this.line7.hide()
this.line8.hide()
this.startbutton.hide()
showThief.destroy()
}
}