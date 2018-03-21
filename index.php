<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Innovation Test</title>
    <link rel="stylesheet" href="style/style.css">
    <script src="script.js"></script>
</head>
<body>
    <h1>Innovation Test</h1>
    <ul>
        <li>
            <h2>Question 1</h2>
            <p>This is an example question?</p>
            <input type="range" value="0" min="0" max="10" />
        </li>
        <li>Question 2</li>
        <li>Question 3</li>
        <li>Question 4</li>
        <li>Question 5</li>
        <li>Question 6</li>
        <li>Question 7</li>
        <li>Question 8</li>
        <li>Question 9</li>
        <li>Question 10</li>
    </ul>
    <!-- Create HTML Canvas Element -->
    <canvas id="lightbulb_canvas" width="400px" height="400px"></canvas>
    <script>
        //Create canvas
        var canvas = document.getElementById('lightbulb_canvas'),
        ctx = canvas.getContext('2d');
        //Draw R2D2 function
        draw_lightbulb();
    </script>
</body>
</html>