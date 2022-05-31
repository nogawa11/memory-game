import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faClover } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faDiamond } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import Card from './Card'

const Board = () => {
  const [cardOne, setCardOne] = useState();
  const [cardTwo, setCardTwo] = useState();
  const icons = [faCoffee, faCoffee, faStar, faStar, faClover, faClover, faHeart, faHeart, faDiamond, faDiamond, faCircle, faCircle, faCat, faCat, faDog, faDog]

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  const shuffle = shuffleArray(icons)
  const [shuffledIcons, setShuffledIcons] = useState(shuffle);

  useEffect(() => {
    if (cardOne !== undefined && cardOne.getAttribute('name') === cardTwo.getAttribute('name')) {
      setTimeout(() => {
        cardOne.className = "card match"
        cardTwo.className = "card match"
        setCardOne()
        setCardTwo()
      }, 1500)
    } else if (cardOne !== undefined && cardOne.getAttribute('name') !== cardTwo.getAttribute('name')) {
      setTimeout(() => {
        cardOne.className = "card"
        cardTwo.className = "card"
        setCardOne()
        setCardTwo()
      }, 1500)
    } else {
      console.log('test')
    }
  }, [cardTwo])

  const cardElements = shuffledIcons.map((icon) => {
    return (
      <Card cardIcon={icon} setCardOne={setCardOne} cardOne={cardOne} cardTwo={cardTwo} setCardTwo={setCardTwo}/>
    )
  })

  return (
    <div className="board">
      {cardElements}
    </div>
  )
}

export default Board
