export const getAliveNeighbourCount = (rowIndex, columnIndex, board) => {
  const rowAbove = board[rowIndex - 1];
  const sameRow = board[rowIndex];
  const rowBelow = board[rowIndex + 1];
  let aliveNeighbourCount = 0;

  // count alive on row above
  if (!!rowAbove) {
    [columnIndex - 1, columnIndex, columnIndex + 1].forEach(index => {
      if (!!rowAbove[index]) {
        aliveNeighbourCount++;
      }
    });
  }
  // count alive on same row
  [columnIndex - 1, columnIndex + 1].forEach(index => {
    if (!!sameRow[index]) {
      aliveNeighbourCount++;
    }
  });
  // count alive on same below
  if (!!rowBelow) {
    [columnIndex - 1, columnIndex, columnIndex + 1].forEach(index => {
      if (!!rowBelow[index]) {
        aliveNeighbourCount++;
      }
    });
  }
  return aliveNeighbourCount;
};
