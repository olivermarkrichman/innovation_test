//Function to draw the gauge 
function draw_gauge(gaugeposition) {

    //Examples
    //rect(10,10,50,50,"#ffffff");
    //rect(10,10,50,50,"#ffffff",0.5); Rotated rectangle
    //text("tom",200,200,"18px Arial","center","#00ff00");
    //a_text("oliver",300,300,0,"18px Arial","#0000ff");
    //circle(250,150,120,0,2*Math.PI,true,"#fff000");

    //Gauge Start
    circle(canvas.width/2,canvas.height/2,240,0,2*Math.PI,true,"#aaa");
    circle(canvas.width/2,canvas.height/2,210,0,2*Math.PI,true,"#777");    
    text("BAD",70,canvas.height/2,"32px Arial","left","#f00");
    text("GOOD",430,canvas.height/2,"32px Arial","right","#fff");
    rect(80,canvas.height/2-50,40,10,"#f00");//Left notch
    rect(150,canvas.height/2-110,40,10,"#f55",-0.8);//Angled left notch
    rect(canvas.width/2,canvas.height/2-190,10,40,"#fbb"); //Middle notch
    rect(350,canvas.height/2-110,40,10,"#fdd",0.8);//Angled right notch
    rect(380,canvas.height/2-50,40,10,"#fff");//Right notch
    rect(canvas.width/2,canvas.height/2-30,20,-150,"#fff",gaugeposition,true,-10,0);//Dial - change angle to set the dial wherever
    circle(canvas.width/2,canvas.height/2-30,30,0,2*Math.PI,true,"#ee5500");
    //Gauge End
}
//Function to generate polygons.
function poly() {

}
//Function to generate rectangles.
function rect(x,y,width,height,fillcolour,angle,rotateoffset,urx,ury) {
    rx = 0;
    ry = 0;
    if (rotateoffset == true) {
        rx = urx;
        ry = ury;
    }
    c.beginPath();
    c.save(); //Save current canvas position/
    c.translate(x, y); //Translate to enable easy rotation - these x and y positions are still where you want the rectangle to be.
    c.rotate(angle-Math.PI/2); //Rotates the rectangle by the set angle
    c.fillStyle = fillcolour; //Colour of rectangle.
    c.rect(rx,ry,width,height); //Draw rectangle choosing x and y position and width and height.
    c.fill(); //Fill rectangle.
    c.restore(); //Restore saved position on canvas.
    c.closePath();
}
//Function to generate circles.
function circle(x, y, radius, startangle, endangle, clockboolean,fillcolour,stroke,strokecolour) {
    c.fillStyle = fillcolour; //Set the fill colour
    c.beginPath(); //Begin shape path
    c.arc(x, y, radius, startangle, endangle, clockboolean); //Run arguments through canvas arc function
    c.fill(); //Fill shape.
    //Checking to see if stroke has been set
    if (stroke == true) {
        //sc allows different stroke colours to be applied when calling the function
        c.strokeStyle = strokecolour;
        //Generating the stroke
        c.stroke();
    }
}
//Function to generate text.
function text(text,x,y,font,textalign,fillcolour) {
    c.font = font; //Set the font.
    c.fillStyle = fillcolour; //Set fill colour
    c.textAlign = textalign; //Align text.
    c.fillText(text,x,y); //Write the text, with x and y position.
}
//Function to generate angled text.
function a_text(text,newx,newy,angle,font,fillcolour) {
    c.save(); //Save current canvas position/
    c.translate(newx, newy); //Translate to enable easy rotation - these x and y positions are still where you want the text to be.
    c.rotate(angle-Math.PI/2); //Rotates the text by the set angle
    c.textAlign = "center"; //Allign text to center - needed for angled text.
    c.fillStyle = fillcolour; //Set fill colour
    c.font = font; //Set the font.
    c.fillText(text, 0, 0); //Write the text, x and y set to 0 for translation purposes.
    c.restore(); //Restore saved position on canvas.
}
function radar() {
    //Draw radar
    r.moveTo(0,0);
    r.lineTo(300,150);
}

$(document).ready(function() {
    var sliderResult = [];
    var index = 0;
    draw_gauge(0);
    //jsonRequest();
    $("input[type=range]").on("change", function() {
        $("input[type=range]").each(function(index) {
            sliderResult[index] = $(this).val();
            draw_gauge(sliderResult[0]/10);
            //circle(sliderResult[0]*10,200,40,0,2*Math.PI,true,"#ff0000",true,"#00ff00");
            //console.log(sliderResult[0]);
        });
    });
});