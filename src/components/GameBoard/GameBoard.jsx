import React from 'react';
import './GameBoard.css';

import GameSquare from '../GameSquare/GameSquare';

const GameBoard = ({gameState}) => {

  return (
    <div className="gameBoard">
      {
      gameState.map((row, rowIndex) => (
        <div className="row" id={`row${rowIndex}`} key={rowIndex}>
          {
            row.map((cell, cellIndex) => (
              <GameSquare key={cellIndex} isOn={gameState[rowIndex][cellIndex]} id={`${rowIndex}${cellIndex}`}></GameSquare>
            ))
          }
        </div>
      ))
      }
    </div>
  );
};

export default GameBoard;
