/**
 * Underpopulation: Any live cell with fewer than two live neighbour dies.
 * @param {bool} boxValue Current box status
 * @param {number} numberOfAliveNeighbours Number of alive neighbours
 * @returns {bool}
 */
export const ruleOneChecker = (boxValue, numberOfAliveNeighbours) => {
  if (boxValue && numberOfAliveNeighbours < 2) {
    return true;
  }
  return false;
};

/**
 * Survival: Any live cell with 2 or 3 live neighbours survives.
 * @param {bool} boxValue Current box status
 * @param {number} numberOfAliveNeighbours Number of alive neighbours
 * @returns {bool}
 */
export const ruleTwoChecker = (boxValue, numberOfAliveNeighbours) => {
  if (
    boxValue &&
    (numberOfAliveNeighbours === 2 || numberOfAliveNeighbours === 3)
  ) {
    return true;
  }
  return false;
};

/**
 * Overpopulation: Any live cell with more than 3 live neighbours dies.
 * @param {bool} boxValue Current box status
 * @param {number} numberOfAliveNeighbours Number of alive neighbours
 * @returns {bool}
 */
export const ruleThreeChecker = (boxValue, numberOfAliveNeighbours) => {
  if (boxValue && numberOfAliveNeighbours > 3) {
    return true;
  }
  return false;
};

/**
 * Reproduction(Birth): Any dead cell with 3 live neighbours becomes active.
 * @param {bool} boxValue Current box status
 * @param {number} numberOfAliveNeighbours Number of alive neighbours
 * @returns {bool}
 */
export const ruleFourChecker = (boxValue, numberOfAliveNeighbours) => {
  if (!boxValue && numberOfAliveNeighbours === 3) {
    return true;
  }
  return false;
};
