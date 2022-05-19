
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
                $('.row:nth-child('+i+') .block:nth-child('+j+')').css("background-color", "#b133c9")
        } else {
            $('.row:nth-child('+i+') .block:nth-child('+j+')').css("background-color", "white")
        }
        
    }
    }
}
boardColor();

// Add text box to explain game
$('body').prepend('<div class="welcomeMessage"> <p id="mission"> Your mission: </p> <br><p> You must get to outer space before the evil villain, Grok, and disarm the bomb that threatens to destroy mankind!! <br><br> First, choose your superhero. Then roll the dice to see how far you travel. <br> The rockets will launch you forward but beware of meteors, being hit by one of them will send you back towards earth! <br><br>Click Grok before you click again! Fingers crossed he gets hit by a meteor!<br><br> Double click this box to get started!</p></div>')
$('.welcomeMessage').css({"position": "absolute", "width": "600px", "height": "500px", "background-color": "white", "color": "red"});
// Add function to close pop up and start the game
const closePopUp = function () {
    $('.welcomeMessage').dblclick(function() {
        $('.welcomeMessage').hide();
    })
}
closePopUp();


//Add superhero selector
$('.selector').prepend('<p id="chooseSuperhero">Click on your chosen superhero!</p>')
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
// board.prepend('<img src="images/scarysnake3.png" id="snake" />')
// board.prepend('<img src="images/ladder.png" id="ladder" />')

// let snake = $('#snake')
// let ladder = $('#ladder')
// snake.css({"height": "500px", "width": "500px", "position": "absolute"});
// snake.hide();
// ladder.css({"height": "500px", "width": "500px", "position": "absolute"});
// ladder.hide();
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

//Add villain to the board
$('#1').append('<img src="images/villain.png" id="villain" />')
var villain = $('#villain')
villain.css({"position": "absolute", "height": "50px", "width": "50px"})

// Add rocket to board
let rocketPositions = [4, 17, 23, 10]
let rocketEnd = [9, 27, 25, 12]
let rocket = $('.rocket')
const locateRocket = function () {
    rocketPositions.forEach(element => {
        console.log($('#'+element))
        $('#'+element).append(`<img class="rocket" id="rocket${element}" src="images/rocket.png" />`)
        // $('#'+element).append('<img class="rocket" src="images/rocket.png" />')
    });
}

// Test whether you can get index of rocket positions easily
var test = rocketPositions.indexOf(23)
console.log(test);
console.log(rocketEnd[test]);

// Add meteor to the board
let meteorPositions = [13, 20, 26, 34];
let meteorEnd = [2, 18, 15, 21];
let meteor = $('.meteor')
const locateMeteor = function () {
    meteorPositions.forEach(element => {
        console.log($('#'+element))
        $('#'+element).append(`<img class="meteor" id="meteor${element}" src="images/meteor.png" />`)
    });
}
locateRocket();
locateMeteor();

// $('#15').append('<img class="rocket "id="rocket1" src="images/rocket.png" />')

// rocket.css({"position": "absolute", "height": "50px", "width": "50px"})
// rocket.click( function (event) {
//         var targ = $(event.target)
//         console.log(event)
//         console.log(targ)
//         targ.animate({
//         height: (50+(jumpForward*20))+"px",
//         width: (50+(jumpForward*20))+"px",
//         bottom: "+=500px",
//         left: "+=500px"
//     }, 5000, function () {
//         rocketPositions.forEach(element => {
//             console.log($('#'+element))
//             $('#'+element).append(`<img class="rocket" id="rocket${element}" src="images/rocket.png" />`)
//             // $('#'+element).append('<img class="rocket" src="images/rocket.png" />')
//         });
//         // $('#rocket'+).append('<img class="rocket "id="rocket1" src="images/rocket.png" />');
//     });
// });

