/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    newArr[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      const up = !matrix[i - 1] ? 0 : !!matrix[i - 1][j];
      const down = !matrix[i + 1] ? 0 : !!matrix[i + 1][j];
      const left = matrix[i][j - 1] === undefined ? 0 : !!matrix[i][j - 1];
      const right = matrix[i][j + 1] === undefined ? 0 : !!matrix[i][j + 1];
      const upLeft = matrix[i - 1] === undefined || matrix[i - 1][j - 1] === undefined
        ? 0 : !!matrix[i - 1][j - 1];
      const upRight = matrix[i - 1] === undefined || matrix[i - 1][j + 1] === undefined
        ? 0 : !!matrix[i - 1][j + 1];
      const downLeft = matrix[i + 1] === undefined || matrix[i + 1][j - 1] === undefined
        ? 0 : !!matrix[i + 1][j - 1];
      const downRight = matrix[i + 1] === undefined || matrix[i + 1][j + 1] === undefined
        ? 0 : !!matrix[i + 1][j + 1];
      newArr[i].push(up + down + right + left + upLeft + upRight + downLeft + downRight);
    }
  }

  return newArr;
}
minesweeper([
  [false, false, false],
  [false, false, false],
]);

module.exports = minesweeper;
