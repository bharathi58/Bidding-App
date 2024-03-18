import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import emailIcon from './assets/email.png';
import passIcon from './assets/password.png';

function Login({onLogin}) {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function submit(e) {
        e.preventDefault();
        let user={
            user_email: email,
            login_pass: password
        }
        console.log(user);
        try {
            const response = await axios.post("http://localhost:4000/login", {
                user
            });
            if (response.data=="exist"){
                onLogin()
                history('/')
            }else{
                setError("Incorret email or password")
            }
            
        } catch (error) {
            console.error("Error logging in:", error);
            setError("An error occurred. Please try again.",error);
        }
        setEmail('');
        setPassword('');
    }
    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={submit} className="inputs">
                <div className="input">
                    <img src={emailIcon} alt="" />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div className="input">
                    <img src={passIcon} alt="" />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <div className="submit-container">
                    <button type="submit">Submit</button>
                </div>
            </form>
            <p>OR</p>
            <div className="submit-container">
                <Link to="/signup">Signup Page</Link>
            </div>
        </div>
    );
}

export default Login;