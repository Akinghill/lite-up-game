import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import Title from './components/Title/Title';
import WinScreen from './components/WinScreen/WinScreen';
import Debugger from './components/Debugger/Debugger';
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
    if (id === 'restart' || id === 'restartIcon') {
      console.log('clicked resetart');
      this.setState({
        score: 0,
        gameState: randomizeGameBoard(createGameBoard()),
        gameWon: false
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
    return (
      <div onClick={this.handleClick} className="App">
        <Title />
        <div className="game">
          <ScoreBoard score={this.state.score}></ScoreBoard>
          <GameBoard gameState={this.state.gameState}></GameBoard>
          {this.state.gameWon ? <WinScreen /> : null}
        </div>
        <Debugger />
      </div>
    );
  }
}

export default App;
