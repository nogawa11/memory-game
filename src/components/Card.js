import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({cardIcon, setCardOne, cardOne, setCardTwo, cardTwo, flipCards}) => {

  const handleSelection = (event) => {
    if (cardOne === undefined && event.currentTarget.className !== "card match") {
      event.currentTarget.className = "card active"
      setCardOne(event.currentTarget)
    } else if (cardOne !== undefined && cardTwo === undefined && cardOne !== event.currentTarget && event.currentTarget.className !== "card match") {
      event.currentTarget.className = "card active"
      setCardTwo(event.currentTarget)
    }
  }

  return (
    <div className={flipCards ? "card" : "card"} onClick={handleSelection} name={cardIcon.iconName}>
      <FontAwesomeIcon icon={cardIcon} />
    </div>
  )
}

export default Card
