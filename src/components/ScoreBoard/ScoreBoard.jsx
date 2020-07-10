import React from 'react';
import './ScoreBoard.css'

const ScoreBoard = ({ score }) => {
  return (
    <div className="score-board">
      <h1>Moves: {score}</h1>
    </div>
  );
};

export default ScoreBoard;