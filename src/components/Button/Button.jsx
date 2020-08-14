import React from 'react';
import './Button.css';

const Button = ({ buttonText, id, passClass, onClick }) => {
  return (
    <div className={`button ${passClass}`} id={id} onClick={onClick}>
      {buttonText}
    </div>
  );
};

export default Button;