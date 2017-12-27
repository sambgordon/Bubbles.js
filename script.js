/**
* Application Name: Bubbles.js
* Application URI: https://github.com/sambgordon/Bubbles.js
* Description: Generates bubbles randomly using Canvas
* Version: 1.0.0
* Author: Sam Gordon
* Author URI: http://www.devbysam.com 
* License: MIT
********

This is a cool app that generates bubbles. I used Pete R's Let it Snow plugin as
a sort of framework. Show it some love: http://www.thepetedesign.com/demos/let_it_snow_demo.html

********
 */

//default state
var defaults = {
  speed: 1,
  responsiveHover: true,
  color: "#DC143C",
  count: 250,
  windPower: 1,
  size: 20,
  hide: false
  };

//calls document ready function to load bubbles onto canvas
$(document).ready( function() {
    $("canvas.bubble").responsiveBubbles();
});

!function($){
$.fn.responsiveBubbles = function(){
  var settings = $.extend({}, defaults),
      el = $(this),
      bubbles = [],
      canvas = el.get(0),
      ctx = canvas.getContext("2d"),
      bubbleCount = settings.count,
      mX, mY;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      function init() {
       for (var i = 0; i < bubbleCount; i++) {
           var x = Math.floor(Math.random() * canvas.width),
               y = Math.floor(Math.random() * canvas.height),
               size = (Math.random() * 3)  + settings.size,
               speed = (Math.random() * 1) + settings.speed,
               opacity = (Math.random() * 0.5) + settings.opacity;

           bubbles.push({
               speed: speed,
               velY: speed,
               velX: 0,
               x: x,
               y: y,
               size: size,
               angle: 10,
               opacity: 2
           });
       }

  (function() {
      /*tell browser to update animation as bubbles fall away from viewport*/
      var requestAnimationFrame = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
          window.setTimeout(1);
      window.requestAnimationFrame = requestAnimationFrame;
  })();

  function redBubble() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < bubbleCount; i++) {
          var bubble = bubbles[i],
              x = mX,
              y = mY,
              /*default value for minimum distance of hover response
              raising this will make things bounce erratically */
              minDist = 100,
              //define velocity vars for y and x coordinates
              x2 = bubble.x,
              y2 = bubble.y;
          //define sensitivity of mouse response
          var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
              dx = x2 - x,
              dy = y2 - y;

          if (dist < minDist) {
              var force = minDist / (dist * dist),
                  xcomp = (x - x2) / dist,
                  ycomp = (y - y2) / dist,
                  deltaV = force / 2;
              bubble.velX -= deltaV * xcomp;
              bubble.velY -= deltaV * ycomp;
          }
          else {
              bubble.velX *= .98;
              if (bubble.velY <= bubble.speed) {
                  bubble.velY = bubble.speed
              }

              /*sets cases for "wind power" a.k.a. velY depending
              on velY in relation to var x
              */
              switch (settings.windPower) {
                case 0:
                  bubble.velX = Math.tan(.15) * bubble.velY;
                break;
                default:
                  bubble.velX += 0.01 + (settings.windPower/1000); //<--lower this denom drastically to increase towards ludicrous speed!
              }
          }
          /* sets color based on regex match of variable s */
          var s = settings.color;
          var patt = /^#([\d-fA-F]{2})([\d-fA-F]{2})([\d-fA-F]{2})/;
          var matches = patt.exec(s);
          var rgb = parseInt(matches[1], 16)+","+parseInt(matches[2], 16)+","+parseInt(matches[3], 16);
          bubble.y += bubble.velY;
          bubble.x += bubble.velX;

          function reset(bubble) {
              if (settings.windPower == false || settings.windPower == 0) {
                bubble.x = Math.floor(Math.random() * canvas.width);
                bubble.y = 0;
              } else {
                if (settings.windPower > 0) {
                  var xarray = Array(Math.floor(Math.random() * canvas.width), 0);
                  var yarray = Array(0, Math.floor(Math.random() * canvas.height))
                  var allarray = Array(xarray, yarray)
                  var selected_array = allarray[Math.floor(Math.random()*allarray.length)];
                   bubble.x = selected_array[0];
                   bubble.y = selected_array[1];
                }
              }
          }

          if (bubble.y >= canvas.height || bubble.y <= -25) {
              reset(bubble);
          }

          if (bubble.x >= canvas.width || bubble.x <= -25) {
              reset(bubble);
          }
          if (settings.hide == false) {
            ctx.fillStyle = "rgba(" + rgb + "," + bubble.opacity + ")"
            ctx.beginPath();
            ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
            ctx.fill();
          } else {

            ctx.drawhide($("img#lis_bubble").get(0), bubble.x, bubble.y, bubble.size * 2, bubble.size * 2);
          }
      }
      requestAnimationFrame(redBubble);
  };

    redBubble();
  }

  init();

  //Sets responsive hover if boolean evaluates to true
  if (settings.responsiveHover == true) {
    canvas.addEventListener("mousemove", function(e) {
        mX = e.clientX,
        mY = e.clientY
    });
  }
}
}(window.jQuery);
