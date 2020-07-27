import React from 'react';
import RestartButton from '../RestartButton/RestartButton'

import './ScoreBoard.css';

const ScoreBoard = ({ score, gameWon }) => {
  return (
    <div className="score-board">
      <p id="score">Moves: {score}</p>
      <RestartButton></RestartButton>
    </div>
  );
};

export default ScoreBoard;