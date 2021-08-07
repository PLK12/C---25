class CannonBall
{
    constructor(x,y,r)
    {
        var options = 
        {
            restitution: 0.85,
            isStatic: true,
            friction: 1,
            density: 1,
        };
        this.image = loadImage("assets/cannonball.png");    
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.trajectory = [];
        World.add(myWorld, this.body);
    
    }

    shoot()
    {
        // Body.setVelocity(this.body, {x: 10, y:-12})
   

         var velocity = p5.Vector.fromAngle(cannon.angle);
         velocity.mult(15);
         Body.setStatic(this.body, false);
         Body.setVelocity(this.body, {x: velocity.x, y: velocity.y});

    }

     display()
     {
    

        var pos = this.body.position; 
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);;
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r, this.r);
        pop();

        //getting the position of the ball and pushing them in the trajectory array
        if(this.body.velocity.x > 0 && this.body.position.x>250)
        {
            var position = [this.body.position.x, this.body.position.y]
            this.trajectory.push(position);

           // [ [x1,y1], [x2,y2], [x3,y3], [x4,y4] ]
        }

        //setting the image to the trajectory
        for(var i =0; i<this.trajectory.length; i=i+1)
        {
            image(this.image,this.trajectory[i][0], this.trajectory[i][1], 5, 5 )
        }

     }   
}   