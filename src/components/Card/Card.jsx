import './Card.scss'

function Card(props) {
  const {card} = props;

  function handleClick(){
    {card.topcard = !card.topcard} //när topcard=true ska kortet placeras överst i listan
  }

  //article för bilderna
  //article namnet
  //articles för datum
  //cardnumber ensam

  return ( //inuti Card-komponenten
    <section 
    style={{backgroundColor: card.vendor.vendorColor}} 
    className={card.topcard ? `card card--top` : `card`} 
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