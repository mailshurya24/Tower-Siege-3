class blockTypeD
{
    constructor(x, y, width, height)
    {
        var options = 
        {
            density:1,
            restitution:0.6,
            friction:1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visible = 255;
        World.add(world, this.body);
    }
      display()
      {
        console.log(this.body.speed);
        if(this.body.speed < 5)
        {
        var pos =this.body.position;
        rectMode(CENTER);
        fill("grey");
        rect(pos.x, pos.y, this.width, this.height);
        }
        else
        {
          World.remove(world,this.body);
          push();
          this.visible = this.visible - 5;
          tint(255,this.visible);
          pop();
        }
        
      }

      score()
      {
        if(this.visible<0 && this.visible> -105)
        {
          score++
        }
      }
}