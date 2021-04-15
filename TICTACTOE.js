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

//Checking to see if player entry a valid number
function isIntValid(value) {
  var num;
  //Checks if entry is number
  if (isNaN(value)) {
    return false;
  }
  return true;
}

//See if position on board is open
function validateMove(position) {
  //Checks to see if value is an int and the position on the board exists and is empty
  return isIntValid(position) && board[position] === " ";
}

//All the different win combinations in TICTACTOE
const winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

//Checks to see if player has 3 in row
function checkWin(player) {
  var i, j, count;
  //loops through each array in combos
  for (i = 0; i < winningCombos.length; i++) {
    //count starts at 0
    count = 0;
    //loops through each value in each array in wincombos
    for (j = 0; j < winningCombos[i].length; j++) {
      //if the player has a mark on the board in one of the positions, the count goes up one. Else, the loop breaks and the count goes back to 0
      if (board[winningCombos[i][j]] === player) {
        count++;
      }
      //if count gets to three, player has three in a row = win
      if (count === 3) {
        return true;
      }
    }
  }
  return false;
}

function checkTie() {
  //loops through spaces from 1-9 to see if there are any blank spaces. If no blank spaces, returns true and game over
  for (var i = 1; i <= 9; i++) {
    if (board[i] === " ") {
      return false;
    }
  }
  return true;
}

//Create a game loop that prompts each player to make a move, takes a command line argument, and prints it back
function TICTACTOE(player) {
  //Prompts player to start game and enter desired space
  console.log("Your turn player: " + player);
  prompt.start();
  //Prompt receives value of space from player
  prompt.get(["space"], function (err, result) {
    //Checks to see if entered space is valid
    if (validateMove(result.space) === true) {
      //if valid, board is marked
      markBoard(result.space, player);
      //board is printed back to player
      printBoard();
      //checks win
      if (checkWin(player) === true) {
        console.log(`Winner Winner! player ${player}`);
        return;
      }
      //checks tie
      if (checkTie() === true) {
        console.log("Tie Game");
        return;
      }
      //Continues games and switches player
      if (player === "X") {
        TICTACTOE("O");
      } else {
        TICTACTOE("X");
      }
    } else {
      console.log("incorrect input please try again...");
      TICTACTOE(player);
    }
  });
}

TICTACTOE("O");
