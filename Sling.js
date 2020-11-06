class Sling
{
    constructor(bodyA,bodyB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: bodyB,
            stiffness: 0.04,
            length: 2
        }
        this.bodyA = bodyA;
        this.pointB = bodyB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
   attach(body)
    {
        this.sling.bodyA = body;
    }

    fly()
    {
        this.sling.bodyA = null;  
    }
}
