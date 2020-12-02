class Rof {

    constructor(x, y) {
        var options = {
            isStatic:true
        }
        this.body =  Matter.Bodies.rectangle(x, y,30,  30,  options);
        this.width = 30;
        this.height = 20;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
    
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
       fill("red");
        strokeWeight(4)
        stroke("red")
        rect(0, 0, this.width, this.height);
        pop();
}
}