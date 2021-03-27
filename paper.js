class Paper
{

    constructor(x,y)
    {
        this.x=x
        this.y=y
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.image=loadImage("paperBall.png")
    
        this.Body=Bodies.rectangle(this.x,this.y)


    }
    display()
    {
        var posBottom=this.bottomBody.position
        var posLeft=this.leftWallBody.position
        var posRight=this.rightWallBody.position
        push()
        translate(posLeft.x,posLeft.y)
        rotate(this.angle)
    }
}