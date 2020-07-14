export function randomizeGameBoard(gameBoard){
  let randomGameBoard = gameBoard;
  let timesToShuffle = 100;
  for(let i = 0; i <= timesToShuffle; i++){
    let randomRow = Math.floor(Math.random() * 5);
    let randomCell = Math.floor(Math.random() * 5);

    let changeThese = [randomRow+1, randomRow-1, randomCell+1, randomCell-1];

    // Change values at these indecies
    randomGameBoard[randomRow][randomCell] = 1 - randomGameBoard[randomRow][randomCell];
    if(changeThese[0] <= 4){
      randomGameBoard[changeThese[0]][randomCell] = 1 - randomGameBoard[changeThese[0]][randomCell]
    }
    if(changeThese[1] >= 0){
      randomGameBoard[changeThese[1]][randomCell] = 1 - randomGameBoard[changeThese[1]][randomCell]
    }
    if(changeThese[2] <= 4){
      randomGameBoard[randomRow][changeThese[2]] = 1 - randomGameBoard[randomRow][changeThese[2]]
    }
    if(changeThese[3] >= 0){
      randomGameBoard[randomRow][changeThese[3]] = 1 - randomGameBoard[randomRow][changeThese[3]]
    }
  }

  return randomGameBoard
}

export function createGameBoard() {
  console.log('creating game board')
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