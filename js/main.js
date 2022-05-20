
//Creating a matrix array to  number the board from 1 to n

let n =6;
let rows = [];
const matrixArray = [];
const createMatrix = function(n) {
    let outerRows = [];
    let innerBlocks = [];
    for (let i=0; i < n; i++) {
        outerRows.push(innerBlocks)
    }
    for (let j = 1; j <= n; j++) {
         innerBlocks.push(j)
    }
    
    for (let i = 0; i <n; i++) {
        
        rows.push(outerRows[i].map(el =>{
            var ele = el + (n*i)
        return ele 
        } ))
  
    }
    rows.reverse();
    
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            rows[i].reverse()
        }
    }
    console.log(innerBlocks);
    console.log(rows);
    
}

createMatrix(n);

// Use numbered matrix array to create an array of divs with relevant values to make the board

const board = $('.board');
const createBoard = function() {
    let str = "";
    rows.map(row => {
        str += `<div class="row">`
        row.map(block => {
            str += `<div class="block" id=${block} data-value=${block}> ${block} </div>`
        })
        str += `</div>`
    })
    board.html(str);
}

createBoard();
console.log($('.row'))

// Specify board and block sizes

var dimension = 100;
var boardSize = n * dimension;
var blockSize = dimension;
const block  = $('.block');
board.css({"width": boardSize + "px", "height": boardSize + "px"});
block.css({"width": blockSize + "px", "height": blockSize + "px"});

// // Change the colour of every second square to make a chequered board

const boardColor = function() {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if ($('.row:nth-child('+i+') .block:nth-child('+j+')').text() % 2 ==0){
                $('.row:nth-child('+i+') .block:nth-child('+j+')').css("background-color", "#b133c9")
        } else {
            $('.row:nth-child('+i+') .block:nth-child('+j+')').css("background-color", "white")
        }  
    }
    }
}
boardColor();

// Add text box that lies on top of page to explain game

$('body').prepend('<div class="welcomeMessage"> <p id="mission"> Your mission: </p> <br><p> You must get to outer space before the evil villain, Grok, and disarm the bomb that threatens to destroy mankind!! <br><br> First, choose your superhero. Then roll the dice to see how far you travel. <br> The rockets will launch you forward but beware of meteors, being hit by one of them will send you back towards earth! <br><br>Click Grok before you click again! Fingers crossed he gets hit by a meteor!<br><br> Double click this box to get started!</p></div>')
$('.welcomeMessage').css({"position": "absolute", "width": boardSize + "px", "height": boardSize + "px", "background-color": "white", "color": "red"});

// Add function to close pop up and start the game

const closePopUp = function () {
    $('.welcomeMessage').dblclick(function() {
        $('.welcomeMessage').hide();
    })
}
closePopUp();


//Add superhero selector div with superhero images

$('.selector').prepend('<p id="chooseSuperhero">Click on your chosen superhero!</p>')
$('.selector').append('<div class="superhero" id="pyro"></div><div class="superhero" id="speed"></div><div class="superhero" id="power"></div>')
$('#pyro').append('<img src="images/pyro.png" id="pyroImg"/>');
$('#power').append('<img src="images/power.png" id="powerImg"/>');
$('#speed').append('<img src="images/speed.png" id="speedImg"/>');


// Choose your superhero by adding click function and add to the board

var playerOne = undefined;
const chooseHero = function () {
    $('.superhero img').click(function(e) {
        console.log($(e.target))
        var target = $(e.target)
        if (target.is("img")) {
        $('#1').append(target);
        playerOne = target
        playerOne.css({"position": "absolute", "height": "50px", "width": "50px"})
        }
    })
}
chooseHero();

//Add the villain to the board

$('#1').append('<img src="images/villain.png" id="villain" />')
var villain = $('#villain')
villain.css({"position": "absolute", "height": "50px", "width": "50px"})

// Add rockets to the board using an array to determine their positions and then looping through this array to append a rocket in each position
// Position of rockets will be lower left hand corner of blocks (specified in CSS)
let rocketPositions = [4, 17, 23, 10]
let rocket = $('.rocket')
const locateRocket = function () {
    rocketPositions.forEach(element => {
        console.log($('#'+element))
        $('#'+element).append(`<img class="rocket" id="rocket${element}" src="images/rocket.png" />`)
    });
}


// Add meteors to the board using the same method for the rockets
// Position for meteors will be upper right had corner of blocks (specified in CSS)
let meteorPositions = [13, 20, 26, 34];
let meteor = $('.meteor')
const locateMeteor = function () {
    meteorPositions.forEach(element => {
        console.log($('#'+element))
        $('#'+element).append(`<img class="meteor" id="meteor${element}" src="images/meteor.png" />`)
    });
}

// Invoke functions to place rockets and meteors on the board

locateRocket();
locateMeteor();


//  Make rocket and meteor animation functions that make the rocket/meteor grow and then shoot off the top right/bottom left corner of the page
// After the animation is complete, the rocket/meteor should return to its original place
const rocketAnimation = function (x) {
        $('#rocket'+x).animate({
        height: "300px",
        width: "300px",
        bottom: "+=900px",
        left: "+=900px"
    }, 5000, function () {
            locateRocket()
    });
}

// Make meteor animation function
const meteorAnimation = function (y) {
    $('#meteor'+y).animate({
        height: "300px",
        width: "300px",
        top: "+=900px",
        right: "+=900px"
    }, 5000, function () {
        locateMeteor()
    })
}

