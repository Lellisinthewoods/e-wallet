import './ActiveCard.scss'
import { useSelector } from 'react-redux'
import Card from '../Card/Card';

//Här hämtas all info om det aktiva kortet!!

function ActiveCard() {

  const activeCard = useSelector(state => state.activeCard)
  console.log(activeCard);

  return (
    <Card card={activeCard}/>
  )
}

export default ActiveCard