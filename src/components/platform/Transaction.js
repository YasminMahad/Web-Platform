import React, { useState, Link } from 'react'

function Transaction() {
    const [phoneNumber, setPhone] = useState("")
  const [amount, setAmount] = useState("")

  return (
    <div>
        <div className='form'>
        <h2>Login</h2>
        <div className='form-body'>
          <div className="email">
            <label className="form__label" for="phone">Enter Phone number </label>
            <input type="text" className="form__input" value={phoneNumber} onChange={(e) => setPhone(e)} />
          </div>

          <div className="password">
            <label className="form__label" for="amount">Enter Amount </label>
            <input className="form__input" type="text"  value={amount} onChange={(e) => setAmount(e)} />
          </div>
        </div>
        <div className="link">
          <Link to="/login">
            <button onClick={handleSubmit} type="submit" class="btn"> Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Transaction