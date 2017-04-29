___
# ResponsiveBubbles-2
This is a jQuery-based app that generates bubbles in a full-screen instance of Canvas, which respond to mouse movement.
Bubbles are generated randomly within the bounds of the screen, and an artificial "gravity" pushes them toward the bottom.

### List of variables used:

| Var             | Description     |
| :-------------   |:---------------|
| defaults     | Declares global vars with default settings|
| responsiveHover      | Sets responsive hover based on Canvas event listener boolean eval. |
| color     | Color of bubbles|
| hide          | Whether or not to hide bubbles, expressed as boolean|
| speed     | Falling speed of bubbles as "gravity"|
| windPower          | Horizontal velocity represented by velY|
| count           | Max count of bubbles on screen at any time|
| size | Size of bubbles|
| force | Intensity of bubble push in response to mouse hover|


### Try and mess with the force, windPower and speed! :)

(UPDATE: Like my fractal app, I have intentions on integrating a functional UI for certain parameters.)

[View live Demo](https://cdn.rawgit.com/sambgordon/ResponsiveBubbles-2/master/index.html)
___
