const Piece = require('./Piece.js');

class Queen extends Piece {
    constructor() {
        super();
    }

    attacks(piece) {
        let i = this.rowIndex();
        let j = this.colIndex();

        let u = piece.rowIndex();
        let v = piece.colIndex();
        
        return (this.isMindfulOf(piece) && ((i == u) || (j == v) || (i - j == u - v) || (i + j == u + v)));
    }
}

module.exports = Queen;