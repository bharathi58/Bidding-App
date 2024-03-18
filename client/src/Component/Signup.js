import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import nameIcon from './assets/person.png';
import emailIcon from './assets/email.png';
import passIcon from './assets/password.png';


function Login() {
    const history=useNavigate();
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e) {
        e.preventDefault();
        let user={
            user_name : name,
            user_email: email,
            login_pass: password
        }
        console.log(user);
        try {
            await axios.post("http://localhost:4000/signup", { user})
                .then(res => {
                    if (res.data === "notexist") {
                        history("/login", { state: { id: email } });
                    } else {
                        alert("User already exists");
                    }
                })
                .catch(e => {
                    console.error("Error signing up:", e);
                    alert("Error signing up. Please try again.");
                });
        } catch (error) {
            console.error("Error signing up:", error);
            alert("Error signing up. Please try again.");
        }
    }

    return (
        <div className="container">
    <div className="header">
        <div className="text">Signup</div>
        <div className="underline"></div>
    </div>
    <form onSubmit={submit} className="inputs">
        <div className="input">
        <img src={nameIcon} alt="" />
            <input 
                type="text" 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Name"
            />
        </div>
        <div className="input">
        <img src={emailIcon} alt="" />
            <input 
                type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email"
            />
        </div>
        <div className="input">
        <img src={passIcon} alt="" />
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password"
            />
        </div>
        <div className="submit-container">
            <button type="submit">Submit</button>
        </div>
    </form>
    <p>OR</p>
    <div className="submit-container">
        <Link to="/login">Login Page</Link>
    </div>
</div>

    )
}

export default Login;