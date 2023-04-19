import './Card.scss'
import { useDispatch } from 'react-redux'
import { changeTop, deleteCard } from '../../actions/addCardAction';

function Card(props) {
  const dispatch = useDispatch();
  const {card} = props;

  console.log(card) //renderas även när empty card ska visas
  //det tomma kortet sparas ingenstans om man inte klickar på det

  function handleClick(){
     dispatch(changeTop(card))
  }

  function handleDelete(){
    console.log("Du vill ta bort kortet!!!!");
    dispatch(deleteCard(card))
  }

  let cardTextColor = card.vendor.vendorName==undefined ? "" : "";
  console.log(cardTextColor)
  cardTextColor = card.vendor.vendorName=="NINJA BANK" ? "white" : "black";

  return ( //inuti Card-komponenten
    <section 
    style={{backgroundColor: card.vendor.vendorColor, color: cardTextColor} } 
    className={card.topCard ? `card card--top` : `card`} 
    
    >
      <article className='card__images'>
        <div className='card__imgSides'>
          <img src="src/assets/noun_wifi_159786 1.svg" alt="" fill={cardTextColor} />
          <img src="src/assets/chip.svg" alt=""/>
        </div>
        <div className='card__imgSides'>
          <img 
          src='src/assets/delete_btn.png' 
          className='card__delBTN'
          onClick={handleDelete}
          ></img>
          <img src={card.vendor.vendorImg} alt="card__vendor" />
        </div>
      </article>

      <h5 className="card__number" onClick={handleClick}>{card.cardnumber}</h5>

      <div className='card__info'>
        <article className='card__textarea'>
          <h5 className='card__textTitle' style={{color: cardTextColor}}>cardholder name</h5>
          <h5 className="card__name">{card.name}</h5>
        </article>

        <article className='card__textarea'>
          <h5 className='card__textTitle' style={{color: cardTextColor}}>valid thru</h5>
          <h5 className="card__date">{card.expires}</h5>
        </article>
      </div>
    </section>
  )
}

export default Card