//Function to draw the lightbulb 
function draw_lightbulb(x) {
    //Examples
    //rect(10,10,50,50,"#ffffff");
    //text("tom",200,200,"18px Arial","center","#00ff00");
    //a_text("oliver",300,300,0,"18px Arial","#0000ff");
    circle(x,200,40,0,2*Math.PI,true,"#ff0000",true,"#00ff00");
}
//Function to generate polygons.
function poly() {

}
//Function to generate rectangles.
function rect(x,y,width,height,fillcolour) {
    c.fillStyle = fillcolour; //Colour of rectangle.
    c.rect(x,y,width,height); //Draw rectangle choosing x and y position and width and height.
    c.fill(); //Fill rectangle.
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
$(document).ready(function() {
    var sliderResult = [];
    var index = 0;
    $("input[type=range]").on("change", function() {
        $("input[type=range]").each(function(index) {
            sliderResult[index] = $(this).val();
            draw_lightbulb(sliderResult[0]*10);
            //circle(sliderResult[0]*10,200,40,0,2*Math.PI,true,"#ff0000",true,"#00ff00");
            //console.log(sliderResult[0]);
        });
    });
});
