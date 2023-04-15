import './ActiveCard.scss'
import { useSelector } from 'react-redux'

//Här hämtas all info om det aktiva kortet!!

function ActiveCard() {

  const activeCard = useSelector(state => state.activeCard)
  console.log(activeCard);

  return (
    <div></div>
  )
}

export default ActiveCard