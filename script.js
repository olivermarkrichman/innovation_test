//Create Canvas
var canvas = document.getElementById("results_canvas");
//Setting double height and width
canvas.width = 1800;
canvas.height = 1120;
//Setting actual height and width
canvas.style.width = "900px";
canvas.style.height = "560px";
c = canvas.getContext('2d');
//Scaling the canvas by 2, this prevents blurry shape edges on retina screens
c.scale(2,2);

//Function to draw the gauge 
function draw_gauge() {
    //Notch starting angle
    var n_angle = 1.95
    //Loop to generate gauge notches.
    do {
        //draw the notches, using the looping n_angle to change the angle.
        rect(canvas.width/4,200,10,200,"#fff",n_angle,true,-5,0);//Notches
        //Add spacing between the dots
        n_angle += 0.3;
        //Do this until the angle reaches 4.35
    } while (n_angle < 4.35);

    circle(canvas.width/4,200,150,0,2*Math.PI,true,"#333"); //Cover up to create dial
    var img = document.getElementById("bulb"); //Put the lightbulb image into img variable
    c.drawImage(img,canvas.width/4-15,90,30,40); //Draw the lightbulb icon from image
}

//Function to generate the gauge dial
function draw_gauge_dial(gaugeposition) {
    //Clear the Canvas to redraw the gauge
    c.clearRect(0, 0, canvas.width, canvas.height);
    //Call the gauge notchs on each redraw
    draw_gauge();
    //Reposition needle on gauge
    rect(canvas.width/4,200,6,180,"rgba(255,0,0,0.85)",gaugeposition,true,-3,0); //Dial needle
    circle(canvas.width/4,200,25,0,2*Math.PI,true,"#000"); //Dial outline
    circle(canvas.width/4,200,20,0,2*Math.PI,true,"#fff"); //Dial cover
}

//Function to generate the grey dots
function draw_grey_dots() {
    //Question height
    var qheight = 285;
    //Question Number
    var qnum = 1;
    //Loop through each input
    $("input[type=range]").each(function(index) {
        //Space between dots
        var spacing = 0;
        //Create 10 dots for each question
        do {
            circle(canvas.width/3.5+spacing,qheight,15,0,2*Math.PI,true,"#777");
            //Add spacing between the dots
            spacing += 35;
        } while (spacing < 270); //Loop until ten dots are made
        //Add text to show Question number next to each row of dots.
        text("Q"+qnum,canvas.width/3.5,qheight-25,"bold 18px Muli","center","#fff");
        //Add spacing to height between questions
        qheight += 65;
        //Increase question number each time.
        qnum++
    });
}

//Function to draw the red dots, updated by the array.
function draw_dots(array) {
    //Call the grey dots to be drawn to show dots that aren't filled.
    draw_grey_dots();
    //Set question height
    var qheight = 285;
    //Set question number
    var qnum = 1;
    //Loop through each slider
    $("input[type=range]").each(function(index) {
        //space between dots
        var spacing = 0;
        //Iteration to take the slider value and fill the dot with red or not
        if (array[index] < 1) {
            //If the value is 0 then make sure entire row is grey
            do {
                circle(canvas.width/3.5+spacing,qheight,15,0,2*Math.PI,true,"#777");
                spacing += 35;
            } while (spacing < maxspacing);
        } else {
            //If value is 1 or more then fill correct amount red.
            maxspacing = array[index]*25;
            do {
                circle(canvas.width/3.5+spacing,qheight,15,0,2*Math.PI,true,"#f00");
                spacing += 35;
            } while (spacing < maxspacing);
        }
        qheight += 65;
        qnum++
    });
}

