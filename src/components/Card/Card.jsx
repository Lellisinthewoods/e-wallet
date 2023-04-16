import './Card.scss'
import { useDispatch } from 'react-redux'
import { changeTop } from '../../actions/addCardAction';

function Card(props) {
  const dispatch = useDispatch();
  const {card} = props;

  function handleClick(){
     //när topCard=true ska kortet placeras överst i listan
     dispatch(changeTop(card))
  }

  const cardTextColor = card.vendor.vendorName=="NINJA BANK" ? "white" : "black";

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