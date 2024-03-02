export const Parser = () => {
  let n = initialGrid.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < initialGrid[i].length; j++) {
      let currEl = initialGrid[i][j];
      if (initialGrid[i][j] == defaultColor) {
        initialGrid[i][j] = 0;
      } else if (initialGrid[i][j] == playerOne) {
        initialGrid[i][j] = 1;
      } else if ((initialGrid[i][j] = playerTwo)) {
        initialGrid[i][j] = 2;
      }
      // console.log(initialGrid[i][j])
    }
  }
  return initialGrid;
};

// export default Parser;
