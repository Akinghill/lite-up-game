export function randomizeGameBoard(gameBoard) {
  let randomGameBoard = gameBoard;
  let timesToShuffle = 1000;
  for (let i = 0; i <= timesToShuffle; i++) {
    let randomRow = Math.floor(Math.random() * 5);
    let randomCell = Math.floor(Math.random() * 5);

    let changeThese = [
      randomRow + 1,
      randomRow - 1,
      randomCell + 1,
      randomCell - 1,
    ];

    // Change values at these indecies
    randomGameBoard[randomRow][randomCell] =
      1 - randomGameBoard[randomRow][randomCell];
    if (changeThese[0] <= 4) {
      randomGameBoard[changeThese[0]][randomCell] =
        1 - randomGameBoard[changeThese[0]][randomCell];
    }
    if (changeThese[1] >= 0) {
      randomGameBoard[changeThese[1]][randomCell] =
        1 - randomGameBoard[changeThese[1]][randomCell];
    }
    if (changeThese[2] <= 4) {
      randomGameBoard[randomRow][changeThese[2]] =
        1 - randomGameBoard[randomRow][changeThese[2]];
    }
    if (changeThese[3] >= 0) {
      randomGameBoard[randomRow][changeThese[3]] =
        1 - randomGameBoard[randomRow][changeThese[3]];
    }
  }

  return randomGameBoard;
}

export function createGameBoard() {
  let numberOfRows = 5;
  let cellsPerRow = 5;
  let generatedBoard = [];
  for (let i = 0; i < numberOfRows; i++) {
    let newRow = [];
    for (let j = 0; j < cellsPerRow; j++) {
      newRow.push(0);
    }
    generatedBoard.push(newRow);
  }

  return generatedBoard;
}

export function gameSquareSelected(id) {
  if (id >= 0 && id <= 44 && !isNaN(id[0])) {
    return true;
  } else {
    return false;
  }
}

export function isGameWon(state) {
  if (state.gameState.flat(2).reduce((a, b) => a + b, 0) === 0) {
    return true;
  }
}

export function processInput(id, gameState) {
  let row = parseInt(id[0]);
  let cell = parseInt(id[1]);

  // increment Score
  // let newScore = this.state.score + 1;

  let changeThese = [row + 1, row - 1, cell + 1, cell - 1];

  // Change values at these indecies
  gameState[row][cell] = 1 - gameState[row][cell];
  if (changeThese[0] <= 4) {
    gameState[changeThese[0]][cell] = 1 - gameState[changeThese[0]][cell];
  }
  if (changeThese[1] >= 0) {
    gameState[changeThese[1]][cell] = 1 - gameState[changeThese[1]][cell];
  }
  if (changeThese[2] <= 4) {
    gameState[row][changeThese[2]] = 1 - gameState[row][changeThese[2]];
  }
  if (changeThese[3] >= 0) {
    gameState[row][changeThese[3]] = 1 - gameState[row][changeThese[3]];
  }

  return gameState;
  // if (isGameWon(this.state)) {
  //   this.setState({
  //     gameWon: true,
  //   });
  // }

  // this.setState({
  //   score: Number(newScore),
  //   gameState: newGameState,
  // });
}
