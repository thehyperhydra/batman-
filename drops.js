class createdrop {
constructor (x,y) {
var option ={
friction : 0.001,
restitution : 0.1


}
this.rain = Bodies.circle(x,y,5,option)
this.radius = 5
World.add(world,this.rain)

}
updatey (){
if (this.rain.positon.y>height){
Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})


}

}
showdrop(){
fill ("blue")
ellipseMode(CENTER)
ellipse(this.rain.positon.x,this.rain.positon.y,this.radius,this.radius)


}


}