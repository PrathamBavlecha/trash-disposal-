class Ball{
    constructor(x,y){
        var option = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density: 1.2    
        }
        this.body = Bodies.circle(x,y,20,option)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        ellipseMode(RADIUS)
        push ()
        fill ("green")
        translate (pos.x,pos.y)
        rotate (angle)
        ellipse(0,0,20,20)
        pop ()
    }
}