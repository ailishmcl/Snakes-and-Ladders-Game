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
            if (ele < 10) {
                ele = "0" + ele 
            }
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
            str += `<div class="block" data-value=${block}> ${block} </div>`
        })
        str += `</div>`
    })
    // console.log(str);
    board.html(str);
    // console.log(board);
}

createBoard();
console.log($('.row'))

var size = n * 200
board.css("width", size + "px");
board.css("height", size + "px");


console.log($('.row:nth-child(4) .block:nth-child(2)').text());
console.log($('.block:nth-child(4)').text());
console.log($('.row')[0])


// Change colour of every second square to make chequered board
const boardColor = function() {
    console.log("test")
    for (let i = 1; 1 <= n; i++) {
        for (let j = 1; j <= n; j++) {
            // console.log($('.row:nth-child('+i+') .block:nth-child('+j+')').text())
            // if ($('.row:nth-child('+i+') .block:nth-child('+j+')').text() % 2 ==0){
            //     console.log("even")
            //     $('.row:nth-child('+i+') .block:nth-child('+j+')').css("background-color", "red")
        // }
        
    }
    }
}
boardColor();