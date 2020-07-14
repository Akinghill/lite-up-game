import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import Title from './components/Title/Title';
import { randomizeGameBoard, createGameBoard  } from './logic/gameLogic'


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
    console.log(e.target)
    let id = e.target.id;
    if(id === "restart" || id === 'restartIcon'){
      console.log('clicked resetart')
      this.setState({
        score: 0,
        gameState: randomizeGameBoard(createGameBoard())
      });
    }

    let row = parseInt(id[0]);
    let cell = parseInt(id[1]);

    if (id >= 0 && id <= 44 && !isNaN(row)) {
      let newScore = this.state.score + 1;
      let newGameState = this.state.gameState;
      let changeThese = [row+1, row-1, cell+1, cell-1];
  
      // Change values at these indecies
      newGameState[row][cell] = 1 - newGameState[row][cell];
      if(changeThese[0] <= 4){
        newGameState[changeThese[0]][cell] = 1 - newGameState[changeThese[0]][cell]
      }
      if(changeThese[1] >= 0){
        newGameState[changeThese[1]][cell] = 1 - newGameState[changeThese[1]][cell]
      }
      if(changeThese[2] <= 4){
        newGameState[row][changeThese[2]] = 1 - newGameState[row][changeThese[2]]
      }
      if(changeThese[3] >= 0){
        newGameState[row][changeThese[3]] = 1 - newGameState[row][changeThese[3]]
      }

      this.isGameWon()

      this.setState({
        score: newScore,
        gameState: newGameState,
      });
    }
  };

  isGameWon(){
    if(this.state.gameState.flat(2).reduce((a, b) => a + b, 0) === 0){
      this.setState({
        gameWon: true
      })
    }
  }
  
  componentWillMount() {
    this.setState({
      gameState: randomizeGameBoard(createGameBoard())
    });
  }

  render() {
    return (
      <div onClick={this.handleClick} className="App">
        <Title/>
        <div className="game">
          <ScoreBoard score={this.state.score}></ScoreBoard>
          <GameBoard gameState={this.state.gameState}></GameBoard>
          {
            this.state.gameWon ? <h1 className="win-text">You win</h1> : null
          }
        </div>
      </div>
    );
  }
}

export default App;
