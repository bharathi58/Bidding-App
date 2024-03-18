// Header.js
import React from "react";
import { Link, NavLink, Routes, Route } from "react-router-dom";
import Home from "../Home";
import ActiveListing from "../ActiveListing";
import CreateListing from "../CreateListing";
import Signup from "../Signup";
import Login from "../Login";
import "./bootstrap.css"
import logo from "../logo.png"

function Header({ isAuthenticated, props }) {
        //console.log(props.prod);
        function insertListing(product) {
            //console.log(product);
            props.insertToDB(product);
        }
        function insertUser(user) {
            console.log(user);
            props.insertToUser(user);
        }

    return (
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
        <img src={logo} alt="Your Logo" width="50" height="40" className="d-inline-block align-top" />
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav">
        <li class="nav-item">
            <NavLink exact to="/" className="nav-link">Home<span class="visually-hidden">(current)</span></NavLink>
        </li>
        {isAuthenticated ? (
        <>
            <li class="nav-item"><NavLink exact to="/createlist" className="nav-link">CreateListing</NavLink></li>
            <li class="nav-item"><NavLink exact to="/activelist" className="nav-link">ActiveListing</NavLink></li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dashboard</a>
            <div class="dropdown-menu">
                <NavLink exact to="/profile" className="dropdown-item">Profile</NavLink>
                <NavLink exact to="/logout" className="dropdown-item">Logout</NavLink>
            </div>
            </li>
            </>
            ) : (
                <>
                <li class="nav-item"><NavLink exact to="/login" className="nav-link">Login</NavLink></li>
                <li class="nav-item"><NavLink exact to="/activelist1" className="nav-link">ActiveListing</NavLink></li>
                </>
            )}
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Header;

/* 

 */


















/* import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./Header.css";
import Home from "./Home";
import ActiveListing from "./ActiveListing";
import CreateListing from "./CreateListing";
import Signup from "./Signup"
import Login from "./Login"

function Header(props) {
    //console.log(props.prod);
    function insertListing(product) {
        //console.log(product);
        props.insertToDB(product);
    }
    function insertUser(user) {
        console.log(user);
        props.insertToUser(user);
    }
    //insertUser
    return (
        <Router>
            <div>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink exact to="/createlist" activeClassName="active">CreateListing</NavLink></li>
                    <li><NavLink exact to="/activelist" activeClassName="active">ActiveListing</NavLink></li>
                    <li><NavLink exact to="/login" activeClassName="active">Login</NavLink></li>
                </ul>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/createlist' element={<CreateListing createListing={insertListing} />} />
                    <Route exact path='/activelist' element={<ActiveListing prod={props.prod} />} />
                    <Route exact path='/signup' element={<Signup />} />
                    <Route exact path='/login' element={<Login/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default Header;
 */