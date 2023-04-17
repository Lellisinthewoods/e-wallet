import './AddCard.scss'
import CardForm from '../../components/CardForm/CardForm'
import EmptyCard from '../../components/EmptyCard/EmptyCard'
function AddCard() { //useNavigation senare i knappen

 //ett obekt pga i den här komponenten lägger man bara in ett kort

  return (
    <article className='addCard'>
      <EmptyCard />
      <CardForm />
    </article>
  )
}

export default AddCard