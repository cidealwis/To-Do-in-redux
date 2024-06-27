import React, { useState } from 'react';
import "./SignUp.css";
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission for now
        // Add your form submission logic here
    };

    const handleChange = (e) => {
        // Handle checkbox change if needed
    };

    return (
        <div className='sign-up-container'>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <h2>SignUp {username}</h2>

                <input
                    type="text"
                    placeholder="Full Name"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <div className="form-row">
                    <input
                        type="email"
                        autoComplete="off"
                        placeholder="E-Mail"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        autoComplete="off"
                        placeholder="Contact Number"
                        onChange={(e) => {}}
                    />
                </div>

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className="checkbox-row">
                    <input
                        type="checkbox"
                        checked={false} 
                        onChange={handleChange}
                    />
                    <p className="terms-text">I agree to the terms and conditions</p>
                </div>

                <button type="submit">Create Account</button>

                

                <div className="or-separator">
                        <span className="line"></span>
                            <p className="or-text">OR</p>
                        <span className="line"></span>
                </div>
                <b className="sign-in-link">Already Have an Account ? <Link to="/login">Login</Link></b>
            </form>
        </div>
    );
};

export default SignUp;