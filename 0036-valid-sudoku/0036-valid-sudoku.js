/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rows = new Map();
    let cols = new Map();
    let boxes = new Map();

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let value = board[r][c];

            if (value == ".") {
                continue
            }

            let boxId = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            if (!rows.has(r)) rows.set(r, new Set())
            if (!cols.has(c)) cols.set(c, new Set())
            if (!boxes.has(boxId)) boxes.set(boxId, new Set())
            if (rows.get(r).has(value) || cols.get(c).has(value) || boxes.get(boxId).has(value)) {
                return false
            }

            rows.get(r).add(value);
            cols.get(c).add(value);
            boxes.get(boxId).add(value);
            // Eğer bu üçünden biri bile undefined ise, bir sonraki satırda patlayacaksın demektir.
            console.log(`Bakıyorum -> R:${r} C:${c} | Mapler ->`, rows.get(r), cols.get(c), boxes.get(boxId));
        }
    }
    return true
};