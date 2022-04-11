import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import './SignUp.css'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [Error, setError] = useState('');
    
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      

    const handleEmail = (event) =>{
        setEmail(event.target.value)
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value)
    }
    const handleConfirmPassword = (event) =>{
        setConfirmPassword(event.target.value)
    }


    if (user) {
        
         navigate('/shop')
    };

    
    const handleCreateUser = (event) =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Your password doesn't match")
        }
        if(password.length <6){
            setError("password must be 6 characters")
        }

        createUserWithEmailAndPassword(email,password);
        
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Register</h2>
                <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmail} type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="pass">Password</label>
                    <input onBlur={handlePassword} type="password" name="pass" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-pass">Confirm Password</label>
                    <input onBlur={handleConfirmPassword} type="password" name="confirm-pass" id="" required />
                </div>
                <p style={{color: 'red'}}>{Error}</p>
                <input  className='form-submit' type="submit" value="Sign Up" required />
            </form>
            <p>Already have an account? <Link className='form-link' to="/login">Login</Link></p>
            </div>

        </div>
    );
};

export default SignUp;