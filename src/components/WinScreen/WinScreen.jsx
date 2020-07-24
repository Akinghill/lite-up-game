import React from 'react';
import './WinScreen.css';
import Button from '../Button/Button';

const WinScreen = () => {
  return (
    <div className="win-screen">
      <h1 className="win-text">You win</h1>
      <div className="win-options">
        <Button buttonText="Login" />
        <Button buttonText="Play Again" id="play-again"/>
      </div>
    </div>
  );
};

export default WinScreen;
