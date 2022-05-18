//Creating a matrix array to create number the board from 1 to n

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
    // console.log(innerBlocks)
    // console.log(outerRows)
    // console.log(outerRows[0])
    // let rows = outerRows[3].map(el => el + (n*3))
    
    for (let i = 0; i <n; i++) {
        
        rows.push(outerRows[i].map(el =>{
            var ele = el + (n*i)
        //     if (ele < 10) {
        //         ele = "0" + ele 
        //     }
        return ele 
        } ))
  
        // console.log(outerRows[i])
        // console.log(rows)
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
    // const matrix = createMatrix(n);
    let str = "";
    rows.map(row => {
        str += `<div class="row">`
        row.map(block => {
            str += `<div class="block" id=${block} data-value=${block}> ${block} </div>`
        })
        str += `</div>`
    })
    // console.log(str);
    board.html(str);
    // console.log(board);
}

createBoard();
console.log($('.row'))

// Specify board and block sizes
var dimension = 100;
var boardSize = n * dimension;
var blockSize = dimension;
const block  = $('.block');
board.css("width", boardSize + "px");
board.css("height", boardSize + "px");
block.css("width", blockSize + "px");
block.css("height", blockSize + "px");



console.log($('.row:nth-child(4) .block:nth-child(2)').text());
// console.log($('.block:nth-child(4)').text());
// console.log($('.row')[0])


// // Change colour of every second square to make chequered board
const boardColor = function() {
    // console.log("test")
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            // console.log($('.row:nth-child('+i+') .block:nth-child('+j+')').text())
            if ($('.row:nth-child('+i+') .block:nth-child('+j+')').text() % 2 ==0){
                // console.log("even")
                $('.row:nth-child('+i+') .block:nth-child('+j+')').css("background-color", "red")
        } else {
            $('.row:nth-child('+i+') .block:nth-child('+j+')').css("background-color", "white")
        }
        
    }
    }
}
boardColor();

//Add superhero selector
$('.selector').prepend('<p id="chooseSuperhero">Click to choose your superhero!</p>')
$('.selector').append('<div class="superhero" id="pyro"></div><div class="superhero" id="speed"></div><div class="superhero" id="power"></div>')
$('#pyro').append('<img src="images/pyro.png" id="pyroImg"/>');
$('#power').append('<img src="images/power.png" id="powerImg"/>');
$('#speed').append('<img src="images/speed.png" id="speedImg"/>');



//Add snakes and ladders to board
// const snakesAndLadders = function() {
//     snakePositions.forEach(el => {
//         $('#'+el).append('<img/>')
//     });
//     ladderPositions.forEach(ele => {
//         $('#'+ele).append('<img/>')
//     });
// }
// snakesAndLadders();
// console.log($('#34 img'));

// Add snake to board
board.prepend('<img src="images/scarysnake3.png" id="snake" />')
board.prepend('<img src="images/ladder.png" id="ladder" />')

let snake = $('#snake')
let ladder = $('#ladder')
snake.css({"height": "500px", "width": "500px", "position": "absolute"});
snake.hide();
ladder.css({"height": "500px", "width": "500px", "position": "absolute"});
ladder.hide();
// let snakePositions = [28, 19, 34, 12];
// snakePositions.forEach(position => {
//     $('#'+position).append('<img src="images/scarysnake.png" id="snake"'+position+'/>'); 
// });
// console.log($('#snake28'))
// $('#28 img').attr({"src":"images/scarysnake1.png", "id":"snake28"})
// $('#19 img').attr({"src":"images/scarysnake2.png", "id":"snake19"})
// $('#34 img').attr({"src":"images/scarysnake3.png", "id":"snake34"})
// $('#12 img').attr({"src":"images/scarysnake4.png", "id":"snake12"})
// $('#28').attr("src","images/scarysnake1.png" "id", "snake1" />');
// $('#12').append('<img src="images/scarysnake.png" id="snake2" />');
// $('#19').append('<img src="images/scarysnake.png" id="snake3" />');
// $('#34').append('<img src="images/scarysnake.png" id="snake4" />');
// let snake28 = $('#snake28');
// let snake19 = $('#snake19');
// let snake34 = $('#snake34');
// let snake12 = $('#snake12');

// snake28.css({"height": "100px", "width": "100px", "position": "absolute"});
// snake19.css({"height": "100px", "width": "100px", "position": "absolute"});
// snake34.css({"height": "100px", "width": "100px", "position": "absolute"});
// snake12.css({"height": "100px", "width": "100px", "position": "absolute"});
// Remove snake from board
// snake28.hide();
// snake19.hide();
// snake34.hide();
// snake12.hide();

