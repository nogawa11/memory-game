import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Board from './components/Board'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)


  const startTimer = () => {
    setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)
    setInterval(() => {
      setMinutes(minutes => minutes + 1)
      setSeconds(0)
    }, 60000)
  }

  const stopTimer = () => {
    clearInterval(setSeconds(0))
  }

  const currentCount = `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`


  return (
    <div className="App">
      <header>
        Memory Game
      </header>
      <button className="start-button" onClick={startTimer}>Start</button>
      <p id="counter">{currentCount}</p>
      <Board />
    </div>
  );
}

export default App;