//  Make rocket animation function
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
// Function takes argument a = no of spaces player should move (can be positive or negative)
// Function also takes argument b which is current position of player
const playerTravels = function (a, b) {
    let pos =  0;
    // let playerUpdate = playerOnePosition;
        let int = setInterval(move, 150);
        function move() {
            if (a > 0) {
                if (pos == a) {
                    console.log("int should stop now")
                    clearInterval(int)
                } else {
                    pos++
                console.log("incremental position: "+pos)
                console.log("p1 pos in else statment is: "+playerOnePosition)
                $('#'+(b + pos)).append(playerOne)
                }
            } else {
                if (pos == a) {
                    console.log("int should stop now, gone backwards")
                    clearInterval(int)
                } else {
                    pos--
                    $('#'+(b + pos)).append(playerOne)
                }
            }            
           }
     playerOnePosition += a;
     console.log("after player travels p1p is "+playerOnePosition)
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
                console.log("villain interval should stop now")
                clearInterval(intV)
            } else {
                vos++
                console.log("villain position in travel fxn is:"+villainPosition)
                $('#'+(b + vos)).append(villain)
            }
        } else {
            if (vos == a) {
                console.log("intV should stop now, villain gone backwards")
                    clearInterval(intV)
            } else {
                $('#'+(b + vos)).append(villain)
            }
        }
    }
    villainPosition += a;
    console.log("after vill travels vp is "+villainPosition)
}


// Add player icons to square one of the board
// $('#1').append('<img src="images/super-gal.png" id="player-1" />');
// let playerOne = $('#player-1');
// playerOne.css("height", "50px")
// playerOne.css("width", "50px")
// playerOne.css("position", "absolute");

// Create snake and ladder positions
// let snakePositions = [28, 19, 34, 12];
// let ladderPositions = [4, 13, 21, 27];
// Create functions to check if snake or ladder exist in player one's position
const checkRocket = function() {
    rocketPositions.forEach(x => {
        if (x == playerOnePosition) {
            rocketAnimation(x);
            console.log("rocket!!!")
            var endIndex = rocketPositions.indexOf(x);
            var spacesToMove = rocketEnd[endIndex] - playerOnePosition
            playerTravels(spacesToMove, playerOnePosition);
            // playerOnePosition = rocketEnd[endIndex];
            // alert("Ssssssss, bad newsssss, you go back "+jumpBackward+" spacesssssss!");
            // playerOnePosition = playerOnePosition + jumpForward;
            // snake.fadeOut(5000);
            // $('#'+playerOnePosition).append(playerOne).hide();
            // $('#'+playerOnePosition).append(playerOne).fadeIn(5000);
        } else if (x == villainPosition){
            rocketAnimation(x);
            console.log("The villain has hopped on a rocket!!")
            var endIndexVill = rocketPositions.indexOf(x);
            var spacesToMoveVill = rocketEnd[endIndexVill] - villainPosition
            villainTravels(spacesToMoveVill, villainPosition);
            // villainPosition = villainPosition + jumpForward;
        }
    });
}
const checkMeteor = function () {
    meteorPositions.forEach(y => {
        if (y == playerOnePosition) {
        meteorAnimation(y);
        console.log("meteor!!")
        // alert("Yahoooo, good news, you go forward "+jumpForward+" spaces!");
        var endIndexMet = meteorPositions.indexOf(y);
        var spacesToMoveMet = meteorEnd[endIndexMet] - playerOnePosition
        playerTravels(spacesToMoveMet, playerOnePosition)
            // playerOnePosition = playerOnePosition - jumpBackward;
            // ladder.fadeOut(5000);
            // $('#'+playerOnePosition).append(playerOne).hide();
            // $('#'+playerOnePosition).append(playerOne).fadeIn(5000);
        } else if (y == villainPosition) {
            meteorAnimation(y);
            console.log("Good news... the villain has been hit by a meteor....")
            var endIndexMetVill = meteorPositions.indexOf(y);
            var spacesToMoveMetVill = meteorEnd[endIndexMetVill] - villainPosition
            villainTravels(spacesToMoveMetVill, villainPosition)
            // villainPosition = villainPosition - jumpBackward;
        }
    });
}
// Create variables to determine a random number between one and ten that landing on a snake or ladder makes you jump
// var jumpForward = (Math.ceil(Math.random()* 10));
// var jumpBackward = (Math.ceil(Math.random()* 10));

