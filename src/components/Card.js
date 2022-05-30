import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({cardIcon, setCardSelection, cardSelection}) => {
  const [active, setActive] = useState(false)

  const handleSelection = (event) => {
    setActive(true)
    setCardSelection(event.currentTarget)
  }

  return (
    <div className={active ? "card active" : "card"} onClick={handleSelection}>
      {active ? <FontAwesomeIcon icon={cardIcon} />: null}
    </div>
  )
}

export default Card
