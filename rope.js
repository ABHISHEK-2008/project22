class Rope{
    constructor(bodyA,bodyB,pointA,pointB){
        this.pointA=pointA;
        this.pointB=pointB;
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.pointA,y:this.pointB}


        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)

    }
    display(){
        var pos1=this.rope.bodyA.position
        var pos2=this.rope.bodyB.position



        strokeWeight(2)
        line(pos1.x,pos1.y,pos2.x,pos2.y)


    }
}