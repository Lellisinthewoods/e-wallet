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
  const [activeCard, setActiveCard] = useState(activeCardState ? activeCardState : null)
  console.log(activeCard)
  console.log(cards)

  /*if (localCards==null){ //om localStorage är tom
    console.log(localCards)//sätter cards (tom) i local storage
    //GET HÄR EFTERÅT så den hämtar en tom localcards
  }
  else{ //om det finns något i localstorage
    console.log(localCards)
    cards.concat(localCards)
  }

  console.log("LOCALCARDS: ", localCards)
  console.log(cards)
debugger;*/
  /*useEffect(()=>{
    //const data = localStorage.getItem()
    //console.log(data)
    //data = JSON.parse(data)
  }, [])
/*
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])
  //const localCards = cards.length==0 ? [] : JSON.parse(cards);
  //console.log();*/
  
  let displayCards = cards.length==0 ? "Du har inga kort" : cards.map(card => {
    /*let cardNumber = card.ccv ? card.ccv : "";
    let localCard = JSON.parse(localStorage.getItem(cardNumber))
    console.log(localCard)*/
    return(
      //card==activeCard ? null : //funkar inte?
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