import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [Error, setError] = useState('');
    
    const navigate = useNavigate();

    const handleName = (event) =>{
        setName(event.target.value)
    }
    const handleEmail = (event) =>{
        setEmail(event.target.value)
    }
    const handleAddress = (event) =>{
        setAddress(event.target.value)
    }
    const handlePhone = (event) =>{
        setPhone(event.target.value)
    }

    const handleCreateUser = (event) =>{
        event.preventDefault();
        const realEmail = user.email;
        const shipping  = {name, realEmail, address, phone };
        console.log(shipping)
        
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Your Name</label>
                        <input onBlur={handleName} type="name" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="pass">Address</label>
                        <input onBlur={handleAddress} type="password" name="pass" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-pass">Phone</label>
                        <input onBlur={handlePhone} type="number" name="phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{Error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" required />
                </form>
            </div>

        </div>
    );
};

export default Shipment;