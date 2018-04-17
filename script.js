//Create Canvas
var canvas = document.getElementById("results_canvas");
//Setting double height and width as well as real height and width
//then scaling by two to prevent blurry edges on retina screen
canvas.width = 1800;
canvas.height = 1800;
canvas.style.width = "900px";
canvas.style.height = "900px";
c = canvas.getContext('2d');
c.scale(2,2);
draw_gauge();
//draw_gauge_dial(2.25);

//Function to draw the gauge 
function draw_gauge() {
    //circle(canvas.width/4,250,200,0,2*Math.PI,true,"transparent",true,"#fff");
    rect(canvas.width/4,250,10,200,"#fff",1.95,true,-5,0);//Notch 1
    rect(canvas.width/4,250,10,200,"#fff",2.25,true,-5,0);//Notch 2
    rect(canvas.width/4,250,10,200,"#fff",2.55,true,-5,0);//Notch 3
    rect(canvas.width/4,250,10,200,"#fff",2.85,true,-5,0);//Notch 4
    rect(canvas.width/4,250,10,200,"#fff",3.15,true,-5,0);//Notch 5
    rect(canvas.width/4,250,10,200,"#fff",3.45,true,-5,0);//Notch 6
    rect(canvas.width/4,250,10,200,"#fff",3.75,true,-5,0);//Notch 7
    rect(canvas.width/4,250,10,200,"#fff",4.05,true,-5,0);//Notch 8
    rect(canvas.width/4,250,10,200,"#fff",4.35,true,-5,0);//Notch 9
    circle(canvas.width/4,250,150,0,2*Math.PI,true,"#333"); //Cover up to create dial

    //Examples
    //rect(10,10,50,50,"#ffffff");
    //rect(10,10,50,50,"#ffffff",0.5); Rotated rectangle
    //text("tom",200,200,"18px Arial","center","#00ff00");
    //a_text("oliver",300,300,0,"18px Arial","#0000ff");
    //circle(250,150,120,0,2*Math.PI,true,"#fff000");
}
function draw_gauge_dial(gaugeposition) {
    //Clear the Canvas to redraw the Gauge
    c.clearRect(0, 0, canvas.width, canvas.height);
    //Call the Gauge notchs on each redraw
    draw_gauge();
    //Reposition needle on Gauge
    rect(canvas.width/4,250,6,180,"#f00",gaugeposition,true,-3,0);
    circle(canvas.width/4,250,25,0,2*Math.PI,true,"#000");
    circle(canvas.width/4,250,20,0,2*Math.PI,true,"#fff");
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
    c.rotate(angle); //Rotates the rectangle by the set angle
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
    //jsonRequest();
    $("input[type=range]").on("change", function() {
        var finalResult = 0;
        $("input[type=range]").each(function(index) {
            sliderResult[index] = $(this).val();
            finalResult += parseInt(sliderResult[index]);
        });
        finalResult = finalResult;
        var finalPercent = ((finalResult/50)*100);
        finalPercent = parseFloat(Math.round(finalPercent * 100) / 100).toFixed(0);
        draw_gauge_dial(((finalResult/50)*2.4)+1.95);
        $('.resultPercent').html(finalPercent);
    });
    $('.resultPercent').html(50);
    draw_gauge_dial(3.15);
});