import './AddCard.scss'
import { Link } from 'react-router-dom'
import CardForm from '../../components/CardForm/CardForm'
import EmptyCard from '../../components/EmptyCard/EmptyCard'
function AddCard() { //useNavigation senare i knappen

 //ett obekt pga i den här komponenten lägger man bara in ett kort

  return (
    <article className='addCard'>
      <EmptyCard />
      <CardForm />
      <Link to="/">Tillbaka</Link>
    </article>
  )
}

export default AddCard