class Drop{
constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution :0,
            friction :0.1,
			}
		this.x=x;
		this.y=y;
		this.r = 5;
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		//this.drops = [];
		World.add(world, this.body);
	}
    
	updateY(){
		var dropPos=this.body.position;	
		if(dropPos.y>height){
		   Matter.Body.setPosition(this.body,{x :random(0,1300),y:random(0,600)});
   
	}

}
showDrop(){
		fill("blue")
		ellipseMode(CENTER);
		ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
	}	
}
