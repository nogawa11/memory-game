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

  const icons = [faCoffee, faCoffee, faStar, faStar, faClover, faClover, faHeart, faHeart, faDiamond, faDiamond, faCircle, faCircle, faCat, faCat, faDog, faDog]
  const cardElements = icons.map((icon) => {
    return (
      <Card cardIcon={icon} />
    )
  })

  return (
    <div className="board">
      {cardElements}
    </div>
  )
}

export default Board
