class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png");
    this.path=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>190 && this.body.velocity.x>5){
    var pos=[this.body.position.x,this.body.position.y]
    this.path.push(pos);
    }
    //console.log(this.path)
    for(var i=0; i <this.path.length;i=i+1){
      image(this.smokeImage, this.path[i][0],this.path[i][1])
    }
  }
}