// Choose your superhero and add to the board
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
        // $('#pyro')+e.target.nodeName.hide();
    })
}
chooseHero();

// Add player icons to square one of the board
// $('#1').append('<img src="images/super-gal.png" id="player-1" />');
// let playerOne = $('#player-1');
// playerOne.css("height", "50px")
// playerOne.css("width", "50px")
// playerOne.css("position", "absolute");

// Create snake and ladder positions
let snakePositions = [28, 19, 34, 12];
let ladderPositions = [4, 13, 21, 27];
// Create functions to check if snake or ladder exist in player one's position
const checkSnake = function() {
    snakePositions.forEach(x => {
        if (x == playerOnePosition) {
            snake.show();
            snake.shake();
            console.log("snake!!!")
            alert("Ssssssss, bad newsssss, you go back "+spaceJump+" spacesssssss!");
            playerOnePosition = playerOnePosition - spaceJump;
            snake.fadeOut(5000);
            $('#'+playerOnePosition).append(playerOne).hide();
            $('#'+playerOnePosition).append(playerOne).fadeIn(5000);
        }
    });
}
const checkLadder = function () {
    ladderPositions.forEach(y => {
        if (y == playerOnePosition) {
            ladder.show();
        ladder.shake();
        console.log("ladder!!")
        alert("Yahoooo, good news, you go forward "+spaceJump+" spaces!");
            playerOnePosition = playerOnePosition + spaceJump;
            ladder.fadeOut(5000);
            $('#'+playerOnePosition).append(playerOne).hide();
            $('#'+playerOnePosition).append(playerOne).fadeIn(5000);
        }
    });
}
// Create variable to determine a random number between one and ten that landing on a snake or ladder makes you jump
var spaceJump = (Math.ceil(Math.random()* 10));

// Create a function that checks to determine if you win the game
const checkWinner = function () {
    if (playerOnePosition >=(n*n)) {
        alert("You have defeated the snakes and won the game!!!")
    }
}



// When the button is clicked: shake the dice, create a random no between 1 and 6, assign that to the dice value and change the dice image to represent the dice value
// Check shake-element-transform folder for shake() function
// Dice value is added to player position and position of player one is updated accordingly
let button = $('button');
let dice = $('#dice-id');
let diceValue = 0;
let playerOnePosition = 1;
const rollDice = function () {
    button.click(function () {
        console.log("button is clicked")
        dice.shake();
        diceValue = Math.ceil(Math.random()* 6);
        dice.attr("src", "images/dice-"+diceValue+".png")
        playerOnePosition += diceValue
        console.log(playerOnePosition)
        console.log($('#'+playerOnePosition))
        $('#'+playerOnePosition).append(playerOne).hide()
        $('#'+playerOnePosition).append(playerOne).fadeIn(1000)
        checkSnake();
        checkLadder();
        checkWinner();
    })
}
rollDice();
// console.log(snake1.parent())
// if (snake1.parent == $('#'+playerOnePosition)) {
//     console.log(matched)
// }
// console.log(playerOnePosition);
// const checkSnake = function () {
// snakePositions.forEach(x => {
//     console.log(x)
//     if (x == playerOnePosition) {
//         console.log("snake!!!")
//         snake1.show();
//         playerOnePosition = playerOnePosition - (Math.ceil(Math.random()* 10));
//         $('#'+playerOnePosition).append(playerOne);
//         snake1.hide();
//     }
// });
// }
// checkSnake();



// const checkSnake = function() {
//     if ($('#'+playerOnePosition)== snake1.parent() ) {
//         console.log(snake1.parent())
//         snake1.show();
//         playerOnePosition = playerOnePosition - (Math.ceil(Math.random()* 10));
//         $('#'+playerOnePosition).append(playerOne);
//         snake1.hide();
//     } else if ($('#'+playerOnePosition)== snake2.parent()) {
//         console.log(snake2.parent())
//         snake2.show();
//         playerOnePosition = playerOnePosition - (Math.ceil(Math.random()* 10));
//         $('#'+playerOnePosition).append(playerOne);
//         snake2.hide();
//     } else if ($('#'+playerOnePosition)== snake3.parent()) {
//         console.log(snake3.parent())
//         snake3.show();
//         playerOnePosition = playerOnePosition - (Math.ceil(Math.random()* 10));
//         $('#'+playerOnePosition).append(playerOne);
//         snake3.hide();
//     } else if ($('#'+playerOnePosition)== snake4.parent()) {
//         console.log(snake4.parent())
//         snake4.show();
//         playerOnePosition = playerOnePosition - (Math.ceil(Math.random()* 10));
//         $('#'+playerOnePosition).append(playerOne);
//         snake4.hide();
//     }
// }
// checkSnake();

