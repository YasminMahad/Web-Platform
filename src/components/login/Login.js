import React, { useState, Link } from 'react'
import './login.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        history.push("/platform") 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div>

      <div className='form'>
        <h2>Login</h2>
        <div className='form-body'>
          <div className="email">
            <label className="form__label" for="email">Email </label>
            <input type="email" id="email" className="form__input" value={email} onChange={(e) => setEmail(e)} />
          </div>

          <div className="password">
            <label className="form__label" for="password">Password </label>
            <input className="form__input" type="password" id="password" value={password} onChange={(e) => setPassword(e)} />
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

export default Login