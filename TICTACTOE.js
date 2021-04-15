//Node and prompt are the only two dependencies needed for this game. Run commands: npm i node npm install prompt
var prompt = require("prompt");

//Blank intitial board object
var board = {
  1: " ",
  2: " ",
  3: " ",
  4: " ",
  5: " ",
  6: " ",
  7: " ",
  8: " ",
  9: " ",
};

//Function that marks the board at the correct position
function markBoard(position, mark) {
  board[position] = mark;
}

//function that prints the current tic tac toe board
function printBoard() {
  console.log(
    "\n" +
      " " +
      board[1] +
      " | " +
      board[2] +
      " | " +
      board[3] +
      "\n" +
      " ---------\n" +
      " " +
      board[4] +
      " | " +
      board[5] +
      " | " +
      board[6] +
      "\n" +
      " ---------\n" +
      " " +
      board[7] +
      " | " +
      board[8] +
      " | " +
      board[9] +
      "\n"
  );
}

//Create a game loop that prompts each player to make a move, takes a command line argument, and prints it back
function TICTACTOE(player) {
  console.log("Your turn player: " + player);
  prompt.start();
  prompt.get(["position"], function (err, result) {
    markBoard(result.position, player);
    printBoard();
  });
}

TICTACTOE("X");
