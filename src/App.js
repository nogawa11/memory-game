import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [started, setStarted] = useState(false)
  const [time, setTime] = useState()

  const startGame = () => {
    setStarted(true)
  }

  useEffect(() => {
    setInterval(() => {

    }, 1000)
  },[started])

  return (
    <div className="App">
      <header>
        Memory Game
      </header>
      <button onClick={startGame}>New Game</button>
      <h5>{time}</h5>
    </div>
  );
}

export default App;
