import './Home.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Card from '../../components/Card/Card'

//här visas alla korten
function Home() { //usenavigation senare i knappen

  const cardsState = useSelector(state => state.newCard)

  const [cards, setCards] = useState(cardsState ? cardsState : null)
  console.log(cardsState)
  console.log(cards)

//loopar ut korten: BORDE KANSKE GÖRAS I CARDSTACK??
//i cardstack kan man lägga in topcard-default som false
//sedan ha ett klick som sätter kortet på true och loopar igenom RESTEN AV KORTEN
//alla kort som inte har det kortnumret man klickat på blir topcard=false
//kortet man klickat på blir topcard

  let displayCards = cards.length==0 ? "Du har inga kort" : cards.map(card => {
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