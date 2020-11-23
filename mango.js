class Mango{
    constructor(x,y,width,height){
var options={
isStatic:true,
restituition:0,
friction:1,

}
this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.image=loadImage("mango.png")
this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
World.add(world,this.body);
}

display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();

}


}