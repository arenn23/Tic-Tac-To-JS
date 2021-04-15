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

//Function that places a mark onto the board
function markBoard(position, mark) {
  board[position] = mark.toUpperCase();
}

//Create a game loop that prompts each player to make a move, takes a command line argument, and prints it back
function TICTACTOE(player) {
  console.log("Your turn player: " + player);
  prompt.start();
  prompt.get(["position"], function (err, result) {
    console.log(`Player  ${player} + placed at  ${result.position}`);
  });
}

TICTACTOE("X");
