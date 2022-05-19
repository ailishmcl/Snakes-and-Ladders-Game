### Race to Space
A snakes and ladders game with a re-design

## Technologies 
HTML5
Javascript
jQuery
CSS

## User stories:
https://trello.com/b/bwaFz971/snakes-and-ladders

## Building the game
I planned on building the separate elements:
* the board
* the player icons
* the "snakes" and "ladders" 
And then bringing them all together in a final play game function

I followed this plan but along the way got more creative and adventurous with the animation which ultimately meant it got more complicated as things progressed

## Unsolved problems
1. There is a bug with the player; for some reason it goes back to position one sometimes
2. I would like to animate the welcome message, have it flash across the screen when the page loads
3. The board should load only after the welcome message is closed
4. Add background audio
5. Add animation for the winning/losing alert

## Solved for the winner:
The winner is the first to get to or past the end of the board. This was very simple logic with a simple if else statement based on the location of the player and the villain

## Favourite functions; 
The rocket and meteor animation:
    When the player/villain lands on a block containing a rocket or meteor, the animation makes the rocket/meteor grow in size and then shoot off the page (up or down, respectively). It is invoked based on a for loop that checks whether the player/villain position matches that of one of the rockets/meteors and only launches the relevant rocket/meteor
The playerTravels and villainTravels
    This took so long to make work (it still has bugs); it basically references the position of the player/villain and the end position (based on dice/random move or end position of rocket/meteor). It then calls a setTimeout function which moves the player/villain one div up every 150s milliseconds until the end destination is reached


