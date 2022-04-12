import React, { useState } from 'react';
import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      let location = useLocation();

      let from = location.state?.from?.pathname || "/";

      const handleEmail = (event) =>{
        setEmail(event.target.value)
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value)
    }

    if (user) {
        navigate(from, { replace: true });
      }

    const handleLoginUser = (event) =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password); 
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleLoginUser}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmail} type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="pass">Password</label>
                    <input onBlur={handlePassword} type="password" name="pass" id="" required />
                </div>
                <p style={{color:'red'}}>{error?.message}</p>
                <input className='form-submit' type="submit" value="Login" required />
            </form>
            <p>New in Ema-John? <Link className='form-link' to="/signup">Create an Account</Link></p>
            </div>

        </div>
    );
};

export default Login;