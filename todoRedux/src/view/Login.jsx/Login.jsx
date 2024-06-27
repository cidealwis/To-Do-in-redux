import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate} from 'react-router-dom'

const Login = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const navigate = useNavigate();

   

    const handleSubmit=(e)=>{
       e.preventDefault();

       if (email === 'c@gmail.com' && password === '1234') {
        navigate('/dashboard');
      } else {
        alert('Invalid email or password');
      }
       
    }


  return (
    <>
       <div className='sign-up-container'>
          
            <form className="sign-up-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
                <label htmlFor="email">Email :</label>
                <input type="email" autoComplete="off" placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <label htmlFor="password">Password :</label>
                <input type="password" placeholder="**********"
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
                <Link to="/forgotPassword">Forgot Password</Link>
                <p>Don't Have an Account  ?  <Link to="/signup">Sign Up</Link></p>
               
            </form>
       </div>
    </>
  )
}

export default Login