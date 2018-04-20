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
var array = [5,5,5,5,5];
//draw_gauge_dial(2.25);

//Function to draw the gauge 
function draw_gauge() {
    //circle(canvas.width/4,250,200,0,2*Math.PI,true,"transparent",true,"#fff");
    rect(canvas.width/4,200,10,200,"#fff",1.95,true,-5,0);//Notch 1
    rect(canvas.width/4,200,10,200,"#fff",2.25,true,-5,0);//Notch 2
    rect(canvas.width/4,200,10,200,"#fff",2.55,true,-5,0);//Notch 3
    rect(canvas.width/4,200,10,200,"#fff",2.85,true,-5,0);//Notch 4
    rect(canvas.width/4,200,10,200,"#fff",3.15,true,-5,0);//Notch 5
    rect(canvas.width/4,200,10,200,"#fff",3.45,true,-5,0);//Notch 6
    rect(canvas.width/4,200,10,200,"#fff",3.75,true,-5,0);//Notch 7
    rect(canvas.width/4,200,10,200,"#fff",4.05,true,-5,0);//Notch 8
    rect(canvas.width/4,200,10,200,"#fff",4.35,true,-5,0);//Notch 9
    circle(canvas.width/4,200,150,0,2*Math.PI,true,"#333"); //Cover up to create dial
    var img = document.getElementById("bulb");
    c.drawImage(img,canvas.width/4-15,90,30,40);
    //Examples
    //rect(10,10,50,50,"#ffffff");
    //rect(10,10,50,50,"#ffffff",0.5); Rotated rectangle
    //text("tom",200,200,"18px Arial","center","#00ff00");
    //a_text("oliver",300,300,0,"18px Arial","#0000ff");
    //circle(250,150,120,0,2*Math.PI,true,"#fff000");
}

//Function to generate the gauge dial
function draw_gauge_dial(gaugeposition) {
    //Clear the Canvas to redraw the Gauge
    c.clearRect(0, 0, canvas.width, canvas.height);
    //Call the Gauge notchs on each redraw
    draw_gauge();
    //Reposition needle on Gauge
    rect(canvas.width/4,200,6,180,"rgba(255,0,0,0.85)",gaugeposition,true,-3,0);
    circle(canvas.width/4,200,25,0,2*Math.PI,true,"#000");
    circle(canvas.width/4,200,20,0,2*Math.PI,true,"#fff");
}

//Function to generate the bar chart
function draw_bar_chart(maxspace) {
    // rect(canvas.width/3.5,270,300,300,"#444",false);

    // rect(canvas.width/3.5,285,array[0]*30,25,"#f00");
    // text("Q1",canvas.width/3.5,270,"bold 18px Muli","center");

    // rect(canvas.width/3.5,355,array[1]*30,25,"#f00");
    // text("Q2",canvas.width/3.5,340,"bold 18px Muli","center");

    // rect(canvas.width/3.5,415,array[2]*30,25,"#f00");
    // text("Q3",canvas.width/3.5,400,"bold 18px Muli","center");

    // rect(canvas.width/3.5,475,array[3]*30,25,"#f00");
    // text("Q4",canvas.width/3.5,460,"bold 18px Muli","center");

    // rect(canvas.width/3.5,535,array[4]*30,25,"#f00");
    // text("Q5",canvas.width/3.5,520,"bold 18px Muli","center");
}

function draw_grey_bars() {
    var qheight = 285;
    var qnum = 1;
    $("input[type=range]").each(function(index) {
        var spacing = 0;
        do {
            rect(canvas.width/3.5+spacing,qheight,25,25,"#777");
            spacing += 30;
        } while (spacing < 270);
        text("Q"+qnum,canvas.width/3.5,qheight-10,"bold 18px Muli","center");
        qheight += 60;
        qnum++
    });
}



function draw_bars(array) {
    draw_grey_bars();
    var qheight = 285;
    var qnum = 1;
    $("input[type=range]").each(function(index) {
        var spacing = 0;
        if (array[index] < 1) {
            do {
                rect(canvas.width/3.5+spacing,qheight,25,25,"#777");
                spacing += 30;
            } while (spacing < maxspacing);
        } else {
            maxspacing = array[index]*25;
            do {
                rect(canvas.width/3.5+spacing,qheight,25,25,"#f00");
                spacing += 30;
            } while (spacing < maxspacing);
        }
        text("Q"+qnum,canvas.width/3.5,qheight-10,"bold 18px Muli","center");
        qheight += 60;
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
<<<<<<< HEAD
    for (index = 0; index < array.length; ++index) {
        //rect(canvas.width/8,420,4,4,"#f00",1.25*index-1.57,true,array[index]*13,-2);
        circle(canvas.width/8+(array[0]*0)-1, 420-(array[0]*13), 8, 0, 2*Math.PI, "#FFF");
        circle(canvas.width/8+(array[1]*13)-1, 420-(array[1]*5)/1.0975, 8, 0, 2*Math.PI, "#FFF");
        circle(canvas.width/8+(array[2]*8)-1, 420+(array[2]*11)/1.0975, 8, 0, 2*Math.PI, "#FFF");
        circle(canvas.width/8-(array[3]*8)+1, 420+(array[3]*11), 8, 0, 2*Math.PI, "#FFF");
        circle(canvas.width/8-(array[4]*12)-1, 420-(array[4]*4)/1.0975, 8, 0, 2*Math.PI, "#FFF");
    }
=======
>>>>>>> f7723292903c44fa829ace699758690e3d562b3a
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
$(document).ready(function() {
    var sliderResult = [];
    var index = 0;
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
        array = [sliderResult[0],sliderResult[1],sliderResult[2],sliderResult[3],sliderResult[4]];
        radarGraph(array);
        draw_bars(array);
        $('.resultPercent').html(finalPercent);
    });
    
    $('.resultPercent').html("50");
    draw_gauge_dial(3.15);
    //Call initial default radar graph
<<<<<<< HEAD
    radarGraph(array);
=======
    radarGraph("5,5,5,5,5");
    //call bar chart
    draw_grey_bars();
    draw_bars(array);
>>>>>>> f7723292903c44fa829ace699758690e3d562b3a
});