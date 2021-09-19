const Board = require('./Board.js');
const Queen = require('./Queen.js');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

function numberOfSolutions(i, board) {
    if (i < board.size()) {
        let queen  = new Queen();
        let count = 0;

        for (let j = 0; j < board.size(); j++) {
            queen.placeOn(board, i, j);
            if (board.admissiblePlacementFor(queen)) {
                count = count + numberOfSolutions(i + 1, board);
            }
            queen.removeFromBoard();
        }
        return count;
    } else {
        return 1;
    }
}
    

console.log("Solve the Queen's puzzle of the specified size");

rl.question("What size of board would you like to solve? ", input => {
    let size = parseInt(input);
    let board = new Board(size);
    console.log(numberOfSolutions(0, board));
    rl.close();
});
