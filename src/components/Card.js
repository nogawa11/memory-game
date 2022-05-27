import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
  const [active, setActive] = useState(false)

  const handleSelection = (event) => {
    setActive(true)
  }

  return (
    <div className={active ? "card active" : "card"} onClick={handleSelection}>
      {active ? <FontAwesomeIcon icon={props.cardIcon} />: null}
    </div>
  )
}

export default Card
