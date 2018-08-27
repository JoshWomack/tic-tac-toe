//get player names
function getPlayerNames() {
    player1.name = prompt("Enter the name of player 1: ");
    player2.name = prompt("Enter the name of player 2: ");

}

//create board
function createBoard() {
let row1 = ["| ", " ", " | ", " ", " | ", " ", " |"];
let row2 = ["| ", " ", " | ", " ", " | ", " ", " |"];
let row3 = ["| ", " ", " | ", " ", " | ", " ", " |"];
let board = [row1, row2, row3];
return board;
}

//create grid board
function createGridBoard() {
    let row1 = ["| ", "1", " | ", "2", " | ", "3", " |"];
    let row2 = ["| ", "4", " | ", "5", " | ", "6", " |"];
    let row3 = ["| ", "7", " | ", "8", " | ", "9", " |"];
    let board = [row1, row2, row3];
    return board;
}

//output a board to the log
function printBoard(board) {
aRow = '';
for (var x = 0; x < board.length; x++) {
    for (var y = 0; y < board[x].length; y++) {
        aRow = aRow + board[x][y];
    }
    console.log(x.toString() + "- " + aRow);
    aRow = '';
}
}

//get player move 
function getMovePlayer1() {
    move = prompt("Player 1 input your move: ");
    return move;

}

//Create player objects
var player1 = {
    name:'',
    move: 0,
    myTurn: true,
    myLetter: 'X',
    player: 'player 1'
}

var player2 = {
    name:'',
    move: 0,
    myturn: false,
    myLetter: 'O',
    player: 'player 2'
}

//update board state
function updateBoardState () {
    if (player1.myturn == true) {
        a = Math.floor(player1.move/3);
        b = player1.move % 3;
        console.log(a,b);
        boardState[a][b] = 'X';
    }   else {
        a = Math.floor(player2.move/3);
        b = player2.move % 3;
        boardState[a][b] = 'O';
        console.log(a,b);
    }

}

const gridBoard = createGridBoard();
let boardState = createBoard();
// getPlayerNames();
var keepGoing = true;

while (keepGoing == true) {
    printBoard(gridBoard);
    printBoard(boardState);

    if (player1.myTurn == true) {
        player1.move = prompt("Player 1 input your move: ");
        updateBoardState();
        player1.myTurn = false;
    }   else {
        player2.move = prompt("Player 2 input your move: ");
        updateBoardState()
        player1.myTurn = true;
   }

}




