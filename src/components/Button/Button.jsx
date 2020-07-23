import React from 'react';
import './Button.css';

const Button = ({ buttonText }) => {
  return (
    <div className="button">
      {buttonText}
    </div>
  );
};

export default Button;