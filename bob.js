class Bob {

    constructor(x, y) {

        var options = {
             isStatic:true,
            'restitution':0.9,
            'friction':0.00005,
            'density':1.2
        }
        this.body =  Bodies.circle(x, y, 90, options);
       this.radius = 50;
    
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
    
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS)
        fill(193, 27, 102);
        strokeWeight(4)
        stroke(193, 27, 102)
        ellipse( 0, 0, this.radius);
        pop();
      }
    }