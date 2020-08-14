import React from 'react';
import RestartButton from '../RestartButton/RestartButton'
import Button from '../Button/Button'

import './GameHUD.css';

const GameHUD = ({ score, gameWon, isSignedIn, user }) => {
  return (
    <div className="game-hud">
      <div className='flexrow'>
      {/* Display Username or ANON */}
      {
        user.name  ? <p id="player-name">Player: {user.name}</p> 
        : <p id="player-name">Player: ANON</p>
      }
        <Button passClass="hud-btn" buttonText="Sign In" onClick={()=>{console.log('clicked signin')}}/>
        <Button passClass="hud-btn" buttonText="Top Scores"/>
      </div>
     
      <div className='flexrow'>
        <p id="score">Moves: {score}</p>
        <RestartButton></RestartButton>
      </div>
    </div>
  );
};

export default GameHUD;