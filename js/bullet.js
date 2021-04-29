class Bullet{
    constructor(){
        var options = {
            isStatic: false,
            density:1,
            friction:0.00000000001,
            restitution: 0

        }
        this.body = Bodies.circle(1080, 508, 5, options)
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill("silver")
        ellipse(0,0, 7, 7)
        pop();
    }

    updateX(){
        Matter.Body.setVelocity( this.body, {x: -30, y: 0});
    }
}