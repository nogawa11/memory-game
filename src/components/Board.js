import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Board = () => {
  const [firstCard, setFirstCard] = useState()
  const [active, setActive] = useState(false)

  const handleSelection = (event) => {
    setActive(true)
    setFirstCard(event.currentTarget)
  }

  return (
    <div className="board">
      <div className={active ? "card active" : "card"} onClick={handleSelection}>{active ? <FontAwesomeIcon icon={faCoffee} /> : null}</div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
    </div>
  )
}

export default Board
