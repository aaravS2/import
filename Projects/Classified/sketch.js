//all the variables
var x,y,components,Background,Searchbox,Querysearch;
function preload(){
//put preload code here
Background=loadImage('Images/DysonSphere.png')
}
function setup() {
// put setup code here
createCanvas(displayWidth,displayHeight);
x=displayWidth
y=displayHeight
components=[x,y]
Searchbox=new SearchBox(244,18,'400','300','URL',197,19,'URL','20')
Querysearch=new SearchBox(775,16,318,10,'Query',758,16,'Query','20')
}
// put drawing code here
function draw() {
background(Background)
Searchbox.URLsearch() 
Querysearch.QUERYsearch()
DisplayCo_ordinates()
}