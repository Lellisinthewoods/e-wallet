import './Home.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Card from '../../components/Card/Card'
import ActiveCard from '../../components/ActiveCard/ActiveCard'
import AddCard from '../AddCard/AddCard'

//importera AddCard
//kör AddCard-funktionen som lägger till korten i newCard-reducern
//hämta newCard-reducern

//här visas alla korten
function Home() { //usenavigation senare i knappen

  const cardsState = useSelector(state => state.newCard)
  const activeCardState = useSelector(state => state.activeCard)

  const [cards, setCards] = useState(cardsState)
  console.log("rad 15!")
  const [activeCard, setActiveCard] = useState(activeCardState ? activeCardState : null)
  console.log(activeCard)
  console.log(cards)

  localStorage.setItem('cards', JSON.stringify(cards)) //tömmer varje gång
  const localCards = JSON.parse(localStorage.getItem('cards'))
  console.log("LOCALCARDS: ", localCards)
debugger;
  /*useEffect(()=>{
    const data = localStorage.getItem('cards')
    console.log(data)
    data ? setCards(localStorage.getItem(JSON.parse(data))) : ""
  }, [])

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])
  //const localCards = cards.length==0 ? [] : JSON.parse(cards);
  //console.log();*/
  
  let displayCards = localCards.length==0 ? "Du har inga kort" : localCards.map(card => {
    return(
      card==activeCard ? null : 
        <Card 
        card={card}
        key={card.cardnumber}
        />
    )
  })

  return (
    <section className='home'>
      { activeCard!={} ? <ActiveCard/> : ""}
      <h5>OTHER CARDS</h5>
      {displayCards}
      <button className='home__button'><Link to="/AddCard">ADD A NEW CARD</Link></button>
    </section>
  )
}

export default Home