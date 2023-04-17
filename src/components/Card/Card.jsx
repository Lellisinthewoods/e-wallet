import './Card.scss'
import { useDispatch } from 'react-redux'
import { changeTop } from '../../actions/addCardAction';

function Card(props) {
  const dispatch = useDispatch();
  const {card} = props;

  console.log(card) //renderas även när empty card ska visas
  //det tomma kortet sparas ingenstans om man inte klickar på det

  function handleClick(){
     //när topCard=true ska kortet placeras överst i listan
     dispatch(changeTop(card))
     localStorage.getItem('cards') == null ?
     localStorage.setItem('cards', []) : localStorage.setItem('cards', card)
  }

  let cardTextColor = card.vendor.vendorName==undefined ? "" : "";
  console.log(cardTextColor)
  cardTextColor = card.vendor.vendorName=="NINJA BANK" ? "white" : "black";

  return ( //inuti Card-komponenten
    <section 
    style={{backgroundColor: card.vendor.vendorColor, color: cardTextColor} } 
    className={card.topCard ? `card card--top` : `card`} 
    onClick={handleClick}
    >
      <article className='card__images'>
        <div className='card__wifiChip'>
          <img src="src/assets/noun_wifi_159786 1.svg" alt="" fill={cardTextColor} />
          <img src="src/assets/chip.svg" alt=""/>
        </div>
        <img src={card.vendor.vendorImg} alt="card__vendor" />
      </article>

      <h5 className="card__number">{card.cardnumber}</h5>

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