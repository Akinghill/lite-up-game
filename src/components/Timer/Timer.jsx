import React from 'react'
// import './Timer.css'

export default function Timer({ gameWon, score }) {
  const [counter, setCounter] = React.useState(0);

  // Third Attempts
  React.useEffect(() => {
    const timer = !gameWon && setInterval(() => {
      setCounter(counter + 1)
      if(score < 1 ){
        setCounter(0)
      }
    }, 1000);
    return () => clearInterval(timer);
  }, );

  let seconds = pad(counter % 60)
  let minutes = pad(parseInt(counter/ 60))

  function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }
  

  return (
    <div id="time">
      Time:
      <span>{minutes}:</span>
      <span>{seconds}</span>
    </div>
  )
}
