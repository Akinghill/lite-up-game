import React, { Component } from 'react';
import './App.css';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Game from './components/Game/Game';
// import Timer from './components/Timer/Timer';
import Debugger from './components/Debugger/Debugger';
import {
  randomizeGameBoard,
  createGameBoard,
  gameSquareSelected,
  isGameWon,
  processInput,
} from './logic/gameLogic';

const initialState = {
  gameWon: false,
  score: 0,
  gameState: [],
  route: 'home',
  highScoreData: [],
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameWon: false,
      score: 0,
      gameState: [],
      route: 'home',
      highScoreData: [],
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: '',
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
      },
    });
  };

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
    if (id === 'login') {
      this.setState({
        route: 'login',
      });
    }
    // Verify a game square was selected.
    if (gameSquareSelected(id)) {
      let newGameState = this.state.gameState;
      let processedGameState = processInput(id, newGameState)

      if (isGameWon(this.state)) {
        this.setState({
          gameWon: true,
        });
      }
    
      this.setState({
        score: Number(this.state.score) + 1,
        gameState: processedGameState,
      });
    }
  };

  componentWillMount() {
    this.setState({
      gameState: randomizeGameBoard(createGameBoard()),
    });
  }

  onRouteChange = (route) => {
    this.setState({
      route: route,
    });
  };

  render() {
    const { score, gameState, gameWon, route, user } = this.state;
    return (
      <div onClick={this.handleClick} className="App">
        {route === 'register' ? (
          <Register onRouteChange={this.onRouteChange} />
        ) : route === 'login' ? (
          <Login onRouteChange={this.onRouteChange} />
        ) : null}
        <Game
          score={score}
          gameState={gameState}
          gameWon={gameWon}
          onRouteChange={this.onRouteChange}
          user={user}
        />
        <ScoreBoard highScoreData={this.state.highScoreData} />
        <Debugger />
      </div>
    );
  }
}

export default App;
