<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Innovation Test</title>
    <link rel="stylesheet" href="style/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="script.js"></script>
</head>
<body>
    <h1>Innovation Test</h1>
    <ul class="questions">
        <li>
            <h2>Question 1</h2>
            <p>This is an example question?</p>
            <input type="range" value="5" min="0" max="10" />
        </li>
        <li>
            <h2>Question 2</h2>
            <p>This is an example question?</p>
            <input type="range" value="5" min="0" max="10" />
        </li>
        <li>
            <h2>Question 3</h2>
            <p>This is an example question?</p>
            <input type="range" value="5" min="0" max="10" />
        </li>
        <li>
            <h2>Question 4</h2>
            <p>This is an example question?</p>
            <input type="range" value="5" min="0" max="10" />
        </li>
        <li>
            <h2>Question 5</h2>
            <p>This is an example question?</p>
            <input type="range" value="5" min="0" max="10" />
        </li>
    </ul>

    <p class="questionvalues"></p>
    <!-- Create HTML Canvas Element -->
<<<<<<< HEAD
    <canvas id="gauge_canvas" width="500px" height="500px" style="background-color:#ee5500"></canvas>
    <canvas id="radar_canvas" width="400px" height="400px" style="width:400px; height:400px;"></canvas>
=======
    <canvas id="gauge_canvas" width="500px" height="500px" style="background-color:#eee"></canvas>
>>>>>>> 13f336629a50dc75c28c09f95f80c266b48a50cd
    <script>
        //Create canvas
        var canvas = document.getElementById('gauge_canvas'),
        c = canvas.getContext('2d');
        //Draw Gauge function
        draw_gauge();
    </script>
</body>
</html>