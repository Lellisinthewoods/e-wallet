import './AddCard.scss'
import { Link } from 'react-router-dom'
//här lägger användaren in ett nytt kort via ett formulär
function AddCard() { //useNavigation senare i knappen

const card = {
  cardnumber: 0,
  name: "",
  expires: 0,
  ccv: 0,
  vendor: ""
} //ett obekt pga i den här komponenten lägger man bara in ett kort

  return (
    <article>
        <h2>New card:</h2>
        <form action="">
          <h5>CARD NUMBER</h5><input type="number" />
          <h5>CARDHOLDER NAME</h5><input type="text" />
          <h5>VALID THRU</h5><input type="date" />
          <h5>CCV</h5><input type="number" />
          <h5>VENDOR</h5><input type="dropdown" />
        </form>
        <button><Link to="/">ADD CARD</Link></button> 
    </article>
  )
}

export default AddCard