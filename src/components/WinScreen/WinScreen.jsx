import React from 'react';
import './WinScreen.css';
import Button from '../Button/Button'

const WinScreen = () => {
  return (
    <div className="win-screen">
      <h1 className="win-text">You win</h1>
      <Button buttonText="Play Again"/>
      <Button buttonText="Play Again"/>
    </div>
  );
};

export default WinScreen;
