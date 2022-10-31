import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory()


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }

  }


  const handleSubmit = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        history.push("/platform") 
      })
      .catch((error) => {
        console.log(error)
      });
      
  }

  return (
    <div className='form'>
        <h2>Login</h2>
         <div className='form-body'>
           <div className="email">
             <label className="form__label" htmlFor="email">Email </label>
             <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Input your email"/>
           </div>

           <div className="password">
             <label className="form__label" htmlFor="password">Password </label>
             <input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)}placeholder="Input your password"/>
           </div>
         </div>
         <div className="link">
            <Link exact to="/login">
             <button onClick={handleSubmit} type="submit" className="btn"> Login</button>
           </Link>
         </div>
       </div>
    
  )

}

export default Login
