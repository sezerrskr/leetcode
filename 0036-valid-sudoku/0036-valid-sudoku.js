/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = new Array(9).fill().map(() => new Set());
    const cols = new Array(9).fill().map(() => new Set());
    const boxes = new Array(9).fill().map(() => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let value = board[r][c];

            if (value === ".") continue;

            let boxId = (Math.floor(r / 3) * 3) + Math.floor(c / 3);

            if (rows[r].has(value) || cols[c].has(value) || boxes[boxId].has(value)) {
                return false;
            }

            // Ekle
            rows[r].add(value);
            cols[c].add(value);
            boxes[boxId].add(value);
        }
    }
    return true;
};