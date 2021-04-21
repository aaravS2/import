class Game{
    constructor(){}
    instructions(){
        if (gameState==='instructions') {
         
           
            this.heading=createElement("h1")
            this.heading.html("Endless Runner")
            this.heading.position(550,10)
            this.input=createInput('')
            this.input.position(550,90)
            this.input.style('background',238,255,0)
            this.name=createElement("h4")
            this.name.html('name:')
            this.name.position(500,70)
         // text("space to jump",550,100)
         button=createButton('Start')
         button.position(550,600)
          this.intro=createElement("h4")
          this.intro.html("instructions:space to jump")
          this.intro.position(50,250)
         

        }
    }
    Run(){
        if(gameState==='play'){
this.heading.hide()
this.input.hide()
this.intro.hide()
button.hide()
this.name.hide()
alien=createSprite(100,600)
alien.addAnimation('alien',alienI)
alien.velocityY=alien.velocityY+0.9
var ground=createSprite(650,690,1290,10)
alien.isTouching(ground)
drawSprites()
        }    

    }
    
}
