import React from 'react';
import RestartButton from '../RestartButton/RestartButton'

import './GameHUD.css';

const GameHUD = ({ score, gameWon, isSignedIn, user }) => {
  return (
    <div className="game-hud">
      {
        isSignedIn  ? <p id="player-name">Player: {user.name}</p> 
        : <p id="player-name">Player: ANON</p>
      }
     
      <div className='flexrow'>
        <p id="score">Moves: {score}</p>
        <RestartButton></RestartButton>
      </div>
    </div>
  );
};

export default GameHUD;