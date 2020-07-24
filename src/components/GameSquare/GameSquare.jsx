import React from 'react';
import './GameSquare.css';


const GameSquare = ({isOn, id}) => {
  if (isOn) {
    return (
      <div className="GameSquare OFF" id={id}> </div>
    )
  }
  return (
    <div className="GameSquare ON" id={id}> </div>
  )


  // return (
  //   isOn ? 
  //   <div className="GameSquare ON" isOn={isOn}>
  //   </div> :
  //   <div className="GameSquare OFF" isOn={isOn}>
  //   </div>
  // )
} 

export default GameSquare;