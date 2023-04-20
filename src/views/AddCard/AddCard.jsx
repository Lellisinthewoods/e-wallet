import './AddCard.scss'
import CardForm from '../../components/CardForm/CardForm'
import EmptyCard from '../../components/EmptyCard/EmptyCard'
function AddCard() { 

  return (
    <article className='addCard'>
      <EmptyCard />
      <CardForm />
    </article>
  )
}

export default AddCard