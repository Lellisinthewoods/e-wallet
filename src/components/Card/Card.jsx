import './Card.scss'
import { useDispatch } from 'react-redux'
import { changeTop } from '../../actions/addCardAction';

function Card(props) {
  const dispatch = useDispatch();
  const {card} = props;

  console.log(card.id)

  function handleClick(){
     //när topCard=true ska kortet placeras överst i listan
     dispatch(changeTop(card))
  }

  const cardTextColor = card.vendor.vendorName=="NINJA BANK" ? "white" : "black";

  //article för bilderna
  //article namnet
  //articles för datum
  //cardnumber ensam

  return ( //inuti Card-komponenten
    <section 
    style={{backgroundColor: card.vendor.vendorColor, color: {cardTextColor}} } 
    className={card.topCard ? `card card--top` : `card`} 
    onClick={handleClick}
    >
      <article className='card__images'>
        <div className='card__wifiChip'>
          <img src="src/assets/noun_wifi_159786 1.svg" alt="" />
          <img src="src/assets/chip.svg" alt=""/>
        </div>
        <img src={card.vendor.vendorImg} alt="card__vendor" />
      </article>

      <h5 className="card__number">{card.cardnumber}</h5>

      <div className='card__info'>
        <article className='card__textarea'>
          <h5 className='card__textTitle'>cardholder name</h5>
          <h5 className="card__name">{card.name}</h5>
        </article>

        <article className='card__textarea'>
          <h5 className='card__textTitle'>valid thru</h5>
          <h5 className="card__date">{card.expires}</h5>
        </article>
      </div>
    </section>
  )
}

export default Card