import './Home.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Card from '../../components/Card/Card'
import ActiveCard from '../../components/ActiveCard/ActiveCard'

function Home() {

  let cardsState = useSelector(state => state.newCard)
  const activeCardState = useSelector(state => state.activeCard)

  const [cards, setCards] = useState(cardsState)
  const [activeCard, setActiveCard] = useState(activeCardState ? activeCardState : null)
  console.log(activeCard)
  console.log(cards)
  
  let displayCards = cards.length==0 ? "Du har inga kort" : cards.map(card => {
    return(
        <Card 
        card={card}
        key={card.cardnumber}
        />
    )
  })

  return (
    <section className='home'>
      { activeCard!={} ? <ActiveCard/> : ""}
      <h5 className='home__text'>OTHER CARDS</h5>
        {displayCards}
      <button className='home__button'><Link to="/AddCard">ADD A NEW CARD</Link></button>

    </section>
  )
}

export default Home