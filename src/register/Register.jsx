import React from 'react'
import "./register.css"
import { useRef, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { auth } from '../database/firebase'
import Button from 'react-bootstrap/Button';

function Register() {
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
    
        try {
          await createUserWithEmailAndPassword(auth, email, password)
          navigate('/login')

        } catch (error) {
          console.log(error)
          setErrorMessage(error.message)
        }
      }

  return (
    <div className='addsignup' >

        <h3>sign up</h3>
        <form className='addUserForm' onSubmit={handleSubmit}>
            <div className='inPutForm'>
                <label htmlFor="#">Name:</label>
                <input 
                    type="text"
                    autoComplete='off'
                    placeholder='Enter your name'
                 />
                <label htmlFor="#">Email:</label>
                <input 
                    type="email"
                    autoComplete='off'
                    placeholder='Enter your Email'
                    ref={emailRef} 
                 />
                <label htmlFor="#">Password:</label>
                <input 
                    type="password"
                    autoComplete='off'
                    placeholder='Enter Password'
                    ref={passwordRef}
                 /> 
                 <Button variant="success" type="submit">Sign Up</Button>
            </div> 
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
        <div className='login'>
          <p>  <Link to="/login">login</Link></p>
        </div>
        
    </div>
  )
}

export default Register