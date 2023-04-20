import './EmptyCard.scss'
import { useState } from 'react'
import Card from '../Card/Card'

function EmptyCard() {

  //hämta kortinfo via onChange i Form-komponenten
  //spara kortinfo som useState-objekt, ha ett tomt kort vars info skrivs över här
  //skicka in i Card, rendera ut Card här.
  //Bugg!! nu kan emptyCard också bli ActiveCard! xD

  const [emptyCard, setEmptyCard] = useState({
    cardnumber: 'XXXX XXXX XXXX XXXX',
    name: "firstname lastname",
    expires: 'mm/yy',
    ccv: '',
    vendor: {
      vendorName: "BITCOIN INC",
      vendorColor: "grey",
      vendorImg: "src/assets/vendor-bitcoin.svg"
    }
  })

  return (
    <article className='emptyCard'>
      <Card card={emptyCard}/>
    </article>
  )
}

export default EmptyCard