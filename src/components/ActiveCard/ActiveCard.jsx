import './ActiveCard.scss'
import { useSelector } from 'react-redux'
import Card from '../Card/Card';

//Här hämtas all info om det aktiva kortet!!

function ActiveCard() {

  const activeCard = useSelector(state => state.activeCard)
  let activeCardArray = Object.keys(activeCard); //testar om något finns i objektet

  return (
    <article className="activeArea">
      
      {
      activeCardArray.length==0 ? "" : 
      <div  className='activeCard'>
        <h5 className='activeCard__text'>ACTIVE CARD</h5>
        <Card card={activeCard}/>
      </div>
      }
    </article>
  )
}

export default ActiveCard