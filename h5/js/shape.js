function shape(){
    this.canvas=canvas;
    this.canvas1=
    this.cobj=cobj;
    this.bgcolor="black";
    this.borderColor="black";
    this.lineWidth=1;
}
shape.prototype={
    init:function(){
        this.cobj.fillStyle=this.bgcolor;
        this.cobj.strokeStyle=this.borderColor;
        this.cobj.lineWidth=this.lineWidth;
    },
    line:function(x,y,x1,y1){
        var that=this;
        that.init();
        that.cobj.beginPath();
        that.moveTo(x,y);
        that.lineTo(x1,y1);
        that.closePath();
        that.stroke();
    },
    rect:function(){
        var that=this;
        var r=Math.sqrt();
        that.init();
        that.cobj.beginPath();
        that.moveTo(x,y);
        that.lineTo(x1,y1);
        that.closePath();
        that.stroke();
    }
    circle:function(){

    }
    draw:function(){
        var that=this;
        that.canvas.onmousedown=function(e){
//                alert(1);
            console.dir(e);
            var cx= e.offsetX;
            var cy= e.offsetY;
            cobj.moveTo(cx,cy);
            cobj.beginPath();

            canvas.onmousemove=function(e){
                var wx= e.offsetX;
                var wy= e.offsetY;
                cobj.lineTo(wx,wy);
                cobj.stroke();


            };
            canvas.onmouseup=function(){
                cobj.closePath();
                canvas.onmousemove=null;
                canvas.onmouseup=null;
            }
        };
    }
}