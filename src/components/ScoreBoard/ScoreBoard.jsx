import React from 'react';
import RestartButton from '../RestartButton/RestartButton'

import './ScoreBoard.css';

const ScoreBoard = ({ score }) => {
  return (
    <div className="score-board">
      <h1>Moves: {score}</h1>
      <RestartButton></RestartButton>
    </div>
  );
};

export default ScoreBoard;
