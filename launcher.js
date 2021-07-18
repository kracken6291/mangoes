class launcher{
    constructor(x,y){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
    }

    fly(){
        this.launcher.bodyA=null;
    }

    attach(body){
        this.sling.bodyA=body;
    }

    attach(){}

    display(){
        var pointA=this.launcher.bodyA.position;
        var pointB=this.pointB;
        stroke("black");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}