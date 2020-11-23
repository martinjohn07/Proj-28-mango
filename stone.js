class Stone {
 constructor(x,y,width,height) {
    var options= {
    isStatic:false,
    restitution:0,
    frictiom:1,
    density:1.2
 }
 
this.x=x;
 this.y=y;
 this.width=width;
 this.height=height;
 this.image=loadImage("stone.png")
 this.scale=0.5
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

