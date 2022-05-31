import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({cardIcon, setCardOne, cardOne, setCardTwo, cardTwo}) => {

  const handleSelection = (event) => {
    if (cardOne === undefined) {
      event.currentTarget.className = "card active"
      setCardOne(event.currentTarget)
    } else if (cardOne !== undefined && cardTwo === undefined ) {
      event.currentTarget.className = "card active"
      setCardTwo(event.currentTarget)
    }
  }

  return (
    <div className="card" onClick={handleSelection} name={cardIcon}>
      <FontAwesomeIcon icon={cardIcon} />
    </div>
  )
}

export default Card
