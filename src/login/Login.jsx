import React from 'react'
import "./login.css"
import Button from 'react-bootstrap/Button';
import { useRef, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { auth } from '../database/firebase'

function Login() {
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
    
        try {
          await signInWithEmailAndPassword(auth, email, password)
          navigate('/')
        } catch (error) {
          console.log(error)
          setErrorMessage(error.message)
        }
      }

  return (
    <div className='addsignup' >

        <h3>LogIn</h3>
        <form className='addUserForm' onSubmit={handleSubmit}>
            <div className='inPutForm'>
               
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
                 <Button variant="success" type='submit'>LogIn</Button>
            </div> 
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
        
        <div className='login'>
           <Button className = 'btn-login' variant="primary" type='submit'>Sign Up</Button>
        </div>
        <div className='login'>
          <p>  <Link to="/register">register</Link></p>
        </div>
    </div>
  )
}

export default Login