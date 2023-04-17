import './Home.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Card from '../../components/Card/Card'
import ActiveCard from '../../components/ActiveCard/ActiveCard'
import { addCard } from '../../actions/addCardAction'

function Home() {

  let cardsState = useSelector(state => state.newCard)
  const activeCardState = useSelector(state => state.activeCard)

  const [cards, setCards] = useState(cardsState) //sätter tom array på cards
  console.log("rad 15!")
  const [activeCard, setActiveCard] = useState(activeCardState ? activeCardState : null)
  console.log(activeCard)
  console.log(cards)

  const localCards = JSON.parse(localStorage.getItem('cards'))
  if (localCards==null){ //om localStorage är tom
    console.log(localCards)
    localStorage.setItem('cards', JSON.stringify(cards)) //sätter cards (tom) i local storage
    //GET HÄR EFTERÅT så den hämtar en tom localcards
  }
  else{ //om det finns något i localstorage
    console.log(localCards)
    cards.concat(localCards)
  }

  console.log("LOCALCARDS: ", localCards)
  console.log(cards)
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
  
  let displayCards = cards.length==0 ? "Du har inga kort" : cards.map(card => {
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