//All functions
//Function marquee
//Horizontal marquee
function marqueeX(Text,y,howFast,howFar,Color) {
    components[0]=components[0]-howFast
    if (components[0]<howFar) {
      components[0]=1230
    }
    fill(Color)
    text(Text,components[0],y)
  }




  //Vertical marquee
  function marqueeY(Text,x,howFast,howFar,Color) {
    components[1]=components[1]-howFast
    if (components[1]<howFar) {
      components[1]=800
    }
    fill(Color)
    text(Text,x,components[1])
  }


//Displays cordinates
  function DisplayCo_ordinates() {
    push()
    fill('black')
    textSize(17)
    text('x:'+mouseX+'/'+'y:'+mouseY,10,20)
    pop()
    }
  