//Function to generate radar graph
function radarGraph (array) {
    //Draw this many lines and create this many points for the graph
    $("input[type=range]").each(function(index) {
        rect(canvas.width/8,420,132,4,"#777",1.25*index-0.945,true,-132,-2);
    });
    //Draw the questions text
    text("Q1",canvas.width/8-2,270,"bold 18px Muli","center");
    text("Q2",canvas.width/8+150,380,"bold 18px Muli","center");
    text("Q3",canvas.width/8+100,545,"bold 18px Muli","center");
    text("Q4",canvas.width/8-100,545,"bold 18px Muli","center");
    text("Q5",canvas.width/8-150,380,"bold 18px Muli","center");
    //Connect the points and create the shape
    for (index = 0; index < array.length; ++index) {
        c.beginPath();                                                                                  //Begin Path
        c.strokeStyle = "#f00";                                                                         //Set Line Colour
        c.lineWidth = 3;                                                                                //Set Line thickness
        c.moveTo(canvas.width/8+(array[0]*0)-1,420-(array[0]*13));                                      //Position Initial Line point as the Dot 1 position
        c.lineTo(canvas.width/8+(array[1]*13)-1, 420-(array[1]*5)/1.0975);                              //Position of line releative from Dot 1 to Dot 2 position
        c.lineTo(canvas.width/8+(array[2]*8)-1, 420+(array[2]*11)/1.0975);                              //Position of line releative from Dot 2 to Dot 3 position
        c.lineTo(canvas.width/8-(array[3]*7), 420+(array[3]*10));                                       //Position of line releative from Dot 3 to Dot 4 position
        c.lineTo(canvas.width/8-(array[4]*12)-3, 420-(array[4]*4)/1.0975);                              //Position of line releative from Dot 4 to Dot 5 position
        c.lineTo(canvas.width/8+(array[0]*0)-1,420-(array[0]*13));                                      //Position of line releative from Dot 5 to Dot 1 position
        c.stroke();                                                                                     //Apply stroke to Shape
        c.closePath();                                                                                  //Close Shape Path
        circle(canvas.width/8+(array[0]*0)-1, 420-(array[0]*13), 8, 0, 2*Math.PI, "#FFF");              //Dot 1
        circle(canvas.width/8+(array[1]*13)-1, 420-(array[1]*5)/1.0975, 8, 0, 2*Math.PI, "#FFF");       //Dot 2
        circle(canvas.width/8+(array[2]*8)-1, 420+(array[2]*11)/1.0975, 8, 0, 2*Math.PI, "#FFF");       //Dot 3
        circle(canvas.width/8-(array[3]*7), 420+(array[3]*10), 8, 0, 2*Math.PI, "#FFF");                //Dot 4
        circle(canvas.width/8-(array[4]*12), 420-(array[4]*4)/1.0975, 8, 0, 2*Math.PI, "#FFF");         //Dot 5
    }
}
//Function to generate rectangles.
function rect(x,y,width,height,fillcolour,angle,rotateoffset,urx,ury) {
    rx = 0;
    ry = 0;
    //If rotateoffset is called and used then use it to offset the shape by a specific amount.
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

$(document).ready(function() {
    //Define the slider result array
    var sliderResult = [];
    //Define the index
    var index = 0;
    //Define the array with default values of 5
    var array = [5,5,5,5,5];
    //Detecting slider changes
    $("input[type=range]").on("change", function() {
        //Define the final result
        var finalResult = 0;
        //Loop through each input
        $("input[type=range]").each(function(index) {
            //Get current slider value and put into the result array
            sliderResult[index] = $(this).val();
            //The final result is each slider value added together
            finalResult += parseInt(sliderResult[index]);
        });
        finalResult = finalResult;
        //Create a percentage from the final result
        var finalPercent = ((finalResult/50)*100);
        //Prevent decimal points in the percentage by rounding
        finalPercent = parseFloat(Math.round(finalPercent * 100) / 100).toFixed(0);
        //Draw the dial using the final result, 1.95 is the angle needed for lowest end of the scale and for anything above zero the result needs to be divided by the most you can get (50)
        draw_gauge_dial(((finalResult/50)*2.4)+1.95);
        array = [sliderResult[0],sliderResult[1],sliderResult[2],sliderResult[3],sliderResult[4]];
        radarGraph(array);
        draw_dots(array);
        $('.resultPercent').html(finalPercent);
    });
    
    $('.resultPercent').html("50");
    draw_gauge_dial(3.15);
    //Call initial default radar graph
    radarGraph(array);
    //call bar chart
    draw_dots(array);
});