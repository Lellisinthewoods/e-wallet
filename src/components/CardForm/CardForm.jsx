import './CardForm.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addCard} from '../../actions/addCardAction'
import { useNavigate } from 'react-router' //react router dom?

function CardForm() {

  const [card, setCard] = useState({ //objektet där infon från formuläret läggs in
    cardnumber: '',
    name: "",
    expires: '',
    ccv: '',
    vendor: {
      vendorName: "",
      vendorColor: "",
      vendorImg: ""
    } //TOG BORT ID OCH TOPCARD-BOOL, KAN GE BUGGAR
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(event){
    setCard(prevCard => ({
      ...prevCard,
      [event.target.name]: event.target.value
    }))
  }

  function handleClick(){
    dispatch(addCard(card))
    localStorage.setItem('cards', JSON.stringify(card))
    navigate('/')
  }

  function handleVendor(event){
    const thisVendor = event.target.value;
    let vendorObject;
    switch (thisVendor) {
      case "BITCOIN INC":
        vendorObject = {
          vendorName: "BITCOIN INC",
          vendorColor: "rgba(255, 174, 52, 1)",
          vendorImg: "src/assets/vendor-bitcoin.svg" //länk till logo-img
        }
        break;
      case "NINJA BANK":
        vendorObject = {
          vendorName: "NINJA BANK",
          vendorColor: "rgba(34, 34, 34, 1)",
          vendorImg: "src/assets/vendor-ninja.svg"
        }
        break;
      case "BLOCKCHAIN INC":
        vendorObject = {
          vendorName: "BLOCKCHAIN INC",
          vendorColor: "rgba(139, 88, 249, 1)",
          vendorImg: "src/assets/vendor-blockchain.svg"
        }
        break;
      case "EVIL CORP":
        vendorObject = {
          vendorName: "EVIL CORP",
          vendorColor: "rgba(243, 51, 85, 1)",
          vendorImg: "src/assets/vendor-evil.svg"
        }
        break;
      default:
        break;
    }
    setCard(prevCard => ({
      ...prevCard,
      vendor: vendorObject
    }))
  }

  return (
    <section className='form'>
      <h2 className='form__title'>New card:</h2>
        <form action="">

          <h5>CARD NUMBER</h5>
          <input 
          type="tel" 
          name="cardnumber" 
          placeholder='xxxx xxxx xxxx xxxx'
          value={card.cardnumber}
          onChange={handleChange}
          className='form__basic'
          />

          <h5>CARDHOLDER NAME</h5>
          <input className='form__basic' placeholder='Name Namesson' type="text" name="name" value={card.name} onChange={handleChange}/>
          
          <article className='form__smallArea'>
            <div>
              <h5>VALID THRU</h5>
              <input className='form__basic form__basic--small' placeholder='DD/MM' type="tel" name="expires" value={card.expires} onChange={handleChange}/>
            </div>
            <div>
              <h5>CCV</h5>
              <input className='form__basic form__basic--small' placeholder='XXX' type="tel" name="ccv" value={card.ccv} onChange={handleChange}/>
            </div>
           </article>

          <h5>VENDOR</h5>
          <select 
          className='form__basic'
          type="dropdown" 
          id="vendor" 
          name="vendor" 
          value={card.vendor} 
          onChange={handleVendor}>
            <option value="">--Vendor--</option>
            <option value="BITCOIN INC">BITCOIN INC</option>
            <option value="NINJA BANK">NINJA BANK</option>
            <option value="BLOCKCHAIN INC">BLOCKCHAIN INC</option>
            <option value="EVIL CORP">EVIL CORP</option>
          </select>

        </form>
        <button className='form__button' onClick={handleClick}>ADD CARD</button>
    </section>
  )
}

export default CardForm