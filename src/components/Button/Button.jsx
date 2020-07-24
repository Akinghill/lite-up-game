import React from 'react';
import './Button.css';

const Button = ({ buttonText, id }) => {
  return (
    <div className="button" id={id}>
      {buttonText}
    </div>
  );
};

export default Button;