// Create a function that checks to determine if you win the game
const checkWinner = function () {
    if (playerOnePosition >=(n*n)) {
        alert("You have defeated Grok in the race to space and disarmed the bomb! Congratulations, you saved mankind!!!")
    } else if (villainPosition >= (n*n)) {
        alert("You have been defeated by the evil Grok in the race to space; the future of mankind is at risk!")
    }
}



// When the button is clicked: shake the dice, create a random no between 1 and 6, assign that to the dice value and change the dice image to represent the dice value
// Check shake-element-transform folder for shake() function
// Dice value is added to player position and position of player one is updated accordingly
let button = $('button');
let dice = $('#dice-id');
let diceValue = 0;
let playerOnePosition = 1;
let villainPosition = 1;
const playerMove = function () {
    // button.click(function () {
        console.log("button is clicked")
        dice.shake();
        diceValue = Math.ceil(Math.random()* 6);
        console.log("dice value: "+diceValue);
        console.log("player pos: "+playerOnePosition);
        dice.attr("src", "images/dice-"+diceValue+".png")
        playerTravels(diceValue, playerOnePosition);
        console.log("player pos after move: "+playerOnePosition);
        // for (let i = (playerOnePosition+1); i <= (playerOnePosition + diceValue); i++) {
        // let pos =  0;
        // let int = setInterval(move, 150);
        // function move() {
        //     if (pos == playerOnePosition + diceValue) {
        //         console.log("int should stop now")
        //         clearInterval(int)
        //     } else {
        //         pos++
        //         console.log("incremental position: "+pos)
        //         $('#'+(playerOnePosition+pos)).append(playerOne)
        //     }
        //    }
            // $('#'+i).append(playerOne).fadeOut(500);
            // $('#'+i).append(playerOne).fadeOut(500);
            // $('#'+i).show();
            // $('#'+i+'img').fadeOut(500);
            // $('#'+(i+1)).append(playerOne).fadeIn(1000);
            // $('#'+(i+1)).show();
        // }
        // console.log(playerOnePosition)
        // console.log($('#'+playerOnePosition))
        // $('#'+playerOnePosition).append(playerOne).hide()
        // $('#'+playerOnePosition).append(playerOne).fadeIn(1000)
        checkRocket();
        checkMeteor();
        checkWinner();
        // button.off("click");
    // })
    
    console.log("player position after checks etc.: "+playerOnePosition)
    return playerOnePosition
}
// rollDice();
// Make player move function that moves player according to dice value
// Then check whether player has landed on a snake, a ladder or if they have won
// const playerMove = function() {
//     $('#'+playerOnePosition).append(playerOne).hide()
//     $('#'+playerOnePosition).append(playerOne).fadeIn(1000)
//     checkSnake();
//     checkLadder();
//     checkWinner();
// }

// Make computer move function that generate random number between 1 and 6 and moves the computer relevant number of spaces
// Then check whether computer had landed on a snake, a ladder or if it has won
const computerMove = function () {
    // alert("The evil villain is on their way, click ok to see how far they've got!")
    let moveValue = Math.ceil(Math.random()* 6);
    // villainPosition += moveValue;
    // $('#'+villainPosition).append(villain).hide();
    // $('#'+villainPosition).append(villain).fadeIn(1000);
    console.log("villain pos is: "+villainPosition)
    console.log("random move value is: "+moveValue)
    villainTravels(moveValue, villainPosition);
    console.log("villain pos after move: "+villainPosition);
    checkRocket();
    checkMeteor();
    checkWinner();
    // button.on("click", playerMove);
    // return villainPosition
}

// Play game: 
// call roll dice function, use it to update player position and check whether winner, snake or ladder
// call computerMove function, use it to update computer position and check whether winner, snake or ladder
const playGame = function () {
    button.click(function () {
        console.log("dice button clicked")
        playerMove();
        // playerOnePosition += diceValue
        console.log("P1 pos in playGame fxn: "+playerOnePosition)
    });
    // alert("The evil villain is on their way, click on them to see how far they've got!")
    villain.click(function(){
        console.log("villain clicked")
        console.log(villainPosition)
        computerMove();
    });
    // rollDice();
}

playGame();

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

