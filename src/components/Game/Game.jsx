import React from 'react'
import GameBoard from '../GameBoard/GameBoard'
import GameHUD from '../GameHUD/GameHUD'
import WinScreen from '../WinScreen/WinScreen'
import Title from '../Title/Title'


const Game = ({gameState, score, gameWon, onRouteChange, user}) => {
    return (
      <div className="game">
        <Title />
        <GameBoard gameState={gameState}/>
        <GameHUD score={score} gameWon={gameWon} user={user}/>
        {gameWon ? <WinScreen onRouteChange={onRouteChange} /> : null}
      </div>
    )
}

export default Game
