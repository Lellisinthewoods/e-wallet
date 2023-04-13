import './AddCard.scss'
//import { Link } from 'react-router-dom'
import CardForm from '../../components/CardForm/CardForm'
function AddCard() { //useNavigation senare i knappen

 //ett obekt pga i den här komponenten lägger man bara in ett kort

  return (
    <article>
      <CardForm />
    </article>
  )
}

export default AddCard