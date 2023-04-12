import './Home.scss'
import { Link } from 'react-router-dom'
//här visas alla korten
function Home() { //usenavigation senare i knappen
  return (
    <section>
        <h1>hej!</h1>
        <button><Link to="/AddCard">ADD A NEW CARD</Link></button>
    </section>
  )
}

export default Home