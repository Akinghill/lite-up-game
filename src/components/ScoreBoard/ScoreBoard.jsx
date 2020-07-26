import React from 'react';
import RestartButton from '../RestartButton/RestartButton'
import Timer from '../Timer/Timer'

import './ScoreBoard.css';

const ScoreBoard = ({ score, gameWon }) => {
  return (
    <div className="score-board">
      <Timer gameWon={gameWon} score={score}/>
      <RestartButton></RestartButton>
    </div>
  );
};

export default ScoreBoard;