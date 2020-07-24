import React from 'react'
import GameBoard from '../GameBoard/GameBoard'
import ScoreBoard from '../ScoreBoard/ScoreBoard'
import WinScreen from '../WinScreen/WinScreen'


const Game = ({gameState, score, gameWon}) => {
    return (
      <div className="game">
        <ScoreBoard score={score}/>
        <GameBoard gameState={gameState}/>
        {gameWon ? <WinScreen /> : null}
      </div>
    )
}

export default Game
