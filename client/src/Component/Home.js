import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"
function Home(isAuthenticated) {
  return (
    <div className="container">
      <header>
      <img src={logo} alt="Your Logo" width="250" height="200" style={{ display: "block", margin: "0 auto" }}/>
        <h1 >Welcome to <strong className="text-danger">GOD</strong> Auction App</h1>
        <p>Values are born here ..!</p>
      </header>
      <section className="features">
        <h2><strong class="text-warning">Features</strong></h2>
        <ul>
          <li>View Active products without login</li>
          <li>Bid on items of historical and religious significance</li>
          <li>Stay connect with your bidding products</li>
          <li>May be your useless product is useful to someone</li>
        </ul>
      </section>
      <section className="call-to-action">
        <h2>Join Now!</h2>
        <p>Sign up today to start exploring divine artifacts and participating in auctions.</p>
        <Link to="/signup" className="btn btn-primary" fdprocessedid="cbh00t">Sign Up</Link><strong> or </strong>
        <Link to="/login" className="btn btn-primary" fdprocessedid="vqp1xi">Log In</Link>
      </section>
      <p/>
       <figure class="text-center">
            <blockquote class="blockquote">
                <p class="mb-0">"</p>
                <p class="mb-0">Selling is a sacred </p>
                <p class="mb-0">trust between </p>
                <p class="mb-0">BUYER and SELLER.</p>
                <p class="mb-0">"</p>
            </blockquote>
        <figcaption class="blockquote-footer">Quote from <cite title="Source Title">Richie Norten</cite>
  </figcaption>
</figure>
      <footer>
        <p className="text-danger">&copy; 2024 GOD Auction App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
