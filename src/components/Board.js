import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faClover } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faDiamond } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Card from './Card'

const Board = () => {
  const [cardSelection, setCardSelection] = useState();
  const [icons, setIcons] = useState([faCoffee, faCoffee, faStar, faStar, faClover, faClover, faHeart, faHeart, faDiamond, faDiamond, faCircle, faCircle, faCat, faCat, faDog, faDog])

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  const shuffledIcons = shuffleArray(icons)

  const cardElements = shuffledIcons.map((icon) => {
    return (
      <Card cardIcon={icon} setCardSelection={setCardSelection} cardSelection={cardSelection}/>
    )
  })

  return (
    <div className="board">
      {cardElements}
    </div>
  )
}

export default Board
