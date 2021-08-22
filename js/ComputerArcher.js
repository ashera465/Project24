class computerArcher{
    constructor(x, y, width, height){
        var options= {
            isStatic:true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("assets/computerArcher.png");
        Matter.Body.setAngle(this.body, PI/2);
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

    shoot(archerAngle){
        var velocity = p5.vector.fromAngle(archerAngle);
        velocity.mult(20);
        Matter.body.setStatic(this.body, false);
        Matter.body.setVelocity(this.body, {x: velocity.x, y:velocity.y})
    }
}