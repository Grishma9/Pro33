class Snow {
  constructor(x, y) {
      var options = {
          restitution: 0.4,
          friction :0.1,
      density :0.1
      }
      this.Snow = Bodies.circle(x, y, 10, options);
      this.r = 10;
      this.image = loadImage("snow5.webp")
      World.add(world, this.Snow);
     
     // this.color = color(random(0,255),random(0,255),random(0,255))
      
  }

  updateY(){ 
      if (this.Snow.position.y > height){
          Matter.Body.setPosition (this.Snow,{x:random(0,800),y:random(0,400)})
      }
    }
  display() {
      var pos = this.Snow.position;
      var angle = this.Snow.angle;
      //push();
    
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.r,this.r)
     
      //pop();
  }
}