import React, { Component } from 'react';
import './App.css';
import Title from './components/Title/Title';
// import Login from './components/Login/Login';
import Game from './components/Game/Game';
// import Timer from './components/Timer/Timer';
// import Debugger from './components/Debugger/Debugger';
import {
  randomizeGameBoard,
  createGameBoard,
  gameSquareSelected,
  isGameWon,
} from './logic/gameLogic';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameWon: false,
      score: 0,
      gameState: [],
    };
  }

  handleClick = (e) => {
    let id = e.target.id;
    if (id === 'debugger') {
      this.setState({
        gameWon: true,
      });
    }
    if (id === 'restart' || id === 'restartIcon' || id === 'play-again') {
      this.setState({
        score: 0,
        gameState: randomizeGameBoard(createGameBoard()),
        gameWon: false,
      });
    }

    let row = parseInt(id[0]);
    let cell = parseInt(id[1]);

    // Verify a game square was selected.
    if (gameSquareSelected(id)) {
      let newScore = this.state.score + 1;
      let newGameState = this.state.gameState;
      let changeThese = [row + 1, row - 1, cell + 1, cell - 1];

      // Change values at these indecies
      newGameState[row][cell] = 1 - newGameState[row][cell];
      if (changeThese[0] <= 4) {
        newGameState[changeThese[0]][cell] =
          1 - newGameState[changeThese[0]][cell];
      }
      if (changeThese[1] >= 0) {
        newGameState[changeThese[1]][cell] =
          1 - newGameState[changeThese[1]][cell];
      }
      if (changeThese[2] <= 4) {
        newGameState[row][changeThese[2]] =
          1 - newGameState[row][changeThese[2]];
      }
      if (changeThese[3] >= 0) {
        newGameState[row][changeThese[3]] =
          1 - newGameState[row][changeThese[3]];
      }

      if (isGameWon(this.state)) {
        this.setState({
          gameWon: true,
        });
      }

      this.setState({
        score: newScore,
        gameState: newGameState,
      });
    }
  };

  componentWillMount() {
    this.setState({
      gameState: randomizeGameBoard(createGameBoard()),
    });
  }

  render() {
    const { score, gameState, gameWon } = this.state;
    return (
      <div onClick={this.handleClick} className="App">
        <Title />
        <Game score={score} gameState={gameState} gameWon={gameWon} />
        {/* <Debugger /> */}
      </div>
    );
  }
}

export default App;
