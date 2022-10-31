import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom';
import { db } from '../Firebase'
import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";


function Signup() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const history = useHistory()


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }

  }


  const saveData = () => {
    addDoc(collection(db, "user"), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password:password,
    })
      .then(() => (  
      history.push("/login")  
      // console.log("Data saved successfully")
      ))
      .catch(error => console.log(error))
  }

  const handleSubmit = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        saveData()
      })
      .catch((error) => {
        console.log(error)
      });
      
  }

  return (
    <div className="form">
      <h1>Register</h1>
      <div className="form-body">
        <div className="username">
          <label className="form__label" htmlFor="firstName">First Name </label>
          <input className="form__input" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName"  placeholder="Input your first name"/>

        </div>
        <div className="lastname">
          <label className="form__label" htmlFor="lastName">Last Name </label>
          <input type="text" name="" id="lastName" value={lastName} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="Input your last name" />
        </div>
        <div className="email">
          <label className="form__label" htmlFor="email">Email </label>
          <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)}  placeholder="Input your email"/>
        </div>
        <div className="password">
          <label className="form__label" htmlFor="password">Password </label>
          <input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Input atleast 6 characters"/>
        </div>
        <div className="confirm-password">
          <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
          <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm your password"/>
        </div>
      </div>
      <div className="link">
        <Link to="/signup">
          <button onClick={handleSubmit} type="submit" class="btn"> Register</button>
        </Link>
      </div>
    </div>

  )

}

export default Signup