// Make function that moves player sequentially on the board to the end position
// Function takes argument a = no. of spaces player should move (can be positive or negative)
// Function also takes argument b which is current position of player

const playerTravels = function (a, b) {
    let pos =  0;
        let int = setInterval(move, 150);
        function move() {
            if (a > 0) {
                if (pos == a) {
                    clearInterval(int)
                } else {
                    pos++
                $('#'+(b + pos)).append(playerOne)
                }
            } else {
                if (pos == a) {
                    clearInterval(int)
                } else {
                    pos--
                    $('#'+(b + pos)).append(playerOne)
                }
            }            
           }
     playerOnePosition += a;
}

// Make function that moves villain across board to end position
// Function will take argument a = no of spaces to move (positive or negative)
// Function will also take argument b = current position of villain

const villainTravels = function (a, b) {
    let vos = 0;
    let intV = setInterval(moveV, 150);
    function moveV() {
        if (a > 0) {
            if (vos == a) {
                clearInterval(intV)
            } else {
                vos++
                $('#'+(b + vos)).append(villain)
            }
        } else {
            if (vos == a) {
                    clearInterval(intV)
            } else {
                $('#'+(b + vos)).append(villain)
            }
        }
    }
    villainPosition += a;
}

// Create functions to check if player or villain land on a block that contains a rocket
// If they do, invoke the rocket animation function
// Then loop through the array that holds the rocket start positions and use the index of the element that matches the position of the player or villain to access the corresponding end position in the rocketEnd array
// calculate how many spaces to move and use this as an argument, along with current player/villain position in playerTravels function 

let rocketEnd = [9, 27, 25, 12]
const checkRocket = function() {
    rocketPositions.forEach(x => {
        if (x == playerOnePosition) {
            rocketAnimation(x);
            console.log("rocket!!!")
            var endIndex = rocketPositions.indexOf(x);
            var spacesToMove = rocketEnd[endIndex] - playerOnePosition
            playerTravels(spacesToMove, playerOnePosition);
        } else if (x == villainPosition){
            rocketAnimation(x);
            console.log("The villain has hopped on a rocket!!")
            var endIndexVill = rocketPositions.indexOf(x);
            var spacesToMoveVill = rocketEnd[endIndexVill] - villainPosition
            villainTravels(spacesToMoveVill, villainPosition);
        }
    });
}
// Do the same for the meteor start and end positions
// Meteor sends player/villain backwards, so argument a for for playerTravels/ villainTravels function will be negative

let meteorEnd = [2, 18, 15, 21];
const checkMeteor = function () {
    meteorPositions.forEach(y => {
        if (y == playerOnePosition) {
        meteorAnimation(y);
        console.log("meteor!!")
        var endIndexMet = meteorPositions.indexOf(y);
        var spacesToMoveMet = meteorEnd[endIndexMet] - playerOnePosition
        playerTravels(spacesToMoveMet, playerOnePosition)
        } else if (y == villainPosition) {
            meteorAnimation(y);
            console.log("Good news... the villain has been hit by a meteor....")
            var endIndexMetVill = meteorPositions.indexOf(y);
            var spacesToMoveMetVill = meteorEnd[endIndexMetVill] - villainPosition
            villainTravels(spacesToMoveMetVill, villainPosition)
        }
    });
}

// Create a function that checks to determine who wins the game
// An alert will notify the winner

const checkWinner = function () {
    if (playerOnePosition >=(n*n)) {
        alert("You have defeated Grok in the race to space and disarmed the bomb! Congratulations, you saved mankind!!!")
    } else if (villainPosition >= (n*n)) {
        alert("You have been defeated by the evil Grok in the race to space; the future of mankind is at risk!")
    }
}


// Create a function for the players turn to move
// When the button is clicked: shake the dice, create a random no between 1 and 6, assign that to the dice value and change the dice image to represent the dice value
// Check shake-element-transform folder for shake() function
// playerTravels is involed and dice value is added as argument a 
// Functions to check for a rocket, meteor or winner are invoked
// At the end of the function, remove the button click event listener until villain has moved

let button = $('button');
let dice = $('#dice-id');
let diceValue = 0;
let playerOnePosition = 1;
let villainPosition = 1;
const playerMove = function () {
        dice.shake();
        diceValue = Math.ceil(Math.random()* 6);
        dice.attr("src", "images/dice-"+diceValue+".png")
        playerTravels(diceValue, playerOnePosition);
        checkRocket();
        checkMeteor();
        checkWinner();
        button.off("click");
    // return playerOnePosition
}

// Make computer move function that generates random number between 1 and 6 
// Invoked the villainTravels function using moveValue as argument a
// Then check whether villain has collided with a rocket, a meteor or if they have won
// Turn on button click listener so thay player can move again

const computerMove = function () {
    let moveValue = Math.ceil(Math.random()* 6);
    villainTravels(moveValue, villainPosition);
    checkRocket();
    checkMeteor();
    checkWinner();
    button.on("click", playerMove);
    // return villainPosition
}

// Make play game function which invokes playerMove function when button is clicked and conputerMove function when villain is clicked
// call computerMove function, use it to update computer position and check whether winner, snake or ladder

const playGame = function () {
    button.click(function () {
        playerMove();
    });
    villain.click(function(){
        computerMove();
    });
}

playGame();


