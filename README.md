___
# Bubbles.js
This is a jQuery-based app, originally a fork of thepetedesign's Letitsnow app, that generates bubbles in a full-screen instance of the HTML5 Canvas, which in turn respond to mouse movement.
Bubbles are generated randomly within the bounds of the viewport, and an artificial "gravity" pushes them toward the bottom.

### List of variables used:

| Var             | Description     |
| :-------------   |:---------------|
| `defaults`     | Declares global vars with default settings|
| `responsiveHover`      | Sets responsive hover based on Canvas event listener boolean eval. |
| `color`     | Color of bubbles|
| `hide`          | Whether or not to hide bubbles, expressed as boolean|
| `speed`     | Falling speed of bubbles as "gravity"|
| `windPower`          | Horizontal velocity represented by velY|
| `count`           | Max count of bubbles on screen at any time|
| `size` | Size of bubbles|
| `force` | Intensity of bubble push in response to mouse hover|


### Try and mess with the `force`, `windPower`, and `speed`! :)

[View live Demo](https://cdn.rawgit.com/sambgordon/ResponsiveBubbles-2/master/index.html)
___
