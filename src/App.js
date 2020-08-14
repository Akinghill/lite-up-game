import React, { Component } from 'react';
import './App.css';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Game from './components/Game/Game';
import Debugger from './components/Debugger/Debugger';
import Menu from './components/Menu/Menu';
import {
  randomizeGameBoard,
  createGameBoard,
  gameSquareSelected,
  isGameWon,
  processInput,
} from './logic/gameLogic';

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
        scores: [],
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
        scores: data.scores,
      },
    });
  };

  handleClick = (e) => {
    let id = e.target.id;
    if (id === 'debugger') {
      const updateUserScore = this.state.user
      updateUserScore.scores.push(this.state.score)
      this.setState(
        {
          user: updateUserScore,
          gameWon: true,
        },
        () => this.postScore()
      );
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
      let processedGameState = processInput(id, newGameState);

      if (isGameWon(this.state)) {
        const updateUserScore = this.state.user
        updateUserScore.scores.push(this.state.score)
        this.setState(
          {
            user: updateUserScore,
            gameWon: true,
          },
          () => this.postScore()
        );
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

  postScore() {
    if (this.state.gameWon && this.state.user.email !== '') {
      const data = {
        user: this.state.user,
      };

      fetch('http://localhost:5000/users/newscore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((user) => {
          this.loadUser(user)
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    const { score, gameState, gameWon, route, user } = this.state;
    return (
      <div onClick={this.handleClick} className="App">
        {route === 'register' ? (
          <Register onRouteChange={this.onRouteChange} />
        ) : route === 'login' ? (
          <Login onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : null}
        <Game
          score={score}
          gameState={gameState}
          gameWon={gameWon}
          onRouteChange={this.onRouteChange}
          user={user}
        />
        {/* <ScoreBoard highScoreData={this.state.highScoreData} /> */}
        {/* <Debugger /> */}
        <Menu/>
      </div>
    );
  }
}

export default App;

// const initialState = {
//   gameWon: false,
//   score: 0,
//   gameState: [],
//   route: 'home',
//   highScoreData: [],
//   isSignedIn: false,
//   user: {
//     id: '',
//     name: '',
//     email: '',
//     entries: 0,
//     joined: '',
//   },
// };
