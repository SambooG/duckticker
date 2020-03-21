import React from 'react';

const duckThumbnail = <canvas id="myCanvas" width="578" height="400"></canvas>;
    
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var width = 200;
      var height = 137
      var imageObj = new Image();

      imageObj.onload = function() {var sourceX = 150;
        var sourceY = 0;
        var sourceWidth = 150;
        var sourceHeight = 150;
        var destWidth = sourceWidth;
        var destHeight = sourceHeight;
        var destX = canvas.width / 2 - destWidth / 2;
        var destY = canvas.height / 2 - destHeight / 2;
        context.drawImage(imageObj,  sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    };
    
      imageObj.src = 'https://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
    
  
      (sources, callback)