import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';

import './ScoreBoard.css';

const ScoreBoard = ({ score }) => {
  return (
    <div className="score-board">
      <h1>Moves: {score}</h1>
      <div className="restart" id="restart">
        <FontAwesomeIcon id="restartIcon" icon={faUndo} />
      </div>
    </div>
  );
};

export default ScoreBoard;
