import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Transaction() {
  const [phoneNumber, setPhone] = useState("")
  const [amount, setAmount] = useState("")


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "phoneNumber") {
      setPhone(value);
    }
    if (id === "amount") {
      setAmount(value);
    }

  }

  const handleSubmit = () => {
    toast("Transfer send successfully")
      
  }

  return (
    <div>
           <div className='form'>
             <h2>Send Money</h2>
             <div className='form-body'>
               <div className="phone">
                 <label className="form__label" for="phone">Enter Phone number </label>
                 <input type="number" id="phoneNumber" className="form__input" value={phoneNumber} onChange={(e) => handleInputChange(e)} />
               </div>
    
               <div className="amount">
                 <label className="form__label" for="amount">Enter Amount </label>
                 <input className="form__input" type="number" id="amount" value={amount} onChange={(e) => handleInputChange(e)} />
               </div>
             </div>
             <div className="link">
               <Link to="/platform">
                 <button onClick={handleSubmit} type="submit" className="btn"> Send money</button>
                 <ToastContainer />
               </Link>
             </div>
           </div>
         </div>
    
  )

}

export default Transaction
