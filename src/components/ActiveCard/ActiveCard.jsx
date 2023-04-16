import './ActiveCard.scss'
import { useSelector } from 'react-redux'
import Card from '../Card/Card';

//Här hämtas all info om det aktiva kortet!!

function ActiveCard() {

  const activeCard = useSelector(state => state.activeCard)
  console.log(activeCard);

  return (
    <article className='activeCard'>
      <h5>ACTIVE CARD</h5>
      <Card card={activeCard}/>
    </article>
  )
}

export default ActiveCard