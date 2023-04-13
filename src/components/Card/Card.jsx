import './Card.scss'

function Card(props) {
  const {card} = props;
  return (
    <article>
      <h1>{card.name}</h1>
      <h1>{card.cardnumber}</h1>
    </article>
  )
}

export default Card