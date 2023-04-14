import './Card.scss'

function Card(props) {
  const {card} = props;

  function handleClick(){
    {card.topcard = !card.topcard} //när topcard=true ska kortet placeras överst i listan
  }

  return ( //inuti Card-komponenten
    <article 
    style={{backgroundColor: card.vendor.vendorColor}} 
    className={card.topcard ? `card card--top` : `card`} 
    onClick={handleClick}>
      <h5 className="card__vendor">{card.vendor.vendorName}</h5>
      <h5 className="card__number">{card.cardnumber}</h5>
      <h5 className="card__name">{card.name}</h5>
      <h5 className="card__date">{card.expires}</h5>
    </article>
  )
}

export default Card