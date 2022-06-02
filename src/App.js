import './App.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faClover } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faDiamond } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import Card from './components/Card'
import Confetti from 'react-confetti'

function App() {
  const icons = [faCoffee, faCoffee, faStar, faStar, faClover, faClover, faHeart, faHeart, faDiamond, faDiamond, faCircle, faCircle, faCat, faCat, faDog, faDog]
  const [cardOne, setCardOne] = useState();
  const [cardTwo, setCardTwo] = useState();
  const [numberOfPairs, setNumberOfPairs] = useState(0);
  const [popUp, setPopUp] = useState(true);
  const [tries, setTries] = useState(0)

  useEffect(() => {
    if (cardOne !== undefined && cardOne.getAttribute('name') === cardTwo.getAttribute('name')) {
      setTimeout(() => {
        cardOne.className = "card match"
        cardTwo.className = "card match"
        setCardOne()
        setCardTwo()
        setNumberOfPairs(prevState => prevState + 1)
        setTries(prevState => prevState + 1)
      }, 1000)
    } else if (cardOne !== undefined && cardOne.getAttribute('name') !== cardTwo.getAttribute('name')) {
      setTimeout(() => {
        cardOne.className = "card"
        cardTwo.className = "card"
        setCardOne()
        setCardTwo()
        setTries(prevState => prevState + 1)
      }, 1500)
    } else {
      console.log('not a match')
    }
  }, [cardTwo])

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  const shuffle = shuffleArray(icons)
  const [shuffledIcons, setShuffledIcons] = useState(shuffle);

  const newGame = () => {
    window.location.reload(false);
  }

  const cardElements = shuffledIcons.map((icon) => {
    return (
      <Card cardIcon={icon} setCardOne={setCardOne} cardOne={cardOne} cardTwo={cardTwo} setCardTwo={setCardTwo} />
    )
  })

  const closePopUp = () => {
    setPopUp(false);
  }

  if (numberOfPairs === 8) {
    if (localStorage.getItem('record') && localStorage.getItem('record') > tries) {
      localStorage.setItem('record', tries);
    }
  }

  return (
    <div className="App">
      {numberOfPairs === 8 &&
        <Confetti />
      }
      {numberOfPairs === 8 &&
        <div className={ popUp ? "winner" : "winner close"}>
          Congratulations!
          <div className="btn-close" onClick={closePopUp}>x</div>
        </div>
      }
      <header>
        Memory Game
      </header>
      <div className="record">
        <button className="btn-start" onClick={newGame}>New Game</button>
        <h5>Current Attempts: {tries}</h5>
        <h5>Best Attempt: {localStorage.getItem('record') ? localStorage.getItem('record') : 0}</h5>
      </div>
      <div className="board">
        {cardElements}
      </div>
    </div>
  );
}

export default App;
