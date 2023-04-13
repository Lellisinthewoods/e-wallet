import './Home.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Card from '../../components/Card/Card'

//här visas alla korten
function Home() { //usenavigation senare i knappen

  const [cards, setCards] = useState(useSelector(state => {
    state===undefined ? null : state.newCard
  }))
  //du kanske behöver lägga useSelector i setCards så att den uppdaterar? idk

  /*console.log(useSelector(state => state.newCard))
  const cards = useSelector(state => {
    state.newCard ? state.newCard : null
  })*/
  console.log(cards)

  const displayCards = cards===undefined ? "Du har inga kort" : cards.map(card => {
    return(
      <Card 
      card={card}
      key={card.cardnumber}
      />
    )
  })

  return (
    <section>
        {displayCards}
        <button><Link to="/AddCard">ADD A NEW CARD</Link></button>
    </section>
  )
}

export default Home